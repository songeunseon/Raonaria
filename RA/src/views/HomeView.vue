<script>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from "vue-router";
import  EasySearch from '../components/EasySearch.vue';
import {ref, provide} from 'vue'
import Home_Login from '../components/Home_Login.vue';
import Home_Easy from '../components/Home_Easy.vue';

export default{
  components:{ EasySearch,Home_Easy, Home_Login },
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
  <main>
    <div id ="box">
        <header id ="header">
            <logo id ="logo">

              <img src ="../assets/mainlogo.svg">
            </logo >
            <ul id="menulist">
              <RouterLink to="/notice"><li id ="notice" >공지사항</li></RouterLink>
              <RouterLink to="/search"><li id ="search" >조회</li></RouterLink>
              <RouterLink to="/reunion"><li id ="reunion" >동창회</li></RouterLink>
              <RouterLink to="/mypage"><li id ="mypage" >내정보</li></RouterLink>
            </ul>
        </header >
    <div id ="main">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/HOME.png" class="d-block w-100" alt="ex" style="width: 500px; height: 800px; z-index: 10px;">
        </div>
    <div class="carousel-item">
        <img src="../assets/SEARCH.png" class="d-block w-100" alt="ex" style="width: 500px; height: 800px; z-index: 10px;">
    </div>
        <div class="carousel-item">
            <img src="../assets/REUNION.png" class="d-block w-100" alt="ex" style="width: 500px; height: 800px; z-index: 10px;">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
    </div >
    <search id ="mainbox">
        <div id ="listSearch">
            <div id ="sh">
                <div id="look">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
                </div>
                <div id ="listTitle">유치원 간단 조회 </div >
            </div >
        </div >
        <Home_Easy/>
        <Home_Login/>

    </search >
    </div >
    <footer id ="footer">
        <div id ="haddr">
            <div><b>상호: 라온아리아</b></div>
            <div><b>주소: 대전광역시 중구 중앙로 121번길 20</b></div>
        </div >
        <div id ="page"><a >이용약관 </a > | <a >개인정보 처리방침 </a > | <a >찾아오시는 길 </a > | <a >관리자 </a > | <a >사이트맵 </a ></div >
    </footer >
    <TheWelcome />
  </main>
</template>

<style scoped>
*{
  padding : 0;
  margin : 0;
  box-sizing : border-box;

  
}
main{
  width: 100vw;
  display: grid;
  padding: 0;
  margin: 0;
  background : #DBDBDB;
}

#box{
    max-width : 1000px;
    margin : 0 auto;
    height : 700px;
    display : flex;
    margin-top : 70px;
    /* position: relative; */
    
}
#header{
  width: 12.5%;
  margin : 0 auto;
  display : flex;
  flex-direction : column ;
  background : #fff ;
  text-align: center;
  align-items: center;

  /* padding-left: 10px; */
}
#logo img {
    width : 100px ;
    

  }
#logo{
  display: flex;
  justify-content: center;

}
@keyframes popup {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}

#logo {
  animation: popup 2s ease-in-out 1;
}

#menulist li{
    list-style: none;
    border : 5px solid #BEC1FF;
    border-radius : 100px;
    width : 100px;
    height : 100px;
    text-align : center;
    font-size : 20px;
    padding-top :30px;
    margin-top : 10px;
    color: black;
    cursor: pointer;
    transition: transform 0.3s;
}
#menulist li:hover{
  transform: rotate(20deg);
}
#menulist li:active {
  transform: rotate(0deg);
}
a{
  text-decoration:none;
}
#mainbox {
    text-align :center;
    display : flex;
    flex-direction : column;
    align-items : center;
    row-gap: 20px;
    background: #fff;

    
}

#main{
  width: 500px;
  position: relative;
  top:-50px;
}
#listSearch, #logo{
  width: 100%;
  padding: 20px 0;
  
}
#listTitle{
  font-weight: 900;
}
#sh{
  width: 60%;
  margin: 0 auto;
  display: flex;
  font-size: 20px;
  column-gap: 30px;
  padding: 30px 0 10px 0;
  justify-content:center;
  border-bottom: 3px solid #aaa;
}
#school {
    width : 340px;
    height : 55px;
    text-align : center;
    border : 3px solid #BEC1FF;
    border-radius : 5px;
    outline : none;
}

#footer{
  min-width: 1000px;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  padding: 10px;
  margin-top: 60px;
}
#haddr{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
#haddr{
  column-gap: 50px;
}


</style>
