<script>
import {RouterLink, useRouter} from 'vue-router'
const router = useRouter();

</script>




<template>
  <div id="box">
  <div id="searchInput">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
    <input id="searchText" type="text" placeholder="검색어를 입력하세요">
  </div>
    <div id="optionBox">
      <div class="searchList">
        <p>지역</p>
        <div class="optionList">
          <select class="optiontag" aria-label="option1">
            <option selected>구분</option>
            <option value="1">동구</option>
            <option value="2">서구</option>
            <option value="3">중구</option>
            <option value="4">유성구</option>
            <option value="5">대덕구</option>
          </select>
        </div>
      </div>
      <div class="searchList">
        <p>운영항목</p>
        <div class="optionList">
          <select class="optiontag" aria-label="option2">
            <option selected>구분</option>
            <option value="1">차량운행</option>
            <option value="2">방과후돌봄</option>
            <option value="3">특수학급</option>
          </select>
        </div>
      </div>
      <div class="searchList">
        <p>설립유형</p>
        <div class="optionList">
          <select class="optiontag" aria-label="option3">
            <option selected>구분</option>
            <option value="1">국/공립</option>
            <option value="2">사립</option>
          </select>
        </div>
      </div>
      <div class="searchList">
        <p>학급</p>
        <div class="optionList">
          <select class="optiontag" aria-label="option4">
            <option selected>구분</option>
            <option value="1">만1세</option>
            <option value="2">만2세</option>
            <option value="3">만3세</option>
            <option value="4">만4세</option>
            <option value="5">만5세</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div id="result">
    <table id="resultTable">
      <tr id="resultList">
        <td class="name">유치원명</td>
        <td class="address">주소</td>
        <td class="establishmentType">설립유형</td>
        <td class="vehicleOperation">차량운행</td>
        <td class="time">운영시간</td>
      </tr>
    </table>
  </div>
</template>

<style>
  #box{
    width: 1000px;
    height: 300px;
    border-bottom: 3px solid #BEC1FF;
  }
  #searchInput{
    width: 500px;
    height: 50px;
    font-size: 30px;
    margin: 20px auto;
    border: 0;
    border-bottom: 3px solid #BEC1FF;
    text-align: center;
    display: flex;
    align-items: center;
  }
  #searchText{
    border: 0;
    outline: none;
    text-align: center;
    padding-left: 50px;
  }
  #optionBox{
    width: 700px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    border: 1px solid black;
    font-size: 15px;
  }
  .searchList{
    display: flex;
  }
  .optionList{
    font-size: 15px;
    padding-left: 5px;
  }
  .optiontag{
    background: #BEC1FF;
    border: 0;
  }
  #result{
    width: 1000px;
    font-size: 20px;
    text-align: center;
  }
  #resultTable{
    width: 700px;
    margin: 20px auto;

  }
  #resultTable tr td{
    border: 1px solid black;
  }
  #resultTable tr{
    height: 40px;
    background: #d9d9d9;
  }
  #resultTable tr td:nth-child(1){
    width: 20%;
  }
  #resultTable tr td:nth-child(2){
    width: 15%;
  }
  #resultTable tr td:nth-child(3){
    width: 15%;
  }
  #resultTable tr td:nth-child(4){
    width: 15%;
  }
  #resultTable tr td:nth-child(5){
    width: 35%;
  }
</style>
