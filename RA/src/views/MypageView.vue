<template>
<TopMenu/>
<TopMenu_Login/>
    
<div class="page_wrap">
    <Mypage_InfoBox/>
    <div class="page_Zone">
        <Mypage_Apply v-if="!isApply"/>
        <Mypage_NoApply v-if="isApply"/>
        <Mypage_New_Member/>
        <Mypage_Question/>
        
        
    </div>
    <button style="position:fixed; top:10%; left:10%;" @click="test" >테스트</button>
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
import Mypage_NoApply from '../components/Mypage_NoApply.vue'
import Mypage_NoinfoBox from '../components/Mypage_NoinfoBox.vue'


export default{
    name:'MyPage',
    components:{
        Cancel_Alert, ask_form, TopMenu, TopMenu_Login,Mypage_InfoBox,Mypage_Apply,Mypage_Question,Mypage_NoApply,Mypage_NoinfoBox
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

        const isApply = ref(false);
        provide('isApply', isApply);
        const test = () => isApply.value = !isApply.value;
        
        return{
            isCancel, cancelOpen, isForm, formOpen, isApply, test
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
@media(max-width:1194px){
    .page_wrap{
        width:650px;
    }
}
@media(max-width:490px){
    
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