<template>
<TopMenu/>
<TopMenu_Login/>
    <Mypage_InfoBox/>
    <Mypage_Apply/>
    <Mypage_Question/>

<Cancel_Alert v-if="isCancel"/>
<ask_form v-if="isForm"/>

</template>

<script >
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import Cancel_Alert from '../components/Cancel_Alert.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue'
import ask_form from '../components/ask_form.vue'
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
@import url(../assets/MyPage.css);
</style>