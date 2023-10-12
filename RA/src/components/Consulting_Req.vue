<template>
<div class="request_box">
    <div class="modal_header">
        <svg @click="reqOpen()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        <b class="modal_title">상담신청</b>
        <!-- <div class="modal_line"></div> -->
    </div>
    <div class="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
        </svg>
        <b class="title_name">유치원 명</b>
    </div>
    <div class="consulting_list">
        <div class="calendar_box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <input class="input_wrap" type="date">
        </div>
        <div class="time_box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            <div class="timeWrap">
                <select></select>
            </div>
        </div>
        <div class="calendar_box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            <input class="input_wrap" type="number">
        </div>
        <div class="calendar_box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <div class="input_wrap"><input type="text"></div>
        </div>
    </div>
    <div class="button_box">
        <button @click="reqOpen()" class="request">상담신청 완료</button>
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

        const showReq = inject('showReq');
        const reqClose = inject('reqClose');

        return{isReq, reqOpen,showReq,reqClose }
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
    @media(max-width:490px){

    }






</style>