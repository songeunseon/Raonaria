<template>
    <div class="page">
        <div class="info">
            <div class="profile">
                <i class="bi bi-person-circle"></i>
                <div class="name">{{ authStore.userName || '사용자' }}</div>
            </div>
            <div id="chat_alert_box" v-if="!isApply">
                <div class="chat_alert">채팅방 알림</div>
                <template v-if="chatRooms.length > 0">
                    <div class="alert_box" v-for="room in chatRooms" :key="room.id">
                        <div class="circle"></div>
                        <div class="textWrap">{{ room.name }}에<br> 활동 중 입니다.</div>
                    </div>
                </template>
                <div v-else class="alert_box">
                    <div class="textWrap" style="text-align:center; color:#888;">활동 중인 채팅방이 없습니다.</div>
                </div>
            </div>
            <Mypage_NoinfoBox v-if="isApply" />
            <img src="../assets/childern.png" class="kids">
        </div>
    </div>
</template>

<script>
import Mypage_NoinfoBox from "./Mypage_NoinfoBox.vue"
import { inject, ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { db } from '@/utils/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default {
    name: "MypageInfoBox",
    components: { Mypage_NoinfoBox },
    setup() {
        const isApply = inject('isApply')
        const isForm = inject('isForm')
        const formOpen = inject('formOpen')
        const authStore = useAuthStore()
        const chatRooms = ref([])

        onMounted(async () => {
            if (authStore.isLoggedIn) {
                const roomsSnap = await getDocs(collection(db, 'chatRooms'))
                const userRooms = []
                for (const roomDoc of roomsSnap.docs) {
                    const membersSnap = await getDocs(
                        query(
                            collection(db, 'chatRooms', roomDoc.id, 'members'),
                            where('userId', '==', authStore.userId)
                        )
                    )
                    if (!membersSnap.empty) {
                        userRooms.push({ id: roomDoc.id, ...roomDoc.data() })
                    }
                }
                chatRooms.value = userRooms
            }
        })

        return { isForm, formOpen, isApply, authStore, chatRooms }
    }
}
</script>

<style scoped>
.page { width: fit-content; height: 500px; margin: 20px auto; display: flex; }
.info { max-width: 220px; height: 500px; background:#b0d0ff; border-radius: 25px; display: flex; flex-direction: column; }
.profile { width: 120px; height: 120px; display: flex; background: #fff; flex-direction: column; justify-content: center; row-gap:15px; align-items: center; border-radius: 100%; margin: 10px auto; }
.profile i { font-size: 40px; height:40px; }
.name { font-weight: 900; text-align: center; }
.kids { position: relative; top: -50px; }
#chat_alert_box { text-align: center; font-weight: 900; display: flex; flex-direction: column; gap: 10px; top: 25px; }
.chat_alert { font-size: 15px; position: relative; }
.circle { width: 15px; height: 15px; background: #ff6d24ed; border-radius: 100%; }
.textWrap { text-align: left; font-size: 15px; width:calc(100% - 20px); }
.alert_box { box-sizing: border-box; max-width: 200px; height: 50px; padding: 5px 10px; margin:5px auto; font-size: 15px; display: flex; align-items: center; justify-content: space-between; gap: 0 10px; background:#ffffff; border-radius: 20px; color:#000; }

@media(min-width:577px) and (max-width:992px){
    .textWrap{ font-size:14px; }
    .page{ width:30%; }
    .info{ width: 100%; }
    #chat_alert_box{ width:100% }
    .alert_box{ width:90%; }
}
@media(max-width:576px){
    .page{ margin:0; width:100%; height:fit-content; }
    .info{ width:100%; max-width:100%; height: 100%; flex-direction: row; justify-content: space-between; overflow:hidden; border-radius: 25px; }
    #chat_alert_box{ height:200px; overflow-y: scroll; left:0; top:0; gap:0 5px; padding:10px; border-radius: 0 25px 25px 0; background:#ffe850; }
    #chat_alert_box::-webkit-scrollbar{ width:0px; }
    .chat_alert{ display:none; }
    .kids{ display:none; }
    .profile{ width:100px; height:100px; margin:50px auto; }
    .profile i{ padding:0; padding-bottom:24px; font-size:25px; }
    .name{ font-weight: 900; text-align: center; position: relative; top: -2px; font-size:12px; }
    .textWrap{ font-size:12px; }
}
</style>
