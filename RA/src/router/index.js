import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoticeView from '../views/NoticeView.vue'
import ReunionView from '../views/ReunionView.vue'
import searchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/NoticeView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import('../views/NoticeView.vue')
    },
    {
      path: '/reunion',
      name: 'reunion',
      component: () => import('../views/ReunionView.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinView.vue')
    },
    {
      path: '/reunion',
      name: 'reunion',
      component: () => import('../views/ReunionView.vue')
    }
  ]
})

export default router
