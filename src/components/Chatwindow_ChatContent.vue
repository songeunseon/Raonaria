<template>
    <div class="chat_content_wrap">
        <div class="chat_wrap" ref="chatWrapRef">
            <div id="chat_subject">
                <div class="line1"></div>
                <div class="chat_info">{{ todayLabel }}</div>
            </div>
            <template v-if="chatStore.messages.length === 0">
                <div class="empty_msg">아직 메시지가 없습니다. 첫 메시지를 보내보세요!</div>
            </template>
            <div
                v-for="msg in chatStore.messages"
                :key="msg.id"
                class="basic_info"
                :class="{ myChat: msg.senderId === authStore.userId }"
            >
                <div :class="msg.senderId === chatStore.currentRoom?.masterId ? 'Participant1' : 'Participant'">
                    <i v-if="msg.senderId === chatStore.currentRoom?.masterId" class="bi bi-award"></i>
                    {{ msg.senderName }}
                </div>
                <div class="comment">{{ msg.text }}</div>
            </div>
        </div>
        <div class="write_wrap">
            <textarea
                v-model="newMessage"
                @keydown.enter.prevent="send"
                rows="1"
                cols="30"
                class="word_write"
                placeholder="메시지를 입력하세요"
            ></textarea>
            <button @click="send" class="text_output">Enter</button>
        </div>
    </div>
</template>

<script>
import { ref, inject, watch, nextTick, computed } from 'vue';

export default {
    name: "Chatwindow_ChatContent",
    setup() {
        const chatStore = inject('chatStore')
        const authStore = inject('authStore')
        const roomId = inject('roomId')

        const newMessage = ref('')
        const chatWrapRef = ref(null)

        const todayLabel = computed(() => {
            const now = new Date()
            return `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`
        })

        const send = async () => {
            if (!newMessage.value.trim() || !authStore.isLoggedIn) return
            const text = newMessage.value
            newMessage.value = ''
            try {
                await chatStore.sendMessage(roomId, text, authStore.userId, authStore.userName)
            } catch (err) {
                console.error('메시지 전송 실패:', err)
                newMessage.value = text
            }
        }

        // 새 메시지 시 자동 스크롤
        watch(() => chatStore.messages.length, async () => {
            await nextTick()
            if (chatWrapRef.value) {
                chatWrapRef.value.scrollTop = chatWrapRef.value.scrollHeight
            }
        })

        return { chatStore, authStore, newMessage, chatWrapRef, todayLabel, send }
    }
}
</script>

<style scoped>

.chat_content_wrap{
    width:fit-content;
    height:fit-content;
}

.chat_wrap {
    width: 700px;
    height: 500px;
    overflow-y: scroll;
    background:#e1ebf9;
    display:flex;
    flex-direction:column;
}

#chat_subject {
    width: 670px;
    margin: 10px auto;
    padding-left: 30px;
    position: relative;
}

.line1 {
    width: 100%;
    top:20px;
    border-bottom: 2px dashed #0d6efd;
    height: 1px;
    position: relative;
}

.chat_info {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    top: 0px;
    width: 150px;
    height: 40px;
    background:#fff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid #fff;
    font-size: 11px;
    color: black;
}

.basic_info {
    font-size: 18px;
    border: none;
    padding: 10px 20px;
    background:white;
    border-radius:10px;
    margin:10px 73px;
    width:fit-content;
    align-self:start;
    max-width: 60%;
    word-break: break-word;
}

.myChat{
    display:flex;
    align-self:end;
    flex-direction:column;
    align-items:end;
    position:relative;
    right:-30px;
}

.Participant{
    font-weight:900;
}

.Participant1{
    font-weight:900;
}

.bi-award {
    font-size: 20px;
}

.comment {
    font-weight: 500;
}

.empty_msg {
    text-align: center;
    color: #888;
    padding: 50px 20px;
    font-size: 16px;
}

.write_wrap{
    width: 690px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    column-gap:10px;
    margin-top:10px;
}

.text_output{
    width:90px;
    height:40px;
    line-height: 30px;
    font-size:20px;
    color:black;
    outline:none;
    border:2px solid #0d6efd;
    background:#fff;
    border-radius: 100px;
    cursor: pointer;
}
.text_output:hover{
    background: #0d6efd;
    color: #fff;
}

.word_write{
    width:590px;
    height:48px;
    padding:13px 15px;
    flex-grow:1;
    outline:none;
    border: 0;
    border-bottom:2px solid #0d6efd;
    resize: none;
    overflow:hidden;
}
@media (max-width:576px){
    .chat_content_wrap{
    width:fit-content;
    height:fit-content;
}

.chat_wrap {
    width: 400px;
    height: 500px;
    overflow-y: scroll;
    background:#e1ebf9;
    display:flex;
    flex-direction:column;
}

#chat_subject {
    width: 400px;
    margin: 10px auto;
    padding-left: 30px;
    position: relative;
}

.basic_info {
    font-size: 18px;
    border: none;
    padding: 10px 20px;
    background:white;
    border-radius:10px;
    margin:10px 73px;
    width:fit-content;
    align-self:start;
}

.write_wrap{
    width: 400px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    column-gap:10px;
    margin-top:10px;
}

.word_write{
    width:400px;
    height:48px;
    padding:13px 15px;
    flex-grow:1;
    outline:none;
    border: 0;
    border-bottom:2px solid #0d6efd;
    resize: none;
    overflow:hidden;
}
}
</style>
