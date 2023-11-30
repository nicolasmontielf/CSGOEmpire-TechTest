<script setup>
    import ScheduleTable from '../components/schedule/ScheduleTable'
    import TeamWithFlag from '../components/team/TeamWithFlag'

    const schedule = [
        {
            "matchDate": 1651744228685,
            "stadium": "Maracanã",
            "homeTeam": "Brazil",
            "awayTeam": "Serbia",
            "matchPlayed": true,
            "homeTeamScore": 1,
            "awayTeamScore": 0
        },
        {
            "matchDate": 1651744228685,
            "stadium": "Stade de Suisse",
            "homeTeam": "Switzerland",
            "awayTeam": "Serbia",
            "matchPlayed": true,
            "homeTeamScore": 2,
            "awayTeamScore": 2
        },
        {
            "matchDate": 1651744228685,
            "stadium": "Stadion Rajko Mitic",
            "homeTeam": "Serbia",
            "awayTeam": "Cameroon",
            "matchPlayed": false,
            "homeTeamScore": 0,
            "awayTeamScore": 0
        },
    ]

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
                    <p>{{ match.matchDate }}</p>
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
                <!-- <template #result>
                    <p>{{ match.result }}</p>
                </template> -->
            </ScheduleTable>

        </div>
        
    </div>
</template>