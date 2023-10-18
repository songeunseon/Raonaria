<!-- {
  "일반 현황": "교육청명",
  "Column2": "교육지원청명",
  "Column3": "유치원명",
  "Column4": "설립유형",
  "Column5": "대표자명",
  "Column6": "원장명",
  "Column7": "설립일",
  "Column8": "개원일",
  "Column9": "주소",
  "Column10": "전화번호",
  "Column11": "홈페이지",
  "Column12": "운영시간",
  "Column13": "만3세학급수",
  "Column14": "만4세학급수",
  "Column15": "만5세학급수",
  "Column16": "혼합학급수",
  "Column17": "특수학급수",
  "Column18": "인가총정원수",
  "Column19": "3세정원수",
  "Column20": "4세정원수",
  "Column21": "5세정원수",
  "Column22": "혼합모집정원수",
  "Column23": "특수학급모집정원수",
  "Column24": "만3세유아수",
  "Column25": "만4세유아수",
  "Column26": "만5세유아수",
  "Column27": "혼합유아수",
  "Column28": "특수유아수"
 }, -->

<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
const router = useRouter();
import data from '@/assets/일반현황.json';
import { ref, onMounted } from 'vue';

const RAdata= data;
export default{
    data(){
        return {  RAdata,};
    },
    name:'Search_Result',
};

</script>
<template>
  <div id="result">
      <table id="resultTable">
        <tr id="resultList">
          <td class="checkres"><b>선택</b></td>
          <td class="name"><b>유치원명</b></td>
          <td class="address"><b>주소</b></td>
          <td class="establishmentType"><b>설립유형</b></td>
          <td class="vehicleOperation"><b>차량운행</b></td>
          <td class="time"><b>운영시간</b></td>
        </tr>
        <tr id="List" v-for="item in RAdata" :key="item.id">
          <td class="checkres"><input type="checkbox"></td>
          <td class="name">{{ item.Column3 }}</td>
          <td class="address">{{ item.Column9 }}</td>
          <td class="establishmentType">{{ item.Column4 }}</td>
          <td class="vehicleOperation">{{ item.Column6 }}</td>
          <td class="time">{{ item.Column12 }}</td>
        </tr>
      </table>
    </div>
  </template>
  
<style scoped>
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-thumb{
    background:#f35b5699;
    border: 2px solid #d9d9d9;
  }
::-webkit-scrollbar-thumb:hover {
  background: #f35b56;
}
  #result{
    width: 1000px;
    height: 500px;
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
    overflow-y: scroll;
    border: 5px solid #d9d9d999;
    border-radius: 5px;
    padding: 0 10px;
    box-shadow: 5px 0 10px #aaa,
                -5px 0 10px #aaa,
                0 5px 10px #aaa,
                0 -5px 10px #aaa;
  }
  #resultTable{
    width: 1000px;
    margin: 0px auto;

  }
  #resultList td{
    border-bottom:5px double #f35b56;
    color: #000;
  }
  #List td{
    border-bottom: 1px solid #aaa;
    font-size: 13px;
  }
  #List td:nth-child(even){
    background: #f58e8a99;
  }
  #resultTable tr{
    height: 40px;
  }
  .checkres{
    width: 20px;
  }
  .name{
    width: 100px;
  }
  .address{
    width: 150px;
  }
  .establishmentType{
    width: 100px;
  }
  .vehicleOperation{
    width: 100px;
  }
  .time{
    width: 100px;
  }
  @media(min-width:490px) and (max-width:1194px){
    #result,#resultTable{
      width: 100%;
    }
  }
  @media(max-width:490px){
    ::-webkit-scrollbar{
  display: none;
}
  #result{
    height: 300px;
    margin: 0 auto;
  }
    #result,#resultTable{
      width: 350px;
      font-size: 10px;
      padding: 0;


    }
    #resultList td{
    border-bottom:3px double #f35b56;
    color: #000;
    
  }
  #List td{
    border-bottom: 1px solid #aaa;
    font-size: 7px;
    
  }
  #List td:nth-child(even){
    background: #f58e8a99;
  }
  #resultTable tr{
    height: 30px;
  }
  .checkres{
    display: none;
  }
  .name{
    width: 40px;
  }
  .address{
    width: 80px;
  }
  .establishmentType{
    width: 40px;
  }
  .vehicleOperation{
    width: 40px;
  }
  .time{
    width: 80px;
  }
  }
</style>