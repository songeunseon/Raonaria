<template>
    <div class="ban_modal">
        <div class="modal_content">
            <div class="content_title">
                정말 강퇴하시겠습니까?
            </div>
            <div class="content_detail">
                강퇴하시면 이 회원은<br>
                채팅방에 다시 들어올 수 없습니다.
            </div>
            <div class="button_wrap">
                <button @click="confirmKick()" class="modal_bt" value="예">예</button>
                <button @click="banOff()" class="modal_bt" value="아니오">아니오</button>
            </div>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue'

export default {
    name: "kickOutModal",
    setup() {
        const isBan = inject('isBan');
        const kickTargets = inject('kickTargets');
        const roomId = inject('roomId');
        const chatStore = inject('chatStore');

        const banOff = () => isBan.value = false;

        const confirmKick = async () => {
            try {
                for (const memberDocId of kickTargets.value) {
                    await chatStore.kickMember(roomId, memberDocId);
                }
                kickTargets.value = [];
                isBan.value = false;
                alert('강퇴 처리되었습니다');
            } catch (err) {
                alert('강퇴 오류: ' + err.message);
            }
        }

        return { banOff, confirmKick }
    }
}
</script>
<style>
.ban_modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 227px;
    background: white;
    border: 2px solid #0d6efd;
    border-radius:10px;
    z-index: 10;
}

.modal_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 230px;
    padding: 20px 0;
    box-sizing: border-box;
}

.content_title {
    font-size: 20px;
    font-weight: 800;
    text-align: center;
}

.content_detail {
    font-size: 18px;
    text-align: center;
}

.button_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.modal_bt {
    border: none;
    width: 110px;
    height: 40px;
    font-size: 18px;
    background: #0d6efd;
    color:#fff;
    cursor: pointer;
}
</style>
