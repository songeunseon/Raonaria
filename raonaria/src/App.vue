<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!--상단바 고정 메뉴바 -->
<div class="menu_bar">
  <div class="menu_box">
    <div id="logo">
      <img src="./assets/toplogo.svg" alt="logo"  >
    </div>
    <div id="menu_list">
      <div class="menu_title">공지사항</div>
      <div class="menu_title">유치원조회</div>
      <div class="menu_title">유치원동창회</div>
      <div class="menu_title1">마이페이지</div>
    </div>
  </div>
  <div id="sign_up">
    <input type="button" value="회원가입" class="sign">
    <input type="button" value="로그인" class="login">
  </div>
</div>


</template>





<style scoped>

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
.menu_bar{
  width:1000px;
  /* height:700px; */
  margin: 0 auto;
  /* border:1px solid black; */

  }

.menu_box{
  width:100%;
  height:40px;
  display:flex;
  justify-content:center;
  column-gap:20px;
}

#menu_list{
  width:100%;
  height:40px;
  display:flex;
  margin:30px 0;
  font-size:20px;
  /* column-gap:20px; */
  border-bottom: 5px solid #BDC0FF;
  
}

.menu_title{
  /* box-sizing:border-box;
  padding:0 5px; */
  border-right:5px solid #BDC0FF;
  /* border-width:30%; */
  width:100%;
  height:25px;
  text-align:center;
}

.menu_title1{
  width:100%;
  text-align:center;
}

#sign_up{
  width:100%;
  height:60px;
  /* display:flex;
  justify-content:right;
  align-items:end; */
  column-gap:10px;
  display:flex;
  align-items:end;
  justify-content:end;
}

.menu_title:nth-child(3){
    background:#BDC0FF;
    height: 100%;
    width: 100%;
}

.sign{
  width:90px;
  height:35px;
  border:3px solid #BDC0FF;
  margin:-20px 0;
  background-color:white;
  border-radius: 5px;
  font-size:15px;
}

.login{
  width:90px;
  height:35px;
  border:3px solid #BDC0FF;
  margin:-20px 0;
  background-color:white;
  border-radius: 5px;
  font-size:15px;
}


</style>
