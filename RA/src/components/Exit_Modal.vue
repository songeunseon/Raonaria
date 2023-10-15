<template>
    <div v-if="isExit" class="exit_modal">
        <div class="exit_title">
            <!-- <i @click="exitOpen()" class="bi bi-x-circle"></i> -->
            <span class="ask">채팅방을 나가시겠어요?</span>
        </div>
        <div class="warning_window">이 방이 사라지고, 참여자는
            모두 퇴장하게<br> 됩니다.
            삭제 후에는 복귀할 수 없습니다.
        </div>
        <div class="button_wrap">
            <button @click="exitOpen()" class="modal_bt" value="예">취소</button>
            <RouterLink to="/ReunionView">
                <button @click="exitOpen()" class="modal_bt" value="아니오">나가기</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import {inject} from 'vue'
export default{
    name: 'Exit_Modal',
    setup(){
        const isExit = inject('isExit')
        const exitOpen = inject('exitOpen')

        return{isExit, exitOpen}
    }
}
</script>

<style scoped>

.exit_modal{
    position:fixed;
    top:10%;
    left:50%;
    transform:translate(-50%);
    width:330px;
    padding:25px 0;
    border-radius: 10px;;
    text-align:center;
    box-shadow:4px 4px 10px 1px rgba(0,0,0,0.2);
    background:white;
    display:flex;
    gap:10px;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
}
.bi-x-circle{
    position:absolute;
    left:20px;}

.ask{ font-weight:900;}

.button_wrap{
    display:flex;
    column-gap: 15px;
    justify-content: center;
}
.button_wrap button{
    border-radius: 10px;
    font-weight:900;
    padding:5px 10px;
}

.button_wrap button{
    background:white;
    border:1px solid #aaa;
}
.button_wrap a button{
    background:#545458;
    border:none;
    color:white;
}

</style>