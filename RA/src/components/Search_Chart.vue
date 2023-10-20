<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import {inject} from 'vue'
import {onMounted} from 'vue'
import {Chart} from 'chart.js/auto'
const router = useRouter();
export default{
  name:"Search_chart",
    setup() {
      
    const isReq = inject('isReq');
    const reqOpen = inject('reqOpen');

    onMounted(() => {
        const ctx = document.getElementById('teacher');
        const label = ['만1세','만2세','만3세','만4세','만5세'];
        const data = [23,17,20,13,10];
        const avg = 15;

        new Chart(ctx, {
            type:'bar',
            data: {
                labels: label,
                datasets: [{
                    label: '학급별 원아 수',
                    data: data,
                    borderWidth:1,
                    borderColor: '#aaa',
                    base: avg,
                    borderRadius: 20,
                    backgroundColor:avg_color(data, avg),
                    
                  }]
                },
                options: {
        plugins: {
            legend: {
                labels: {
                    generateLabels: (chart) => {
                        const data = chart.data.datasets[0].data;
                        const avg = 15;
                        return [
                            {
                                datasetIndex: 0,
                                text: '초과',
                                fillStyle: '#88c8ff',
                            },
                            {
                                datasetIndex: 0,
                                text: '미달',
                                fillStyle: '#e69696',
                            }
                        ];
                    },
                },
            },
            title:{
                display:true,
                text:"학급대비배치원생"
            }
          },
          indexAxis:'y',
        scales: {
            x: {
              min:5,max:30
            },
        
    },
  },
        });
        function avg_color(data, avg) {
        return data.map(value => (value >= avg ? '#88c8ff' : '#e69696'));
    }


        const ctx2 = document.getElementById('child');
        const label2 = ['만1세','만2세','만3세','만4세','만5세'];
        const data2 = [34,15,27,40,42];
        const childColor = ["#f35b56","#38b6ff","#8c52ff","#fcd03f","pink"];
        new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: label2,
                    datasets: [{
                        label: '재원중인 원아 수',
                        data: data2,
                        borderWidth: 5,
                        borderColor: '#fff',
                        pointBorderWidth: 0,
                        backgroundColor: childColor,
                    }]
                },
                options:{
                  plugins:{
                    title:{
                      display:true,
                      text:"해당 유치원 현 원아 수"
                    }
                  }
                }
            });
    });
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
      <div class="teacherWrap">
        <canvas id="teacher" width="400" height="300"></canvas>
      </div>
      <div class="childWrap">
        <canvas id="child" width="400" height="300"></canvas>
      </div>
    </div>
    <div id="infoBt">
          <button @click="reqOpen()" class="req_bt">상담신청</button>
          <RouterLink to="/school"><button>입학신청</button></RouterLink>
        </div>
  </div>
</template>
<style >

.teacherWrap, .childWrap{width:50%;}

#teacher, #child{
  width: 400px;
  height: 300px;
}
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