<script>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import  EasySearch from '../components/EasySearch.vue';
import {ref, provide} from 'vue'

export default{
  components:{EasySearch},
  setup(){
    const isEasySearch = ref(false);
    const easySearch = () => {
      isEasySearch.value = true;
    }

    provide('isEasySearch', isEasySearch);
    provide('easySearch', easySearch);
    return{
      isEasySearch, easySearch
    }
  }
}
</script>
<template>
<div id="shbar">
    <input id ="school" type ="text" placeholder ="유치원 이름을 입력하세요">
        <svg @click="easySearch()" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#BEC1FF" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
</div >
<EasySearch v-if="isEasySearch"/>
</template>
<style>
#shbar svg{
  margin: 20px 0 100px 0;
}

#school {
    width : 340px;
    height : 55px;
    text-align : center;
    border : 3px solid #BEC1FF;
    border-radius : 5px;
    outline : none;
}
</style>