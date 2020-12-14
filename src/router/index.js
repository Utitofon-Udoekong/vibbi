import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Trending from "../views/Trending.vue"
import subscription from "../views/Subscriptions.vue"
import Dashboard from "../views/dashboard.vue"
import FAQ from "../views/FAQ.vue"
import contact from "../views/contact.vue"
import forgot_Password from "../views/forgotPassword.vue"

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trending',
    name: 'Trending',
    component: Trending
  },
  {
    path: '/subscriptions',
    name: 'Subscription',
    component: subscription
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot-Password',
    name: 'forgot-password',
    component: forgot_Password
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: contact
  },
]

const router = new VueRouter({
  routes
})

export default router
