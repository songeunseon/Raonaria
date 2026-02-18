<script>
import {RouterLink} from 'vue-router'
import {inject, watch, ref, onMounted, nextTick} from 'vue'
import {Chart} from 'chart.js/auto'
import { useKindergartenStore } from '@/stores/kindergarten'

export default {
  name:"Search_chart",
    setup() {
    const isReq = inject('isReq');
    const reqOpen = inject('reqOpen');
    const isEasySearch = inject('isEasySearch');
    const easySearch = inject('easySearch');
    const kindergartenStore = useKindergartenStore();

    let barChart = null
    let pieChart = null

    const kinderInfo = ref(null)

    const renderCharts = (kinder) => {
      if (!kinder) return

      kinderInfo.value = kinder

      const age3 = Number(kinder.age3Students) || 0
      const age4 = Number(kinder.age4Students) || 0
      const age5 = Number(kinder.age5Students) || 0
      const mixedStudents = Number(kinder.mixedStudents) || 0
      const specialStudents = Number(kinder.specialStudents) || 0

      const age3Cap = Number(kinder.age3Capacity) || 0
      const age4Cap = Number(kinder.age4Capacity) || 0
      const age5Cap = Number(kinder.age5Capacity) || 0

      const studentData = [age3, age4, age5, mixedStudents, specialStudents]
      const labels = ['만3세','만4세','만5세','혼합','특수']

      const avgCap = age3Cap && age4Cap && age5Cap
        ? Math.round((age3Cap + age4Cap + age5Cap) / 3)
        : Math.round((age3 + age4 + age5) / 3)

      nextTick(() => {
        // Bar chart
        const ctx = document.getElementById('teacher')
        if (ctx) {
          if (barChart) barChart.destroy()
          barChart = new Chart(ctx, {
            type:'bar',
            data: {
              labels: labels,
              datasets: [{
                label: '학급별 원아 수',
                data: studentData,
                borderWidth:1,
                borderColor: '#aaa',
                base: avgCap,
                borderRadius: 20,
                backgroundColor: studentData.map(v => v >= avgCap ? '#88c8ff' : '#e69696'),
              }]
            },
            options: {
              plugins: {
                legend: {
                  labels: {
                    generateLabels: () => [
                      { datasetIndex: 0, text: '초과', fillStyle: '#88c8ff' },
                      { datasetIndex: 0, text: '미달', fillStyle: '#e69696' }
                    ],
                  },
                },
                title:{ display:true, text:"학급대비배치원생" }
              },
              indexAxis:'y',
              scales: { x: { min: 0, max: Math.max(...studentData, avgCap) + 10 } },
            },
          })
        }

        // Pie chart
        const ctx2 = document.getElementById('child')
        if (ctx2) {
          if (pieChart) pieChart.destroy()
          const pieData = [age3, age4, age5, mixedStudents, specialStudents]
          const childColor = ["#f35b56","#38b6ff","#8c52ff","#fcd03f","pink"]
          pieChart = new Chart(ctx2, {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [{
                label: '재원중인 원아 수',
                data: pieData,
                borderWidth: 5,
                borderColor: '#fff',
                pointBorderWidth: 0,
                backgroundColor: childColor,
              }]
            },
            options:{
              plugins:{
                title:{ display:true, text:"해당 유치원 현 원아 수" }
              }
            }
          })
        }
      })
    }

    watch(() => kindergartenStore.selectedKinder, (newVal) => {
      if (newVal) renderCharts(newVal)
    })

    onMounted(() => {
      if (kindergartenStore.selectedKinder) {
        renderCharts(kindergartenStore.selectedKinder)
      }
    })

    const openEasySearch = () => {
      if (kindergartenStore.selectedKinder) {
        easySearch()
      } else {
        alert('유치원을 먼저 선택해주세요')
      }
    }

    return { isReq, reqOpen, kindergartenStore, kinderInfo, openEasySearch }
    }
  }
</script>
<template>
<div id="info">
    <div id="harf">
      <div id="infomation">
        <table id="infoTable">
          <tbody>
            <tr class="infoTr">
              <td>유치원명</td>
              <td>{{ kinderInfo?.name || '-' }}</td>
            </tr>
            <tr class="infoTr">
              <td class="infolist">개원일자</td>
              <td>{{ kinderInfo?.openDate || '-' }}</td>
            </tr>
            <tr class="infoTr">
              <td class="infolist">원장명</td>
              <td>{{ kinderInfo?.directorName || '-' }}</td>
            </tr>
            <tr class="infoTr">
              <td class="infolist">주소</td>
              <td>{{ kinderInfo?.address || '-' }}</td>
            </tr>
            <tr class="infoTr">
              <td class="infolist">전화번호</td>
              <td>{{ kinderInfo?.phone || '-' }}</td>
            </tr>
            <tr class="infoTr">
              <td class="infolist">설립유형</td>
              <td>{{ kinderInfo?.establishmentType || '-' }}</td>
            </tr>
            <tr class="infoTr">
              <td class="infolist">운영시간</td>
              <td>{{ kinderInfo?.operatingHours || '-' }}</td>
            </tr>
          </tbody>
        </table>
        <div id="check">
          <input type="checkbox" class="btn-check" name="options-base" id="car" autocomplete="off" :checked="kinderInfo?.vehicleOperation === '운영'" disabled>
          <label class="btn" for="car">차량운행여부</label>

          <input type="checkbox" class="btn-check" name="options-base" id="special" autocomplete="off" :checked="Number(kinderInfo?.specialClasses) > 0" disabled>
          <label class="btn" for="special">특수학급여부</label>

          <input type="checkbox" class="btn-check" name="options-base" id="after" autocomplete="off" checked disabled>
          <label class="btn" for="after">방과후돌봄</label>
        </div>

      </div>
      <div id="map">
        <img id="ex_map" src="../assets/naver_map.png">
      </div>
    </div>
    <div id="Chart">
      <div class="teacherWrap">
        <canvas id="teacher" width="400" height="300"></canvas>
      </div>
      <div class="childWrap">
        <canvas id="child" width="400" height="300"></canvas>
      </div>
    </div>
    <div v-if="!kinderInfo" style="text-align:center; padding:40px; color:#888;">
      유치원을 선택하면 상세 정보가 표시됩니다
    </div>
    <div id="infoBt">
          <button @click="reqOpen()" class="req_bt">상담신청</button>
          <button @click="openEasySearch()">간편조회</button>
        </div>
  </div>
</template>
<style >

.teacherWrap, .childWrap{width:50%; background: #fff;}

#teacher, #child{
  width: 400px;
  height: 300px;
}
#info{
    width: 1000px;
    margin: 50px auto;
    background: #fff;
    border-radius: 30px;
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
    padding-bottom: 10px;
    border-bottom:3px solid #aaa;
    justify-content: space-between;
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
    cursor: pointer;
  }
  #infoBt button:hover{
    background: #0d6efd;
    color: #fff;
  }
  @media(min-width:577px) and (max-width:992px){
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
  @media(max-width:576px){
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
  #check{
    width: 300px;
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    margin: 10px auto;
  }
  #check .btn-check[type='checkbox']:checked+label{
    background: #FFD12499;
    border: 0;
    border-radius: 100px;
    font-size: 10px;
  }
  #check .btn-check[type='checkbox']:not(:checked)+label{
    background: #fff;
    border: 0;
    border-radius: 100px;
    font-size: 10px;
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
    height: 200px;
    margin: 10px auto;
    display: flex;
    border:1px solid #8c52ff;
  }
  }
</style>