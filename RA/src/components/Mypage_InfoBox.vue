<template>
    <div class="page">
        <div class="info">
            <div class="profile">
                <i class="bi bi-person-circle"></i>
                <div class="name">김선향</div>
                <div class="chat_alert">채팅방 알림</div>
                <div id="chat_alert_box" v-if="!isApply">
                    <div class="alert_box">
                        <div class="circle"></div>
                        <div class="textWrap">서구 유치원 채팅방에 활동 중 입니다.</div>
                    </div>
                    <div class="alert_box">
                        <div class="circle"></div>
                        <div class="textWrap">서구 유치원 채팅방에 활동 중 입니다.</div>
                    </div>
                    <div class="alert_box">
                        <div class="circle"></div>
                        <div class="textWrap">서구 유치원 채팅방에 활동 중 입니다.</div>
                    </div>
                </div>
                <Mypage_NoinfoBox v-if="isApply" />
            </div>
            <!-- <div class="image"> -->
                <img src="../assets/childern.png" class="kids">
            <!-- </div> -->

            <!-- <div class="add_info">로그인 성공 시 아이디를 화면에
            확인할 수 있습니다.</div> -->

            <!-- <div @click="formOpen()" class="manager_ask">
        관리자 문의하기
    </div> -->
            <!--
        <div class="manager_ask">
            <button @click="formOpen()" class="manager_bt">관리자 문의하기</button>
        </div>
    -->
        </div>
    </div>
</template>

<script>
import Mypage_NoinfoBox from "../components/Mypage_NoinfoBox.vue"
import MypageView from '../views/MypageView.vue'
import { inject } from 'vue'
export default {
    name: "Mypage_InfoBox",
    components: {
        Mypage_NoinfoBox
    },
    setup() {
        const isApply = inject('isApply')
        const isForm = inject('isForm')
        const formOpen = inject('formOpen')
        return { isForm, formOpen,isApply }
    }

}
</script>

<style scoped>
.page {
    width: fit-content;
    height: 620px;
    /* border:1px solid black; */
    margin: 20px auto;
    display: flex;
}

.info {
    width: 220px;
    height: 520px;
    /* border: 1px solid black; */
    /* margin-left:-200px; */
    background: #c1d7e5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
@media(max-width:490px){
    .info{
        width:250px;
        height:84px;
        margin-left:110px;
        border-radius: 0;

    }
}

.profile {
    width: 120px;
    height: 120px;
    display: flex;
    background: #c1d7e5;
    flex-direction: column;
    /* justify-content:center; */
    align-items: center;
    border-radius: 100%;
    margin: 10px 46px;
    border: 7px double white;
}


@media(max-width:490px){
    .profile{
        width:50px;
        height:50px;
        padding-left:5px;
        border:none;
        
    }
}


.profile i {
    font-size: 50px;
    padding: 12px 0;
    font-size: 40px;

}

@media(max-width:490px){
    .profile i{
        margin-bottom:10px;
        padding:0px 0;
        font-size:20px;
    }
}



.name {
    /* padding:1px 0; */
    font-weight: 900;
    text-align: center;
    position: relative;
    bottom: 12px;
}

@media(max-width:490px){
.name{
    font-size:10px;
}
    }



.kids {
    width: 228px;
    position: relative;
    right: 3px;
    top: 121px;
}

.id {
    display: flex;
    align-items: center;
    gap: 5px;
}

.id i {
    font-size: 30px;
}



.manager_ask {

    /* border:1px solid black; */
    text-align: center;
    line-height: 40px;
    /* margin:80px 25px; */
    /* height:100px; */
    background: #F1EFEF;
}

.manager_bt {
    width: 150px;
    height: 40px;
    border: 1px solid black;
    border-right: 3px solid #F1EFEF;
    border-bottom: 3px solid #F1EFEF;
    cursor: pointer;
}

.manager_bt:hover {
    width: 150px;
    height: 40px;
    border: 1px solid;
    border-left: 3px solid #F1EFEF;
    border-top: 3px solid #F1EFEF;
    cursor: pointer;

}

.add_info {
    text-align: center;
    padding-bottom: 5px;
}

#chat_alert_box {
    text-align: center;
    /* padding:10px 0; */
    font-weight: 900;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* background:#F1EFEF; */
    /* margin:60px 0; */
    position: relative;
    top: 15px;
    left: 3px;

}

.circle {
    width: 15px;
    height: 15px;
    background: greenyellow;
    border-radius: 100%;
}

.textWrap {
    text-align: left;
    font-size: 10px;
    padding-left: 10px;

}

.alert_box {
    box-sizing: border-box;
    width: 200px;
    height: 50px;
    padding: 5px 10px;
    margin:5px 0;
    border: 1px solid #c1d7e5;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 0 10px;
    background: white;
    border-radius: 2px;
    /* cursor: pointer;} */
}

@media(max-width:490px){
    .alert_box{
        width:150px;
    }
}


.chat_alert {
    font-size: 15px;
    position: relative;
    padding-top:30px;
}
</style>