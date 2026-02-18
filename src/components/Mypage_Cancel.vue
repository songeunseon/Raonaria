<template>
    <div v-if="isCancel" class="wrap">
        <div class="words">정말 신청을 취소하시겠습니까?</div>
        <div class="button_wrap">
            <button @click="confirmCancel()" class="check_bt">확인</button>
            <button @click='cancelOpen()' class="cancle_bt" value="취소">취소</button>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: 'Mypage_Cancel',
    setup() {
        const isCancel = inject('isCancel');
        const cancelOpen = inject('cancelOpen');
        const mypageStore = inject('mypageStore');
        const selectedApps = inject('selectedApps');

        const confirmCancel = async () => {
            try {
                for (const appId of selectedApps.value) {
                    await mypageStore.cancelApplication(appId);
                }
                alert('신청이 취소되었습니다');
                selectedApps.value = [];
                cancelOpen();
            } catch (err) {
                alert('취소 실패: ' + err.message);
            }
        }

        return { isCancel, cancelOpen, confirmCancel }
    }
}
</script>

<style scoped>
.wrap{
    width: 409px;
    height: 135px;
    border:1px solid black;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    font-size:20px;
    background:white;
    position:fixed;
    top:32%;
    left:68%;
    transform: translate(-50%);
    z-index:120;
    border-radius:10px;
}
.button_wrap{
    display:flex;
    gap:10px;
}

.check_bt{
    width:100px;
    height:37px;
    border:none;
    background-color:#7bb1ff99;
    font-size:20px;
    cursor:pointer;
    color:black;
    border-radius:10px;

}

.check_bt:hover{
    background:#0d6efd;
    color:white;
}


.cancle_bt{
    width:100px;
    height:37px;
    border:none;
    background-color:#7bb1ff99;
    color:black;
    border-radius:10px;

}

.cancle_bt:hover{
    background:#0d6efd;
    color:white;
}

@media(max-width:576px){
    .wrap{
        width:300px;
        height:135px;
        top:55%;
        left:52%;
    }
    .cancle_bt{
    width:90px;
    height:37px;
    border:none;
    background-color:#7bb1ff99;
    color:black;
    font-size:14px;
}

.cancle_bt:hover{
    background:#0d6efd;
    color:white;
}

.check_bt{
    width:90px;
    height:37px;
    border:none;
    background-color:#7bb1ff99;
    font-size:14px;
    cursor:pointer;
    color:black;

}
    .check_bt:hover{
    background:#0d6efd;
    color:white;
}

.words{
    font-size:16px;
}

}

</style>