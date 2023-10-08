<template>
    <div v-if="isExit" class="exit_modal">
       
        <div class="exit_title">
            <i @click="exitOpen()" class="bi bi-x-circle"></i>
            <span>채팅방을 나가시겠습니까?</span>
        </div>
        <div class="warning_window">이 방이 사라지고, 참여자는<br>
            모두 퇴장하게 됩니다.<br>
            삭제 후에는 복귀할 수 없습니다.
        </div>
        <div class="button_wrap">
            <RouterLink to="/ReunionView"><button class="modal_bt" value="예">예</button></RouterLink>
            <button @click="exitOpen()" class="modal_bt" value="아니오">아니오</button>
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

        return{isExit, exitOpen, isCancle,CancleOpen}
    }
}
</script>

<style scoped>

.exit_modal{
    text-align:center;
}
.bi-x-circle{
    position:absolute;
    left:20px;}
</style>