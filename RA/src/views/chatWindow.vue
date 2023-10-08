<template>
    <Chatwindow_Menubar/>
    <div class="chat_layout">
        <Chatwindow_ChatContent/>
        <div class="content_wrap">
            <Chatwindow_InfoExpress/>
            <Chatwindow_Chatpartner/>
        </div>
    </div>

    <menu_modal v-if="isMenu"/>
    <Exit_Modal v-if="isExit"/>

</template>

<script>
import Chatwindow_Menubar from '../components/Chatwindow_Menubar.vue'
import Chatwindow_ChatContent from '../components/Chatwindow_ChatContent.vue'
import Chatwindow_InfoExpress from '../components/Chatwindow_InfoExpress.vue'
import Chatwindow_Chatpartner from '../components/Chatwindow_Chatpartner.vue'
import menu_modal from '../components/menu_modal.vue'
import Exit_Modal from '../components/Exit_Modal.vue'


import {ref, provide} from 'vue';
export  default{
    components:{
        menu_modal,Chatwindow_Menubar,Chatwindow_ChatContent,Chatwindow_InfoExpress,
        Chatwindow_Chatpartner, Exit_Modal
    },
    setup(){
        const isBan = ref(false);
        provide('isBan', isBan)

        const banOn = () => isBan.value = true;
        provide('banOn', banOn);

        const banOff = () => isBan.value = false;
        provide('banoff',banOff);

        const isDel = ref(false);
        const delOpen = () => isDel.value = !isDel.value;

        const isMenu = ref(false);
        provide('isMenu', isMenu);

        const menuOpen = () => isMenu.value = !isMenu.value;
        provide('menuOpen', menuOpen)

        const isExit = ref(false);
        provide('isExit', isExit);
        const exitOpen = () => isExit.value = !isExit.value;
        provide('exitOpen', exitOpen);

        const isCheck =ref(false);
        const checkOpen = () => isCheck.value = !isCheck.value;

        return {isBan, banOn, banOff, isMenu, menuOpen, isDel, delOpen,
            isExit, exitOpen, isCheck, checkOpen}
    }
}
</script>

<style scoped>
body::-webkit-scrollbar-vertical{
  display: none;
  }
@import url(../assets/chatWindow.css);
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Gothic+A1:wght@100&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100&display=swap');
*{font-family: 'Gamja Flower', cursive;}
.chat_layout{
    display:flex;
    justify-content: space-between;
    width:1000px;
    margin:40px auto;
}
.content_wrap{
    height:fit-content;
}
</style>