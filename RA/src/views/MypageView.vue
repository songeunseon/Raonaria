<template>
<TopMenu/>
<div class="page">
    <div class="info">
        <div class="profile">
            <i class="bi bi-person-circle"></i>
            <div class="name">김선향</div>
            <div class="id">
                <i class="bi bi-shield-lock"></i>gygid27
            </div>
        </div>
    <div id="chat_alert_box">
        <div class="chat_alert">채팅방 알림</div>
        <div class="alert_box">
            <div class="circle"></div>
            <div class="textWrap">서구 유치원 채팅방에<br>활동 중 입니다.</div>
        </div>
        <div class="alert_box">
            <div class="circle"></div>
            <div class="textWrap">서구 유치원 채팅방에<br>활동 중 입니다.</div>
        </div>
        <div class="alert_box">
            <div class="circle"></div>
            <div class="textWrap">서구 유치원 채팅방에<br>활동 중 입니다.</div>
        </div>
    </div>
    <div @click="formOpen()" class="manager_ask">
        관리자 문의하기
    </div>
    </div>
    <div class="right_wrap">
        <div class="apply_header">
            <div class="apply">신청내역</div>
            <button @click="cancelOpen()" class="cancel">신청취소</button>
        </div>
        <div class="apply_Zone">
            <i class="bi bi-arrow-left-square"></i>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <div class="apply_box">
                <div>
                    <input class="text" type="text">
                    <input class="checkbox" type="checkbox">
                </div>
                <div><input class="checkbox" type="checkbox"> 상담신청완료</div>
                <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
            </div>
            <i class="bi bi-arrow-right-square"></i>
        </div>
        <div class="apply_header question">
            <div class="question_zone">나의문의</div>
            <button @click="cancelOpen()" class="question_bt">문의취소</button>
        </div>
    
        <table>
            <thead>
                <th>문의 날짜</th>
                <th>문의 내용</th>
                <th>체크</th>
            </thead>
            <tbody>
                <tr class="weather">
                    <td></td>
                    <td></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr class="content">
                    <td></td>
                    <td></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr class="check">
                    <td></td>
                    <td></td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr class="check">
                    <td></td>
                    <td></td>
                    <td><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<Cancel_Alert v-if="isCancel"/>
<ask_form v-if="isForm" />

</template>

<script >
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import Cancel_Alert from '../components/Cancel_Alert.vue'
import ask_form from '../components/ask_form.vue'
import {ref, provide} from 'vue'

export default{
    name:'MyPage',
    components:{
        Cancel_Alert, ask_form, TopMenu
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
@import url(./MyPage.css);
</style>