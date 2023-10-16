<template>
    <div class="ban_modal">
        <div   @click="banOff()" class="top_bar">
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
                <button @click="banOff()" class="modal_bt" value="예">예</button>
                <button @click="banOff()"  class="modal_bt" value="아니오">아니오</button>
            </div>
        </div>
    </div>
</template>
<script>
import {inject} from 'vue'
export default{
    name:"kickOut",
    setup(){
        const isBan = inject('isBan');

        const banOff = () => isBan.value = false;

        return{
            banOff
        }
    }
}
</script>
<style>
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