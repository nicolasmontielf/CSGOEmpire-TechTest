/**
    * A class representing a service that processes the data for match schedule and generates leaderboard.
*/
export default class LeaderboardGeneratorService {
    constructor(matches) {
        this.matches = matches;
    }

    /**
    * Create leaderboard object.
    * @param {Array?} teamsToFilter - Array of team names to filter the matches by
    * @returns {Object} leaderboard - Object with team names as keys and team data as values
    * @returns {String} leaderboard.teamName - Team name
    * @returns {Number} leaderboard.matchesPlayed - Number of matches played by the team
    * @returns {Number} leaderboard.goalsFor - Number of goals scored by the team
    * @returns {Number} leaderboard.goalsAgainst - Number of goals conceded by the team
    * @returns {Number} leaderboard.points - Number of points earned by the team
    * @returns {Array} leaderboard.matches - Array of matches played by the team
    **/
    createLeaderboard(teamsToFilter = []) {
        const leaderboard = {};

        // Only matches that have been played by the teams
        const matchesFilteredByTeams = teamsToFilter.length > 0
            ? this.matches.filter(match => teamsToFilter.includes(match.homeTeam) && teamsToFilter.includes(match.awayTeam))
            : this.matches;

        // Create leaderboard object
        matchesFilteredByTeams.forEach(match => {
            const { homeTeam, awayTeam, matchPlayed, homeTeamScore, awayTeamScore } = match;
            if (!matchPlayed) return;

            const results = [homeTeamScore, awayTeamScore];
            const teams = [homeTeam, awayTeam];

            for (let i = 0; i < 2; i++) {
                const thisTeam = teams[i]
                const thisResult = results[i]
                const otherResult = results[1 - i]

                const teamData = leaderboard[thisTeam] ?? { teamName: thisTeam, matchesPlayed: 0, goalsFor: 0, goalsAgainst: 0, points: 0, matches: [] }
                teamData.matchesPlayed += 1
                teamData.goalsFor += thisResult
                teamData.goalsAgainst += otherResult
                teamData.points += thisResult > otherResult ? 3 : thisResult === otherResult ? 1 : 0
                teamData.matches.push(match)
                leaderboard[thisTeam] = teamData
            }
        })

        // Sort leaderboard object by points only.
        return Object.values(leaderboard).sort((a, b) => {
            if (a.points > b.points) return -1;
            if (a.points < b.points) return 1;
            return 0;
        })
    }

    /**
     * 
     * @returns {Array} leaderboard - Array of teams sorted by points, goals difference, goals for and team name
     * @returns {String} leaderboard.teamName - Team name
     * @returns {Number} leaderboard.matchesPlayed - Number of matches played by the team
     * @returns {Number} leaderboard.goalsFor - Number of goals scored by the team
     * @returns {Number} leaderboard.goalsAgainst - Number of goals conceded by the team
     * @returns {Number} leaderboard.points - Number of points earned by the team
     * @returns {Array} leaderboard.matches - Array of matches played by the team
     */
    getLeaderboard() {
        const leaderbordOnlySortedByPoints = this.createLeaderboard()
        const teamsMappedByPoints = new Map();
        const leaderboard = [];

        leaderbordOnlySortedByPoints.forEach(team => {
            const teamsWithSamePoints = teamsMappedByPoints.get(team.points) ?? [];
            teamsWithSamePoints.push(team);
            teamsMappedByPoints.set(team.points, teamsWithSamePoints);
        })

        teamsMappedByPoints.forEach((teams) => {
            const sortedTeams = this.sortTeamsHeadToHead(teams);
            leaderboard.push(...sortedTeams);
        });

        return leaderboard;
    }

    /**
     * Sort teams head to head (same points).
     * @param {Array} teams - Array of teams with the same points
     * @returns {Array} teams - Array of teams sorted by points, goals difference, goals for and team name
     */
    sortTeamsHeadToHead(teams) {
        if (teams.length === 1) {
            return teams;
        }

        const nameListOfTeams = teams.map(team => team.teamName);
        const teamsSortedByPoints = this.createLeaderboard(nameListOfTeams);

        const allTeamsSamePointsAgain = teamsSortedByPoints.every(team => team.points === teamsSortedByPoints[0].points);

        if (allTeamsSamePointsAgain) {
            teams.sort((a, b) => {
                // By Gol diff
                if ((a.goalsFor - a.goalsAgainst) > (b.goalsFor - b.goalsAgainst)) return -1;
                if ((a.goalsFor - a.goalsAgainst) < (b.goalsFor - b.goalsAgainst)) return 1;

                // By Goals for
                if (a.goalsFor > b.goalsFor) return -1;
                if (a.goalsFor < b.goalsFor) return 1;

                // By team name
                if (a.teamName > b.teamName) return 1;
                if (a.teamName < b.teamName) return -1;
            })
            
        } else {
            const teamNamesCorrectlySorted = teamsSortedByPoints.map(team => team.teamName);
            teams.sort(function(a, b) {
                return teamNamesCorrectlySorted.indexOf(a.teamName) - teamNamesCorrectlySorted.indexOf(b.teamName);
            });
        }

        return teams;
    }
}