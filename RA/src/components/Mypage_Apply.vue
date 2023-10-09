<template>
<div class="right_wrap">
        <div class="apply_header">
            <div class="apply">신청내역</div>
            <button @click="cancelOpen()" class="cancel">신청취소</button>
        </div>
        <div class="apply_Zone">
            <i class="bi bi-arrow-left-square"></i>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <i class="bi bi-arrow-right-square"></i>
        </div>
        <div class="apply_header question">
            <button @click="formOpen()" class="manager_bt">관리자 문의하기</button>
            <div class="question_zone">나의문의</div>
            <button @click="cancelOpen()" class="cancel">문의취소</button>
        </div>
    </div>

</template>

<script>
import {inject} from 'vue'
import MypageViewVue from '../views/MypageView.vue';
export default{
    name:"Mypage_Apply",
    setup(){
        const isCancel = inject('isCancel');
        const cancelOpen = inject('cancelOpen');
        const isForm = inject('isForm')
        const formOpen = inject('formOpen')
        return{isCancel, cancelOpen, isForm, formOpen}
    }
}
</script>

<style scoped>
.right_wrap{
    width:100%;
}

.apply_header{
    display:flex;
    align-items: center;
    justify-content: center;
    margin:0px auto 15px auto;
    position:relative;
    width:100%;
    padding:10px 0;
}

.apply{
    font-size:20px;
    font-weight:900;
}

.cancel{
    position: absolute;
    right:0;
    font-size:15px;
    border:3px solid #bec1ff;
    border-radius: 5px;
    width:80px;
    height:30px;
    background:white;
}

.apply_Zone{
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:relative;
}

.bi-arrow-left-square, .bi-arrow-right-square{
    font-size:25px;
}

.apply_box{
    background-color:#60baaf;
    color:white;
    padding:8px;
    gap:20px;
    display:flex;
    flex-direction: column;
    width:150px;
    height:150px;
    border-radius: 50%;
}

.apply_box > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.apply_box .text{
    width:90px;
    height:30px;
    border:none;
    border-bottom:3px solid #d9d9d9;
    outline:none;
    background:none;
    margin:15px 10px;
}

.apply_box .checkbox{
    width:15px;
    height:15px;
    margin-top:20px;
    margin-right:8px;
}


.question_zone{
    font-size:20px;
    text-align: center;
    font-weight: 900;
    width:660px;
}

.question{
    margin-top :100px;
}

.question_bt{
    width:80px;
    height:30px;
    border:3px solid #BEC1FF;
    background:white;
    position:relative;
    right:0;
    border-radius: 3px;
}

.manager_bt{
    position: absolute;
    left:0;
    font-size:15px;
    border:3px solid #bec1ff;
    border-radius: 5px;
    height:30px;
    background:white;
    padding:0 5px;
}

</style>