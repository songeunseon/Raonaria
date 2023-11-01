<template>
    <div class="page">
        <div class="info">
            <div class="profile">
                <i class="bi bi-person-circle"></i>
                <div class="name">김선향</div>
            </div>
            <div id="chat_alert_box" v-if="!isApply">
                <div class="chat_alert">채팅방 알림</div>
                <div class="alert_box">
                    <div class="circle"></div>
                    <div class="textWrap">서구 유치원 채팅방에
                        <br> 활동 중 입니다.</div>
                </div>
                <div class="alert_box">
                    <div class="circle"></div>
                    <div class="textWrap">서구 유치원 채팅방에<br> 활동 중 입니다.</div>
                </div>
                <div class="alert_box">
                    <div class="circle"></div>
                    <div class="textWrap">서구 유치원 채팅방에<br> 활동 중 입니다.</div>
                </div>
            </div>
            <Mypage_NoinfoBox v-if="isApply" />
            <img src="../assets/childern.png" class="kids">
            <!-- <div class="image"> -->
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
import Mypage_NoinfoBox from "./Mypage_NoinfoBox.vue"
import MypageView from '../views/MypageView.vue'
import { inject } from 'vue'
export default {
    name: "MypageInfoBox",
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
    height: 500px;
    margin: 20px auto;
    display: flex;
}

.info {
    max-width: 220px;
    height: 500px;
    /* border: 1px solid black; */
    /* margin-left:-200px; */
    /* background:#547aa9;  */
    background:#b0d0ff;
    /* background:#FFf; */
    /* background:#B993D6; */
    border-radius: 25px 25px 25px 25px;
    display: flex;
    flex-direction: column;
    /* row-gap: 20px; */
    
}

.profile {
    width: 120px;
    height: 120px;
    display: flex;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    row-gap:15px;
    /* justify-content:center; */
    align-items: center;
    border-radius: 100%;
    margin: 10px auto;
    /* border: 7px double white; */
}


.profile i {
    font-size: 50px;
    font-size: 40px;
    height:40px;
    /* position:relative;
    top:15px; */
}



.name {
    /* padding:1px 0; */
    font-weight: 900;
    text-align: center;
    /* position: relative; */
}




.kids {
    position: relative;
    top: -50px;
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
    /* position: relative; */
    top: 25px;

}
.chat_alert {
    font-size: 15px;
    position: relative;
}


.circle {
    width: 15px;
    height: 15px;
    background: #ff6d24ed;
    border-radius: 100%;
    /* position:absolute; */
}

.textWrap {
    text-align: left;
    font-size: 15px;
    width:calc(100% - 20px);
    justify-self: end;
}

.alert_box {
    box-sizing: border-box;
    max-width: 200px;
    height: 50px;
    padding: 5px 10px;
    margin:5px auto;
    /* border: 1px solid #c1d7e5; */
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 10px;
    /* background: white; */
    /* border-bottom: 1px solid #fff;
    border-top: 1px solid #fff; */
    /* cursor: pointer;} */
    /* color:#fff; */
    background:#ffffff;
    border-radius: 20px;;
    color:#000;
}


/* 정보알림창 태블릿 버전 반응형*/
@media(min-width:490px) and (max-width:1194px){
    .textWrap{
        font-size:14px;
    }

}







/* 모바일 버전 반응형 부분*/ 
@media(max-width:490px){
    .page{
        margin:0;
        width:100%;
        height:fit-content;
    }
    .info{
        width:100%;
        max-width:100%;
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
        overflow:hidden;
        border-radius: 25px;
    }
    #chat_alert_box{
        height:200px;
        overflow-y: scroll;
        left:0;
        top:0;
        gap:0 5px;
        padding:10px;
        border-radius: 0 25px 25px 0;
        background:#ffe850;
    }
    #chat_alert_box::-webkit-scrollbar{
        width:0px;
    }
    .chat_alert{
        display:none;
    }
    .kids{
        display:none;
    }
    .profile{
        width:100px;
        height:100px;
        margin:50px auto;
    }
    .profile i{
        padding:0;
        padding-bottom:24px;
        font-size:25px;
    }
    
    .name{
    font-weight: 900;
    text-align: center;
    position: relative;
    top: -2px;
    font-size:12px;
    }

    .textWrap{
        font-size:12px;

    }
    }

/*---------------------------------*/



/*테블릿 반응형 부분 */
@media(min-width:490px) and (max-width:1194px){
    .page{
        width:30%;
    }
    .info{
      width: 100%;
    }
    #chat_alert_box{
        width:100%
    }
    .alert_box{
        width:90%;
    }
}
/*------------------------------------ */
</style>