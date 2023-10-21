<template>
    <TopMenu />
    <TopMenu_Login />
    <div id="chat">
        <div class="chat_box">
            <p class="chat_room">온라인 동창회</p>
            <div class="chat_add">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input type="text" class="search_input">
                </div>
                <i @click="makeRoomOpen()" class="bi bi-plus-circle" style="cursor: pointer;"></i>
            </div>
        </div>
    </div>
    <login_Alert v-if="isAlert" />
    <makeRoom v-if="isMakeRoom" />
    <Reunion_chatList />
</template>

<script>
import login_Alert from '../components/Reunion_loginAlert.vue';
import makeRoom from '../components/Reunion_makeRoom.vue'
import { ref, provide } from 'vue';
import TopMenu from '../components/TopMenu.vue'
import Reunion_chatList from '../components/Reunion_chatList.vue';
import TopMenu_Login from '../components/TopMenu_Login.vue';

export default {
    name: 'chatRoom',
    components: {
        login_Alert, makeRoom, TopMenu, Reunion_chatList, TopMenu_Login
    },

    setup() {
        const isAlert = ref(false);
        provide('isAlert', isAlert);
        const alertOpen = () => { isAlert.value = true; }

        const isMakeRoom = ref(false);
        const makeRoomOpen = () => { isMakeRoom.value = !isMakeRoom.value; }


        provide('isMakeRoom', isMakeRoom);
        provide('makeRoomOpen', makeRoomOpen)


        return {
            isAlert, alertOpen, makeRoomOpen, isMakeRoom,
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'SUITE-Regular';
}

#chat {
    width: 700px;
    margin: 20px auto;
}

.chat_box {
    margin: 50px 100px;
}

.chat_room {
    text-align: center;
    font-size: 30px;
    font-weight: 800;
}

.chat_add {
    /* padding-top: 45px; */
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat_add input {
    width: 440px;
    height: 32px;
    border: none;
    outline: none;
    border-bottom: 2px solid #0d6efd;
    /* border-radius: 5px; */
    padding:10px 0px 10px 30px;
}

.icon {
    margin: 20px auto;
    /* position: absolute; */
    /* top: 50px; */
    /* left: 0px; */
    font-size: 25px;
    display: flex;
    align-items: center;
}

.bi-search {
    position: absolute;
    /* left: 70px; */
    /* top: 1px; */
    width:20px;
    height:20px;
}

.search_input {
    margin: 0 auto;
}



.chat_add .bi-plus-circle {

    font-size: 28px;
}
</style>