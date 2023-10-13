<template>
<div class="partner_wrap">
    <div class="chat_partner">채팅상대</div>
    <div class="info_box2">
        <div class="room_manager1">
            <div class="icon4">
                        <i class="bi bi-award"></i>
            </div>
        <div class="name1">김선향</div>
        </div>
        <div class="name2">김선향</div>
        <div class="name3">김선향</div>
        <div class="name4">김선향</div>
        <div class="name5">김선향</div>
    </div>
</div>        
</template>

<script>
import chatWindow from '../views/chatWindow.vue';
export default{
    
}
</script>

<style scoped>

.partner_wrap{
    width:200px;
    height:350px;
    background:#f4f4fa;
    margin-top:30px;
    border-radius:10px;

}

.info_line{
    width:180px;
    border:1px solid #BEC1FF;
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
    /* width:170px;
    height:250px;
    background:white;
    padding-top:35px;
    padding-right:62px;
    margin-left:15px;
    margin-bottom:10px;
    border-radius: 15px;
    display:flex;
    align-items: end;
    flex-direction:column;
    row-gap:10px;
    overflow-y: scroll;
    text-align: right; */

    display:flex;
    flex-wrap:wrap;
    background:white;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    max-width:250px;

    
}

.room_manager1{
    display:flex;
    justify-content:center;
    
}

.icon4{
    position:relative;
}

.bi-award{
    right:3px;
}

.name1{
    color:green;
    font-weight:800;
}

.name2{
    color:blue;
    font-weight:800;
}

.name3{
    color:brown;
    font-weight:800;
}

.name4{
    color:#B68E29;
    font-weight:800;
}

.name5{
    color:#DE5920;
    font-weight:800;
}




</style>
