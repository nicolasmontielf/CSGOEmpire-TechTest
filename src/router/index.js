import { createRouter, createWebHistory } from 'vue-router'
import LeaderboardPage from '../views/LeaderboardPage.vue'
import SchedulePage from '../views/SchedulePage.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: SchedulePage,
            name: 'home',
        },
        {
            path: '/schedule',
            component: SchedulePage,
            name: 'schedule',
        },
        {
            path: '/leaderboard',
            component: LeaderboardPage,
            name: 'leaderboard',
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: 'not-found',
        }
    ]
})

export default router;