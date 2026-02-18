<script>
import { ref, inject } from 'vue';
import { useKindergartenStore } from '@/stores/kindergarten'

export default {
    name:'Search_Result',
    props: ['results'],
    setup(props) {
        const kindergartenStore = useKindergartenStore()

        const selectKinder = (item) => {
            kindergartenStore.selectKinder(item)
        }

        const toggleComparison = (item) => {
            const found = kindergartenStore.comparisonList.find(k => k.id === item.id)
            if (found) {
                kindergartenStore.removeFromComparison(item.id)
            } else {
                if (kindergartenStore.comparisonList.length >= 2) {
                    alert('비교는 최대 2개까지 가능합니다')
                    return
                }
                kindergartenStore.addToComparison(item)
            }
        }

        const isInComparison = (item) => {
            return !!kindergartenStore.comparisonList.find(k => k.id === item.id)
        }

        return { selectKinder, toggleComparison, isInComparison, kindergartenStore }
    }
};

</script>
<template>
  <div id="result">
      <table id="resultTable">
        <thead>
          <tr id="resultList">
            <td class="checkres"><b>선택</b></td>
            <td class="name"><b>유치원명</b></td>
            <td class="address"><b>주소</b></td>
            <td class="establishmentType"><b>설립유형</b></td>
            <td class="vehicleOperation"><b>차량운행</b></td>
            <td class="time"><b>운영시간</b></td>
          </tr>
        </thead>
        <tbody>
          <tr id="List" class="dataList" v-for="item in results" :key="item.id" @click="selectKinder(item)" style="cursor:pointer;">
            <td class="checkres"><input type="checkbox" :checked="isInComparison(item)" @click.stop="toggleComparison(item)"></td>
            <td class="name">{{ item.name }}</td>
            <td class="address">{{ item.address }}</td>
            <td class="establishmentType">{{ item.establishmentType }}</td>
            <td class="vehicleOperation">{{ item.vehicleOperation || '-' }}</td>
            <td class="time">{{ item.operatingHours }}</td>
          </tr>
          <tr v-if="results && results.length === 0">
            <td colspan="6" style="text-align:center; padding:40px; color:#888;">검색 결과가 없습니다</td>
          </tr>
        </tbody>
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
    width: 800px;
    height: 40px;
  }
  .checkres{
    width: 20px;
  }
  .name{
    width: 80px;
  }
  .address{
    width: 150px;
  }
  .establishmentType{
    width: 50px;
  }
  .vehicleOperation{
    width: 50px;
  }
  .time{
    width: 100px;
  }
  @media(min-width:577px) and (max-width:992px){
    #result,#resultTable{
      width: 100%;
    }
  }
  @media(max-width:576px){
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
