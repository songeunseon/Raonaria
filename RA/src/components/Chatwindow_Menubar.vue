<template>
    
<div class="header">
            <div class="chat_name">새싹반 유치원 채팅방</div>
            <div class="icon">
                <i class="bi bi-list"></i>
                <i  class="bi bi-door-open"></i>
            </div>
</div> 

</template>

<script> 
import chatWindow from '../views/chatWindow.vue';
export default{
    name:"Chatwidow_Menubar",
    setup(){
        
    }

}
</script>

<style>

/* .header{
    width:800px;
    height:200px;
    border:1px solid black;
    margin:10px 30px 0px 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
} */


.header{
    width:800px;
    height:200px;
    position: absolute;
    top:0;
    left:0;
}

.chat_name{
    padding:0 30px;
    font-weight: 800;
}

.icon{
    padding:0 20px;
    display:flex;
    column-gap: 25px;
    font-size:25px;
}

</style>