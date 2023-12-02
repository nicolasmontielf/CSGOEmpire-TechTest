<script setup>
    import LeaderBoardTable from '../components/leaderboard/LeaderBoardTable';
    import TeamWithFlag from '../components/team/TeamWithFlag'
    import LeagueService from '../services/LeagueService'
    import { ref, onMounted } from 'vue'

    const leaderBoard = ref([])
    const leagueService = new LeagueService()

    onMounted(async () => {
        await leagueService.fetchData()
        leaderBoard.value = leagueService.getLeaderboard()
    })
</script>

<template>
    <div class="w-full">
        <div class="mb-5">
            <h1 class="text-center text-2xl font-bold text-color-title">League Standings</h1>
        </div>

        <div id="leaderboard-table-container">
            <!-- Table Header -->
            <LeaderBoardTable is-header>
                <template #teamName>
                    <p>Team Name</p>
                </template>
                <template #mp>
                    <p>MP</p>
                </template>
                <template #gf>
                    <p>GF</p>
                </template>
                <template #ga>
                    <p>GA</p>
                </template>
                <template #points>
                    <p>Points</p>
                </template>
            </LeaderBoardTable>

            <!-- Table Body -->
            <LeaderBoardTable v-for="(team, index) of leaderBoard" :key="index">
                <template #teamName>
                    <TeamWithFlag :team="team.teamName" reverse />
                </template>
                <template #mp>
                    <p class="text-base">{{ team.matchesPlayed }}</p>
                </template>
                <template #gf>
                    <p class="text-base">{{ team.goalsFor }}</p>
                </template>
                <template #ga>
                    <p class="text-base">{{ team.goalsAgainst }}</p>
                </template>
                <template #points>
                    <p class="text-base text-color-page-header">{{ team.points }}</p>
                </template>
            </LeaderBoardTable>

        </div>
    </div>
</template>