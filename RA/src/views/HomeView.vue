<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { useRouter } from "vue-router";
const router = useRouter();

const main = () => {
  router.push({
    path: "/",
  });
};

const notice = () => {
  router.push({ path: "/notice" });
};


</script>
<template>
  <main>
    <div id ="box">
        <header id ="header">
            <logo id ="logo">

                <img @click="main()" src ="../assets/mainlogo.svg">
            </logo >
            <ul id="menulist">
              <li id ="notice" @click="notice()">공지사항</li>
              <li id ="search" @click="search()">조회</li>
              <li id ="reunion" @click="reunion()">동창회</li>
              <li id ="mypage" @click="mypage()">내정보</li>
            </ul>
        </header >
    <div id ="main">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/ex.png" class="d-block w-100" alt="ex" style="width: 500px; height: 800px; z-index: 10px;">
        </div>
    <div class="carousel-item">
        <img src="../assets/ex.png" class="d-block w-100" alt="ex" style="width: 500px; height: 800px; z-index: 10px;">
    </div>
        <div class="carousel-item">
            <img src="../assets/ex.png" class="d-block w-100" alt="ex" style="width: 500px; height: 800px; z-index: 10px;">
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
        <div id="shbar">
          <input id ="school" type ="text" placeholder ="유치원 이름을 입력하세요">
          <svg @click="school()" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#BEC1FF" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
        </div >
            <div id ="signin">
              <div class="input"><p><b>ID</b></p><input id ="id" type ="text" placeholder ="abc@gmail.com"></div>
              <div class="input"><p><b>PW</b></p><input id ="pw" type ="password"></div>
              <div id ="bt">
                <button id ="join" @click="join()">회원가입 </button >
                <button id ="login" @click="login()">로그인 </button >
              </div >
              <div id="sns">
                <img @click="google()" src="../assets/google.png" style="width: 50px;">
                <img @click="kakao()" src="../assets/kakao.png" style="width: 50px;">
              </div>
              <p id="not">회원이 아닐시 일부 서비스를 이용하실수 없습니다. <br>서비스 이용 원할시 회원가입을 해주세요</p>
        </div >
      
    </search >
    </div >
    <footer id ="footer">
        <div id ="addr">
            <div><b>상호: 라온아리아</b></div>
            <div><b>주소: 대전광역시 중구 중앙로 121번길 20</b></div>
        </div >
        <div id ="page"><a >이용약관 </a > | <a >개인정보 처리방침 </a > | <a >찾아오시는 길 </a > | <a @click="master()">관리자 </a > | <a @click="sitemap()">사이트맵 </a ></div >
    </footer >
    <TheWelcome />
  </main>
</template>

<style scoped>
*{
    padding : 0;
    margin : 0;
    box-sizing : border-box;
    font-size : 20px;
}
main{
  width: 100vw;
  background : #DBDBDB;
}

#box{
    max-width : 1000px;
    margin : 0 auto;
    height : 700px;
    display : flex;
    margin-top : 160px;
    position: relative;
    
}
#header{
  width: 12.5%;
  margin : 0 auto;
  display : flex;
  flex-direction : column ;
  background : #fff ;
  padding-left: 10px;
}
#logo img {
    width : 100px ;
    margin-top: 10px;
}
#logo{
  margin-bottom: 20px;
}

#menulist li{
    list-style: none;
    border : 5px solid #BEC1FF;
    border-radius : 5px;
    width : 100px;
    height : 100px;
    text-align : center;
    font-size : 20px;
    padding-top :30px;
    margin-bottom : 10px;
}
#mainbox {
    text-align :center;
    display : flex;
    flex-direction : column;
    align-items : center;
    row-gap: 20px;
    background: #fff;
    padding-right: 20px;
    
}
#main{
  width: 500px;
  position: relative;
  top:-50px;
}
#listSearch{
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #aaa;
  
}
#listTitle{
  font-weight: 900;
}
#sh{
  display: flex;
  font-size: 20px;
  column-gap: 60px;
  padding-top: 50px;
  padding-left: 50px;
  justify-content:start;
}
#shbar svg{
  margin: 20px 0 100px 0;
}
#school {
    width : 340px;
    height : 55px;
    text-align : center;
    border : 3px solid #BEC1FF;
    border-radius : 5px;
    outline : none;
}
#signin {
    width : 250px;
    display : flex;
    flex-direction : column;
}
#signin input {
    outline : none;
    border : 0;
    width : 250px;
    font-size : 20px;
    background: 0;
    text-align: center;
}
#signin .input{
  display: flex;
  border-bottom : 5px solid #BEC1FF;
  margin: 10px;
}

#bt {
    display : flex;
    width : 100%;
    justify-content : space-around;
    border: 0;
}
#join , #login {
    margin-top : 5px;
    width : 100px;
    height : 40px;
    border : 3px solid #BEC1FF;
    border-radius : 5px;
    background: 0;
}
#footer{
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  padding: 10px;
  margin-top: 60px;
}
#addr{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
#addr{
  column-gap: 50px;
}
#sns{
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
}
#not{
  font-size: 10px;
  border-top: 3px solid #aaa;
  padding: 5px;
}
</style>
