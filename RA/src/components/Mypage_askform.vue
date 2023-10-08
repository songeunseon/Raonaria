<template>
    <div class="wrap">
        <div class="title">
            <i @click="formOpen()" class="bi bi-x-circle"></i>
            <b>문의</b>
        </div>
        <input id="ask_area" type="text" placeholder="문의 내용을 입력해주세요">
        <div class="send_wrap">
            <i class="bi bi-cursor"></i>
        </div>
    </div>
</template>

<script>
import {inject} from 'vue';
export default{
    name: 'ask_form',
    setup(){
        const isForm = inject('isForm');
        const formOpen = inject('formOpen');

        return{isForm, formOpen}
    }
}
</script>

<style scoped>
.wrap{
    width:600px;
    height:600px;
    display:flex;
    flex-direction: column;
    border:1px solid black;
    gap:10px;
    align-items: center;
    position: fixed;
    top:-1%;
    left:60%;
    transform: translate(-50%);
    background: white;
}

.title{
    align-self: start;
    width:55%;
    padding:10px 0;
    display:flex;
    justify-content: space-between;
}

.bi-x-circle{
    font-size:25px;
    position:relative;
    left:20px;
    cursor:pointer;
}

b{
    font-size:30px;
}

#ask_area{
    width:500px;
    height:450px;
    margin: 0 auto;
}

.send_wrap{
    border-radius: 5px;
    border:1px solid black;
    width:50px;
    height:50px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.bi-cursor{
    font-size:40px;
    cursor:pointer;
}
</style>