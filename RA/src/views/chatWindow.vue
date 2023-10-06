<template>
    <Chatwindow_Menubar/>
    <Chatwindow_ChatContent/>
     <Chatwindow_ChatInput/>     
        <div id="announcement">
            <div class="main_title1">공지사항</div>
            <div class="info_box">
                <div class="info1">오고싶은 사람은 와라</div>
                <div v-if="!isDel" @click="delOpen()" class="info2">30000원</div>
                <div v-if="isDel" @click="checkOpen()" class="delete_title">
                    삭제하기
                <i class="bi bi-trash"></i>
                </div> 
                <div  v-if="isCheck" class="check_del">
                    <div class="inform_delete">
                        공지사항 삭제
                    </div>
                    <div class="inform_detail_delete">
                        모든 사람이 볼 수 없게 됩니다.
                    </div>
                    <div class="delete_button">
                        <button class="notice_del_bt" value="아니오">아니오</button>
                        <button class="notice_del_bt" value="삭제">삭제</button>
                    </div>
                </div>
            </div>

            <div class="info_line"></div>
            <div class="chat_partner">채팅상대</div>
            <div class="info_box2">
                <div class="room_manager1">
                    <div class="icon4">
                        <i class="bi bi-award"></i>
                    </div>
                    <div class="name1">김선향</div>
                </div>
                <div class="name2">김선향</div>
                <div class="name3">김선향</div>
                <div class="name4">김선향</div>
                <div class="name5">김선향</div>
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

        <menu_modal v-if="isMenu"/>

        <div v-if="isExit" class="exit_modal">
            <div class="exit_title">
                <span>채팅방을 나가시겠습니까?</span>
            </div>
            <div class="warning_window">이 방이 사라지고, 참여자는<br>
            모두 퇴장하게 됩니다.<br>
            삭제 후에는 복귀할 수 없습니다.
            </div>
            <div class="button_wrap">
                <RouterLink to="/chatRoom"><button class="modal_bt" value="예">예</button></RouterLink>
                <button @click="exitOpen()" class="modal_bt" value="아니오">아니오</button>
            </div>
            
        </div>

       

        
        

        

</template>

<script>
import menu_modal from '../components/menu_modal.vue'
import Chatwindow_Menubar from '../components/Chatwindow_Menubar.vue'
import Chatwindow_ChatContent from '../components/Chatwindow_ChatContent.vue'
import Chatwindow_ChatInput from '../components/Chatwindow_ChatInput.vue'
import {ref, provide} from 'vue';
export  default{
    components:{
        menu_modal,Chatwindow_Menubar,Chatwindow_ChatContent,Chatwindow_ChatInput
    },
    setup(){
        const isBan = ref(false);

        const banOn = () => isBan.value = true;
        provide('banOn', banOn);

        const banOff = () => isBan.value = false;

        const isDel = ref(false);
        const delOpen = () => isDel.value = !isDel.value;

        const isMenu = ref(false);  
        const menuOpen = () => isMenu.value = !isMenu.value;

        const isExit = ref(false);
        const exitOpen = () => isExit.value = !isExit.value;

        const isCheck =ref(false);
        const checkOpen = () => isCheck.value = !isCheck.value;

        return {isBan, banOn, banOff, isMenu, menuOpen, isDel, delOpen,
            isExit, exitOpen, isCheck, checkOpen}
    }
}
</script>

<style scoped>
@import url(../assets/chatWindow.css);
</style>