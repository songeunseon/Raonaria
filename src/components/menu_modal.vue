<template>
    <div class="menu_modal slideOut">
        <div class="menu">
            <i @click="menuOpen()" class="bi bi-chevron-left"></i>
            <div class="menu_bar">
                <span>채팅방 관리</span>
            </div>
            <div @click="toggleContent" class="title_change">
                <i @click="toggleContent2" class="bi bi-chevron-down"></i>
                정보변경
            </div>
            <div class="infoChange">
                <div class="title_head">
                    <i @click="closeContent" class="bi bi-arrow-left-circle"></i>
                    <div class="title">정보변경</div>
                </div>
                <div class="write_zone">
                    <input v-model="editName" type="text" class="chat_name" placeholder="유치원 이름">
                    <textarea v-model="editDesc" rows="5" cols="40" class="room_intro" placeholder="채팅방 소개"></textarea>
                    <button @click="saveRoomInfo" class="save">저장</button>
                </div>
            </div>
        </div>
        <div class="menu">
            <div @click="toggleContent" class="title_change">
                <i @click="toggleContent2" class="bi bi-chevron-down"></i>
                <span @click="toggleContent2">공지사항 작성하기</span>
            </div>
            <div class="infoChange">
                <div class="title_head">
                    <i @click="closeContent" class="bi bi-arrow-left-circle"></i>
                    <div class="title">공지사항 관리</div>
                </div>
                <div class="write_zone">
                    <textarea v-model="noticeContent" rows="5" cols="40" class="room_intro"
                    placeholder="올리고 싶은 공지사항을 작성하세요."></textarea>
                    <button @click="saveNotice" class="save">저장</button>
                </div>
            </div>
        </div>
        <div class="menu">
            <div @click="toggleContent" class="title_change">
                <i @click="toggleContent2" class="bi bi-chevron-down"></i>
                <span @click="toggleContent2">강퇴관리</span>
            </div>
            <div class="infoChange">
            <div class="title_head">
                <i @click="closeContent" class="bi bi-arrow-left-circle"></i>
                <div class="title">강퇴 관리</div>
            </div>
            <div v-for="member in nonMasterMembers" :key="member.id" class="user_list">
                <div class="user_name">{{ member.userName }}</div>
                <input class="user_check" type="checkbox" v-model="kickTargets" :value="member.id">
            </div>
            <div v-if="nonMasterMembers.length === 0" class="user_list">
                <div class="user_name" style="color:#888;">강퇴할 멤버가 없습니다</div>
            </div>
            <button @click="handleKick" class="save">강퇴하기</button>
        </div>
        </div>
    </div>
</template>

<script>
import { inject, watch, onMounted, ref, computed } from 'vue';
import { useChatStore } from '@/stores/chat';

export default {
    name: 'menu_modal',
    setup() {
        const isMenu = inject('isMenu');
        const menuOpen = inject('menuOpen');
        const roomId = inject('roomId');
        const chatStore = useChatStore();

        const editName = ref('');
        const editDesc = ref('');
        const noticeContent = ref('');
        const kickTargets = ref([]);

        const nonMasterMembers = computed(() => {
            return chatStore.members.filter(m => m.userId !== chatStore.currentRoom?.masterId)
        });

        // 채팅방 정보가 로드되면 이름/소개 채우기
        watch(() => chatStore.currentRoom, (room) => {
            if (room) {
                editName.value = room.name || '';
                editDesc.value = room.description || '';
            }
        }, { immediate: true });

        onMounted(() => {
            const menu_modal = document.querySelector('.menu_modal');
            watch(isMenu, () => {
                menu_modal.classList.toggle('slideIn');
                menu_modal.classList.toggle('slideOut');
            })
        })

        const toggleContent = (event) => {
            const t = event.target.nextSibling;
            if (t) t.classList.toggle('show');
        }
        const toggleContent2 = (event) => {
            const t = event.target.parentNode.nextSibling;
            if (t) t.classList.toggle('show');
        }
        const closeContent = (event) => {
            const t = event.target.parentNode.parentNode;
            t.classList.remove('show');
        }

        const saveRoomInfo = async () => {
            if (!editName.value.trim()) return;
            await chatStore.updateRoomInfo(roomId, {
                name: editName.value.trim(),
                description: editDesc.value.trim()
            });
            alert('저장되었습니다');
        }

        const saveNotice = async () => {
            if (!noticeContent.value.trim()) return;
            await chatStore.addRoomNotice(roomId, noticeContent.value.trim());
            noticeContent.value = '';
            alert('공지사항이 등록되었습니다');
        }

        const handleKick = async () => {
            if (kickTargets.value.length === 0) return;
            if (!confirm('선택한 멤버를 강퇴하시겠습니까?')) return;
            for (const memberDocId of kickTargets.value) {
                await chatStore.kickMember(roomId, memberDocId);
            }
            kickTargets.value = [];
            alert('강퇴 처리되었습니다');
        }

        return {
            isMenu, menuOpen, toggleContent, toggleContent2, closeContent,
            editName, editDesc, noticeContent, kickTargets,
            nonMasterMembers, saveRoomInfo, saveNotice, handleKick
        };
    }
}
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

.menu_modal {
    position: absolute;
    top: 230px;
    left: 61%;
    width: 325px;
    height: fit-content;
    background: white;
    border: 1px solid black;
}

.menu {
    width: 325px;
    height: fit-content;
}

.bi-chevron-left {
    position: absolute;
    left: 15px;
    top: 10px;
    cursor: pointer;
}

.bi-chevron-down {
    position: relative;
    left: 280px;
    top: 0px;
}

.menu_bar {
    width: 325px;
    border-bottom: 1px solid black;
    padding: 10px 0;
}

.menu_bar span {
    margin-left: 125px;
    font-weight: 800;
}

.title_change {
    padding: 15px 10px;
    font-size: 15px;
    text-align: left;
    border-bottom: 1px solid black;
    cursor:pointer;
}

.slideIn {
    animation: slideIn 0.5s ease-in-out forwards;
}

.slideOut {
    animation: slideOut 0.5s ease-in-out forwards;
}

@keyframes slideIn {
    0% { opacity: 0; display: none; }
    100% { opacity: 1; display: block; }
}

@keyframes slideOut {
    0% { opacity: 1; display: block; }
    100% { opacity: 0; display: none; }
}

.save {
    width:100%; height:40px;
    position:relative;
    margin:0;
    background:#eb6c68;
    color:white;
    border: none;
    cursor: pointer;
}

.infoChange{
    position:relative;
    left:-1px;
    height:0px;
    overflow:hidden;
    background:white;
}
.title_head{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:10px 10px;
    font-size:20px;
}
.title_head .bi{
    position:absolute;
    left:10px;
}
textarea{
    resize:none;
}
.write_zone input, .write_zone textarea{
    margin:0px auto;
    width:100%;
    border-left:none;
    border-right:none;
    padding:5px;
}
.write_zone textarea{ height:200px;}
.user_list{
    display:flex;
    justify-content:space-around;
    border-top: 1px solid black;
    padding:5px 0;
}

.bi-arrow-left-circle{
    cursor:pointer;
}

.show{
    height:fit-content;
    border:1px solid black;
    border-top:transparent;
}
</style>
