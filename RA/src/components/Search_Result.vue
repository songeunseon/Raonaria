<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
const router = useRouter();
</script>
<template>
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
  #result{
    width: 1000px;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
  }
  #resultTable{
    width: 1000px;
    margin: 20px auto;

  }
  #resultTable tr td{
    border-bottom:3px double #60baaf;
    color: #000;
  }

  #resultTable tr{
    height: 40px;
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