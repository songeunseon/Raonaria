<template>
    <div class="header">
        <div class="chat_name">
            <router-link to="/Reunion"><i class="bi bi-arrow-left-circle"></i></router-link>
            {{ chatStore.currentRoom?.name || '채팅방' }}
            <div class="icon">
                <i @click="menuOpen()" class="bi bi-list"></i>
                <i @click="exitOpen()" class="bi bi-door-open"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';
import { useChatStore } from '@/stores/chat';

export default {
    name: "Chatwindow_Menubar",
    setup() {
        const chatStore = useChatStore()
        const isMenu = inject("isMenu");
        const menuOpen = inject('menuOpen');
        const isExit = inject('isExit');
        const exitOpen = inject('exitOpen');

        return { chatStore, isMenu, menuOpen, isExit, exitOpen }
    }
}
</script>

<style scoped>
a{color:black;}
input[type="checkbox"]{cursor:pointer;}
.bi{cursor:pointer; color: #fff;}

.header {
    width: 1000px;
    height: 60px;
    border: none;
    margin: 0 auto;
    font-size: 18px;
    background-color: #0d6efd;
    border-radius: 100px;
    margin:30px auto;
    color: #fff;
}

.chat_name {
    font-weight: 800;
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:100%;
    padding:0 10px;
}

.bi{font-size:30px;}

.icon {
    display: flex;
    justify-content:right;
    column-gap: 25px;
    font-size: 20px;
    position: relative;
    font-size:30px;
    color:BLACK;
}
@media (max-width:576px){
    .header {
    width: 400px;
    height: 60px;
    border: none;
    margin: 0 auto;
    font-size: 18px;
    background-color: #0d6efd;
    border-radius: 100px;
    margin:30px auto;
    color: #fff;
}
}
</style>
