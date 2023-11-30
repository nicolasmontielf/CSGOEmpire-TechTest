<script setup>
    import LeaderBoardTable from '../components/leaderboard/LeaderBoardTable';
    import TeamWithFlag from '../components/team/TeamWithFlag'
</script>

<template>
    <div class="w-full">
        <div class="mb-5">
            <h1 class="text-center text-2xl font-bold">League Standings</h1>
        </div>

        <div id="leaderboard-table-container">
            <!-- Table Header -->
            <LeaderBoardTable is-header>
                <template #teamName>
                    <p>Team</p>
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
            <LeaderBoardTable >
                <template #teamName>
                    <TeamWithFlag team="Brazil" reverse />
                </template>
                <template #mp>
                    <p>3</p>
                </template>
                <template #gf>
                    <p>8</p>
                </template>
                <template #ga>
                    <p>4</p>
                </template>
                <template #points>
                    <p>7</p>
                </template>
            </LeaderBoardTable>

        </div>
    </div>
</template>