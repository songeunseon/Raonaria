<script>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from "vue-router";
import  EasySearch from '../components/EasySearch.vue';
import {ref, provide} from 'vue'

export default{
  components:{EasySearch},
  setup(){
    const isEasySearch = ref(false);
    const easySearch = () => {
      isEasySearch.value = true;
    }

    provide('isEasySearch', isEasySearch);
    provide('easySearch', easySearch);
    return{
      isEasySearch, easySearch
    }
  }
}
</script>

<template>

    <div id ="signin">
        <div class="input login"><b>ID</b><input id ="hid" type ="text" placeholder ="abc@gmail.com"></div>
        <div class="input login"><b>PW</b><input id ="hpw" type ="password"></div>
        <div id ="bt" class="login">
            <RouterLink to="/join"><button id ="hjoin">회원가입 </button ></RouterLink>
            <button @click="login()" id ="hlogin">로그인 </button >
        </div>
        <div id="sns" class="login">
            <img src="../assets/google.png" style="width: 50px;">
            <img src="../assets/kakao.png" style="width: 50px;">
        </div>
        <p id="not" class="login">회원이 아닐시 일부 서비스를 이용하실수 없습니다. <br>서비스 이용 원할시 회원가입을 해주세요</p>
    </div >
<EasySearch v-if="isEasySearch"/>
</template>

<style>
#signin {
    width : 250px;
    display : flex;
    flex-wrap: wrap;
    /* flex-direction : column; */
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 0;
}
#signin input {
    outline : none;
    border : 0;
    width : 250px;
    font-size : 15px;
    background: 0;
    text-align: center;
}
.input{
    width: 250px;
    display: flex;
    align-items: center;
    border-bottom : 3px solid #BEC1FF;
    margin: 10px;
}

#bt {
    display : flex;
    width : 100%;
    justify-content : space-around;
    border: 0;
}
#hjoin , #hlogin {
    margin-top : 5px;
    width : 100px;
    height : 40px;
    border : 3px solid #BEC1FF;
    border-radius : 5px;
    background: 0;
    cursor: pointer;
}
#sns{
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    cursor: pointer;
}
#not{
    font-size: 10px;
    border-top: 3px solid #aaa;
    padding: 5px;
}
@media(max-width:490px){
    .input{
        width: 150px;
        text-align: center;
        font-size : 13px;
    }
    #signin{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin-bottom: 50px;
}   
    .login:nth-child(1){
        grid-row: 1;
        grid-column: 1/3;
        justify-self: center;
    }
    .login:nth-child(2){
        grid-row: 2;
        grid-column: 1/3;
        justify-self: center;
    }
    .login:nth-child(3){
        grid-row: 3;
        grid-column: 2;
    }
    .login:nth-child(4){
        grid-row: 3;
    }
    .login:nth-child(5){
        grid-row: 4;
        grid-column: 1/3;
    }
#bt{
    margin: 10px 0;
    justify-content: center;
    column-gap: 20px;
}
#hjoin , #hlogin{
    width: 55px;
    height: 55px;
    border-radius: 100px;
    font-size: 10px;

}
#sns{
    justify-content: center;
    column-gap: 20px;
}
}
</style>