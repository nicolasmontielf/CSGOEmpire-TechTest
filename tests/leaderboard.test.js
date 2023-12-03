/**
 * 
 *  THIS IS A TESTING FILE. YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO TEST YOUR WORK.
 *  PLEASE DON´T CHANGE THE INTERFACE OF leagueService.js METHODS
 *
 */

import { expect } from "@jest/globals";
import LeaderboardService from "../src/services/LeaderboardService";
import MATCHES from './matches.json'

describe("LeaderboardService", () => {
    test('Tiebreaker by head-to-head points with 2 teams', () => {
        const leaderboardService = new LeaderboardService(MATCHES['head-to-head-with-2-teams']);
        const leaderboard = leaderboardService.getLeaderboard();

        expect(leaderboard.length).toBe(4);

        const expectedResults = [
            { teamName: 'Brazil', matchesPlayed: 3, goalsFor: 3, goalsAgainst: 3, points: 4 },
            { teamName: 'Serbia', matchesPlayed: 3, goalsFor: 3, goalsAgainst: 2, points: 4 },
            { teamName: 'Switzerland', matchesPlayed: 2, goalsFor: 3, goalsAgainst: 4, points: 3 },
            { teamName: 'Cameroon', matchesPlayed: 2, goalsFor: 1, goalsAgainst: 1, points: 2 }
        ]

        for (let i = 0; i < expectedResults.length; i++) {
            const teamInformation = expectedResults[i]
            for (let property in teamInformation) {
                expect(leaderboard[i][property]).toBe(teamInformation[property])
            }
        }
    })

    test('Tiebreaker by head-to-head points with 3 teams', () => {
        const leaderboardService = new LeaderboardService(MATCHES['head-to-head-with-3-teams']);
        const leaderboard = leaderboardService.getLeaderboard();

        expect(leaderboard.length).toBe(4);

        const expectedResults = [
            { teamName: 'Cameroon', matchesPlayed: 2, goalsFor: 4, goalsAgainst: 3, points: 4 },
            { teamName: 'Brazil', matchesPlayed: 2, goalsFor: 4, goalsAgainst: 2, points: 4 },
            { teamName: 'Serbia', matchesPlayed: 3, goalsFor: 3, goalsAgainst: 2, points: 4 },
            { teamName: 'Switzerland', matchesPlayed: 3, goalsFor: 4, goalsAgainst: 8, points: 1 },
        ]

        for (let i = 0; i < expectedResults.length; i++) {
            const teamInformation = expectedResults[i]
            for (let property in teamInformation) {
                expect(leaderboard[i][property]).toBe(teamInformation[property])
            }
        }
    })

    test('Tiebreaker by goal difference', () => {
        const leaderboardService = new LeaderboardService(MATCHES['tiebreaker-by-goal-difference']);
        const leaderboard = leaderboardService.getLeaderboard();

        expect(leaderboard.length).toBe(4);

        const expectedResults = [
            { teamName: 'Serbia', matchesPlayed: 3, goalsFor: 3, goalsAgainst: 1, points: 5 },
            { teamName: 'Brazil', matchesPlayed: 3, goalsFor: 3, goalsAgainst: 2, points: 5 },
            { teamName: 'Cameroon', matchesPlayed: 2, goalsFor: 1, goalsAgainst: 1, points: 2 },
            { teamName: 'Switzerland', matchesPlayed: 2, goalsFor: 2, goalsAgainst: 5, points: 0 },
        ]

        for (let i = 0; i < expectedResults.length; i++) {
            const teamInformation = expectedResults[i]
            for (let property in teamInformation) {
                expect(leaderboard[i][property]).toBe(teamInformation[property])
            }
        }
    })

    test('Tiebreaker by the number of scored goals', () => {
        const leaderboardService = new LeaderboardService(MATCHES['tiebreaker-by-the-number-of-scored-goals']);
        const leaderboard = leaderboardService.getLeaderboard();

        expect(leaderboard.length).toBe(4);

        const expectedResults = [
            { teamName: 'Brazil', matchesPlayed: 3, goalsFor: 4, goalsAgainst: 2, points: 5 },
            { teamName: 'Serbia', matchesPlayed: 3, goalsFor: 3, goalsAgainst: 1, points: 5 },
            { teamName: 'Cameroon', matchesPlayed: 2, goalsFor: 1, goalsAgainst: 1, points: 2 },
            { teamName: 'Switzerland', matchesPlayed: 2, goalsFor: 2, goalsAgainst: 6, points: 0 },
        ]

        for (let i = 0; i < expectedResults.length; i++) {
            const teamInformation = expectedResults[i]
            for (let property in teamInformation) {
                expect(leaderboard[i][property]).toBe(teamInformation[property])
            }
        }
    })

});