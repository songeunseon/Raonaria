<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import Search_Option from '../components/Search_Option.vue'
import Search_Result from '../components/Search_Result.vue'
import Search_Chart from '../components/Search_Chart.vue'

const router = useRouter();


import Consulting_Req from '../components/Consulting_Req.vue'
import { ref, provide } from "vue";
import TopMenu_Login from '../components/TopMenu_Login.vue';

export default{
  name:'SearchView',
  components:
    { Consulting_Req, TopMenu, TopMenu_Login, Search_Option, Search_Result, Search_Chart},
  data:function(){
      return{ keyword:"",selectOp:''}
    },
  methods:{
    search(data){
      console.log(data);
      this.keyword=data;
    },
    searchOption(data){
      this.selectOp=data;
    }
  },
  setup(){
    const isReq = ref(false);
    const reqOpen = () => isReq.value = !isReq.value;

    const showReq = ref(false);
    const reqClose = () => showReq.value =!showReq.value;
    
    provide('isReq', isReq);
    provide('showReq', showReq);
    provide('reqOpen', reqOpen);
    provide('reqClose',reqClose);


    
    
    return{
      isReq, reqOpen, reqClose, showReq,
    }
  }
}

</script>





<template>
  <TopMenu/>
  <TopMenu_Login/>
  <Search_Option @sendKeyword="search" @sendOption="searchOption"/>
  <div id="buttonbox">
    <RouterLink to="/comparison"><button id="comparison">유치원 비교하기</button></RouterLink> 
  </div>
  <Search_Result v-bind:keyword="keyword" v-bind:selectOp="selectOp" />
  <Search_Chart />
  <consulting_Req v-show="isReq"/>
  <div class="darkBg" v-show="isReq"></div>
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
  }
  @media(max-width:490px){
    #comparison{
      display: none;
    }
  }
</style>
