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
        <header id ="header" class="item">
            <logo id ="logo">
              <img id="logoimg" src="../assets/logoimg.svg">
              
            </logo >
            <ul id="menulist">
              <RouterLink to="/notice"><li id ="notice" >공지사항</li></RouterLink>
              <RouterLink to="/search"><li id ="search" >조회</li></RouterLink>
              <RouterLink to="/reunion"><li id ="reunion" >동창회</li></RouterLink>
              <RouterLink to="/mypage"><li id ="mypage" >내정보</li></RouterLink>
            </ul>
        </header >
    <div id ="main" class="item">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/HOME.png" id="a" class="d-block w-100" alt="ex" style=" z-index: 20px;" >
        </div>
    <div class="carousel-item">
        <img src="../assets/SEARCH.png" id="b" class="d-block w-100" alt="ex" style="z-index: 20px;">
    </div>
        <div class="carousel-item">
            <img src="../assets/REUNION.png" id="c" class="d-block w-100" alt="ex" style="z-index: 20px;">
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
    <search id ="mainbox" class="item">
      <div id ="logotext">
        <img src="../assets/logotext.png">
      </div >
        <div id ="listSearch">
            <div id ="sh">
                <!-- <div id="look">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
                </div> -->
                
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
  height: 100vh;
  display: grid; 
  padding: 0;
  margin: 0;
  background : #FFECCC;
}

#box{
    width : 1000px;
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

#logo{
  width: 100px;
  height: 113px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#logoimg{
  width: 100px;
}
#logotext img{
  width: 300px;
}
@keyframes shake  {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-10deg); }
  40% { transform: rotate(15deg); }
  60% { transform: rotate(-20deg); }
  80% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}

#logo img {
  animation: shake  5s ease infinite;
}
/* f9e6d6 베이지?
2669aa 다크블루?
518562 쑥색? 
a0a06e 풀색
f19482 살구색
e6c8c8 베이비핑크
e3da75 다크레몬
6499c5 그레이블루
b39283 코토리베이지
9dc7da



*/
#menulist li{
    list-style: none;
    background: #6499c5;
    color: #fff;
    font-weight: 900;
    border-radius : 100px;
    width : 100px;
    height : 100px;
    text-align : center;
    font-size : 20px;
    padding-top :35px;
    margin-top : 10px;
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
/* @keyframes flip {
  from{ transform: rotateY(0deg); }
  to { transform: rotateY(90deg); }
} */
.w-100{
  width: 500px;
  height: 800px;
  /* animation: flip 3s ease-in-out infinite; */

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
  width: 1000px;
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

/* --------------------태블릿 버전------------------- */

@media(min-width:490px) and (max-width:1194px){

  main{
    width: 100%;
    height: 100%;
    background: #dbdbdb;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  #box{
  width : 100%;
  height: fit-content;
  display : flex;
  flex-direction: column;
  margin-top : 0px;
  /* position: relative; */
  
  }
  #header{
  width: 80%;
  display : flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 5px;
}
#logo img {
  width : 100px;
  }
#logo{
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
}
#menulist{
  width: 80%;
  display: flex;
  justify-content: space-around;
}
#menulist li{
  transform: none;
}
#mainbox {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    
}
#main{
  width: 90%;
  margin: 0 auto;
  top:0;
}
.w-100{
  width: 100%;
  height: 350px;
}
#footer{
  width: 80%;
  position:relative;
  bottom: 0;
  margin-top: 5px;
}
}

@media(max-width:490px){
  /* 1194px 이상일 때의 모습 */
  #box{
  width : 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(1, auto);
  margin-top : 0px;
  /* position: relative; */
  }
  .item:nth-child(2){
    grid-row:3;
}
  .item:nth-child(3){
    grid-row:2;
  }
 
  #header{
  width: 100%;
  height: 180px;
  display : flex;
  flex-direction: column;
  padding-bottom: 0;
  margin: 0;
}
#logo img {
  width : 200px;
  padding: 0;
  }
#logo{
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -30px;
  padding: 0;
  top:-30px
}
#menulist{
  width: 90%;
  display: flex;
  justify-content: end;
  column-gap: 10px;
  z-index: 30px;
  position: absolute;
  top:140px;
}
#menulist li{
  list-style: none;
  border : 2px solid #BEC1FF;
  border-radius: 10px;
    width : 50px;
    height : 30px;
    text-align : center;
    font-size : 10px;
    padding-top: 5px;
    margin:0;
    color: black;
    cursor: pointer;
  transform: none;
}
#mainbox {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 0;
}

#main{
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 100px;
  top:0;
}
.w-100{
  bottom: 0;
  width: 100%;
  height: 100%;
}

#footer{
  width: 100%;
  position:relative;
  bottom: 0;
  margin-top: 5px;
  font-size: 10px;
}
#sh, #listSearch{
  padding: 0;
  margin-top: 5px;
}
#sh{
  width: 80%;
  justify-content: start;
  column-gap: 60px;
  padding-bottom: 5px;
}
}


</style>
