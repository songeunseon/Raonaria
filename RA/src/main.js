import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import VueSession from 'vue-session/index'

var sesstionOptions={
    persist:true
}
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArLnvWnqoqIudLo-Djk4cANVsyxBBRq44",
  authDomain: "raonaria-fb5a3.firebaseapp.com",
  projectId: "raonaria-fb5a3",
  storageBucket: "raonaria-fb5a3.appspot.com",
  messagingSenderId: "342530775386",
  appId: "1:342530775386:web:f7b125161129af263ffb63",
  measurementId: "G-GNPSR4XXC7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const app = createApp(App)

//app.use(VueSession,sesstionOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')