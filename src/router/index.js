import { createRouter, createWebHistory } from 'vue-router'
import LeaderboardPage from '../views/LeaderboardPage.vue'
import SchedulePage from '../views/SchedulePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SchedulePage },
        { path: '/schedule', component: SchedulePage },
        { path: '/leaderboard', component: LeaderboardPage },
    ]
})

export default router;