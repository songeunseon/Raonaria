<script setup>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue';
const router = useRouter();

</script>

<template>
    <TopMenu/>
    <TopMenu_Login/>
    <div id="noticeBox">
        <h1>공지사항</h1>
        <div id="searchBox">
            <div id="searchOp">
                <select class="select" aria-label="Default select example">
                    <option selected>구분</option>
                    <option value="1">제목</option>
                    <option value="2">등록일</option>
                    <option value="3">작성자</option>
                </select>
            </div>
            <div id="searchIp">
                <input type="text" placeholder="검색어를 입력해주세요">
            </div>
            <button id="Bt">검색</button>
        </div>
        <table id="noticeTable">
            <tr id="noticeTr">
                <td class="noticeTd">순번</td>
                <td class="noticeTd">제목</td>
                <td class="noticeTd">등록일</td>
                <td class="noticeTd">작성자</td>
            </tr>
        </table>
    </div>

<RouterView />
</template>
<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #noticeBox{
        max-width: 1000px;
        margin: 20px auto;
        
    }
    #noticeBox h1{
        width: 100%;
        text-align: center;
        padding: 30px;
    }
    #searchBox{
        max-width: 800px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        background: #F4F4FA;
        justify-content: space-around;
        align-items: center;
    }
    .select{
        width: 120px;
        height: 40px;
        text-align: center;
    }
    #searchIp input{
        width: 450px;
        height: 40px;
        padding: 10px;
        border: 0;
        outline: none;
    }
    #Bt{
        width: 120px;
        height: 40px;
        border: 0;
        border-right: 3px solid #aaa;
        border-bottom: 3px solid #aaa;
    }
    #Bt:hover{
        width: 120px;
        height: 40px;
        border: 0;
        border-left: 3px solid #aaa;
        border-top: 3px solid #aaa;
    }
    #noticeTable{
        min-width: 800px;
        text-align: center;
        border-bottom: 3px solid #aaa;
        margin: 30px auto;
    }

</style>