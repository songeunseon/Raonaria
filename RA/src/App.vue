<script setup>
import { RouterLink, RouterView } from "vue-router";


</script>

<template>
  <div id="menuBar">
    <div id="logo" >
      <img src="./assets/toplogo.svg" style="width: 200px;">
    </div>
    <div id="menu">
      <ul id="menuList">
        <li id="notice">공지사항</li>
        <li id="search">유치원조회</li>
        <li id="reunion">유치원동창회</li>
        <li id="mypage">마이페이지</li>
      </ul>
    </div>
  </div>
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
    column-gap: 30px;
    align-items: end;
  }
  #menu{
    padding-bottom: 20px;
  }
  #menuList{
    min-width: 800px;
    height: 50px;
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 20px;
    align-items: end;
    border-bottom: 3px solid #BEC1FF;
  }
  #menuList li:last-child{
    border: 0;
  }
  #menuList li{
    text-align: center;
    width: 200px;
    border-right: 3px solid #BEC1FF;
    line-height: 30px;
    margin-bottom: 10px;
  }
</style>
