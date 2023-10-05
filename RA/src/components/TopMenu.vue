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
  <div id="menuBar">
    <div id="logo" >
      <RouterLink to="/"><img src="../assets/toplogo.svg" style="width: 200px;"></RouterLink>
    </div>
    <div id="menu">
      <ul id="menuList">
        <RouterLink to="/notice"><li id="notice">공지사항</li></RouterLink>
        <RouterLink to="/search"><li id="search">유치원조회</li></RouterLink>
        <RouterLink to="/reunion"><li id="reunion">유치원동창회</li></RouterLink>
        <RouterLink to="/mypage"><li id="mypage">마이페이지</li></RouterLink>
      </ul>
    </div>
  </div>
  <div id="TopMenuBt">
    <RouterLink to="/join"><button id ="mjoin">회원가입 </button></RouterLink>
    <button @click="loginOpen()" id ="mlogin">로그인 </button>
  </div>
  <Login_Modal v-if="isLoginModal"/>
  <RouterView />
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #menuBar{
    max-width: 1000px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    /* column-gap: 30px; */
    align-items: end;
  }
  #menu{
    padding-bottom: 20px;

  }
  #menuList{
    width: 100%;
    height: 50px;
    display: flex;
    list-style: none;
    /* justify-content: space-around; */
    font-size: 20px;
    align-items: end;
    border-bottom: 3px solid #BEC1FF;
    text-decoration: none;
    
  }
  #menuList li{
    text-align: center;
    width: 200px;
    border-right: 3px solid #BEC1FF;
    line-height: 30px;
    margin-bottom: 10px;
    color:black;
  }
  #menuList #mypage{
    border: 0;
  }
  a{
    text-decoration: none;
  }
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
</style>
