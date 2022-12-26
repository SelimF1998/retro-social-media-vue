import {createRouter, createWebHistory} from 'vue-router'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'
import Explore from '../views/Explore.vue'


const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/",
        name: "Name",
        component: Main,
        children: [
            {
                path: "/",
                name: "Home",
                component: Home,
            },
            {
                path: "/profile",
                name: "Profile",
                component: Profile,
            },
            {
                path: "/settings",
                name: "Settings",
                component: Settings,
            },
            {
                path: "/explore",
                name: "Explore",
                component: Explore,
            }
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router










