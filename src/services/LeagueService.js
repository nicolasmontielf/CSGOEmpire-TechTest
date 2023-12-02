import format from 'date-fns/format'
import axios from 'axios'
import LeaderboardGeneratorService from './LeaderboardService.js'

/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 * 
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM, 
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.  
 * 
 *       ADDITIONALLY, MAKE SURE THAT ALL LIBRARIES USED IN THIS FILE FILE ARE COMPATIBLE WITH PURE JAVASCRIPT
 * 
 */
class LeagueService {
    ENDPOINT_ACCESS_TOKEN = '/api/v1/getAccessToken';
    ENDPOINT_GET_MATCHES = '/api/v1/getAllMatches';
    ENDPOINT_API_BASE = process.env.VUE_APP_API_BASE_URL;

    matches = []
    instance = axios.create({
        baseURL: this.ENDPOINT_API_BASE,
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    /**
     * Sets the match schedule.
     * Match schedule will be given in the following form:
     * [
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      },
     *      {
     *          matchDate: [TIMESTAMP],
     *          stadium: [STRING],
     *          homeTeam: [STRING],
     *          awayTeam: [STRING],
     *          matchPlayed: [BOOLEAN],
     *          homeTeamScore: [INTEGER],
     *          awayTeamScore: [INTEGER]
     *      }    
     * ]
     * 
     * @param {Array} matches List of matches.
     */    
    setMatches(matches) {
        this.matches = matches.map(match => {
            const date = new Date(match.matchDate)
            match.matchDate = format(date, 'dd.MM.yyyy')
            match.matchTime = format(date, 'HH:mm')
            return match
        })
    }

    /**
     * Returns the full list of matches.
     * 
     * @returns {Array} List of matches.
     */
    getMatches() {
        return this.matches;
    }

    /**
     * Returns the leaderboard in a form of a list of JSON objecs.
     * 
     * [     
     *      {
     *          teamName: [STRING]',
     *          matchesPlayed: [INTEGER],
     *          goalsFor: [INTEGER],
     *          goalsAgainst: [INTEGER],
     *          points: [INTEGER]     
     *      },      
     * ]       
     * 
     * @returns {Array} List of teams representing the leaderboard.
     */
    getLeaderboard() {
        const leaderboardService = new LeaderboardGeneratorService(this.matches)
        return leaderboardService.getLeaderboard()
    }

    /**
     * Returns the bearer token from the local storage if it exists and it is not expired.
     * @returns {String | undefined} Bearer token.
    */
    getStoredBearerToken() {
        const storedToken = localStorage.getItem("league_auth_token")
        if (!storedToken) {
            return undefined;
        }

        const { expiration, token } = JSON.parse(storedToken)
        if (expiration < Date.now()) {
            return undefined;
        }

        return token;
    }

    /**
     * Store the bearer token in the local storage with an expiration time of 2 hours.
     * @param {String} token Bearer token.
     * @returns {void}
     */
    setBearerToken(token) {
        const currentTimeStamp = Date.now()
        const expirationTimeStamp = currentTimeStamp + (1000 * 60 * 60 * 2) // 2 hours

        localStorage.setItem("league_auth_token", JSON.stringify({ token, expiration: expirationTimeStamp }))
    }
    
    /**
     * Asynchronic function to fetch the data from the server.
     */
    async fetchData() {
        const bearerToken = this.getStoredBearerToken()
        if (!bearerToken) {
            await this.fetchAndStoreBearerToken()
        }

        this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + this.getStoredBearerToken();
        const response = await this.instance(this.ENDPOINT_GET_MATCHES);

        if (response.status !== 200) {
            console.error('Error on request getting matches')
            return;
        }

        const { matches, success } = response.data
        if (!success) {
            console.error('Error on response getting matches')
            return;
        }

        this.setMatches(matches)
    }

    /**
     * Asynchronic function to fetch the bearer token used to authenticate the requests.
     */
    async fetchAndStoreBearerToken() {
        const response = await this.instance(this.ENDPOINT_ACCESS_TOKEN);
        if (response.status !== 200) {
            console.error('Error on request getting access token')
            return;
        }

        const { access_token, success } = response.data
        if (!success) {
            console.error('Error on response getting access token')
            return;
        }

        this.setBearerToken(access_token)
    }
}

export default LeagueService;