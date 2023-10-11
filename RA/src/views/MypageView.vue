<template>
<TopMenu/>
<TopMenu_Login/>
    
<div class="page_wrap">
    <img src="../assets/">
    <Mypage_InfoBox/>
    <div class="page_Zone">
        <Mypage_Apply/>
        <Mypage_Question/>
    </div>
</div>

<Cancel_Alert v-if="isCancel"/>
<transition name="fade">
    <ask_form v-if="isForm"/>
</transition>

</template>

<script >
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import Cancel_Alert from '../components/Cancel_Alert.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue'
import ask_form from '../components/Mypage_askform.vue'
import {ref, provide} from 'vue'
import Mypage_InfoBox from '../components/MyPage_InfoBox.vue'
import Mypage_Apply from '../components/Mypage_Apply.vue'
import Mypage_Question from '../components/Mypage_Question.vue'

export default{
    name:'MyPage',
    components:{
        Cancel_Alert, ask_form, TopMenu, TopMenu_Login,Mypage_InfoBox,Mypage_Apply,Mypage_Question
    },
    setup(){
        const isCancel = ref(false);
        const cancelOpen = () => isCancel.value = !isCancel.value;
        provide('isCancel', isCancel);
        provide('cancelOpen', cancelOpen);
        
        const isForm = ref(false);
        const formOpen = () => isForm.value = !isForm.value;
        provide('isForm',isForm);
        provide('formOpen',formOpen);
        
        return{
            isCancel, cancelOpen, isForm, formOpen, 
        }
    }
}
</script>

<style scoped>
/* @import url(../assets/MyPage.css); */


.page_wrap{
    display:flex;
    width:1000px;
    margin:45px auto;
    gap:20px;
}
.page_Zone{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:start ;
    margin: 20px auto;
    height:620px;
}
</style>