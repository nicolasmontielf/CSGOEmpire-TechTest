export default class LeaderboardGeneratorService {
    constructor(matches) {
        this.leaderBoard = [];
        this.matches = matches;
    }

    getLeaderboard() {
        const lb = {};
        this.matches.forEach(match => {
            const { homeTeam, awayTeam, homeTeamScore, awayTeamScore } = match;

            const results = [homeTeamScore, awayTeamScore];
            const teams = [homeTeam, awayTeam];

            for (let i = 0; i < 2; i++) {
                const thisTeam = teams[i]
                const thisResult = results[i]
                const otherResult = results[1 - i]

                const teamData = lb[thisTeam] ?? { teamName: thisTeam, matchesPlayed: 0, goalsFor: 0, goalsAgainst: 0, points: 0, matches: [] }
                teamData.matchesPlayed += 1
                teamData.goalsFor += thisResult
                teamData.goalsAgainst += otherResult
                teamData.points += thisResult > otherResult ? 3 : thisResult === otherResult ? 1 : 0
                teamData.matches.push(match)
                lb[thisTeam] = teamData
            }
        })

        return Object.values(lb).sort((a, b) => {
            if (a.points > b.points) return -1
            if (a.points < b.points) return 1
            if (a.goalsFor - a.goalsAgainst > b.goalsFor - b.goalsAgainst) return -1
            if (a.goalsFor - a.goalsAgainst < b.goalsFor - b.goalsAgainst) return 1
            if (a.goalsFor > b.goalsFor) return -1
            if (a.goalsFor < b.goalsFor) return 1
            return 0
        })
    }
}