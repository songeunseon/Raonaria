<template>
    <div class="right_wrap">
        <div class="apply_header_question">
            <div class="apply_bt">관리자 문의하기 </div>
            <div class="apply">신청내역</div>
            <button @click="handleCancel()" class="cancel">신청취소</button>
        </div>
        <div class="apply_Zone_Wrapper">
            <i @click="slideLeft()" class="bi bi-arrow-left-circle"></i>
            <div class="apply_Zone">
                <div class="slider_wrap">
                    <div class="apply_box" v-for="app in mypageStore.applications" :key="app.id">
                        <div class="titleWrap">
                            <div class="apply_line">{{ app.kindergartenName }}</div>
                            <div>
                                <input class="form-check-input topCheckbox" type="checkbox"
                                    v-model="selectedApps" :value="app.id">
                            </div>
                        </div>
                        <div class="contentWrap">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input botCheckbox" type="checkbox"
                                    :checked="app.consultStatus" disabled>
                                <label class="form-check-label">상담신청완료</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input botCheckbox" type="checkbox"
                                    :checked="app.enrollStatus" disabled>
                                <label class="form-check-label">입학신청완료</label>
                            </div>
                        </div>
                    </div>
                    <div v-if="mypageStore.applications.length === 0" style="padding:40px; color:#888;">
                        신청 내역이 없습니다
                    </div>
                </div>
            </div>
            <i @click="slideRight()" class="bi bi-arrow-right-circle"></i>
        </div>
        <div class="apply_header">
            <button @click="formOpen()" class="manager_bt">관리자 문의하기</button>
            <div class="question_zone">나의문의</div>
            <button @click="handleInquiryCancel()" class="cancel">문의취소</button>
        </div>
    </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
    name: "Mypage_Apply",
    setup() {
        const isCancel = inject('isCancel');
        const cancelOpen = inject('cancelOpen');
        const isAsk = inject('isAsk');
        const askOpen = inject('askOpen')
        const isForm = inject('isForm')
        const formOpen = inject('formOpen')
        const mypageStore = inject('mypageStore')
        const selectedApps = inject('selectedApps')
        const selectedInquiries = inject('selectedInquiries')

        const handleCancel = () => {
            if (selectedApps.value.length === 0) {
                alert('취소할 신청을 선택하세요');
                return;
            }
            cancelOpen();
        }

        const handleInquiryCancel = () => {
            if (selectedInquiries.value.length === 0) {
                alert('취소할 문의를 선택하세요');
                return;
            }
            askOpen();
        }

        const slideRight = () => {
            const apply_Zone = document.querySelector(".apply_Zone");
            if (window.innerWidth <= 490) {
                apply_Zone.scrollLeft += 335.33;
            } else {
                apply_Zone.scrollLeft += 250;
            }
        }
        const slideLeft = () => {
            const apply_Zone = document.querySelector(".apply_Zone");
            if (window.innerWidth <= 490) {
                apply_Zone.scrollLeft -= 335.33;
            } else {
                apply_Zone.scrollLeft -= 250;
            }
        }

        return {
            isCancel, cancelOpen, isForm, formOpen, isAsk, askOpen,
            slideRight, slideLeft, mypageStore, selectedApps,
            handleCancel, handleInquiryCancel, selectedInquiries
        }
    }
}
</script>

<style scoped>
.right_wrap { width: 750px; }
.apply_header_question { display: flex; width: 100%; justify-content: space-between; align-items: center; }
.apply_header { width: 100%; display: flex; align-items: center; justify-content: space-between; margin-top:25px; padding-top:25px; margin-bottom:25px; }
.apply { font-size: 20px; font-weight: 900; text-align: center; padding: 0 20px; }
.cancel { font-size: 15px; font-weight: 900; color: white; border-radius: 10px; width: 100px; height: 30px; background:#1856b3ab; outline: none; border: none; cursor: pointer; }
.apply_Zone_Wrapper{ display:flex; justify-content: space-between; align-items:center; }
.apply_Zone { display: flex; align-items: center; overflow: hidden; overflow-x: scroll; scroll-behavior: smooth; max-width: 617px; height: 185px; margin: 10px auto; padding-bottom:15px; gap: 15px; }
.slider_wrap { display: flex; column-gap: 15px; }
.bi-arrow-left-circle, .bi-arrow-right-circle { font-size: 25px; z-index: 30; cursor: pointer; }
.apply_box { color: black; display: flex; flex-direction: column; align-items: center; width: 194px; height: 150px; border-radius: 20px; overflow:hidden; justify-content: space-between; box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2); }
.apply_box>div { display: flex; align-items: center; justify-content: center; width: 100%; color:#033022; }
.contentWrap{ background:white; display:flex; flex-direction: column; justify-content: center; align-items: center; flex-grow:1; row-gap:7px; }
.titleWrap{ font-size:22px; color:#1d4236; padding:0; background:#a9bb51; width:100%; height:36%; }
.apply_box>div>div{ margin:0 5px; }
.apply_line { border: 0; outline: none; background: none; margin-top: 1px; font-weight: 900; }
.apply_bt { width: 118.61px; opacity: 0; cursor: normal; }
.apply_box .topCheckbox { border:none; }
.apply_box .botCheckbox{ border:1px solid #033022; }
.question_zone { font-size: 20px; text-align: center; font-weight: 900; }
.manager_bt { font-size: 15px; font-weight: 900; color: white; border: none; border-radius: 10px; height: 30px; background:#2163c3d9; padding: 0px 15px; cursor: pointer; }
.form-check-input:disabled { pointer-events: none; filter: none; opacity: 0.1;}

@media(min-width:577px) and (max-width:992px) {
    .bi-arrow-left-circle, .bi-arrow-right-circle { background: none; }
}
@media(max-width:576px) {
    .right_wrap { width: 400px; }
    .apply_Zone_Wrapper{ width: 400px; }
    .apply_header_question { justify-content: center; margin-bottom: -5px; width: 400px; }
    .apply { font-size: 15px; }
    .apply_Zone { width: 400px; height: 185px; margin: 10px auto; }
    .apply_header_question>.cancel { position: relative; z-index: 30; }
    .slider_wrap { column-gap: 0; max-width: none; }
    .apply_bt { display: none; }
    .apply_Zone { height: 103px; width: 400px; }
    .apply_box { border-radius: 0; width:250px; gap: 5px; height: fit-content; margin-top: 18px; }
    .apply_header { margin: 40px auto; width: 400px; }
    .manager_bt { font-size: 12px; border: 1px solid black; }
    .question_zone { font-size: 15px; }
    .cancel { font-size: 12px; border: 1px solid black; }
    .bi-arrow-left-circle, .bi-arrow-right-circle { display: none; }
}
</style>
