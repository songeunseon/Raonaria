<template>
    <div class="make_room_modal">

        <div class="room_title">방개설하기</div>
        <i @click="makeRoomOpen()" class="bi bi-x-circle" style="cursor:pointer"></i>
        <div class="room_box">
            <div class="chat_name">
                <p>채팅방이름</p>
                <input v-model="roomName" type="text" placeholder="채팅방 이름 입력">
            </div>
            <div class="chat_intro">
                <p>채팅방 소개</p>
                <input v-model="roomDesc" type="text" placeholder="소개글 입력">
            </div>
        </div>
        <div class="done_button">
            <button @click='createRoom()' class="done_bt" value="완료">완료</button>
        </div>
        <div v-if="isAgainCheck" class="input_check">
            <span>입력창을 다시 확인해주세요</span>
            <div class="check_detail">입력창을 다 작성해야<br> 채팅방에 개설이 가능합니다.</div>
            <div class="check_button">
                <button @click="blankCheckClose()" class="check_bt" value="확인">확인</button>
            </div>
        </div>
    </div>
    <div @click="makeRoomOpen()"
                    style="position:fixed; left:0; top:0; width:100vw;
                    height:100vh; background:rgba(0,0,0,0.4);
                    z-index:10;">
    </div>
</template>

<script>
import { ref, inject } from 'vue';
import { useChatStore } from '@/stores/chat';
import { useAuthStore } from '@/stores/auth';

export default {
    name: 'makeRoom',
    setup() {
        const chatStore = useChatStore()
        const authStore = useAuthStore()
        const isMakeRoom = inject("isMakeRoom")
        const makeRoomOpen = inject('makeRoomOpen');

        const roomName = ref('')
        const roomDesc = ref('')
        const isAgainCheck = ref(false);

        const createRoom = async () => {
            if (!roomName.value.trim() || !roomDesc.value.trim()) {
                isAgainCheck.value = true;
                return;
            }
            if (!authStore.isLoggedIn) {
                alert('로그인 후 이용하세요');
                return;
            }
            try {
                await chatStore.createRoom(
                    roomName.value.trim(),
                    roomDesc.value.trim(),
                    authStore.userId,
                    authStore.userName
                )
                roomName.value = ''
                roomDesc.value = ''
                makeRoomOpen()
            } catch (err) {
                alert('방 생성 중 오류: ' + err.message)
            }
        }

        const blankCheckClose = () => isAgainCheck.value = false;

        return {
            isMakeRoom, roomName, roomDesc, isAgainCheck,
            createRoom, blankCheckClose, makeRoomOpen
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.make_room_modal {
    width: 250px;
    height: 330px;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    border-radius: 10px;
    overflow: hidden;
}

.room_title {
    width: 100%;
    height: 40px;
    background: #0d6efd;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    color: #fff;
}

.room_box {
    padding: 35px 50px;
}

.room_box p {
    text-align: center;
    padding-bottom: 5px;
}

.room_box input {
    width: 150px;
    height: 30px;
    border: 2px solid #0d6efd;
    background: white;
    outline: none;
    padding: 0 5px;
}

.bi-x-circle {
    position: absolute;
    top: 9px;
    left: 15px;
    color: #fff;
}

.chat_intro {
    padding-top: 10px;
}

.done_button {
    width: 250px;
    display: flex;
}

.done_bt {
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border:0;
    border-radius: 100px;
    background: #b0d0ff;
    color: #000;
    cursor: pointer;
}
.done_bt:hover{
    background: #0d6efd;
    color: #fff;
}

.input_check {
    width: 280px;
    height: 185px;
    text-align: center;
    background: white;
    border: 1px solid black;
    padding: 20px 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    z-index: 30;
}

.input_check span {
    font-size: 18px;
    font-weight: 800;
}

.check_detail {
    padding-top: 18px;
    font-size: 18px;
    text-align: center;
}

.check_button {
    margin: 20px 55px;
}

.check_bt {
    width: 110px;
    height: 40px;
    background: #d9d9d9;
    cursor: pointer;
}
</style>
