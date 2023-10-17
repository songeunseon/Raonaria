<template>
    <div id="announcement">
            <div class="main_title1">공지사항</div>
            <div class="info_box">
                    <span class="info">오고싶은 사람은 와라</span>
                    <span v-if="!isDel" @click="delOpen()" class="info">30000원</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
                    <span class="info">회식때 고기먹자</span>
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
                        <button  @click="delCancel()" class="notice_del_bt" value="아니오">아니오</button>
                        <button  v-on:click="eraseNotice()" class="notice_del_bt" value="삭제">삭제</button>
                    </div>
                </div>
            </div>
    </div> 
</template>

<script>
import chatWindowVue from '../views/chatWindow.vue';
import {ref, onMounted} from 'vue';
export default{
    name: 'Chatwindow_InfoExpress',
    setup(){
        const isDel = ref(false);
        const delOpen = () => isDel.value = !isDel.value;

        const isCheck =ref(false);
        const checkOpen = () => isCheck.value = !isCheck.value;

        const delCancel = () => {
            isCheck.value = !isCheck.value;
            isDel.value = !isDel.value;
        }

        const eraseNotice = () => {
            const delete_title = document.querySelector(".delete_title");
            const check_del = document.querySelector(".check_del");
            delete_title.remove();
            check_del.remove();
        }


        return {isDel, delOpen, isCheck, checkOpen, delCancel, eraseNotice}
    }

    
}
</script>

<style>

#announcement{
    width:200px;
    height:350px;
    border:1px solid #F6E6E6;
    background: #F6E6E6;
    /* margin:-665px 745px; */
    border-radius: 10px;
    /* display:flex;  */
    position:relative;
}

.main_title1{
    text-align:center;
    margin:10px 0px 2px 0px;
    font-size:18px;
}

.info_box{
    width:170px;
    max-height:290px;
    background:white;
    margin-left:15px;
    margin-bottom:15px;
    border-radius: 10px;
    overflow-y: scroll;
    text-align:center;
    padding:10px 0;
    display:flex;
    flex-direction: column;
    align-items:center;
}

.info{
    cursor: pointer;
}



.delete_title{
    display:flex;
    justify-content: center;
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
}
</style>