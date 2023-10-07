<template>
    <Chatwindow_Menubar/>
    <div class="chat_layout">
        <Chatwindow_ChatContent/>
        <div class="content_wrap">
              <Chatwindow_InfoExpress/>
              <Chatwindow_Chatpartner/>
        </div>
    </div>
</template>

<script>
import menu_modal from '../components/menu_modal.vue'
import Chatwindow_Menubar from '../components/Chatwindow_Menubar.vue'
import Chatwindow_ChatContent from '../components/Chatwindow_ChatContent.vue'
import Chatwindow_InfoExpress from '../components/Chatwindow_InfoExpress.vue'
import Chatwindow_Chatpartner from '../components/Chatwindow_Chatpartner.vue'

import {ref, provide} from 'vue';
export  default{
    components:{
        menu_modal,Chatwindow_Menubar,Chatwindow_ChatContent,Chatwindow_InfoExpress,
        Chatwindow_Chatpartner, 
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

<style>
@import url(../assets/chatWindow.css);
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Gothic+A1:wght@100&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100&display=swap');
*{font-family: 'Gamja Flower', cursive;}
.chat_layout{
    width:fit-content;
    margin:40px auto;
}
.content_wrap{
    width:1000px;
    height:fit-content;
}
</style>