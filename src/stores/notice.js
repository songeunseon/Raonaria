import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/utils/firebase'
import {
  collection, addDoc, deleteDoc, doc,
  query, orderBy, onSnapshot, serverTimestamp, getDocs, where
} from 'firebase/firestore'

export const useNoticeStore = defineStore('notice', () => {
  const notices = ref([])
  let unsub = null

  function subscribe() {
    if (unsub) return
    const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'))
    unsub = onSnapshot(q, (snapshot) => {
      notices.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('공지사항 로드 실패:', error.message)
    })
  }

  function unsubscribe() {
    if (unsub) { unsub(); unsub = null }
  }

  async function addNotice(title, content, author, authorId) {
    await addDoc(collection(db, 'notices'), {
      title,
      content,
      author,
      authorId,
      createdAt: serverTimestamp()
    })
  }

  async function removeNotice(noticeId) {
    await deleteDoc(doc(db, 'notices', noticeId))
  }

  // 검색
  function filterByKeyword(keyword) {
    if (!keyword) return notices.value
    const lower = keyword.toLowerCase()
    return notices.value.filter(n =>
      n.title?.toLowerCase().includes(lower) || n.content?.toLowerCase().includes(lower)
    )
  }

  return { notices, subscribe, unsubscribe, addNotice, removeNotice, filterByKeyword }
})
