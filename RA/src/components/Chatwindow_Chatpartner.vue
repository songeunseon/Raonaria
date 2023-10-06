<template>
<div>
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
.info_line{
    width:180px;
    border:1px solid #BEC1FF;
    margin:20px auto;
}

.chat_partner{
    text-align: center;
}

.info_box2{
    width:170px;
    height:250px;
    background:white;
    padding-top:15px;
    margin-left:15px;
    margin-bottom:10px;
    border-radius: 10px;
    display:flex;
    align-items: center;
    flex-direction:column;
    row-gap:10px;
    overflow-y: scroll;
    
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
