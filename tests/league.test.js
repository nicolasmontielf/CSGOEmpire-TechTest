import LeagueService from "../src/services/LeagueService";

describe('LeagueService', () => {
    let leagueService;

    beforeEach(() => {
        leagueService = new LeagueService();
    });

    test('setMatch() method is setting the matches', () => {
        expect(leagueService.matches).toStrictEqual([]);

        const matches = [
            {
                matchDate: Date.now(),
                stadium: 'Maracanã',
                homeTeam: 'Brazil',
                awayTeam: 'France',
                matchPlayed: true,
                homeTeamScore: 2,
                awayTeamScore: 1
            }
        ];
        leagueService.setMatches(matches);

        expect(leagueService.matches).toStrictEqual(matches);
    })

    test('getMatches() method is returning the matches', () => {
        expect(leagueService.matches).toStrictEqual([]);

        const matches = [
            {
                matchDate: Date.now(),
                stadium: 'Maracanã',
                homeTeam: 'Brazil',
                awayTeam: 'France',
                matchPlayed: true,
                homeTeamScore: 2,
                awayTeamScore: 1
            }
        ];
        leagueService.setMatches(matches);

        const returnedMatches = leagueService.getMatches();

        expect(returnedMatches).toStrictEqual(matches);
    })

    describe('getStoredBearerToken()', () => {
        test('getStoredBearerToken() method is returning undefined when there is no stored bearer token', () => {
            const localStorageSpy = jest.spyOn(Storage.prototype, 'getItem');
            const storedToken = leagueService.getStoredBearerToken();

            expect(storedToken).toBe(undefined);
            expect(localStorageSpy).toHaveBeenCalledWith('league_auth_token');
        })

        test('getStoredBearerToken() method is returning undefined when the stored bearer token is expired', () => {
            const token = 'RANDOM_TOKEN';
            const expiration = Date.now() - 1000;

            localStorage.setItem('league_auth_token', JSON.stringify({
                token,
                expiration
            }));

            const localStorageSpy = jest.spyOn(Storage.prototype, 'getItem');
            const storedToken = leagueService.getStoredBearerToken();

            expect(storedToken).toBe(undefined);
            expect(localStorageSpy).toHaveBeenCalledWith('league_auth_token');
        })

        test('getStoredBearerToken() method is returning the stored bearer token', () => {
            const token = 'RANDOM_TOKEN';
            const expiration = Date.now() + 1000;

            localStorage.setItem('league_auth_token', JSON.stringify({
                token,
                expiration
            }));

            const localStorageSpy = jest.spyOn(Storage.prototype, 'getItem');
            const storedToken = leagueService.getStoredBearerToken();

            expect(storedToken).toBe(token);
            expect(localStorageSpy).toHaveBeenCalledWith('league_auth_token');
        })
    })

    test('setBearerToken() method is setting the bearer token', () => {
        const token = 'RANDOM_TOKEN';

        const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
        leagueService.setBearerToken(token);

        expect(localStorageSpy).toHaveBeenCalledWith('league_auth_token', expect.any(String));
    })

    test('getLeaderboard() is returning the leaderboard', () => {
        const matches = [
            {
                matchDate: Date.now(),
                stadium: 'Maracanã',
                homeTeam: 'Brazil',
                awayTeam: 'France',
                matchPlayed: true,
                homeTeamScore: 2,
                awayTeamScore: 1
            }
        ];
        leagueService.setMatches(matches);

        const leaderboard = leagueService.getLeaderboard();

        const firstTeam = leaderboard[0];
        expect(firstTeam.teamName).toBe('Brazil');
        expect(firstTeam.matchesPlayed).toBe(1);
        expect(firstTeam.goalsFor).toBe(2);
        expect(firstTeam.goalsAgainst).toBe(1);
        expect(firstTeam.points).toBe(3);

        const secondTeam = leaderboard[1];
        expect(secondTeam.teamName).toBe('France');
        expect(secondTeam.matchesPlayed).toBe(1);
        expect(secondTeam.goalsFor).toBe(1);
        expect(secondTeam.goalsAgainst).toBe(2);
        expect(secondTeam.points).toBe(0);
    });
})