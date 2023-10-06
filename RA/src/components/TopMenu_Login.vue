<script>
import { RouterLink, RouterView, useRouter } from "vue-router";
import  Login_Modal from '../components/Login_Modal.vue';
import {ref, provide} from 'vue'
import HomeView from "../views/HomeView.vue"

export default{
  components:{Login_Modal},
  setup(){
    const isLoginModal = ref(false);
    const loginOpen = () => {
      isLoginModal.value = !isLoginModal.value;
    }
    
    provide('isLoginModal', isLoginModal);
    provide('loginOpen', loginOpen);

    return{
      isLoginModal, loginOpen
    }

  }
}
</script>

<template>
<div id="TopMenuBt">
    <RouterLink to="/join"><button id ="mjoin">회원가입 </button></RouterLink>
    <button @click="loginOpen()" id ="mlogin">로그인 </button>
  </div>
  <Login_Modal v-if="isLoginModal"/>
  <div id="CpText"> 
        <b>로그인을 하시면 상담신청과 입학신청을 이용하실 수 있습니다</b>
    </div>
</template>
<style>
*{padding: 0;margin: 0;box-sizing: border-box;}
  #TopMenuBt{
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: end;
  }
  #mjoin, #mlogin{
    width: 100px;
    height: 40px;
    background: 0;
    border: 3px solid #BEC1FF;
    border-radius: 5px;
    margin-left: 10px;
}
#CpText{
        position:fixed;
        bottom: 0;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 10px 0;
        border-bottom: 3px solid #aaa;
    }
</style>