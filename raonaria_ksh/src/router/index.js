import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chatRoom',
      name: 'chatRoom',
      component: () => import('../views/chatRoom.vue')
    },
    {
      path:'/chatWindow',
      name:'chatWindow',
      component:() => import('../views/chatWindow.vue')
    },
    {
      path:'/MyPage',
      name:'Mypage',
      component: () => import('../views/MyPage.vue')
    }
  ]
})

export default router
