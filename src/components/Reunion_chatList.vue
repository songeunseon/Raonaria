<template>
    <div id="chat_info">
        <div v-if="chatStore.rooms.length === 0" class="empty_rooms">
            개설된 채팅방이 없습니다.
        </div>
        <div class="list" v-for="room in chatStore.rooms" :key="room.id">
            <div class="title">
                <div class="master">방장 : {{ room.masterName }}</div>
                <RouterLink :to="'/chat-window/' + room.id">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
            <div class="title">
                <div class="word">{{ room.name }}</div>
            </div>
            <div class="room_desc" v-if="room.description">{{ room.description }}</div>
        </div>
    </div>
</template>

<script setup>
import { useChatStore } from '@/stores/chat';
import { onMounted, onUnmounted } from 'vue';

const chatStore = useChatStore();

onMounted(() => {
    chatStore.subscribeRooms();
});

onUnmounted(() => {
    chatStore.unsubscribeRooms();
});
</script>


<style scoped>
#chat_info {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    width: 800px;
    margin-bottom:150px;
}

.empty_rooms {
    width: 100%;
    text-align: center;
    color: #888;
    padding: 50px 0;
    font-size: 18px;
}

.list {
    background:white;
    width: 250px;
    height: 200px;
    border: 2px solid #0d6efd99;
    display:flex;
    flex-direction: column; justify-content: space-between;
    border-radius: 8px;
    padding:10px;
}

.title{
    display:flex; align-items: center;
    justify-content: space-between;
}

.master{
    font-size:20px;
}

.word {
    position: relative;
    font-weight: 700;
    padding-bottom:13px;
    font-size:18px;
}

.room_desc {
    font-size: 13px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.position {
    width: 54px;
    height: 53px;
    border-radius: 50px;
    border: 2px solid #0d6efd;
    background: white;
    cursor: pointer;
}

.position:hover {
    background: #0d6efd;
    color: white;
}
@media (max-width:576px){
    #chat_info {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    width: 400px;
    margin-bottom:150px;
    justify-content: center;
}

.list {
    background:white;
    width: 150px;
    height: 150px;
    border: 2px solid #0d6efd99;
    display:flex;
    flex-direction: column; justify-content: space-between;
    border-radius: 8px;
    padding:10px;
}

.master{
    font-size:10px;
}

.word {
    position: relative;
    font-weight: 700;
    padding-bottom:13px;
    font-size:15px;
}

.room_desc { display: none; }
}
</style>
