// import './assets/main.css'
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import router from './router'
// import VueSession from 'vue-session/index'

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// // ✅ Firebase 모듈 방식으로 직접 구성
// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyArLnvWnqoqIudLo-Djk4cANVsyxBBRq44",
//   authDomain: "raonaria-fb5a3.firebaseapp.com",
//   projectId: "raonaria-fb5a3",
//   storageBucket: "raonaria-fb5a3.appspot.com",
//   messagingSenderId: "342530775386",
//   appId: "1:342530775386:web:f7b125161129af263ffb63",
//   measurementId: "G-GNPSR4XXC7"
// }

// // 🔥 Firebase 앱 초기화 및 인증 객체 생성
// const firebaseApp = initializeApp(firebaseConfig)
// const auth = getAuth(firebaseApp)

// // 필요하면 전역으로 사용할 수 있도록 export
// export { auth }

// const sessionOptions = { persist: true }

// const app = createApp(App)
// app.use(VueSession, sessionOptions)
// app.use(createPinia())
// app.use(router)
// app.mount('#app')
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import SessionPlugin from './session'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

// Firebase는 src/utils/firebase.js에서 중앙 관리
import { auth } from '@/utils/firebase'
import { useAuthStore } from '@/stores/auth'

// 하위 호환을 위해 re-export
export { auth }
export { firebaseApp, db } from '@/utils/firebase'

const app = createApp(App)
const pinia = createPinia()
app.use(SessionPlugin, { persist: true })
app.use(pinia)
app.use(router)

// Auth 상태 초기화 후 마운트
const authStore = useAuthStore()
authStore.init().then(() => {
  app.mount('#app')
})
