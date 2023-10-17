<script setup>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue';
const router = useRouter();

import { ref } from 'vue';

const notice = {
  title: '',
  content: '',
  user:'',
};

const notices = ref([]);

const saveNotice = () => {
  const newNotice = { ...notice };
  notices.value.push(newNotice);

  notice.title = '';
  notice.content = '';
  notice.user = '';
};


</script>

<template>
    <TopMenu />
    <TopMenu_Login />
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
        <tr id="write" v-for="(savedNotice, index) in notices" :key="index">
          <td class="noticeTd">{{ index + 1 }}</td>
          <td class="noticeTd">{{ savedNotice.title }}</td>
          <td class="noticeTd">{{ new Date().toLocaleDateString() }}</td>
          <td class="noticeTd">{{ savedNotice.user }}</td>
        </tr>
      </table>

      <!-- 공지사항을 작성 -->
      <form @submit.prevent="saveNotice">
        <div id="writeNoticeForm">
          <label for="title">제목</label>
          <input type="text" id="title" v-model="notice.title" required>
  
          <label for="content">내용</label>
          <textarea id="content" v-model="notice.content" required></textarea>
  
          <label for="user">작성자</label>
          <input type="text" id="user" v-model="notice.user" required>
          <button type="submit" id="saveButton">저장</button>
        </div>
      </form>
    </div>
<RouterView />
</template>
<style scoped>

    *{
        font-family: 'SUITE-Regular';
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #noticeBox{
        width: 1000px;
        margin: 20px auto;
        
    }
    #noticeBox h1{
        width: 100%;
        text-align: center;
        padding: 30px;
    }
    #searchBox{
        width: 800px;
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
        border: 2px solid #f35b56;
        outline: none;
    }
    #searchIp input{
        width: 450px;
        height: 40px;
        padding: 10px;
        border: 0;
        border-bottom: 3px solid #f35b56;
        background: 0;
        outline: none;
        font-weight: 700;
    }
    #Bt{
        width: 120px;
        height: 40px;
        border-radius: 30px;
        border: 0;
        background: #f58e8a;
    }
    #Bt:hover{
        color: #fff;
        background: #f35b56;
    }

    #noticeTable{
        width: 800px;
        text-align: center;
        border-bottom: 3px double #aaa;
        margin: 30px auto;
    }
    #write .noticeTd:first-child, #noticeTr .noticeTd:first-child{
      width: 50px;
    }
    #write .noticeTd:nth-child(2), #noticeTr .noticeTd:nth-child(2){
      width: 400px;
    }
    #write .noticeTd:nth-child(3), #noticeTr .noticeTd:nth-child(3){
      width: 150px;
    }
    #write .noticeTd:nth-child(4), #noticeTr .noticeTd:nth-child(4){
      width: 150px;
    }
    #writeNoticeForm{
      width: 400px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 30px;
      border: 1px solid #aaa;
      align-items: center;
      justify-content: center;
      position: absolute;
      top:30%;
      left: 0;
    }
    #writeNoticeForm input,#writeNoticeForm textarea{
      width: 350px;
      height: 100px;
    }
    #saveButton{
      width: 50px;
      height: 50px;
      border: 0;
      background: #f58e8a;
      margin: 10px;
      border-radius: 100px;
    }
    #saveButton:hover{
      background: #f35b56;
      color:#fff;
    }
    @media(max-width:490px){
        #noticeBox{
        width: 350px;
        margin: 5px auto;
    }
    #noticeBox h1{
        width: 350px;
        padding: 10px;
    }
    #searchBox{
        width: 350px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        background: #F4F4FA;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }
    .select{
        width: 50px;
        height: 30px;
    }
    #searchIp input{
        width: 200px;
        height: 30px;
        padding: 5px;
    }
    #Bt{
        width: 50px;
        height: 30px;
        border: 3px solid #aaa;
    }
    #noticeTable{
        width: 350px;
        text-align: center;
        border-bottom: 3px solid #aaa;
        margin: 30px auto;
        font-size: 10px;
    }
    }
</style>