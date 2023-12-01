<script setup>
    import LeaderBoardTable from '../components/leaderboard/LeaderBoardTable';
    import TeamWithFlag from '../components/team/TeamWithFlag'
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
            <LeaderBoardTable v-for="n in 5" :key="n">
                <template #teamName>
                    <TeamWithFlag team="Brazil" reverse />
                </template>
                <template #mp>
                    <p class="text-base">3</p>
                </template>
                <template #gf>
                    <p class="text-base">8</p>
                </template>
                <template #ga>
                    <p class="text-base">4</p>
                </template>
                <template #points>
                    <p class="text-base text-color-page-header">7</p>
                </template>
            </LeaderBoardTable>

        </div>
    </div>
</template>