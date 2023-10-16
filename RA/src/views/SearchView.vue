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
    const reqOpen = () => isReq.value = !isReq.value;

    const showReq = ref(false);
    const reqClose = () => showReq.value =!showReq.value;
    
    provide('isReq', isReq);
    provide('showReq', showReq);
    provide('reqOpen', reqOpen);
    provide('reqClose',reqClose);


    // onMounted(()=>{
    //   const req_bt = document.querySelector('.req_bt');
    //   req_bt.addEventListener('click',function(){
    //     req_open();
    //   })
    // })
    
    return{
      isReq, reqOpen, reqClose, showReq
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
  <consulting_Req v-show="isReq"/>
  <RouterView />
</template>



<style>

*::-webkit-scrollbar{
  display: none;
}
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
  }
  #comparison:hover{
    background: #FFD124;
    color: #fff;
  }
  @media(max-width:490px){
    #comparison{
      display: none;
    }
  }
</style>
