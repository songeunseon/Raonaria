import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

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
const db = getFirestore(firebaseApp)

export { firebaseApp, auth, db }
