/**
 * 这行代码指示TypeScript编译器包含Vite客户端相关的类型声明。
 * Vite扩展了标准的import.meta对象，引入了import.meta.env等特定的属性用于访问环境变量。
 * 这个三斜线指令确保TypeScript能够识别import.meta.env及其属性，从而避免编译时出现找不到属性的类型错误。
 * */
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