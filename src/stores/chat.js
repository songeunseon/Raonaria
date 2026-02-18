import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/utils/firebase'
import {
  collection, addDoc, deleteDoc, doc, updateDoc,
  query, orderBy, onSnapshot, serverTimestamp,
  getDoc, getDocs, where, increment
} from 'firebase/firestore'

export const useChatStore = defineStore('chat', () => {
  const rooms = ref([])
  const currentRoom = ref(null)
  const messages = ref([])
  const members = ref([])
  const roomNotices = ref([])

  let unsubRooms = null
  let unsubMessages = null
  let unsubMembers = null
  let unsubNotices = null

  // 채팅방 목록 실시간 구독
  function subscribeRooms() {
    const q = query(collection(db, 'chatRooms'), orderBy('createdAt', 'desc'))
    unsubRooms = onSnapshot(q, (snapshot) => {
      rooms.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('채팅방 목록 로드 실패:', error.message)
    })
  }

  function unsubscribeRooms() {
    if (unsubRooms) { unsubRooms(); unsubRooms = null }
  }

  // 채팅방 생성
  async function createRoom(name, description, masterId, masterName) {
    const docRef = await addDoc(collection(db, 'chatRooms'), {
      name,
      description,
      masterId,
      masterName,
      createdAt: serverTimestamp(),
      memberCount: 1
    })
    // 생성자를 멤버로 추가
    await addDoc(collection(db, 'chatRooms', docRef.id, 'members'), {
      userId: masterId,
      userName: masterName,
      joinedAt: serverTimestamp()
    })
    return docRef.id
  }

  // 채팅방 입장
  async function joinRoom(roomId, userId, userName) {
    // 이미 멤버인지 확인
    const membersRef = collection(db, 'chatRooms', roomId, 'members')
    const q = query(membersRef, where('userId', '==', userId))
    const snapshot = await getDocs(q)
    if (snapshot.empty) {
      await addDoc(membersRef, {
        userId,
        userName,
        joinedAt: serverTimestamp()
      })
      await updateDoc(doc(db, 'chatRooms', roomId), {
        memberCount: increment(1)
      })
    }
  }

  // 채팅방 정보 로드
  async function loadRoom(roomId) {
    const docSnap = await getDoc(doc(db, 'chatRooms', roomId))
    if (docSnap.exists()) {
      currentRoom.value = { id: docSnap.id, ...docSnap.data() }
    }
  }

  // 메시지 실시간 구독
  function subscribeMessages(roomId) {
    unsubscribeMessages()
    const q = query(
      collection(db, 'chatRooms', roomId, 'messages'),
      orderBy('timestamp', 'asc')
    )
    unsubMessages = onSnapshot(q, (snapshot) => {
      messages.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('메시지 로드 실패:', error.message)
    })
  }

  function unsubscribeMessages() {
    if (unsubMessages) { unsubMessages(); unsubMessages = null }
  }

  // 메시지 전송
  async function sendMessage(roomId, text, senderId, senderName) {
    if (!text.trim()) return
    await addDoc(collection(db, 'chatRooms', roomId, 'messages'), {
      text: text.trim(),
      senderId,
      senderName,
      timestamp: serverTimestamp()
    })
  }

  // 멤버 실시간 구독
  function subscribeMembers(roomId) {
    unsubscribeMembers()
    const q = query(collection(db, 'chatRooms', roomId, 'members'), orderBy('joinedAt', 'asc'))
    unsubMembers = onSnapshot(q, (snapshot) => {
      members.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('멤버 목록 로드 실패:', error.message)
    })
  }

  function unsubscribeMembers() {
    if (unsubMembers) { unsubMembers(); unsubMembers = null }
  }

  // 멤버 강퇴
  async function kickMember(roomId, memberDocId) {
    await deleteDoc(doc(db, 'chatRooms', roomId, 'members', memberDocId))
    await updateDoc(doc(db, 'chatRooms', roomId), {
      memberCount: increment(-1)
    })
  }

  // 채팅방 퇴장
  async function leaveRoom(roomId, userId) {
    const membersRef = collection(db, 'chatRooms', roomId, 'members')
    const q = query(membersRef, where('userId', '==', userId))
    const snapshot = await getDocs(q)
    for (const d of snapshot.docs) {
      await deleteDoc(d.ref)
    }
    await updateDoc(doc(db, 'chatRooms', roomId), {
      memberCount: increment(-1)
    })
  }

  // 채팅방 삭제 (방장)
  async function deleteRoom(roomId) {
    // 서브컬렉션 삭제
    const messagesSnap = await getDocs(collection(db, 'chatRooms', roomId, 'messages'))
    for (const d of messagesSnap.docs) await deleteDoc(d.ref)
    const membersSnap = await getDocs(collection(db, 'chatRooms', roomId, 'members'))
    for (const d of membersSnap.docs) await deleteDoc(d.ref)
    const noticesSnap = await getDocs(collection(db, 'chatRooms', roomId, 'notices'))
    for (const d of noticesSnap.docs) await deleteDoc(d.ref)
    await deleteDoc(doc(db, 'chatRooms', roomId))
  }

  // 채팅방 공지사항
  function subscribeRoomNotices(roomId) {
    if (unsubNotices) { unsubNotices(); unsubNotices = null }
    const q = query(
      collection(db, 'chatRooms', roomId, 'notices'),
      orderBy('createdAt', 'desc')
    )
    unsubNotices = onSnapshot(q, (snapshot) => {
      roomNotices.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    }, (error) => {
      console.error('채팅방 공지 로드 실패:', error.message)
    })
  }

  async function addRoomNotice(roomId, content) {
    await addDoc(collection(db, 'chatRooms', roomId, 'notices'), {
      content,
      createdAt: serverTimestamp()
    })
  }

  async function deleteRoomNotice(roomId, noticeId) {
    await deleteDoc(doc(db, 'chatRooms', roomId, 'notices', noticeId))
  }

  // 채팅방 정보 수정
  async function updateRoomInfo(roomId, data) {
    await updateDoc(doc(db, 'chatRooms', roomId), data)
    if (currentRoom.value && currentRoom.value.id === roomId) {
      currentRoom.value = { ...currentRoom.value, ...data }
    }
  }

  function cleanup() {
    unsubscribeRooms()
    unsubscribeMessages()
    unsubscribeMembers()
    if (unsubNotices) { unsubNotices(); unsubNotices = null }
    currentRoom.value = null
    messages.value = []
    members.value = []
    roomNotices.value = []
  }

  return {
    rooms, currentRoom, messages, members, roomNotices,
    subscribeRooms, unsubscribeRooms, createRoom, joinRoom, loadRoom,
    subscribeMessages, unsubscribeMessages, sendMessage,
    subscribeMembers, unsubscribeMembers, kickMember,
    leaveRoom, deleteRoom,
    subscribeRoomNotices, addRoomNotice, deleteRoomNotice,
    updateRoomInfo, cleanup
  }
})
