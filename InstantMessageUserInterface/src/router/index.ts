
/// <reference types="vite/client" />
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '../views/login.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: login
    }
    /*,
    {
        path: '/home',
        name: 'home',
        component: () => import(/!* webpackChunkName: "home" *!/ '../views/home.vue')
    }*/
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router