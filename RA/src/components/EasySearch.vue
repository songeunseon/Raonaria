<script>

 import {inject} from 'vue';
 export default{
    name:'EasySearch',
    setup(){
        const isEasySearch = inject('isEasySearch');
        const easySearch = inject('easySearch');
        return{
            isEasySearch, easySearch
        }
    }
 }
</script>
<template>
    <div id="a"></div>
</template>
<style>
#a{
    width: 300px;
    height: 300px;
    border: 1px solid #aaa;
}
</style>