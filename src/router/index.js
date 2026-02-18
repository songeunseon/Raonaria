// src/router/index.js (또는 .ts)
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/notice', name: 'notice', component: () => import('@/views/NoticeView.vue') },
  { path: '/search', name: 'search', component: () => import('@/views/SearchView.vue') },
  { path: '/reunion', name: 'reunion', component: () => import('@/views/ReunionView.vue') },
  { path: '/join', name: 'join', component: () => import('@/views/JoinView.vue') },
  { path: '/mypage', name: 'mypage', component: () => import('@/views/MypageView.vue') },
  { path: '/chat-window/:roomId', name: 'chatWindow', component: () => import('@/views/chatWindow.vue'), props: true },
  { path: '/info-change', name: 'infoChange', component: () => import('@/views/Chatwindow_InfoChange.vue') },
  { path: '/notice-write', name: 'noticeWrite', component: () => import('@/views/noticeWrite.vue') },
  { path: '/kick-out/:roomId', name: 'kickOut', component: () => import('@/views/kickOUt.vue'), props: true },
  { path: '/school', name: 'school', component: () => import('@/views/schoolView.vue') },
  { path: '/comparison', name: 'comparison', component: () => import('@/views/ComparisonView.vue') },

  // 존재하지 않는 경로 → 홈으로
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  // 서브폴더 배포 경로 반드시 지정
  history: createWebHistory('/personal/raonaria/'),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
