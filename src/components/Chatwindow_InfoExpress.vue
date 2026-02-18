<template>
    <div id="announcement">
            <div class="main_title1">공지사항</div>
            <div class="info_box">
                <template v-if="chatStore.roomNotices.length > 0">
                    <span
                        v-for="notice in chatStore.roomNotices"
                        :key="notice.id"
                        class="info"
                        @click="selectNotice(notice)"
                    >{{ notice.content }}</span>
                </template>
                <span v-else class="info" style="color:#888;">공지 없음</span>

                <div v-if="isDel && selectedNotice" @click="checkOpen()" class="delete_title">
                    삭제하기
                    <i class="bi bi-trash"></i>
                </div>
                <div v-if="isCheck" class="check_del">
                    <div class="inform_delete">
                        공지사항 삭제
                    </div>
                    <div class="inform_detail_delete">
                        모든 사람이 볼 수 없게 됩니다.
                    </div>
                    <div class="delete_button">
                        <button @click="delCancel()" class="notice_del_bt" value="아니오">아니오</button>
                        <button @click="eraseNotice()" class="notice_del_bt" value="삭제">삭제</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { ref, inject } from 'vue';

export default {
    name: 'Chatwindow_InfoExpress',
    setup() {
        const chatStore = inject('chatStore')
        const roomId = inject('roomId')

        const isDel = ref(false);
        const selectedNotice = ref(null);

        const isCheck = ref(false);
        const checkOpen = () => isCheck.value = !isCheck.value;

        const selectNotice = (notice) => {
            selectedNotice.value = notice;
            isDel.value = true;
        }

        const delCancel = () => {
            isCheck.value = false;
            isDel.value = false;
            selectedNotice.value = null;
        }

        const eraseNotice = async () => {
            if (selectedNotice.value) {
                await chatStore.deleteRoomNotice(roomId, selectedNotice.value.id)
                isCheck.value = false;
                isDel.value = false;
                selectedNotice.value = null;
            }
        }

        return { chatStore, isDel, isCheck, checkOpen, delCancel, eraseNotice, selectedNotice, selectNotice }
    }
}
</script>

<style>

#announcement{
    width:150px;
    height:300px;
    border:1px solid #F4F4FA;
    background: #F4F4FA;
    border-radius: 10px;
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main_title1{
    text-align:center;
    margin:10px 0px 2px 0px;
    font-size:18px;
}

.info_box{
    width:130px;
    max-height:240px;
    background:white;
    overflow-y: scroll;
    text-align:center;
    display:flex;
    flex-direction: column;
    align-items:center;
    font-size: 13px;
}

.info{
    cursor: pointer;
}

.delete_title{
    display:flex;
    justify-content: center;
    cursor: pointer;
}

.check_del{
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border:1px solid black;
    border-radius: 10px;
    padding:10px;
}

.delete_button{
    width:100%;
    display:flex;
    justify-content: center;
    gap:15px;
}

.notice_del_bt{
    padding:0 5px;
    border:none;
    border-radius: 5px;
    background:#d9d9d9;
    cursor: pointer;
}
@media (max-width:576px){
    #announcement{
    width:150px;
    height:150px;
}
.info_box{
    max-height:100px;
}
}
</style>
