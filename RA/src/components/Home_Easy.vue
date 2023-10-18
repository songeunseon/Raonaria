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
  <svg @click="easySearch()" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi Hbi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>

  <input id ="school" type ="text" placeholder ="유치원 이름을 입력하세요">
  
</div >
<EasySearch v-if="isEasySearch"/>
</template>
<style scoped>
*{font-family: 'SUITE-Regular';}
.Hbi-search{
  position: absolute;
  margin: 10px;
  animation: blink 2s infinite alternate;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
#shbar svg{
  width:30px;
  height:30px;
}
#school {
  width : 340px;
  height : 55px;
  text-align : center;
  border: 0;
  border-bottom : 3px solid #a9bb51;
  outline : none;
  margin: 0 auto;
  margin-bottom: 250px;
}

@media(min-width:490px) and (max-width:1194px){
  #shbar svg{
    margin-top: 40px;
  }
  #school {
    width : 340px;
    height : 55px;
    text-align : center;
    border: 0;
    border-bottom : 3px solid #a9bb51;
    outline : none;
    margin: 0 auto;
    margin-bottom: 140px;
    margin-top: 30px;
}
  }
  @media(max-width:490px){
  #shbar svg{
  width:20px;
  height:20px;
}
#school {
  width : 300px;
  height : 40px;
  text-align : center;
  border: 0;
  border-bottom : 3px solid #a9bb51;
  outline : none;
  margin: 0 auto;
  margin-bottom: 50px;
  font-size: 15px;
}


}

</style>