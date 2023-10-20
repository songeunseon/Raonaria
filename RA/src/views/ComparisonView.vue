<script >
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue';
import {onMounted} from 'vue'
import {Chart} from 'chart.js/auto'
const router = useRouter();

export default{
    components:{
        TopMenu, TopMenu_Login
    },
  name:"Search_chart",
    setup() {
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
        const data2 = [22,14,21,10,19];
        const childColor = ["#f35b56","#38b6ff","#8c52ff","#fcd03f","pink"];
        new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: label2,
                    datasets: [{
                        label: '재원중인 원아 수',
                        data: data2,
                        borderWidth: 3,
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
        const ctx3 = document.getElementById('teacher2');
        const label3 = ['만1세','만2세','만3세','만4세','만5세'];
        const data3 = [13,20,9,17,28];
        const avg3 = 15;

        new Chart(ctx3, {
            type:'bar',
            data: {
                labels: label3,
                datasets: [{
                    label: '학급별 원아 수',
                    data: data3,
                    borderWidth:1,
                    borderColor: '#aaa',
                    base: avg,
                    borderRadius: 20,
                    backgroundColor:avg_color(data3, avg3),
                    
                  }]
                },
                options: {
        plugins: {
            legend: {
                labels: {
                    generateLabels: (chart) => {
                        const data3 = chart.data.datasets[0].data;
                        const avg3 = 15;
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
        function avg_color(data3, avg3) {
        return data3.map(value => (value >= avg3 ? '#88c8ff' : '#e69696'));
    }


        const ctx4 = document.getElementById('child2');
        const label4 = ['만1세','만2세','만3세','만4세','만5세'];
        const data4 = [23,17,20,13,10];
        const childColor2 = ["#f35b56","#38b6ff","#8c52ff","#fcd03f","pink"];
        new Chart(ctx4, {
                type: 'pie',
                data: {
                    labels: label4,
                    datasets: [{
                        label: '재원중인 원아 수',
                        data: data4,
                        borderWidth: 3,
                        borderColor: '#fff',
                        pointBorderWidth: 0,
                        backgroundColor: childColor2,
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
    }
}
</script>

<template>
    <TopMenu />
    <TopMenu_Login />
    <div id="CP">
        <div id="left">
            <div class="CpInput">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <input type="text" placeholder="유치원 이름 검색">
            </div>
            <div class="CpInfo">
                <div class="map">
                    <img id="ex_map" src="../assets/naver_map.png">
                </div>
                <table class="cpTable">
                    <tr>
                        <td class="cpName">유치원명</td>
                        <td>하나유치원</td>
                    </tr>
                    <tr>
                        <td class="cpAddr">주소</td>
                        <td>대전 서구 용문동</td>
                    </tr>
                    <tr>
                        <td class="cpET">설립유형</td>
                        <td>국공립</td>
                    </tr>
                    <tr>
                        <td class="cpTime">운영시간</td>
                        <td>09:00~18:00</td>
                    </tr>
                </table>
                <div class="point">
                    <input type="checkbox" class="btn-check" name="options-base" id="car1" autocomplete="off" checked>
                    <label class="btn" for="car1">차량운행여부</label>
                    
                    <input type="checkbox" class="btn-check" name="options-base" id="special1" autocomplete="off" checked>
                    <label class="btn" for="special1">특수학급여부</label>
                    
                    <input type="checkbox" class="btn-check" name="options-base" id="after1" autocomplete="off" checked>
                    <label class="btn" for="after1">방과후돌봄</label>
                </div>
                <div class="CP_Chart">
                    <canvas id="teacher" width="200" height="200"></canvas>
                    <canvas id="child" width="200" height="200"></canvas>
                </div>
                <div class="CpBt">
                    <button>상담신청</button>
                    <RouterLink to="/school"><button>입학신청</button></RouterLink>
                </div>
            </div>
        </div>
        <div id="right">
            <div class="CpInput">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
                <input type="text" placeholder="유치원 이름 검색">
            </div>
            <div class="CpInfo">
                <div class="map">
                    <img id="ex_map" src="../assets/naver_map.png">
                </div>
                <table class="cpTable">
                    <tr>
                        <td class="cpName">유치원명</td>
                        <td>두울유치원</td>
                    </tr>
                    <tr>
                        <td class="cpAddr">주소</td>
                        <td>대전 서구 용문동</td>
                    </tr>
                    <tr>
                        <td class="cpET">설립유형</td>
                        <td>사립</td>
                    </tr>
                    <tr>
                        <td class="cpTime">운영시간</td>
                        <td>09:00~20:00</td>
                    </tr>
                </table>
                <div class="point">
                    <input type="checkbox" class="btn-check" name="options-base" id="car2" autocomplete="off" checked>
                    <label class="btn" for="car2">차량운행여부</label>
                    
                    <input type="checkbox" class="btn-check" name="options-base" id="special2" autocomplete="off" checked>
                    <label class="btn" for="special2">특수학급여부</label>
                    
                    <input type="checkbox" class="btn-check" name="options-base" id="after2" autocomplete="off" checked>
                    <label class="btn" for="after2">방과후돌봄</label>
                </div>
                <div class="CP_Chart">
                    <canvas id="teacher2" width="200" height="200"></canvas>
                    <canvas id="child2" width="200" height="200"></canvas>
                </div>
                <div class="CpBt">
                    <button>상담신청</button>
                    <RouterLink to="/school"><button>입학신청</button></RouterLink>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>
<style scoped>
    *{font-family: 'SUITE-Regular';}
    
    #teacher, #child, #teacher2, #child2{
        width: 200px;
        height: 200px;
    }
    #CP{
        max-width: 1000px;
        display: flex;
        justify-content: space-between;
        margin: 10px auto;
    }
    #left, #right{
        width: 45%;
        height: 700px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        padding: 10px;
    }
    .CpInfo{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 15px;
    }
    .CpInfo .cpTable tr{
        height: 40px;
    }
    .CpInfo .cpTable tr td{
        width: 30px;
        text-align: center;
    }
    .CpInput{
        width: 80%;
        margin: 0px auto;
        margin-top: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        border-bottom: 3px solid #FFD124;
    }
    .CpInput input{
        width: 80%;
        text-align: center;
        border: 0;
        outline: none;
    }
    .map{
        width: 400px;
        height: 300px;
        border: 1px solid #aaa;
        margin: 0 auto;
        border-radius: 5px;
        overflow: hidden;
    }
    .point{
        display: flex;
        justify-content: space-around;
    }
    
    .CP_Chart{
        width: 400px;
        height: 200px;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
    }
    .CpBt{
        display: flex;
        justify-content: space-evenly;
    }
    .CpBt button{
        width: 100px;
        height: 100px;
        margin-top: 20px;
        font-size: 15px;
        background: #7bb1ff99;
        border: 0;
        border-radius: 100px;
    }
    .CpBt button:hover{
        background: #0d6efd;
        color: #fff;
    }
    .cpTable tr td:last-child{
        font-weight: 700;
    }
    .point .btn-check[type='checkbox']:checked+label{
    background: #FFD12499;
    border: 0;
    border-radius: 100px;
    }
    .point .btn-check[type='checkbox']:not(:checked)+label{
        background: #fff;
        border: 0;
        border-radius: 100px;
    }
</style>