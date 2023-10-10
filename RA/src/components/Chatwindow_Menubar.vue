<template>
    <div class="header">
        <div class="chat_name">새싹반 유치원 채팅방
            <div class="icon">
                <i @click="menuOpen()" class="bi bi-list"></i>
                <i @click="exitOpen()" class="bi bi-door-open"></i>
            </div>
        </div>
    </div>


    <div v-if="isBan" class="ban_modal">
        <div class="top_bar">
            <span>강퇴관리</span>
            <i class="bi bi-chevron-compact-down"></i>
        </div>
        <div class="modal_content">
            <div class="content_title">
                정말 강퇴하시겠습니까?
            </div>
            <div class="content_detail">
                강퇴하시면 이 회원은<br>
                채팅방에 다시 들어올 수 없습니다.
            </div>
            <div class="button_wrap">
                <RouterLink to="/chatRoom"><button class="modal_bt" value="예">예</button></RouterLink>
                <button @click="banOff()" class="modal_bt" value="아니오">아니오</button>
            </div>
        </div>
    </div>

</template>

<script>
import { inject } from 'vue';
export default {
    name: "Chatwindow_Menubar",
    setup() {
        const isMenu = inject("isMenu");
        const menuOpen = inject('menuOpen');

        const isBan = inject('isBan')

        const isExit = inject('isExit');
        const exitOpen = inject('exitOpen');

        const banOff = () => isBan.value = false;

        return { isMenu, menuOpen, isBan, isExit, exitOpen, banOff }
    }

}
</script>

<style>
/* .header{
    width:800px;
    height:200px;
    border:1px solid black;
    margin:10px 30px 0px 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
} */
input[type="checkbox"]{cursor:pointer;}
.bi{cursor:pointer;}

.header {
    width: 1000px;
    height: 30px;
    border: none;
    /* position: absolute; */
    margin: 0 auto;
    top: 0;
    left: 10%;
    font-size: 18px;
    background-color: #F4F4FA;
    margin:30px auto;
}

.chat_name {
    padding: 2px 10px;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
}

.icon {
    /* padding:0 20px; */
    display: flex;
    column-gap: 25px;
    font-size: 20px;
    position: relative;
    top: 0px;
}

.ban_modal {
    position: fixed;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 300px;
    height: 260px;
    background: white;
    border: 1px solid black;
    z-index: 10;
}

.top_bar {
    box-sizing: border-box;
    border-bottom: 1px solid black;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 800;
}

.modal_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 210px;
    padding: 20px 0;
    box-sizing: border-box;
}

.content_title {
    font-size: 20px;
    font-weight: 800;
    text-align: center;
}

.content_detail {
    font-size: 18px;
    text-align: center;
}

.button_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.modal_bt {
    border: none;
    width: 110px;
    height: 40px;
    font-size: 18px;
    background: #D9D9D9;
}
</style>