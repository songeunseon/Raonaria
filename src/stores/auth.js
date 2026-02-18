import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '@/utils/firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(true)

  const isLoggedIn = computed(() => !!user.value)
  const userId = computed(() => user.value?.uid || null)
  const userEmail = computed(() => user.value?.email || null)
  const userName = computed(() => {
    if (!user.value) return null
    return user.value.displayName || user.value.email?.split('@')[0] || '사용자'
  })

  function init() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          user.value = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName
          }
          sessionStorage.setItem('user_id', firebaseUser.email)
        } else {
          user.value = null
          sessionStorage.removeItem('user_id')
        }
        loading.value = false
        resolve()
      })
    })
  }

  async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  }

  async function logout() {
    await signOut(auth)
    user.value = null
    sessionStorage.removeItem('user_id')
  }

  return { user, loading, isLoggedIn, userId, userEmail, userName, init, login, logout }
})
