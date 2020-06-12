import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/prijava',
    name: 'Prijava',
    component: () => import(/* webpackChunkName: "prijava" */ '../views/Prijava.vue')
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: () => import(/* webpackChunkName: "Registracija" */ '../views/Registracija.vue')
  },
  {
    path: '/profildota',
    name: 'ProfilDota',
    component: () => import(/* webpackChunkName: "ProfilDota" */ '../views/ProfilDota.vue')
  },
  {
    path: '/profilcsgo',
    name: 'ProfilCsgo',
    component: () => import(/* webpackChunkName: "ProfilCsgo" */ '../views/ProfilCsgo.vue')
  },
  {
    path: '/profilLol',
    name: 'ProfilLol',
    component: () => import(/* webpackChunkName: "ProfilLol" */ '../views/ProfilLol.vue')
  },
  {
    path: '/igraci',
    name: 'Igraci',
    component: () => import(/* webpackChunkName: "Igraci" */ '../views/Igraci.vue')
  },
  {
    path: '/pozivi',
    name: 'Pozivi',
    component: () => import(/* webpackChunkName: "Pozivi" */ '../views/Pozivi.vue')
  },
  {
    path: '/timovi',
    name: 'Timovi',
    component: () => import(/* webpackChunkName: "Timovi" */ '../views/Timovi.vue')
  },
  {
    path: '/mojitimovi',
    name: 'MojiTimovi',
    component: () => import(/* webpackChunkName: "MojiTimovi" */ '../views/MojiTimovi.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "Chat" */ '../views/Chat.vue')
  },
  {
    path: '/profilp',
    name: 'ProfilP',
    component: () => import(/* webpackChunkName: "ProfilP" */ '../views/ProfilP.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "Profil" */ '../views/Profil.vue')
  },
  {
    path: '/moj-profil',
    name: 'Moj-profil',
    component: () => import(/* webpackChunkName: "Moj-profil" */ '../views/Moj-profil.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
