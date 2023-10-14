<template>
<div class="right_wrap">
        <div class="apply_header_question">
            <button @click="formOpen()" class="apply_bt">관리자 문의하기</button>
            <div class="apply">신청내역</div>
            <button @click="cancelOpen()" class="cancel">신청취소</button>
        </div>
        <i @click="slideLeft()" class="bi bi-arrow-left-square"></i>
        <div class="apply_Zone">
            <div class="slider_wrap">
                <div class="apply_box">
                    <div>
                        <div class="apply_line"></div>
                        <input class="checkbox" type="checkbox">
                    </div>  
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
                </div> 
                <!-- <div class="apply_box">
                    <div>
                        <input class="text" type="text">
                        <input class="checkbox" type="checkbox">
                    </div> 
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>   
                </div>
                <div class="apply_box">
                    <div>
                        <input class="text" type="text">
                        <input class="checkbox" type="checkbox">
                    </div> 
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>   
                </div>
                <div class="apply_box">
                    <div>
                        <input class="text" type="text">
                        <input class="checkbox" type="checkbox">
                    </div> 
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>   
                </div>
                <div class="apply_box">
                    <div>
                        <input class="text" type="text">
                        <input class="checkbox" type="checkbox">
                    </div> 
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>   
                </div> -->
            </div> 
        </div>
        
        <i @click="slideRight()" class="bi bi-arrow-right-square"></i>
        <div class="apply_header">
            <button @click="formOpen()" class="manager_bt">관리자 문의하기</button>
            <div class="question_zone">나의문의</div>
            <button @click="askOpen()" class="cancel">문의취소</button>
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
        const isAsk =inject('isAsk');
        const askOpen = inject('askOpen')
        const isForm = inject('isForm')
        const formOpen = inject('formOpen')

         const slideRight = () => {
            const apply_Zone = document.querySelector(".apply_Zone");
            apply_Zone.scrollLeft += 10000;
         }

        const slideLeft = () => {
             const apply_Zone = document.querySelector(".apply_Zone");
            apply_Zone.scrollLeft -= 10000;
        }

        return{isCancel, cancelOpen, isForm, formOpen,isAsk, askOpen,
             slideRight, slideLeft}
    }
}

</script>

<style scoped>
.right_wrap{
    width:100%;
    position: relative;
}

.apply_header_question{
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    position:relative;
    bottom:5px; 
    
}

.apply_header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin:122px auto 15px auto;
    position:relative;
    width:100%;
    height:0;
    /* padding:10px 0; */
}

.apply{
    /* width:100%; */
    font-size:20px;
    font-weight:900;
    text-align:center;
    padding:0 20px;
}

.cancel{
    /* position: absolute;
    right:5px; */
    font-size:15px;
    border:3px solid #BEC1FF;
    border-radius: 5px;
    width:80px;
    height:30px;
    background:white;
    bottom:0;
}

.apply_Zone{
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:relative;
    overflow-x:scroll;
    width:645px;
    top:12px;
    left:62px;
    scroll-behavior: smooth;
}

.slider_wrap{
    display:flex;
    position:relative;
    column-gap:15px;
}

.bi-arrow-left-square, .bi-arrow-right-square{
    position: absolute; top:40%;
    font-size:25px; z-index:30;
    width:25px; height:25px;
    background: white; 
    cursor:pointer; border-radius: 5px;
}
.bi::before{position:absolute;}
.bi-arrow-left-square{left:0;}
.bi-arrow-right-square{right:0;} 


.apply_box{
background-color:hwb(203 56% 9%);
    color:black;
    padding:10px;
    gap:13px;
    display:flex;
    flex-direction: column;
    align-items:center;
    width:185px;
    height:150px;
    border-radius:20px; 
    justify-content:center;
    /* width:700px;
    height:150px;
    background:#60BAAF;
    margin-left:20px; */

}


.apply_box > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    padding:0 15px;

} 

.apply_line{
    width:100px;
    /* height:30px; */
    border:0;
    border-bottom:3px solid #fff;
    outline:none;
    background:none;
    margin-top:1px;
}

.apply_bt{
    opacity: 0;
}
.apply_box .checkbox{
    width:15px;
    height:15px;
    margin-top:3px;
    margin-right:8px;
}


.question_zone{
    font-size:20px;
    text-align: center;
    font-weight: 900;
    /* width:660px;
    margin-top:95px;
    padding-left:104px; */
}

.question{
    margin-top :100px;
}

.question_bt{
    width:80px;
    height:30px;
    border:3px solid #BEC1FF;
    background:white;
    /* position:relative;
    right:0; */
    border-radius: 3px;
}

.manager_bt{
    /* position: absolute;
    left:1px; */
    font-size:15px;
    border:3px solid #bec1ff;
    border-radius: 5px;
    height:30px;
    background:white;
    padding:0 5px;
}




</style>