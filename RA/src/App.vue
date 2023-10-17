<script>
import { RouterLink, RouterView } from "vue-router";
import {ref, provide} from 'vue'
export default{
  
}
</script>

<template>
  <RouterView />
</template>

<style>
@font-face {
    font-family: 'HakgyoansimSantteutdotumL';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimSantteutdotumL.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
  /* @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100&display=swap'); */

*::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-thumb {
  background: #FFD12499;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
}


::-webkit-scrollbar-thumb:hover {
  background: #FFD124;
}




  body{
  background-image: url(../src/assets/bg2.svg)!important;
  background-size: 100vw;
  }
  @media(min-width:490px) and (max-width:1194px){
    body{
    background-image: url(../src/assets/tapbg.svg) !important;
    background-size: 100vw;
    }
  }
@media(max-width:490px){
  body{
    background-image: none !important;
  }
  }
</style>
