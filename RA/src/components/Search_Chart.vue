<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
const router = useRouter();

</script>
<template>
<div id="info">
    <div id="harf">
      <div id="infomation">
        <table id="infoTable">
          <tr class="infoTr">
            <td>유치원명</td>
            <td></td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">개원일자</td>
            <td></td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">원장명</td>
            <td></td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">주소</td>
            <td></td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">전화번호</td>
            <td></td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">설립유형</td>
            <td></td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">운영시간</td>
            <td></td>
          </tr>
        </table>
        <div id="check">
          <div>
            <b>차량운행여부</b>
            <input type="checkbox">
          </div>
          <div>
            <b>특수학급여부</b>
            <input type="checkbox">
          </div>
          <div>
            <b>방과후돌봄</b>
            <input type="checkbox">
          </div>
        </div>
        <div id="infoBt">
          <button @click="reqOpen()" class="req_bt">상담신청</button>
          <RouterLink to="/school"><button>입학신청</button></RouterLink>
        </div>
      </div>
      <div id="map"></div>
    </div>
    <div>
      <!--차트-->
    </div>
  </div>
</template>
<style>
#info{
    max-width: 1000px;
    margin: 50px auto;
    
  }
  #harf{
    margin: 20px auto;
    width: 85%;
    display: flex;
    justify-content: space-around;
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 10px;
  }
  #infomation{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #infoTable tr{
    height: 30px;
  }
  #check{
    width: 400px;
    display: flex;
    justify-content: space-between;
  }
  #map{
    width: 400px;
    height: 300px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }
  #infoBt{
    display: flex;
    justify-content: space-between;
  }
  #infoBt button{
    width: 150px;
    height: 40px;
    background: 0;
    border: 3px solid #BEC1FF;
    border-radius: 5px;
  }
</style>