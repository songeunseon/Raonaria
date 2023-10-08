<script setup>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue';


</script>

<template>
    <TopMenu/>
    <TopMenu_Login/>
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
                </div>
                <table class="cpTable">
                    <tr>
                        <td class="cpName">유치원명</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="cpAddr">주소</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="cpET">설립유형</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="cpTime">운영시간</td>
                        <td></td>
                    </tr>
                </table>
                <div class="point">
                    <div><b>차량운행여부</b><input type="checkbox" name="point"></div>
                    <div><b>특수학급여부</b><input type="checkbox" name="point"></div>
                    <div><b>방과후돌봄</b><input type="checkbox" name="point"></div>
                </div>
                <div></div>
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
                </div>
                <table class="cpTable">
                    <tr>
                        <td class="cpName">유치원명</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="cpAddr">주소</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="cpET">설립유형</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="cpTime">운영시간</td>
                        <td></td>
                    </tr>
                </table>
                <div class="point">
                    <div><b>차량운행여부</b><input type="checkbox" name="point"></div>
                    <div><b>특수학급여부</b><input type="checkbox" name="point"></div>
                    <div><b>방과후돌봄</b><input type="checkbox" name="point"></div>
                </div>
                <div></div>
                <div class="CpBt">
                    <button>상담신청</button>
                    <RouterLink to="/school"><button>입학신청</button></RouterLink>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>
<style>
body::-webkit-scrollbar-vertical{
  display: none;
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
        border: 1px solid #aaa;
        border-radius: 5px;
        padding: 10px;
    }
    .CpInfo{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 20px;
    }
    .cpTable tr{
        height: 40px;
    }
    .CpInput{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        border-bottom: 3px solid #BEC1FF;
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
    }
    .point{
        display: flex;
        justify-content: space-around;
    }
    .CpBt{
        display: flex;
        justify-content: space-around;
    }
    .CpBt button{
        width: 150px;
        height: 50px;
        font-size: 20px;
        background: 0;
        border: 3px solid #BEC1FF;
        border-radius: 5px;
    }

</style>