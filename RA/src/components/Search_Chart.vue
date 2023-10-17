<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import {inject} from 'vue'
const router = useRouter();
export default{
  name:"Search_chart",
  setup(){
    const isReq = inject('isReq');
    const reqOpen = inject('reqOpen');

    return{isReq, reqOpen}
  }
}




</script>
<template>
<div id="info">
    <div id="harf">
      <div id="infomation">
        <table id="infoTable">
          <tr class="infoTr">
            <td>유치원명</td>
            <td>하나유치원</td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">개원일자</td>
            <td>2000.05.25</td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">원장명</td>
            <td>김하나</td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">주소</td>
            <td>대전 서구 용문동</td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">전화번호</td>
            <td>042-271-3123</td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">설립유형</td>
            <td>국공립</td>
          </tr>
          <tr class="infoTr">
            <td class="infolist">운영시간</td>
            <td>09:00~18:00</td>
          </tr>
        </table>
        <div id="check">

          <input type="checkbox" class="btn-check" name="options-base" id="car" autocomplete="off" checked>
          <label class="btn" for="car">차량운행여부</label>
          
          <input type="checkbox" class="btn-check" name="options-base" id="special" autocomplete="off" checked>
          <label class="btn" for="special">특수학급여부</label>
          
          <input type="checkbox" class="btn-check" name="options-base" id="after" autocomplete="off" checked>
          <label class="btn" for="after">방과후돌봄</label>
          
        </div>
        
      </div>
      <div id="map">
        <img id="ex_map" src="../assets/naver_map.png">
      </div>
    </div>
    <div id="Chart">
      <div></div>
      <div></div>
    </div>
    <div id="infoBt">
          <button @click="reqOpen()" class="req_bt">상담신청</button>
          <RouterLink to="/school"><button>입학신청</button></RouterLink>
        </div>
  </div>
</template>
<style scoped>


#info{
    width: 1000px;
    margin: 50px auto;
  }
  #harf{
    margin: 20px auto;
    width: 85%;
    display: flex;
    justify-content: center;
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
  .infoTr td:first-child{
    padding-left: 20px;
  }
  .infoTr td:last-child{
    text-align: center;
    font-weight: 700;
  }
  #check{
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  #check .btn-check[type='checkbox']:checked+label{
    background: #FFD12499;
    border: 0;
    border-radius: 100px;
  }
  #check .btn-check[type='checkbox']:not(:checked)+label{
    background: #fff;
    border: 0;
    border-radius: 100px;
  }
  #map{
    width: 400px;
    height: 250px;
    border: 1px solid #aaa;
    border-radius: 5px;
    overflow: hidden;
  }
  
  #Chart{
    width: 800px;
    height: 300px;
    margin: 10px auto;
    display: flex;
    border:1px solid #8c52ff;
  }
  #infoBt{
    display: flex;
    justify-content: center;
    column-gap: 100px;
  }
  #infoBt button{
    width: 100px;
    height: 40px;
    background:#7bb1ff99;
    border:0;
    border-radius: 30px;
  }
  #infoBt button:hover{
    background: #0d6efd;
    color: #fff;
  }
  @media(min-width:490px) and (max-width:1194px){
    #info{
      width: 100%;
    }
    #check{
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
    #infoBt{
    display: flex;
    justify-content: space-around;
  }
  }
  @media(max-width:490px){
    #info{
      width: 100%;
      font-size: 10px;
    }
    #harf{
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 0;
  }
  #infomation{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 20px 0 20px;
  }
  #map{
    width: 100%;
    height: 300px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }

  #check div{
    display: flex;
    align-items: center;
    column-gap: 5px;
  }
  #infoBt button{
    width: 60px;
    height: 25px;
    background:#7bb1ff99;
    border:0;
    border-radius: 5px;
    
  }
  #infoBt{
    justify-content: center;
    column-gap: 30px;
    margin: 10px;
  }
  #Chart{
    width: 350px;
    height: 300px;
    margin: 10px auto;
    display: flex;
    border:1px solid #8c52ff;
  }
  }
</style>