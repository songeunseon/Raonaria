<template>
<div  class="make_room_modal">
    <div class="room_title">방개설하기</div>
    <i  @click="makeRoomOpen()" class="bi bi-x-circle" style="cursor:pointer"></i>
    <div class="room_box">
        <p>채팅방이름</p>
        <input id="name" type="text">
        <p>채팅방 소개</p>
        <input id="intro" type="text">
    </div>
    <div class="done_button">
        <button @click='blankCheck()' class="done_bt" value="완료">완료</button>
    </div>
</div>


<div v-if="isAgainCheck" class="input_check">
    <span>입력창을 다시 확인해주세요</span>
    <div class="check_detail">입력창을 다 작성해야<br> 채팅방에 개설이 가능합니다.</div>
    <div class="check_button">
        <button @click="blankCheckClose()" class="check_bt" value="확인">확인</button>
    </div>
</div>

</template>

<script>
import {ref, inject, onMounted} from 'vue';
export default{
    name:'makeRoom',
    setup(){
        const isMakeRoom= inject("isMakeRoom")
        const done = () => isMakeRoom.value=false;

        const isAgainCheck = ref(false);
        
        const blankCheck = () => {
            const name = document.getElementById('name');
            const intro = document.getElementById('intro');
            if( name.value == '' || intro.value == '' ){
                isAgainCheck.value = true;
            }else{
                isAgainCheck.value = false;
            }
        }
        
        const blankCheckClose = () => isAgainCheck.value = false;

        const makeRoomOpen = inject('makeRoomOpen');
        
        

        return{
            isMakeRoom, done, isAgainCheck, blankCheck, blankCheckClose, makeRoomOpen}
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.make_room_modal{
    width:250px;
    height:330px;
    background:white;
    border:1px solid black;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    /* bottom:550px; */
} 

.room_title{
    width:100%;
    height:40px;
    background:#d9d9d9;
    font-size:18px;
    text-align: center;
    line-height: 40px; 
}

.room_box{
    padding:20px 50px;
}

.room_box p{
    text-align: center;
}

.room_box input{
    width:150px;
    height:20px;
    background:#d9d9d9;
    border:none;
    
}

.bi-x-circle{
    position:absolute;
    top:9px;
    left:15px;
}

.done_button{
    margin:30px 80px;
}

.done_bt{
    width:100px;
    height:30px;
}

#name{
    margin-bottom:20px;
}

.input_check{
    width:280px;
    height:185px;
    text-align: center;
    background:white;
    border:1px solid black;
    padding:20px 20px;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%);
}

.input_check span{
   font-size:18px;
   font-weight:800;
}

.check_detail{
    padding-top:18px;
    font-size:18px;
    text-align: center;
}

.check_button{
    margin:20px 55px;
}

.check_bt{
    width:110px;
    height:40px;
    background:#d9d9d9;
}



</style>