<template>
<div class="page">
    <div class="info">
        <div class="profile">
            <i class="bi bi-person-circle"></i>
            <div class="name">김선향</div>
            <div class="id">
                <i class="bi bi-shield-lock"></i>gygid27
            </div>
        </div>
    <div id="chat_alert_box">
        <div class="chat_alert">채팅방 알림</div>
        <div class="alert_box">
            <div class="circle"></div>
            <div class="textWrap">서구 유치원 채팅방에<br>활동 중 입니다.</div>
        </div>
        <div class="alert_box">
            <div class="circle"></div>
            <div class="textWrap">서구 유치원 채팅방에<br>활동 중 입니다.</div>
        </div>
        <div class="alert_box">
            <div class="circle"></div>
            <div class="textWrap">서구 유치원 채팅방에<br>활동 중 입니다.</div>
        </div>
    </div>
    <div @click="formOpen()" class="manager_ask">
        관리자 문의하기
    </div>
    </div>
</div>
</template>

<script>
import MypageView from '../views/MypageView.vue' 
export default{
    name:"Mypage_InfoBox",
    setup(){

        return{ }
    }

}
</script>

<style scoped>
.page{
    width:1000px;
    height:620px;
    border:1px solid black;
    margin:20px auto;
    display:flex;
}

.info{
    width:200px;
    height:100%;
    border-right: 1px solid black;
}

.profile{
    width:200px;
    height:251px;
    background:#d9d9d9;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

.profile i{
    font-size:50px;
}

.name{
    padding:10px 0;
    font-weight:800;
}

.id{
    display:flex;
    align-items: center;
    gap:5px;
}

.id i{
    font-size:30px;
}

#chat_alert_box{
    text-align: center;
    padding:10px 0;
    font-weight:900;
    display:flex;
    flex-direction: column;
    gap:10px;

}

.circle{
    width:10px;
    height:10px;
    background:greenyellow;
    border-radius: 100%;
}

.textWrap{
    text-align: left;
}

.alert_box{
    box-sizing: border-box;
    width:100%;
    height:100%;
    padding: 5px 15px;
    border:1px solid black;
    font-size:15px;
    display:flex;
    align-items: center;
    gap:0 10px;
}

.manager_ask{
    width:150px;
    height:40px;
    border:1px solid black;
    text-align: center;
    line-height: 40px;
    margin:80px 25px;
}

</style>