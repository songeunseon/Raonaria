<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
}
@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
  /* @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100&display=swap'); */

  *::-webkit-scrollbar{
  display: none;
}

body{
  background-image: url(../src/assets/bg2.svg)!important;
  }
</style>
