<template>
    <div class="chat_content_wrap">
        <div class="chat_wrap">
            <div id="chat_subject">
                <div class="line1"></div>
                <div class="chat_info">2023년 9월 17일</div>
            </div>
            <div class="basic_info">
                <div class="Participant">신선향 여</div>
                <div class="comment">애들아 방가워 참외반 최고</div>
            </div>
            <div class="basic_info">
                <div class="Participant1">
                    <i class="bi bi-award"></i>
                    전계림 남
                </div>
                <div class="comment">애들아 방가워</div>
            </div>
            <div>
            </div>
            <div class="basic_info">
                <div class="Participant">신선향 여</div>
                <div class="comment">방가</div>
            </div>
            <div class="basic_info myChat">
                <div class="Participant">김선향 여</div>
                <div class="comment">이따가 뭐 먹으러 갈까</div>
            </div>
            <div class="basic_info myChat">
                <div class="Participant">김선향 여</div>
                <div class="comment">고기 먹고 싶은 사람 손!</div>
            </div>
            <div class="basic_info">
                <div class="Participant">송은선 여</div>
                <div class="comment">손!11111111</div>
            </div>
            <div class="basic_info">
                <div class="Participant">신상수 남</div>
                <div class="comment">좋은 데 알고 있는데 거기 갈까? 1인분에 15000원임</div>
            </div>
            <div class="basic_info myChat">
                <div class="Participant">김선향 여</div>
                <div class="comment">응응!!! 이따 7시에 만나자!</div>
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
    background:#F4F4FA;
    border-radius:10px;
    display:flex;
    flex-direction:column;   
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
    background-color: #f35b56;
    height: 1px;
}

.chat_info {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    top: -20px;
    width: 150px;
    height: 40px;
    background-color:#F4F4FA;
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
    border: none;
    padding: 10px 20px;
    background:white;
    border-radius:10px;
    margin:10px 73px;
    width:fit-content;
    align-self:start;
}

.myChat{
    display:flex;
    align-self:end;
    flex-direction:column;
    align-items:end;
    position:relative;
    right:-30px;
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
    padding: 10px;
    /* border-radius: px; */
    /* padding-left:15px; */
    font-size:20px;
    outline:none;
    border:none;
    background:#F4F4FA;
    resize:none;
}
.text_output{
    width:150px;
    height:48px;
    line-height: 30px;
    font-size:20px;
    color:black;
    outline:none;
    border:2px solid #F4F4FA;
    background:#F4F4FA;
}

.word_write{
    width:88.3%;
    height:48px;
    padding:13px 15px;
    flex-grow:1;
    outline:none;
    border:none;
    background:#F4F4FA;
    resize: none;
    overflow:hidden;
}
</style>