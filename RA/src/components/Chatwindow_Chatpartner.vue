<template>
<div class="partner_wrap">
    <div class="chat_partner">채팅상대</div>
    <div class="info_box2">
        <div class="room_manager1">
            <div class="icon4">
                <i class="bi bi-award"></i>
                <div class="name">김선향</div>
            </div>
            </div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
        <div class="name">김선향</div>
    </div>
</div>        
</template>

<script>
import chatWindow from '../views/chatWindow.vue';
export default{
    name:'Chatwindow_Chatpartner'
}
</script>

<style scoped>

.partner_wrap{
    width:200px;
    height:350px;
    background:#F4F4FA;
    margin-top:30px;
    border-radius:10px;

}

.info_line{
    width:180px;
    border:1px solid #F6E6E6;
    margin:20px auto;
}

.chat_partner{
    text-align: center;
    width:180px;
    padding-top:10px;
    font-size:18px;
    padding-left:15px;
}

.info_box2{
    width:170px;
    max-height:290px;
    display:flex;
    flex-direction: column;
    background:#fff;
    margin-left:15px;
    margin-bottom:15px;
    text-align:center;
    overflow-y:scroll;
    border-radius:10px;
    

    
}

.room_manager1{
    display:flex;
    justify-content:center;
    
}

.icon4{
    display:flex;
    padding-right:11px;
}

.bi-award{
    right:3px;
}






</style>
