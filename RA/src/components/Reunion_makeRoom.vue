<template>
    <div class="make_room_modal">

        <div class="room_title">방개설하기</div>
        <i @click="makeRoomOpen()" class="bi bi-x-circle" style="cursor:pointer"></i>
        <div class="room_box">
            <div class="chat_name">
                <p>채팅방이름</p>
                <input id="name" type="text">
            </div>
            <div class="chat_intro">
                <p>채팅방 소개</p>
                <input id="intro" type="text">
            </div>
        </div>
        <div class="done_button">
            <button @click='blankCheck()' class="done_bt" value="완료">완료</button>
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
                    style="position:fixed;width:100vw; top:0;
                    height:100vh; opacity:1; background:rgba(0,0,0,0.4);
                    z-index:10;">
    </div>
</template>

<script>
import { ref, inject, onMounted } from 'vue';
export default {
    name: 'makeRoom',
    setup() {
        const isMakeRoom = inject("isMakeRoom")
        const done = () => isMakeRoom.value = false;

        const isAgainCheck = ref(false);

        const blankCheck = () => {
            const name = document.getElementById('name');
            const intro = document.getElementById('intro');
            if (name.value == '' || intro.value == '') {
                isAgainCheck.value = true;
            } else {
                isAgainCheck.value = false;
            }
        }

        const blankCheckClose = () => isAgainCheck.value = false;

        const makeRoomOpen = inject('makeRoomOpen');



        return {
            isMakeRoom, done, isAgainCheck, blankCheck, blankCheckClose, makeRoomOpen
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
    height: 20px;
    background: #d9d9d9;
    border: none;

}

.bi-x-circle {
    position: absolute;
    top: 9px;
    left: 15px;
    color: #fff;
}


#intro {
    width: 150px;
    height: 30px;
    outline: none;
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
}
.done_bt:hover{
    background: #0d6efd;
    color: #fff;
    
}

#name {
    width: 150px;
    height: 30px;
    margin-bottom: 20px;
    border: 2px solid #0d6efd;
    background: white;
    outline: none;
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
}

.chat_intro {
    padding-top: 10px;
    border-bottom: none;

}

#intro {
    border: 2px solid #0d6efd;
    background: white;

}

/* F6E6E6 */
</style>