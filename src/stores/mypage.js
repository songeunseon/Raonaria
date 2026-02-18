import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/utils/firebase'
import {
  collection, addDoc, deleteDoc, doc,
  query, where, orderBy, onSnapshot, serverTimestamp, getDocs
} from 'firebase/firestore'

export const useMypageStore = defineStore('mypage', () => {
  const applications = ref([])
  const inquiries = ref([])
  const consultations = ref([])

  let unsubApps = null
  let unsubInquiries = null
  let unsubConsultations = null

  // 신청내역 구독
  function subscribeApplications(userId) {
    unsubscribeApplications()
    const q = query(
      collection(db, 'applications'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    unsubApps = onSnapshot(q, (snapshot) => {
      applications.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('신청내역 로드 실패:', error.message)
    })
  }

  function unsubscribeApplications() {
    if (unsubApps) { unsubApps(); unsubApps = null }
  }

  // 문의내역 구독
  function subscribeInquiries(userId) {
    unsubscribeInquiries()
    const q = query(
      collection(db, 'inquiries'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    unsubInquiries = onSnapshot(q, (snapshot) => {
      inquiries.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('문의내역 로드 실패:', error.message)
    })
  }

  function unsubscribeInquiries() {
    if (unsubInquiries) { unsubInquiries(); unsubInquiries = null }
  }

  // 상담내역 구독
  function subscribeConsultations(userId) {
    unsubscribeConsultations()
    const q = query(
      collection(db, 'consultations'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    unsubConsultations = onSnapshot(q, (snapshot) => {
      consultations.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('상담내역 로드 실패:', error.message)
    })
  }

  function unsubscribeConsultations() {
    if (unsubConsultations) { unsubConsultations(); unsubConsultations = null }
  }

  // 상담 신청
  async function addConsultation(data) {
    await addDoc(collection(db, 'consultations'), {
      ...data,
      status: '대기중',
      createdAt: serverTimestamp()
    })
  }

  // 신청 추가 (상담/입학)
  async function addApplication(data) {
    await addDoc(collection(db, 'applications'), {
      ...data,
      createdAt: serverTimestamp()
    })
  }

  // 신청 취소
  async function cancelApplication(appId) {
    await deleteDoc(doc(db, 'applications', appId))
  }

  // 문의 작성
  async function addInquiry(userId, content) {
    await addDoc(collection(db, 'inquiries'), {
      userId,
      content,
      status: '접수',
      createdAt: serverTimestamp()
    })
  }

  // 문의 취소
  async function cancelInquiry(inquiryId) {
    await deleteDoc(doc(db, 'inquiries', inquiryId))
  }

  function cleanup() {
    unsubscribeApplications()
    unsubscribeInquiries()
    unsubscribeConsultations()
    applications.value = []
    inquiries.value = []
    consultations.value = []
  }

  return {
    applications, inquiries, consultations,
    subscribeApplications, unsubscribeApplications,
    subscribeInquiries, unsubscribeInquiries,
    subscribeConsultations, unsubscribeConsultations,
    addConsultation, addApplication, cancelApplication,
    addInquiry, cancelInquiry, cleanup
  }
})
