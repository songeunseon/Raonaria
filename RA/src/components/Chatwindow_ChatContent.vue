<template>
    <div class="chat_content_wrap">
        <div class="chat_wrap">
            <div id="chat_subject">
                <div class="line1"></div>
                <div class="chat_info">2023년 9월 17일</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">애들아 방가워 참외반 최고</div>
            </div>
            <div class="basic_info">
                <div class="Participant1">
                    <i class="bi bi-award"></i>
                    김선향 남
                </div>
                <div class="comment">애들아 방가워</div>
            </div>
            <div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">방가</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 남</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
            <div class="basic_info">
                <div class="Participant">김선향 여</div>
                <div class="comment">옛추억이 떠오르는 구나</div>
            </div>
        </div>
        <div class="write_wrap">
            <textarea row="5" col="30" class="word_write"></textarea>
            <button class="text_output">Enter</button>
        </div>
    </div>
</template>

<script>
import Chatwindow from '../views/chatWindow.vue';
export default {
    name: "Chatwindow_ChatContent",
    setup() {

    }
}

</script>

<style scoped>


body{
    overflow-y:hidden;
}









.chat_content_wrap{
    width:fit-content;
    height:fit-content;
}

.chat_wrap {
    width: 770px;
    /* padding:50px 0; */
    height: 660px;
    overflow-y: scroll;
    /* display:flex;*/
}

#chat {
    width: 770px;
    height: 500px;
    border: 1px solid black;
}

#chat_subject {
    width: 670px;
    margin: 10px auto;
    padding-left: 30px;
    position: relative;
}

.line1 {
    width: 100%;
    background-color: #3E3F9C;
    height: 1px;
}

.chat_info {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    top: -20px;
    width: 150px;
    height: 40px;
    background-color:#F6E6E6;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid white;
    font-size: 11px;
    color: black;
}

.chat_window {
    margin: -20px 40px;
}


.basic_info {
    /* width:1000px;
    height:1000px; */
    font-size: 18px;
    margin-left: 0px;
    border: none;
    padding: 2px 0;

}

.basic_info1 {
    font-size: 18px;
    margin-left: 100px;
    border: none;
    width: 100%;
    padding: 2px 0;
}

.basic_info1 {
    display: flex;
}

.basic_info1 i {
    color: blue;
}

.Participant{
    font-weight:900;
}

.Participant1{
    font-weight:900;
}



.room_manager {
    display: flex;
    font-size: 18px;
    margin-bottom: 20px;
}


.bi-award {
    font-size: 20px;
}





.comment {
    font-weight: 500;
}

.chat_input {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:770px;
    height:50px;
    gap:10px;
    margin-top:20px;
    border-radius: 10px;
    background:#F4F4FA;
    
}

.write_wrap{
    display:flex;
    align-items:center;
    column-gap:10px;
    margin-top:10px;
}

.text_input {
    flex-grow: 1;
    /* width:650px; */
    height: 50px;
    /* border-radius: px; */
    padding-left:15px;
    font-size:20px;
    outline:none;
    border:none;
    background:#F4F4FA;
    resize:none;
}
.text_output{
    width:150px;
    height:48px;
    line-height: 30px;;
    font-size:20px;
    color:black;
    outline:none;
    border:2px solid #F6E6E6;
    background:#F6E6E6;
}

.word_write{
    width:88.3%;
    flex-grow:1;
    outline:none;
    border:none;
    background:#F6E6E6;
    resize: none;
}
</style>