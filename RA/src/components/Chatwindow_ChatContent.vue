<template>
    <div id="chat_subject">
        <div class="line1"></div>
        <div class="chat_info">2023년 9월 17일</div>
    </div>
    <div class="chat_wrap">
            <div class="basic_info">
                    <div class="Participant1">김선향 여</div>
                    <div class="comment">애들아 방가워 참외반 최고</div>
                </div>    
                <div class="basic_info1">
                    <i class="bi bi-award"></i>
                    <div class="Participant2">김선향 남</div>       
                </div>
            <div>
                    <div class="comment">애들아 방가워</div>
                </div>
                <div class="basic_info">
                    <div class="Participant3">김선향 여</div>
                    <div class="comment">방가</div>
                </div>
                <div class="basic_info">
                    <div class="Participant4">김선향 남</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
                <div class="basic_info">
                    <div class="Participant5">김선향 여</div>
                    <div class="comment">옛추억이 떠오르는 구나</div>
                </div>
            </div>
            <div class="chat_input">
            <input type="text">
            <div class="icon3">
                <i class="bi bi-send"></i>
            </div>   
        </div>
                
</template>

<script>
import  Chatwindow from '../views/chatWindow.vue';
export default{
    name:"Chatwindow_ChatContent",
    setup(){

    }
}

</script>

<style>
.chat_wrap{
    width:1000px;
    margin:0 auto;
    /* padding:50px 0; */
}

#chat{
    width:700px;
    height:700px;
    border:1px solid black;
    margin:0 30px;
}

#chat_subject{
    width:800px;
    margin:40px auto;
    padding-left:30px;
    position:relative;
}

.line1{
    width:100%;
    background-color:#3E3F9C;
    height:1px;
}

.chat_info{
    position:relative;
    left:50%;
    transform:translate(-50%);
    top:-20px;
    width:150px;
    height:40px;
    background-color:#f4f4fa;
    border-radius:15px;
    display:flex;
    justify-content: center;
    align-items: center;
    border: 10px solid white;
    font-size:11px;
    color:#928F8F;
}

.chat_window{
    margin:-20px 40px;
}


.basic_info{
    /* width:1000px;
    height:1000px; */
    font-size:18px;
    margin-left:100px;
    border:none;
    width:700px;
    padding:2px 0;
    
    
}

.basic_info1{
    display:flex;
}

.basic_info1 i{
    color:blue;
}

.Participant1{
    color:green;
    font-weight:800;
}

.room_manager{
    display:flex;
    font-size:18px;
    margin-bottom:20px;
}

.Participant2{
    color:blue;
    font-weight: 800;
}

.bi-award{
    font-size:20px;
}

.Participant3{
    color:brown;
    font-weight:800;
}

.Participant4{
    color:#B68E29;
    font-weight:800;
}

.Participant5{
    color:#DE5920;
    font-weight:800;
}

.comment{
    font-weight:500;
}

.chat_input{
    margin:0 auto;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding-top:210px;
}

.chat_input input{
    width:610px;
    height:40px;
    border-radius: 10px;
}

.icon3{
    background:#f4f4fa;
    font-size:30px;
    width:50px;
    height:50px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
}

.bi-send{
    color:purple;
}

</style>