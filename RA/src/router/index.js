import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/NoticeView.vue'),
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
      path: '/mypage',
      name: 'mypage',
      component: () => import('../views/MypageView.vue')
    },
    {
      path:'/chatWindow',
      name:'chatWindow',
      component:() => import('../views/chatWindow.vue')
    },
    {
      path:'/ReunionView',
      name:'ReunionView',
      component:() => import('../views/ReunionView.vue')
    },
    {
      path:'/school',
      name:'school',
      component:() => import('../views/schoolView.vue')
    },
    {
      path:'/comparison',
      name:'comparison',
      component:() => import('../views/ComparisonView.vue')
    },
  ]
})

export default router
