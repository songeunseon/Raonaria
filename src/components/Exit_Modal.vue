<template>
    <div v-if="isExit" class="exit_modal">
        <div class="exit_title">
            <span class="ask">채팅방을 나가시겠어요?</span>
        </div>
        <div class="warning_window">
            <template v-if="isMaster">
                이 방이 사라지고, 참여자는 모두 퇴장하게<br> 됩니다.
                삭제 후에는 복귀할 수 없습니다.
            </template>
            <template v-else>
                채팅방에서 퇴장합니다.
            </template>
        </div>
        <div class="button_wrap">
            <button @click="exitOpen()" class="modal_bt" value="예">취소</button>
            <button @click="handleLeave()" class="modal_bt" value="아니오">나가기</button>
        </div>
    </div>
</template>

<script>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useChatStore } from '@/stores/chat'
import { useAuthStore } from '@/stores/auth'

export default {
    name: 'Exit_Modal',
    setup() {
        const isExit = inject('isExit')
        const exitOpen = inject('exitOpen')
        const roomId = inject('roomId')
        const router = useRouter()
        const chatStore = useChatStore()
        const authStore = useAuthStore()

        const isMaster = computed(() => {
            return chatStore.currentRoom?.masterId === authStore.userId
        })

        const handleLeave = async () => {
            try {
                if (isMaster.value) {
                    await chatStore.deleteRoom(roomId)
                } else {
                    await chatStore.leaveRoom(roomId, authStore.userId)
                }
                exitOpen()
                router.push('/Reunion')
            } catch (err) {
                alert('오류: ' + err.message)
            }
        }

        return { isExit, exitOpen, isMaster, handleLeave }
    }
}
</script>

<style scoped>

.exit_modal{
    position:fixed;
    top:10%;
    left:50%;
    transform:translate(-50%);
    width:330px;
    padding:25px 0;
    text-align:center;
    box-shadow:4px 4px 10px 1px rgba(0,0,0,0.2);
    background:white;
    display:flex;
    gap:10px;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    z-index: 50;
}

.ask{ font-weight:900;}

.button_wrap{
    display:flex;
    column-gap: 15px;
    justify-content: center;
}
.button_wrap button{
    font-weight:900;
    padding:5px 10px;
    background:#f28683;
    border:2px solid #f28683;
    color:black;
    border-radius:10px;
    cursor: pointer;
}

.button_wrap button:hover{
    background:#f35b56;
    border:2px solid #f35b56;
    color:#fff;
}
</style>
