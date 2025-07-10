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

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArLnvWnqoqIudLo-Djk4cANVsyxBBRq44",
  authDomain: "raonaria-fb5a3.firebaseapp.com",
  projectId: "raonaria-fb5a3",
  storageBucket: "raonaria-fb5a3.appspot.com",
  messagingSenderId: "342530775386",
  appId: "1:342530775386:web:f7b125161129af263ffb63",
  measurementId: "G-GNPSR4XXC7"
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
export { firebaseApp, auth }

const app = createApp(App)
app.use(SessionPlugin, { persist: true }) 
app.use(createPinia())
app.use(router)
app.mount('#app')
