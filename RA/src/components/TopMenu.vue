<script>
import { RouterLink, RouterView, useRouter } from "vue-router";
import {ref, provide} from 'vue'
import HomeView from "../views/HomeView.vue"
import TopMenu_Login from "./TopMenu_Login.vue";

</script>

<template>
  <div id="menuBar">
    <div id="logo" >
      <RouterLink to="/"><img src="../assets/toplogo.svg"></RouterLink>
    </div>
    <div id="menu">
      <ul id="menuList">
        <RouterLink to="/notice"><li id="notice">공지사항</li></RouterLink>
        <RouterLink to="/search"><li id="search">조회</li></RouterLink>
        <RouterLink to="/reunion"><li id="reunion">동창회</li></RouterLink>
        <RouterLink to="/mypage"><li id="mypage">내정보</li></RouterLink>
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
  #logo img{
    width: 200px;
  }
  #menuBar{
    width: 1000px;
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
    font-size: 17px;
    align-items: end;
  
    
    border-bottom: 3px solid #f9e6d6;
    text-decoration: none;
    
  }
  #menuList li{
    color: #2669aa;
    text-align: center;
    font-weight: 900;
    width: 200px;
    line-height: 30px;
    margin-bottom: 10px;
    font-size: 15px;
    transition: font-size 0.3s;
  }
  #menuList li:hover{
    font-size: 20px;
  }
  #menuList #mypage{
    border: 0;
  }
  a{
    text-decoration: none;
  }
  @media(min-width:490px) and (max-width:1194px){
    #menuList{
      transition: none;
    }
    #menuList li{
      width: 150px;
    }
  
    #menuBar{
      width: 650px;
      justify-content: center;
    }
  }
  @media(max-width:490px){
    #logo img{
    width: 200px;
  }
  #logo{
      margin: 0 auto;

    }
    #menuBar{
      width: 350px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
    #menuList{
    width: 50%;
    height: 50px;
    display: flex;
    font-size: 10px;
    align-items: end;
    border-bottom: 0;
    column-gap: 10px;
    transition: none;
  }
    #menuList li{
      width: 50px;
      height: 30px;
      border: 2px solid #BEC1FF;
      border-radius: 10px;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: none;
      column-gap: 5px;
    }
      #menuList li:hover{
    font-size: 10px;
  }
    #menuList #mypage{
      border: 2px solid #BEC1FF;
  }
  }
</style>
