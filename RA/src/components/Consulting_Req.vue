<template>
<div class="request_box">
    <div class="modal_header">
        <i class="bi bi-x-circle"></i>
        <div class="modal_title">상담신청</div>
        <!-- <div class="modal_line"></div> -->
    </div>
    <div class="title">
        <i class="bi bi-mortarboard"></i>
        <div class="title_name">유치원 명</div>
    </div>
    <div class="consulting_list">
    <div class="calendar_box">
        <i class="bi bi-calendar3"></i>
        <div class="input_wrap"><input type="text"></div>
    </div>
    <div class="time_box">
        <i class="bi bi-clock"></i>
        <div class="timeWrap">
            <input type="text" >
            <img src="../assets/arrow_drop_down_circle.svg" class="bt_img"/>
        </div>
    </div>
    <div class="calendar_box">
        <i class="bi bi-telephone"></i>
        <div class="input_wrap"><input type="text"></div>
    </div>
    <div class="calendar_box">
        <i class="bi bi-person-circle"></i>
        <div class="input_wrap"><input type="text"></div>
    </div>
    </div>
    <div class="button_box">
        <button class="request">상담신청 완료</button>
    </div>

    
</div>


</template>

<script>
import {inject} from 'vue';
export default{
    name:"Consulting_Req",
    setup(){
        const isReq = inject('isReq');
        const reqOpen = inject('reqOpen');
        return{isReq, reqOpen}
    }
}
</script>

<style scoped>
    .request_box{
        position:fixed;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
        width:800px;
        height:500px;
        background:white;
        border:1px solid black;
    }

    .modal_header{
        width:100%;
        display:flex;
        font-size:30px;
        /* justify-content:center;*/
        column-gap:30px;
        position:relative;
        border-bottom: 3px solid #AAAAAA;
        

    }

    .modal_header i{
        padding-left:30px;
    }

    .modal_title{
        position:absolute;
        left:50%;
        transform: translate(-50%);
    }

    .title{
        display:flex;
        justify-content:center;
        padding-top:20px;
        font-size:30px;
        font-weight:900;
        column-gap:10px;
        margin-bottom:35px;
    }

    .bi-mortarboard{
        font-weight: 800;
    }

    .title_name{
        font-weight:800;
    }

    

    .consulting_list{
        display:flex;
        flex-direction: column;
    }

    .calendar_box{
        width:400px;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        column-gap:10px;
        position:relative;
        height:50px;
    }

    .calendar_box .input_wrap{
        border-bottom:4px solid #AAAAAA;
        padding:10px 0;
    }
    
    .calendar_box input{
        width:400px;
        border:none;
        padding-left:25px;
        outline:none;
        box-sizing:border-box;
    }

    .calendar_box i{
        font-size:20px;
        position:absolute;
    }

    .time_box{
        display:flex;
        justify-content:space-between;
        align-items:center;
        column-gap:10px;
        position:relative;
        width:400px;
        margin:0 auto;
        padding: 10px 0;
    }

    .time_box input{
        width:200px;
        height:50px;
        /* border:none; */
        /* border-bottom:4px solid #AAAAAA; */
        border-radius: 10px;
    }

    .time_box i{
        position:relative;
        font-size:20px;
    }

    .bt_img{
        position:relative;
        width:25px;

    }
    
    .timeWrap{
        display:flex;
        justify-content: space-between;
        align-content: center;
        width:300px;
        border:1px solid black;
        border-radius: 5px;
        padding:0 10px;
        box-sizing: border-box;

    }

    .timeWrap input{
        align-self: center;
        flex-grow:1;
        border:none;
        outline:none;
    }

    .button_box{
        width:fit-content;
        margin:50px auto;
    }

    .request{
        width:150px;
        height:50px;
        background:white;
        border:2px solid #BEC1FF;
        font-weight:800;
    }






</style>