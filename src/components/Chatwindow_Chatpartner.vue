<template>
<div class="partner_wrap">
    <div class="chat_partner">채팅상대</div>
    <div class="info_box2">
        <div v-for="member in chatStore.members" :key="member.id"
            :class="member.userId === chatStore.currentRoom?.masterId ? 'room_manager1' : ''">
            <div v-if="member.userId === chatStore.currentRoom?.masterId" class="icon4">
                <i class="bi bi-award"></i>
                <div class="name">{{ member.userName }}</div>
            </div>
            <div v-else class="name">{{ member.userName }}</div>
        </div>
        <div v-if="chatStore.members.length === 0" class="name" style="color:#888;">참여자 없음</div>
    </div>
</div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: 'Chatwindow_Chatpartner',
    setup() {
        const chatStore = inject('chatStore')
        return { chatStore }
    }
}
</script>

<style scoped>

.partner_wrap{
    width:150px;
    height:230px;
    background:#F4F4FA;
    margin-top:30px;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.chat_partner{
    text-align: center;
    width:130px;
    padding-top:10px;
    font-size:18px;
}

.info_box2{
    width:130px;
    max-height:290px;
    display:flex;
    flex-direction: column;
    background:#fff;
    text-align:center;
    overflow-y:scroll;
    font-size: 13px;
}

.room_manager1{
    display:flex;
    justify-content:center;
}

.icon4{
    display:flex;
    padding-right:11px;
}

.bi-award{
    right:3px;
}

@media (max-width:576px){
    .partner_wrap{
    width:150px;
    height:150px;
    background:#F4F4FA;
    margin-top:0px;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
}
</style>
