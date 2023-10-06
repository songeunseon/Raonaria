<template>
 <div id="announcement">
            <div class="main_title1">공지사항</div>
            <div class="info_box">
                <div class="info1">오고싶은 사람은 와라</div>
                <div v-if="!isDel" @click="delOpen()" class="info2">30000원</div>
                <div v-if="isDel" @click="checkOpen()" class="delete_title">
                    삭제하기
                <i class="bi bi-trash"></i>
                </div> 
                <div  v-if="isCheck" class="check_del">
                    <div class="inform_delete">
                        공지사항 삭제
                    </div>
                    <div class="inform_detail_delete">
                        모든 사람이 볼 수 없게 됩니다.
                    </div>
                    <div class="delete_button">
                        <button class="notice_del_bt" value="아니오">아니오</button>
                        <button class="notice_del_bt" value="삭제">삭제</button>
                    </div>
                </div>
            </div>
        </div> 
            
            
        
    
</template>

<script>
import chatWindowVue from '../views/chatWindow.vue';

</script>

<style>

</style>