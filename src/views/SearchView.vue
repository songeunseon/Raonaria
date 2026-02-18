
<script>
import {RouterLink, RouterView} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import Search_Option from '../components/Search_Option.vue'
import Search_Result from '../components/Search_Result.vue'
import Search_Chart from '../components/Search_Chart.vue'
import EasySearch from '../components/EasySearch.vue'
import Consulting_Req from '../components/Consulting_Req.vue'
import { ref, provide, onMounted } from "vue";
import TopMenu_Login from '../components/TopMenu_Login.vue';
import { useKindergartenStore } from '@/stores/kindergarten'

export default {
  name:'SearchView',
  components:
    { Consulting_Req, TopMenu, TopMenu_Login, Search_Option, Search_Result, Search_Chart, EasySearch },
  setup(){
    const kindergartenStore = useKindergartenStore()

    const keyword = ref('')
    const selectOp = ref({ location:'', operation:'', est:'', uclass:'' })
    const filteredResults = ref([])

    const isReq = ref(false);
    const reqOpen = () => isReq.value = !isReq.value;

    const showReq = ref(false);
    const reqClose = () => showReq.value = !showReq.value;

    const isEasySearch = ref(false);
    const easySearch = () => isEasySearch.value = !isEasySearch.value;

    provide('isReq', isReq);
    provide('showReq', showReq);
    provide('reqOpen', reqOpen);
    provide('reqClose', reqClose);
    provide('isEasySearch', isEasySearch);
    provide('easySearch', easySearch);
    provide('kindergartenStore', kindergartenStore);

    const doSearch = () => {
      const filters = {}
      if (keyword.value) filters.keyword = keyword.value
      if (selectOp.value.location) filters.region = selectOp.value.location
      if (selectOp.value.est) filters.establishmentType = selectOp.value.est
      if (selectOp.value.operation) filters.operationType = selectOp.value.operation
      if (selectOp.value.uclass) filters.uclass = selectOp.value.uclass
      filteredResults.value = kindergartenStore.search(filters)
    }

    const onKeyword = (data) => {
      keyword.value = data
      doSearch()
    }
    const onOption = (data) => {
      selectOp.value = data
      doSearch()
    }

    // JSON 데이터는 스토어 생성 시점에 이미 로드됨 → 즉시 표시
    filteredResults.value = kindergartenStore.kindergartens

    onMounted(() => {
      // Firestore에 데이터가 있으면 업그레이드 (비동기, 실패해도 무방)
      kindergartenStore.fetchAll()
    })

    return {
      isReq, reqOpen, reqClose, showReq,
      isEasySearch, easySearch,
      keyword, selectOp, filteredResults,
      kindergartenStore, onKeyword, onOption
    }
  }
}

</script>

<template>
  <TopMenu/>
  <TopMenu_Login/>
  <Search_Option @sendKeyword="onKeyword" @sendOption="onOption"/>
  <div id="buttonbox">
    <RouterLink to="/comparison"><button id="comparison">유치원 비교하기</button></RouterLink>
  </div>
  <Search_Result :results="filteredResults" />
  <Search_Chart />
  <consulting_Req v-show="isReq"/>
  <EasySearch v-if="isEasySearch"/>
  <div class="darkBg" v-show="isReq || isEasySearch"></div>
  <RouterView />
</template>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'SUITE-Regular';
}

  #buttonbox{
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }
  #comparison{
    width: 200px;
    height: 40px;
    border: 0;
    background: #fcd03e99;
    border-radius: 30px;
    font-size: 20px;
    margin: 20px;
  }
  #comparison:hover{
    background: #FFD124;
    color: #fff;
  }
  .darkBg{
    width:100vw; height:100vh;
    background:rgba(0, 0, 0, 0.4);
    position:fixed; top:0; left:0;
    z-index: 50;
  }
  @media(max-width:576px){
    #comparison{
      display: none;
    }
  }
</style>
