<script>
import { RouterLink, RouterView } from "vue-router";
import EasySearch from '../components/EasySearch.vue';
import { ref, provide } from 'vue'
import Home_Login from '../components/Home_Login.vue';
import Home_Easy from '../components/Home_Easy.vue';

export default{
  components:{ EasySearch, Home_Easy, Home_Login },
  setup(){
    const isEasySearch = ref(false);
    const easySearch = () => {
      isEasySearch.value = true;
    }

    const footerModal = ref(null)
    const openFooter = (type) => { footerModal.value = type }
    const closeFooter = () => { footerModal.value = null }

    provide('isEasySearch', isEasySearch);
    provide('easySearch', easySearch);
    return{
      isEasySearch, easySearch, footerModal, openFooter, closeFooter
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
        <div id ="page">
          <a @click="openFooter('terms')">이용약관</a> |
          <a @click="openFooter('privacy')">개인정보 처리방침</a> |
          <a @click="openFooter('directions')">찾아오시는 길</a> |
          <a @click="openFooter('admin')">관리자</a> |
          <a @click="openFooter('sitemap')">사이트맵</a>
        </div>
    </footer >

    <!-- 푸터 모달 -->
    <div v-if="footerModal" class="footer_overlay" @click="closeFooter()"></div>
    <div v-if="footerModal" class="footer_modal">
      <div class="footer_modal_header">
        <span v-if="footerModal==='terms'">이용약관</span>
        <span v-if="footerModal==='privacy'">개인정보 처리방침</span>
        <span v-if="footerModal==='directions'">찾아오시는 길</span>
        <span v-if="footerModal==='admin'">관리자</span>
        <span v-if="footerModal==='sitemap'">사이트맵</span>
        <i @click="closeFooter()" class="bi bi-x-circle" style="cursor:pointer; font-size:20px;"></i>
      </div>
      <div class="footer_modal_body">
        <!-- 이용약관 -->
        <div v-if="footerModal==='terms'">
          <h4>라온아리아 이용약관</h4>
          <p><b>제1조 (목적)</b><br>본 약관은 라온아리아(이하 "사이트")가 제공하는 유치원 정보 서비스의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
          <p><b>제2조 (이용자의 의무)</b><br>이용자는 서비스 이용 시 관련 법령 및 본 약관의 규정을 준수해야 하며, 타인의 권리를 침해하는 행위를 하여서는 안 됩니다.</p>
          <p><b>제3조 (서비스 내용)</b><br>사이트는 대전광역시 유치원 정보 조회, 비교, 상담신청, 입학신청, 동창회 채팅 서비스를 제공합니다.</p>
          <p><b>제4조 (회원가입)</b><br>서비스 이용을 위해 이메일과 비밀번호를 통한 회원가입이 필요하며, 일부 조회 기능은 비회원도 이용할 수 있습니다.</p>
          <p><b>제5조 (서비스 변경 및 중단)</b><br>사이트는 서비스 운영상 필요한 경우 사전 공지 후 서비스 내용을 변경하거나 중단할 수 있습니다.</p>
        </div>
        <!-- 개인정보 처리방침 -->
        <div v-if="footerModal==='privacy'">
          <h4>개인정보 처리방침</h4>
          <p><b>1. 수집하는 개인정보 항목</b><br>이메일 주소, 비밀번호, 이름, 휴대전화번호, 자녀 정보(선택)</p>
          <p><b>2. 수집 목적</b><br>회원 관리, 상담/입학 신청 처리, 서비스 제공 및 개선</p>
          <p><b>3. 보유 및 이용 기간</b><br>회원 탈퇴 시까지 보유하며, 탈퇴 즉시 파기합니다.</p>
          <p><b>4. 제3자 제공</b><br>수집된 개인정보는 이용자의 동의 없이 제3자에게 제공하지 않습니다.</p>
          <p><b>5. 정보주체의 권리</b><br>이용자는 언제든 개인정보 열람, 수정, 삭제를 요청할 수 있습니다.</p>
          <p><b>6. 연락처</b><br>개인정보 관련 문의: raonaria@example.com</p>
        </div>
        <!-- 찾아오시는 길 -->
        <div v-if="footerModal==='directions'">
          <h4>찾아오시는 길</h4>
          <div class="directions_info">
            <p><b>주소:</b> 대전광역시 중구 중앙로 121번길 20</p>
            <p><b>전화:</b> 042-123-4567</p>
            <p><b>이메일:</b> raonaria@example.com</p>
          </div>
          <div class="directions_map">
            <img src="../assets/naver_map.png" style="width:100%; border-radius:8px;">
          </div>
          <div class="directions_info" style="margin-top:15px;">
            <p><b>대중교통 이용 시</b></p>
            <p>- 버스: 102, 301, 802번 (중앙로역 하차 도보 5분)</p>
            <p>- 지하철: 1호선 중앙로역 3번 출구 도보 5분</p>
            <p><b>자가용 이용 시</b></p>
            <p>- 건물 지하 주차장 이용 가능 (2시간 무료)</p>
          </div>
        </div>
        <!-- 관리자 -->
        <div v-if="footerModal==='admin'">
          <h4>관리자 정보</h4>
          <table class="admin_table">
            <tr><td><b>사이트명</b></td><td>라온아리아</td></tr>
            <tr><td><b>대표</b></td><td>라온아리아 운영팀</td></tr>
            <tr><td><b>이메일</b></td><td>admin@raonaria.com</td></tr>
            <tr><td><b>전화번호</b></td><td>042-123-4567</td></tr>
            <tr><td><b>운영시간</b></td><td>평일 09:00 ~ 18:00</td></tr>
            <tr><td><b>주소</b></td><td>대전광역시 중구 중앙로 121번길 20</td></tr>
          </table>
          <p style="margin-top:15px; color:#888; font-size:12px;">관리자 문의는 이메일 또는 전화로 연락해주세요.</p>
        </div>
        <!-- 사이트맵 -->
        <div v-if="footerModal==='sitemap'">
          <h4>사이트맵</h4>
          <div class="sitemap_grid">
            <div class="sitemap_section">
              <b>홈</b>
              <RouterLink to="/" @click="closeFooter()">메인 페이지</RouterLink>
            </div>
            <div class="sitemap_section">
              <b>공지사항</b>
              <RouterLink to="/notice" @click="closeFooter()">공지사항 목록</RouterLink>
              <RouterLink to="/notice-write" @click="closeFooter()">공지사항 작성</RouterLink>
            </div>
            <div class="sitemap_section">
              <b>조회</b>
              <RouterLink to="/search" @click="closeFooter()">유치원 검색</RouterLink>
              <RouterLink to="/comparison" @click="closeFooter()">유치원 비교</RouterLink>
            </div>
            <div class="sitemap_section">
              <b>동창회</b>
              <RouterLink to="/reunion" @click="closeFooter()">채팅방 목록</RouterLink>
            </div>
            <div class="sitemap_section">
              <b>내 정보</b>
              <RouterLink to="/mypage" @click="closeFooter()">마이페이지</RouterLink>
              <RouterLink to="/join" @click="closeFooter()">회원가입</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
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

@media(min-width:577px) and (max-width:992px){

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

@media(max-width:576px){
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

/* 푸터 링크 */
#page a{
  cursor: pointer;
  transition: color 0.2s;
}
#page a:hover{
  color: #FFD124;
  font-weight: 700;
}

/* 푸터 모달 */
.footer_overlay{
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.4);
  z-index: 200;
}
.footer_modal{
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  max-height: 80vh;
  background: #fff;
  border-radius: 15px;
  z-index: 201;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}
.footer_modal_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 3px solid #FFD124;
  position: sticky;
  top: 0;
  background: #fff;
  border-radius: 15px 15px 0 0;
}
.footer_modal_header span{
  font-size: 20px;
  font-weight: 800;
}
.footer_modal_body{
  padding: 20px 25px 30px;
  font-size: 14px;
  line-height: 1.8;
}
.footer_modal_body h4{
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 8px;
}
.footer_modal_body p{
  margin-bottom: 10px;
}
.directions_map{
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 10px;
}
.admin_table{
  width: 100%;
  border-collapse: collapse;
}
.admin_table td{
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}
.admin_table td:first-child{
  width: 100px;
  color: #555;
}
.sitemap_grid{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.sitemap_section{
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.sitemap_section b{
  font-size: 16px;
  color: #FFD124;
  margin-bottom: 5px;
  padding-bottom: 3px;
  border-bottom: 2px solid #FFD124;
}
.sitemap_section a{
  color: #333;
  text-decoration: none;
  font-size: 14px;
  padding: 3px 0;
}
.sitemap_section a:hover{
  color: #FFD124;
}
@media(max-width:576px){
  .footer_modal{
    width: 95%;
  }
}

</style>
