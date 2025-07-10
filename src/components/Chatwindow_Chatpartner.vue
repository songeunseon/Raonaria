<template>
<div class="partner_wrap">
    <div class="chat_partner">채팅상대</div>
    <div class="info_box2">
        <div class="room_manager1">
            <div class="icon4">
                <i class="bi bi-award"></i>
                <div class="name">전계림</div>
            </div>
            </div>
        <div class="name">송은선</div>
        <div class="name">김선향</div>
        <div class="name">신상수</div>
        <div class="name">신선향</div>
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
    width:150px;
    height:230px;
    background:#F4F4FA;
    margin-top:30px;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

}

.info_line{
    width:130px;
    border:1px solid #F6E6E6;
    margin:20px auto;
}

.chat_partner{
    text-align: center;
    width:130px;
    padding-top:10px;
    font-size:18px;
}

.info_box2{
    width:130px;
    max-height:290px;
    display:flex;
    flex-direction: column;
    background:#fff;
    text-align:center;
    overflow-y:scroll;
    font-size: 13px;
    

    
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

@media (max-width:490px){
    .partner_wrap{
    width:150px;
    height:150px;
    background:#F4F4FA;
    margin-top:0px;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

}

.info_line{
    width:130px;
    border:1px solid #F6E6E6;
    margin:20px auto;
}

.chat_partner{
    text-align: center;
    width:130px;
    padding-top:10px;
    font-size:18px;
}

.info_box2{
    width:130px;
    max-height:290px;
    display:flex;
    flex-direction: column;
    background:#fff;
    text-align:center;
    overflow-y:scroll;
    font-size: 13px;
    

    
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

}





</style>
