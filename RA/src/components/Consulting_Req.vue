<template>
<div class="request_box">
    <div class="modal_header">
        <svg @click="reqOpen()" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
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
                <select id="timechoice" aria-label="timeoption">
                    <option selected>상담 시간 선택</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                </select>
            </div>
        </div>
        <div class="tel_box">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            <input class="input_wrap" type="tel" placeholder="하이픈'-'빼고 입력해주세요">
        </div>
        <div class="name_box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <div class="input_wrap"><input type="text" placeholder="성함을 적어주세요"></div>
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
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
        width:500px;
        height:400px;
        background: #fff;
        border-radius: 20px;
        border: 5px solid #aaa;
    }

    .modal_header{
        width:100%;
        display:flex;
        align-items: center;
        font-size:25px;
        /* justify-content:center;*/
        column-gap:160px;
        padding: 5px 0 5px 20px;
        margin: 0 auto;
        border-bottom: 3px solid #d9d9d9;
    }
    svg{
        width:25px;
        height:25px;
    }
    .title{
        display:flex;
        justify-content:center;
        align-items: center;
        font-size: 20px;
        font-weight:900;
        column-gap:10px;
        margin: 20px auto;
    }
    .consulting_list{
        width: 300px;
        display:flex;
        flex-direction: column;
        margin: 0 auto;
    }
    .calendar_box, .time_box, .tel_box, .name_box{
        width:300px;
        text-align: center;
        margin:10px auto;
        display:flex;
        justify-content: center;
        align-items: center;
        column-gap:5px;

    }
    input, select{
        width: 250px;
        border: 0;
        border-bottom: 2px solid #d9d9d9;
        outline: none;
        padding: 0 5px;
        background: 0;
    }
    .button_box{
        width: 300px;
        text-align: center;
        margin: 20px auto;

    }
    .request{
        width: 150px;
        border: 3px solid #BEC1FF;
        padding: 5px;
        border-radius: 5px;
        background: 0;
    }
    @media(max-width:490px){
        svg{
        width:20px;
        height:20px;
    }
        .request_box{
            position:fixed;
            width: 300px;
            height:250px;
        }
        .modal_header{
            font-size:15px;
            /* justify-content:center;*/
            column-gap:80px;
        }
        .title{
            font-size: 15px;
            margin: 10px auto;
        }
        .calendar_box, .time_box, .tel_box, .name_box{
            width:300px;
            font-size: 11px;
            text-align: center;
            margin:5px auto;
            display:flex;
            justify-content: center;
            align-items: center;
            column-gap:5px;

        }
        input, select{
            width: 150px;
            border: 0;
            border-bottom: 2px solid #d9d9d9;
            outline: none;
            padding: 0 5px;
            background: 0;
        }
        .button_box{
            width: 300px;
            text-align: center;
            margin: 5px auto;

        }
        .request{
            width: 100px;
            border: 3px solid #BEC1FF;
            padding: 5px;
            font-size: 12px;
            border-radius: 5px;
            background: 0;
        }
    }






</style>