<template>
    <div class="wrap">
        <TopMenu />
        <TopMenu_Login/>
        <Chatwindow_Menubar />
        <div class="chat_layout">
            <Chatwindow_ChatContent />
            <div class="content_wrap">
                <Chatwindow_InfoExpress />
                <Chatwindow_Chatpartner />
            </div>
        </div>
        <menu_modal v-show="isMenu" />
        <Exit_Modal v-if="isExit" />
    </div>
</template>

<script>
import TopMenu_Login from '../components/TopMenu_Login.vue';
import TopMenu from '../components/TopMenu.vue'
import Chatwindow_Menubar from '../components/Chatwindow_Menubar.vue'
import Chatwindow_ChatContent from '../components/Chatwindow_ChatContent.vue'
import Chatwindow_InfoExpress from '../components/Chatwindow_InfoExpress.vue'
import Chatwindow_Chatpartner from '../components/Chatwindow_Chatpartner.vue'
import menu_modal from '../components/menu_modal.vue'
import Exit_Modal from '../components/Exit_Modal.vue'
import { ref, provide } from 'vue';
export default {
    components: {
        menu_modal, Chatwindow_Menubar, Chatwindow_ChatContent, Chatwindow_InfoExpress,
        Chatwindow_Chatpartner, Exit_Modal,TopMenu_Login,TopMenu
    },
    setup() {
        const banOff = () => isBan.value = false;
        provide('banoff', banOff);

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

        const isCheck = ref(false);
        const checkOpen = () => isCheck.value = !isCheck.value;

        return {
          isMenu, menuOpen, isDel, delOpen,
            isExit, exitOpen, isCheck, checkOpen
        }

    }
}
</script>

<style scoped>
@import url(../assets/chatWindow.css);
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Noto+Sans+KR:wght@100;300&family=Roboto+Slab:wght@300&display=swap');

font-family:Noto Sans KR,
sans-serif font-family:Roboto Slab,
serif * {
    font-family: 'Gamja Flower', cursive;
}

body{
    overflow:hidden;
}

.chat_layout {
    display: flex;
    justify-content: center;
    column-gap: 10px;
    width: 900px;
    margin: 20px auto;

}

.content_wrap {
    height: fit-content;
}
@media (max-width:490px){
    .content_wrap {
    display: flex;
    width: 400px;
    column-gap: 20px;
    justify-content: center;
    margin: 10px 0;
}
.chat_layout {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    column-gap: 10px;
    width: 400px;
    margin: 20px auto;

}
}
</style>