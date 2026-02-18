<template>
    <div class="wrap">
        <div class="title">
            <i @click="formOpen()" class="bi bi-x-circle"></i>
            <b class="word">문의</b>
        </div>
            <textarea id="ask_area" name="ask_area" rows="5" column="50" v-model="inquiryContent" placeholder="문의 내용을 입력해주세요"></textarea>
        <div class="send_wrap"></div>
        <i class="bi bi-send-fill" @click="submitInquiry()"></i>
    </div>

</template>

<script>
import { inject, ref } from 'vue';
import { useAuthStore } from '@/stores/auth'

export default {
    name: 'ask_form',
    setup() {
        const isForm = inject('isForm');
        const formOpen = inject('formOpen');
        const mypageStore = inject('mypageStore');
        const authStore = useAuthStore();
        const inquiryContent = ref('');

        const submitInquiry = async () => {
            if (!inquiryContent.value.trim()) {
                alert('문의 내용을 입력해주세요');
                return;
            }
            if (!authStore.isLoggedIn) {
                alert('로그인이 필요합니다');
                return;
            }
            try {
                await mypageStore.addInquiry(authStore.userId, inquiryContent.value.trim());
                alert('문의가 접수되었습니다');
                inquiryContent.value = '';
                formOpen();
            } catch (err) {
                alert('문의 접수 실패: ' + err.message);
            }
        }

        return { isForm, formOpen, inquiryContent, submitInquiry }
    }
}

</script>

<style scoped>
.wrap {
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border: 5px solid #112fd899;
    border-radius: 20px;
    gap: 10px;
    align-items: center;
    position: fixed;
    top: 105px;
    left: 55%;
    transform: translate(-50%);
    background: white;
    z-index:200;
}

.title {
    align-self: start;
    width: 55%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
}

.bi-x-circle {
    font-size: 25px;
    position: relative;
    left: 20px;
    cursor: pointer;
}

.word {
    font-size: 30px;
}

#ask_area {
    width: 500px;
    height: 450px;
    padding: 20px 30px;
    margin: 0 auto;
}

.bi-send-fill{
    font-size: 40px;
    cursor: pointer;
    color:#112fd899;
}

.fade-enter-from {
    margin-top: 300px;
}

.fade-enter-active {
    transition: all 0.5s;
}

.fade-enter-to {
    margin-top: 0px;
}

.fade-leave-from {
    margin-top: 0px;
}

.fade-leave-active {
    transition: all 0.5s;
}

.fade-leave-to {
    margin-top: 1000px;
}

@media(max-width:992px){
    .wrap{
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border: 5px solid #112fd899;
    border-radius: 20px;
    gap: 10px;
    align-items: center;
    position: fixed;
    top: 105px;
    left: 55%;
    transform: translate(-50%);
    background: white;
    z-index:200;
    }

    #ask_area{
    width: 450px;
    height: 450px;
    padding: 20px 30px;
    margin: 0 auto;
    }
}

@media(max-width:576px){
    .wrap{
    width:315px;
    position: fixed;
    top: 105px;
    left: 50%;
    border: 5px solid #112fd899;
    }

    #ask_area{
        width:270px;
    }

    .word{
        font-size:18px;
        padding-top:5px;
    }
}
</style>