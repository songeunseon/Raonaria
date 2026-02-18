<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useNoticeStore } from '@/stores/notice';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const noticeStore = useNoticeStore();
const authStore = useAuthStore();

const searchKeyword = ref('');
const searchCategory = ref('제목');
const showWriteForm = ref(false);

const newNotice = ref({ title: '', content: '' });

const filteredNotices = computed(() => {
  if (!searchKeyword.value) return noticeStore.notices;
  const kw = searchKeyword.value.toLowerCase();
  return noticeStore.notices.filter(n => {
    if (searchCategory.value === '제목') return n.title?.toLowerCase().includes(kw);
    if (searchCategory.value === '작성자') return n.author?.toLowerCase().includes(kw);
    return n.title?.toLowerCase().includes(kw);
  });
});

const formatDate = (timestamp) => {
  if (!timestamp) return '';
  const d = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
};

const saveNotice = async () => {
  if (!newNotice.value.title || !newNotice.value.content) {
    alert('제목과 내용을 입력해주세요');
    return;
  }
  await noticeStore.addNotice(
    newNotice.value.title,
    newNotice.value.content,
    authStore.userName || '관리자',
    authStore.userId
  );
  newNotice.value = { title: '', content: '' };
  showWriteForm.value = false;
};

onMounted(() => { noticeStore.subscribe(); });
onUnmounted(() => { noticeStore.unsubscribe(); });
</script>

<template>
    <TopMenu />
    <TopMenu_Login />
    <div id="noticeBox">
      <h1>공지사항</h1>
      <div id="searchBox">
        <div id="searchOp">
          <select v-model="searchCategory" class="select">
            <option>제목</option>
            <option>작성자</option>
          </select>
        </div>
        <div id="searchIp">
          <input v-model="searchKeyword" type="text" placeholder="검색어를 입력해주세요">
        </div>
        <button id="Bt">검색</button>
      </div>

      <div v-if="authStore.isLoggedIn" style="text-align:right; margin: 10px 100px;">
        <button @click="showWriteForm = !showWriteForm" style="padding:8px 16px; background:#0d6efd; color:#fff; border:0; border-radius:5px; cursor:pointer;">
          {{ showWriteForm ? '닫기' : '글쓰기' }}
        </button>
      </div>

      <div v-if="showWriteForm" id="writeNoticeForm">
        <label for="title">제목</label>
        <input type="text" id="title" v-model="newNotice.title" placeholder="제목을 입력하세요" required>
        <label for="content">내용</label>
        <textarea id="content" v-model="newNotice.content" placeholder="내용을 입력하세요" required></textarea>
        <button @click="saveNotice" id="saveButton">저장</button>
      </div>

      <table id="noticeTable">
        <tr id="noticeTr">
          <td class="noticeTd">순번</td>
          <td class="noticeTd">제목</td>
          <td class="noticeTd">등록일</td>
          <td class="noticeTd">작성자</td>
        </tr>
        <tr class="write" v-for="(notice, index) in filteredNotices" :key="notice.id">
          <td class="noticeTd">{{ filteredNotices.length - index }}</td>
          <td class="noticeTd">{{ notice.title }}</td>
          <td class="noticeTd">{{ formatDate(notice.createdAt) }}</td>
          <td class="noticeTd">{{ notice.author }}</td>
        </tr>
        <tr v-if="filteredNotices.length === 0" class="write">
          <td class="noticeTd" colspan="4" style="color:#888;">공지사항이 없습니다</td>
        </tr>
      </table>
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
        cursor: pointer;
    }
    #Bt:hover{
        color: #fff;
        background: #f35b56;
    }

    #noticeTable{
        width: 800px;
        text-align: center;
        margin: 30px auto;
      }
    #noticeTr{
        border-bottom: 3px double #aaa;
    }
    #noticeTr td{
      padding: 10px;
    }
    .write{
      height: 30px;
      border-bottom: 1px solid #aaa;
    }
    .write .noticeTd:first-child, #noticeTr .noticeTd:first-child{
      width: 50px;
    }
    .write .noticeTd:nth-child(2), #noticeTr .noticeTd:nth-child(2){
      width: 400px;
    }
    .write .noticeTd:nth-child(3), #noticeTr .noticeTd:nth-child(3){
      width: 150px;
    }
    .write .noticeTd:nth-child(4), #noticeTr .noticeTd:nth-child(4){
      width: 150px;
    }
    #writeNoticeForm{
      width: 800px;
      margin: 10px auto;
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 10px;
      border: 1px solid #aaa;
      padding: 20px;
      align-items: center;
      justify-content: center;
      background: #F4F4FA;
      border-radius: 8px;
    }
    #writeNoticeForm input{
      width: 100%;
      height: 40px;
      padding: 10px;
      border: 1px solid #ddd;
      outline: none;
    }
    #writeNoticeForm textarea{
      width: 100%;
      height: 100px;
      padding: 10px;
      border: 1px solid #ddd;
      outline: none;
      resize: vertical;
    }
    #writeNoticeForm label{
      width: 100%;
      font-weight: 700;
    }
    #saveButton{
      width: 100px;
      height: 40px;
      border: 0;
      background: #f58e8a;
      border-radius: 30px;
      cursor: pointer;
      font-weight: 700;
    }
    #saveButton:hover{
      background: #f35b56;
      color:#fff;
    }
    @media(max-width:576px){
      #noticeBox{
        width: 300px;
        margin: 0px auto;
    }
    #noticeBox h1{
        width: 300px;
        text-align: center;
        padding: 10px 0px;
    }
    #searchBox{
        width: 300px;
        height: 40px;
        font-size: 13px;
    }
    .select{
        width: 50px;
        height: 30px;
    }
    #searchIp input{
        width: 200px;
        height: 30px;
        padding: 5px;
        border-bottom: 2px solid #f35b56;
    }
    #Bt{
        width: 30px;
        height: 30px;
        border-radius: 100px;
        color: #fff;
        background: #f35b56;
    }
    #noticeTable{
      font-size: 13px;
        width: 300px;
        border-bottom: 2px solid #aaa;
        margin: 10px auto;
    }
    .write .noticeTd:nth-child(2), #noticeTr .noticeTd:nth-child(2){
      width: 200px;
    }
    .write .noticeTd:nth-child(3), #noticeTr .noticeTd:nth-child(3){
      width: 100px;
    }
    .write .noticeTd:nth-child(4), #noticeTr .noticeTd:nth-child(4){
      width: 50px;
    }
    #noticeTr td{ padding: 2px; }
    #writeNoticeForm{ width: 300px; }
    }
</style>
