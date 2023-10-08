<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
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
        <b class="optionText">지역</b>
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
        <b class="optionText">운영항목</b>
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
        <b class="optionText">설립유형</b>
        <div class="optionList">
          <select class="optiontag" aria-label="option3">
            <option selected>구분</option>
            <option value="1">국/공립</option>
            <option value="2">사립</option>
          </select>
        </div>
      </div>
      <div class="searchList">
        <b class="optionText">학급</b>
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
</template>
<style>
  #box{
    width: 1000px;
    height: 300px;
    margin: 20px auto;
    background: #F4F4FA;
    padding: 10px;
  }
  #searchInput{
    width: 500px;
    height: 50px;
    font-size: 30px;
    margin: 10px auto;
    border: 0;
    border-bottom: 3px solid #60baaf;
    text-align: center;
    display: flex;
    align-items: center;
  }
  #searchText{
    border: 0;
    outline: none;
    text-align: center;
    padding-left: 50px;
    background: 0;
  }
  #optionBox{
    width: 80%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 15px;
  }
  .searchList{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .optionText{
    margin-bottom:0.5rem;
    font-size: 20px;
    font-weight: 700;
  }
  .optionList{
    font-size: 15px;
  }
  .optiontag{
    border: 0;
    background: 0;
    border-bottom:2px solid #000;
    padding: 5px;
    outline: none;
    width: 100px;
  }
  option{
    text-align: left;

  }
</style>