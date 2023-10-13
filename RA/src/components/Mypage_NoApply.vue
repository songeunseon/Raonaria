<template>
        <div class="empty_data">
            <div class="data_box">
                <div class="icon">
                    <!-- <i class="bi bi-exclamation-lg"></i> -->
                    !
                </div>
                <h5>신청내역이 없습니다.</h5>
                <p>상담 및 입학 신청 시 내역 확인이 가능합니다.</p>
            </div>
            <div class="apply_header">
                <button @click="formOpen()" class="manager_bt">관리자 문의하기</button>
                <div class="question_zone">나의문의</div>
                <button @click="cancelOpen()" class="cancel">문의취소</button>
            </div>
        </div>
</template>
<script>
import MypageView from '../views/MypageView.vue';
export default{
    name:"Mypage_NoApply",
    setup(){}
}

</script>
<style scoped>
.empty_data{
    margin:0px auto;
    background:#60BAAF

}

.data_box{
    width:700px;
    height:170px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:0;
    font-weight:900;

}

.icon{
    width:44px;
    height:44px;
    border-radius: 100%;
    background:#fff;
    position:relative;
    text-align: center;
    line-height: 40px;
    font-size:33px;
    font-weight:900;
    margin-bottom:18px;
}

.question_zone{
    font-size:20px;
    text-align: center;
    font-weight: 900;
    width:660px;
    margin-top:91px;
    padding-left:146px;
}

.question{
    margin-top :100px;
}

.question_bt{
    width:80px;
    height:30px;
    border:3px solid #BEC1FF;
    background:white;
    position:relative;
    right:0;
    border-radius: 3px;
}

.manager_bt{
    position: absolute;
    left:1px;
    bottom:-18px;
    font-size:15px;
    border:3px solid #bec1ff;
    border-radius: 5px;
    height:30px;
    background:white;
    padding:0 5px;
}

.apply_header{
    display:flex;
    align-items: center;
    justify-content: center;
    margin:0px auto 15px auto;
    position:relative;
    width:100%;
    /* padding:10px 0; */
}

.cancel{
    position: absolute;
    right:5px;
    font-size:15px;
    border:3px solid #bec1ff;
    border-radius: 5px;
    width:80px;
    height:30px;
    background:white;
    bottom:-18px;
}


</style>