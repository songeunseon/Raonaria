<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import Search_Option from '../components/Search_Option.vue'
import Search_Result from '../components/Search_Result.vue'
import Search_Chart from '../components/Search_Chart.vue'

const router = useRouter();

//json파일 불러오기

import Consulting_Req from '../components/Consulting_Req.vue'
import { ref, provide } from "vue";
import TopMenu_Login from '../components/TopMenu_Login.vue';
export default{
  name:'SearchView',
    components:
    { Consulting_Req, TopMenu, TopMenu_Login, Search_Option, Search_Result, Search_Chart},
  setup(){
    const isReq = ref(false);
    const reqOpen = () => {isReq.value = !isReq.value;}
    
    provide('isReq', isReq);
    provide('reqOpen', reqOpen);

    // onMounted(()=>{
    //   const req_bt = document.querySelector('.req_bt');
    //   req_bt.addEventListener('click',function(){
    //     req_open();
    //   })
    // })
    
    return{
      isReq, reqOpen,
    }
  }
}

</script>





<template>
  <TopMenu/>
  <TopMenu_Login/>
  <Search_Option />
  <Search_Result />
  <div id="buttonbox">
    <RouterLink to="/comparison"><button id="comparison">유치원 비교하기</button></RouterLink> 
  </div>
  <Search_Chart />
  <RouterView />
</template>



<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


  #buttonbox{
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }
  #comparison{
    width: 100%;
    height: 40px;
    background: 0;
    border: 3px solid #BEC1FF;
    border-radius: 5px;
    font-size: 20px;
  }
  
</style>
