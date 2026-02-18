<template>
<TopMenu/>
<TopMenu_Login/>
    <div class="page_wrap">
        <Mypage_infoBox/>
        <div class="page_Zone">
            <Mypage_Apply v-if="mypageStore.applications.length > 0"/>
            <Mypage_NoApply v-else/>
            <Mypage_Question/>
        </div>
    </div>
    <Mypage_Cancel v-if="isCancel"/>
    <Mypage_Qcancle v-if="isAsk"/>

<transition name="fade">
    <Mypage_askform v-if="isForm"/>
</transition>
</template>

<script>
import TopMenu from '../components/TopMenu.vue'
import Mypage_Cancel from '../components/Mypage_Cancel.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue'
import Mypage_askform from '../components/Mypage_askform.vue'
import { ref, provide, onMounted, onUnmounted } from 'vue'
import Mypage_Apply from '../components/MypageApply.vue'
import Mypage_infoBox from '../components/MypageinfoBox.vue'
import Mypage_Question from '../components/Mypage_Question.vue'
import Mypage_NoApply from '../components/Mypage_NoApply.vue'
import Mypage_NoinfoBox from '../components/Mypage_NoinfoBox.vue'
import Mypage_Qcancle from '../components/Mypage_Qcancle.vue'
import { useMypageStore } from '@/stores/mypage'
import { useAuthStore } from '@/stores/auth'

export default {
    name: 'MyPage',
    components: {
        Mypage_Cancel, Mypage_askform, TopMenu, TopMenu_Login, Mypage_infoBox,
        Mypage_Apply, Mypage_Question, Mypage_NoApply, Mypage_NoinfoBox, Mypage_Qcancle
    },
    setup() {
        const mypageStore = useMypageStore()
        const authStore = useAuthStore()

        provide('mypageStore', mypageStore)
        provide('authStore', authStore)

        const isCancel = ref(false);
        const cancelOpen = () => isCancel.value = !isCancel.value;
        provide('isCancel', isCancel);
        provide('cancelOpen', cancelOpen);

        const isAsk = ref(false);
        const askOpen = () => isAsk.value = !isAsk.value;
        provide('isAsk', isAsk);
        provide('askOpen', askOpen);

        const isForm = ref(false);
        const formOpen = () => isForm.value = !isForm.value;
        provide('isForm', isForm);
        provide('formOpen', formOpen);

        const isApply = ref(false);
        provide('isApply', isApply);

        const selectedApps = ref([]);
        provide('selectedApps', selectedApps);
        const selectedInquiries = ref([]);
        provide('selectedInquiries', selectedInquiries);

        onMounted(() => {
            if (authStore.isLoggedIn) {
                mypageStore.subscribeApplications(authStore.userId)
                mypageStore.subscribeInquiries(authStore.userId)
                mypageStore.subscribeConsultations(authStore.userId)
                isApply.value = false
            } else {
                isApply.value = true
            }
        })

        onUnmounted(() => { mypageStore.cleanup() })

        return {
            isCancel, cancelOpen, isForm, formOpen, isApply, isAsk, mypageStore
        }
    }
}
</script>

<style scoped>
*{font-family: 'SUITE-Regular';}
.page_wrap{
    display:flex;
    width:1000px;
    margin:45px auto;
    gap:20px;
    background:rgba(255, 255, 255, 0.663);
}
.page_Zone{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:start;
    margin: 20px auto;
}
@media(max-width:992px){
    .page_wrap{ width:calc(100% - 40px); }
}
@media(max-width:576px){
    .page_wrap{ flex-direction: column; }
    .page_Zone{ flex-direction: column; }
}
</style>
