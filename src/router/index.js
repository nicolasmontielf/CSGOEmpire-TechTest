import { createRouter, createWebHistory } from 'vue-router'
import LeaderboardPage from '../views/LeaderboardPage.vue'
import SchedulePage from '../views/SchedulePage.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SchedulePage },
        { path: '/schedule', component: SchedulePage },
        { path: '/leaderboard', component: LeaderboardPage },
        { path: '/:pathMatch(.*)*', component: NotFound }
    ]
})

export default router;