<script>

import { RouterLink, RouterView, useRouter } from "vue-router";
import {ref, provide} from 'vue'
import HomeView from "../views/HomeView.vue"
import TopMenu_Login from "./TopMenu_Login.vue";

</script>

<template>
  <div id="menuBar">
    <div id="logo" >
      <RouterLink to="/"><img src="../assets/logotext.png"></RouterLink>
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
    font-family: 'HakgyoansimSantteutdotumL';
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
    padding-bottom: 10px;

  }
  #menuList{
    width: 100%;
    height: 50px;
    display: flex;
    list-style: none;
    /* justify-content: space-around; */
    font-size: 17px;
    align-items: end;
    border-bottom: 3px solid #f35b56;
    text-decoration: none;
    
  }
  #menuList li{
    font-family: 'HakgyoansimSantteutdotumL';
    font-weight: 700;
    color: #000;
    text-align: center;
    width: 200px;
    line-height: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    transition: font-size 0.3s;
  }
  #menuList li:hover{
    font-size: 25px;
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
    #menu{
      margin: 0 auto;
      width: 100%;
    }
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
      width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 17px;
    align-items: none;
    border-bottom: 2px solid #f35b56;
    text-decoration: none;
  }
  #menuList li{
    font-family: 'HakgyoansimSantteutdotumL';
    font-weight: 700;
    color: #000;
    text-align: center;
    width: 70px;
    line-height: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    transition: none;
  }
      #menuList li:hover{
    font-size: 13px;
  }

  }
</style>
