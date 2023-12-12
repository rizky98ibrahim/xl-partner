import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AOS from 'aos';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    AOS.init()
    next()
})

export default router