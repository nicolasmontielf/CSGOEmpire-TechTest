<script setup>
    import ScheduleTable from '../components/schedule/ScheduleTable'
    import TeamWithFlag from '../components/team/TeamWithFlag'
    import LeagueService from '../services/LeagueService'
    import { ref, onMounted } from 'vue'

    const schedule = ref([])
    const leagueService = new LeagueService()

    onMounted(async () => {
        await leagueService.fetchData()
        schedule.value = leagueService.getMatches()
    })

    function formatResult(match) {
        if (!match.matchPlayed) {
            return '- : -'
        }
        return `${match.homeTeamScore} : ${match.awayTeamScore}`
    }
</script>

<template>
    <div class="w-full">
        <div class="mb-5">
            <h1 class="text-center text-2xl font-bold">League Schedule</h1>
        </div>

        <div id="schedule-table-container">
            <!-- Table Header -->
            <ScheduleTable is-header>
                <template #matchDate>
                    <p>Date/Time</p>
                </template>
                <template #stadium>
                    <p>Stadium</p>
                </template>
                <template #homeTeam>
                    <p>Home Team</p>
                </template>
                <template #awayTeam>
                    <p>Away Team</p>
                </template>
            </ScheduleTable>

            <!-- Schedule Table Body -->
            <ScheduleTable
                v-for="(match, index) of schedule"
                :index="index"
                :key="match.id"
            >
                <template #matchDate>
                    <div class="inline-block">
                        <p class="text-right">{{ match.matchDate }}</p>
                        <p class="text-right">{{ match.matchTime }}</p>
                    </div>
                </template>
                <template #stadium>
                    <p>{{ match.stadium }}</p>
                </template>
                <template #homeTeam>
                    <TeamWithFlag :team="match.homeTeam" />
                </template>
                <template #awayTeam>
                    <TeamWithFlag :team="match.awayTeam" reverse />
                </template>
                <template #result>
                    {{ formatResult(match) }}
                </template>
            </ScheduleTable>

        </div>
        
    </div>
</template>