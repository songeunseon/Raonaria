<template>
<div class="right_wrap">
        <div class="apply_header">
            
            <div class="apply">신청내역</div>
            <button  class="cancel">신청취소</button>
        </div>
        <i class="bi bi-arrow-left-square"></i>
        <div class="apply_Zone">
            <div class="slider_wrap">
                <div class="apply_box">
                <!--이자리에 신청내역이 없다는 박스랑 정보 넣을 것-->  
                </div>
            </div>
        </div>
        <i class="bi bi-arrow-right-square"></i>
        <div class="apply_header_question">
            <button class="manager_bt">관리자 문의하기</button>
            <div class="question_zone">나의문의</div>
            <button class="cancel">문의취소</button>
        </div>
    </div>

</template>
<script>
import MypageView from '../views/MypageView.vue'
export default{
    name:"Mypage_New_Member",
    setup(){

    }
}

</script>
<style>
.right_wrap{
    width:100%;
    position: relative;
}

.apply_header{
    display:flex;
    align-items: center;
    justify-content: center;
    margin:0px auto 15px auto;
    position:relative;
    width:100%;
    /* padding:10px 0; */
}

.apply{
    font-size:20px;
    font-weight:900;
    position:relative;
    bottom:16px;
    font-size:20px;
    /* padding-bottom:20px; */
}

.cancel{
    position: absolute;
    right:8px;
    font-size:15px;
    border:3px solid #bec1ff;
    border-radius: 5px;
    width:80px;
    height:30px;
    background:white;
    bottom:0;
}

.apply_Zone{
    /* display:flex;
    align-items: center;
    justify-content: space-between;
    position:relative;
    overflow-x:scroll;
    width:645px;
    top:12px;
    left:62px;
    scroll-behavior: smooth; */


}

.slider_wrap{
    display:flex;
    position:relative;
    column-gap:15px;
}

/* .bi-arrow-left-square, .bi-arrow-right-square{
    position: absolute; top:40%;
    font-size:25px; z-index:30;
    width:25px; height:25px;
    background: white; 
    cursor:pointer; border-radius: 5px;

.bi::before{position:absolute;}
.bi-arrow-left-square{left:0;}
.bi-arrow-right-square{right:0;} */


.apply_box
{  
    width:400px;
    height:200px;

}


.apply_box > div{
    display: flex;
    align-items: center;
    justify-content: center;
} 

.apply_box .text{
    width:80px;
    /* height:30px; */
    border:0;
    border-bottom:3px solid #aaa;
    outline:none;
    background:none;
    margin-top:1px;
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
    width:660px;
    margin-top:95px;
    padding-left:104px;
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
    left:1px;
    font-size:15px;
    border:3px solid #bec1ff;
    border-radius: 5px;
    height:30px;
    background:white;
    padding:0 5px;
}

</style>