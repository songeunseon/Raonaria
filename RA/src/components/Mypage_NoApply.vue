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
    margin:50px 50px;
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


</style>