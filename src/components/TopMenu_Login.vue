<script>
import { RouterLink } from "vue-router";
import Login_Modal from '../components/Login_Modal.vue';
import { ref, provide } from 'vue'
import { useAuthStore } from '@/stores/auth'

export default{
  components:{ Login_Modal },
  setup(){
    const authStore = useAuthStore()

    const isLoginModal = ref(false);
    const loginOpen = () => {
      isLoginModal.value = !isLoginModal.value;
    }

    provide('isLoginModal', isLoginModal);
    provide('loginOpen', loginOpen);

    const logout = async () => {
      await authStore.logout()
    }

    return {
      isLoginModal, loginOpen, authStore, logout
    }
  }
}
</script>

<template>
<div id="TopMenuBt" v-if="!authStore.isLoggedIn">
    <RouterLink to="/join"><button id ="mjoin">회원가입 </button></RouterLink>
    <button @click="loginOpen()" id ="mlogin">로그인 </button>
  </div>
  <Login_Modal v-if="isLoginModal"/>
  <div id="CpText" v-if="!authStore.isLoggedIn">
        <b>로그인을 하시면 상담신청과 입학신청을 이용하실 수 있습니다</b>
    </div>
<div v-if="authStore.isLoggedIn" class="loginAfter">
    {{ authStore.userEmail }}
      <button @click="logout" class="logout_bt">Logout</button>
</div>
</template>
<style>
*{padding: 0;margin: 0;box-sizing: border-box;font-family: 'SUITE-Regular';}

#TopMenuBt,.loginAfter{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: end;
  }
  .loginAfter{
    align-items: center;
  }
  #mjoin, #mlogin, .logout_bt{
    width: 100px;
    height: 40px;
    border: 0;
    background: #7bb1ff99;
    border-radius : 30px;
    margin-left: 10px;
}
#mjoin:hover, #mlogin:hover{
  background: #0d6efd;
    color: #fff;
}
#CpText{
        width: 1000px;
        margin: 0 auto;
        position: fixed;
        bottom: 0;
        text-align: center;
        padding: 10px 0;
        z-index: 1020;
        background: #aaa;
        color:#fff;
        font-weight: 100;
    }
  @media(min-width:577px) and (max-width:992px){
    #TopMenuBt{
      width: 90%;
    }
    #CpText{
        width: 100%;
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        text-align: center;
        padding: 10px 0;
        border-bottom: 3px solid #aaa;
        z-index: 1020;
    }
  }
  @media(max-width:576px){
    .loginAfter{
      width: 100%;
      height: 100px;
    }
    #TopMenuBt,.loginAfter{
    width: 400px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
  }
    #TopMenuBt{
      width: 350px;
      height: 80px;
      align-items: end;
    }
    #mjoin, #mlogin{
    width: 70px;
    height: 30px;
    background: 0;
    border: 1px solid #aaa;
    border-radius: 100px;
    margin-left: 5px;
    font-size: 10px;
}
#CpText{
        width: 100%;
        margin: 0 auto;
        position: fixed;
        bottom: 0;
        text-align: center;
        padding: 5px 0;
        border-bottom: 3px solid #aaa;
        z-index: 1020;
        font-size: 10px;
        font-weight: 100;
    }
    }
</style>