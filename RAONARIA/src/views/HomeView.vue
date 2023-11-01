<script>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from "vue-router";
import  EasySearch from '../components/EasySearch.vue';
import {ref, provide} from 'vue'
import Home_Login from '../components/Home_Login.vue';
import Home_Easy from '../components/Home_Easy.vue';

const sessionStorage = window.sessionStorage;
const uid = sessionStorage.getItem('user_id');

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
  },
  data(){
    return {uid}
  },
  watch:{
    uid(nvalue,ovalue){
      console.log(ovalue);
      console.log(nvalue);
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
  
  </main>
</template>

<style scoped>

*{
  padding : 0;
  margin : 0;
  box-sizing : border-box;
  font-family: 'SUITE-Regular';
}

main{
  width: 100vw;
  height: 100vh;
  display: grid; 
  padding: 0;
  margin: 0;

}

#box{
    width : 1000px;
    margin : 0 auto;
    height : 700px;
    display : flex;
    margin-top : 70px;
    background: #fff;
    border-radius: 30px;
    border: 1px solid #d9d9d9;
    /* position: relative; */

}
#header{
  width: 12.5%;
  margin : 0 auto;
  display : flex;
  flex-direction : column ;
  text-align: center;
  align-items: center;
  /* border-radius:30px 0 0 30px; */
  /* border: 5px solid #a9bb51;
  border-right: 0;
  padding-left: 10px; */
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
  font-family: 'HakgyoansimSantteutdotumL';
  font-weight: 700;
    list-style: none;
    background:#FFD124;
    color: black;
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
    /* background:#fff;
    border: 5px solid #a9bb51; */
    /* border: solid #aaa; */
    /* border-left: 0;
    border-radius: 0 30px 30px 0; */
}

#main{

  width: 500px;
  position: relative;
  top:-50px;
}
#main div{
  border-radius : 30px;
}
/* @keyframes flip {
  from{ transform: rotateY(0deg); }
  to { transform: rotateY(90deg); }
} */
.w-100{
  width: 500px;
  height: 800px;
  border-radius : 30px;
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
/* #school {
    width : 340px;
    height : 55px;
    text-align : center;
    border : 3px solid #BEC1FF;
    border-radius : 5px;
    outline : none;
} */

#footer{
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 5px solid #a9bb51;
  border-bottom: 0;
  border-radius:30px 30px 0 0  ; */
}
#haddr{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
#haddr{
  column-gap: 50px;
}
#page{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
/* --------------------태블릿 버전------------------- */

@media(min-width:490px) and (max-width:1194px){

  main{
    width: 100%;
    height: 100%;
    background: none;
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
  background :none ;
  margin-top: 120px ;
}
#logo img {
  width : 100px;
  }
#logotext{
  position: absolute;
  top:0;
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
  position: absolute;
  width : 100px;
  padding: 0;
  left: 10px;
  }
  #logotext img{
    position: absolute;
    width: 200px;
    top:20px;
    left: 120px;
    
  }
  #logo{
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#menulist{
  width: 90%;
  display: flex;
  justify-content: end;
  column-gap: 10px;
  z-index: 30px;
  position: absolute;
  top:130px;
}
#menulist li{
  list-style: none;
  border-radius: 10px;
    width : 50px;
    height : 30px;
    text-align : center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size : 10px;
    padding-top: 0;
    margin:0;
    color: black;
    cursor: pointer;
  transform: none;
}
#menulist li{
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
  padding: 5px;
}
#sh, #listSearch{
  padding: 0;
  margin-top: 0;
}
#sh{
  width: 80%;
  justify-content: start;
  column-gap: 50px;
  padding-bottom: 0;
}
}


</style>
