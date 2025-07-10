<script>
import { RouterLink, useRouter } from "vue-router";
import { ref, provide } from 'vue';
import EasySearch from '../components/EasySearch.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "@/main.js";

export default {
  components: { EasySearch },
  setup() {
    const email = ref('');
    const password = ref('');
    const uid = ref(sessionStorage.getItem('user_id'));
    const isEasySearch = ref(false);
    const router = useRouter();

    const login = () => {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          sessionStorage.setItem('user_id', user.email);
          uid.value = user.email;
          router.go(); // 새로고침 효과
        })
        .catch((err) => {
          alert('에러 :' + err.message);
        });
    };

    const logout = () => {
      if (uid.value !== null) {
        sessionStorage.removeItem('user_id');
        uid.value = null;
        router.go();
      }
    };

    const easySearch = () => {
      isEasySearch.value = true;
    };

    provide('isEasySearch', isEasySearch);
    provide('easySearch', easySearch);

    return {
      email,
      password,
      uid,
      login,
      logout,
      isEasySearch,
    };
  }
};
</script>

<template>
  <div id="signin" v-if="uid == null">
    <div class="input login">
      <b>ID</b><input v-model="email" id="hid" type="text" placeholder="abc@gmail.com">
    </div>
    <div class="input login">
      <b>PW</b><input v-model="password" id="hpw" type="password">
    </div>
    <div id="bt" class="login">
      <RouterLink to="/join"><button id="hjoin">회원가입</button></RouterLink>
      <button @click="login" id="hlogin">로그인</button>
    </div>
    <p id="not" class="login">
      회원이 아닐시 일부 서비스를 이용하실 수 없습니다. <br>
      서비스 이용 원할 시 회원가입을 해주세요
    </p>
  </div>

  <div v-else>
    {{ uid }}<br>
    <button @click="logout" class="hlogout">Logout</button>
  </div>

  <EasySearch v-if="isEasySearch" />
</template>

<style>
#signin {
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
}
#signin input {
  outline: none;
  border: 0;
  width: 250px;
  font-size: 15px;
  background: 0;
  text-align: center;
}
.input {
  width: 220px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #a9bb51;
  margin: 5px;
}
#bt {
  display: flex;
  width: 100%;
  justify-content: space-around;
  border: 0;
}
#hjoin {
  margin-top: 5px;
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 30px;
  background: #7bb1ff99;
  color: #aaa;
  cursor: pointer;
}
#hlogin, .hlogout {
  margin-top: 5px;
  border: 0;
  width: 100px;
  height: 40px;
  border-radius: 30px;
  background: #7bb1ff99;
  color: #aaa;
  cursor: pointer;
}
#hjoin:hover {
  background: #0d6efd;
  color: #fff;
}
#hlogin:hover, .hlogout:hover {
  background: #0d6efd;
  color: #fff;
}
#not {
  margin-top: 10px;
  font-size: 10px;
  border-top: 3px solid #aaa;
  padding: 5px;
}
@media(max-width: 490px) {
  .input {
    width: 200px;
    text-align: center;
    font-size: 13px;
  }
  #signin {
    width: 80%;
    margin-bottom: 0px;
  }
  #bt {
    margin: 10px 0;
    justify-content: center;
    column-gap: 20px;
  }
  #hjoin, #hlogin {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    font-size: 10px;
    background: #0d6efd;
    color: #fff;
  }
  #sns {
    justify-content: center;
    column-gap: 20px;
  }
}
</style>
