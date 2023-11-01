<template>
        <div class="empty_data">
            <div class="data_box">
                <div class="icon">
                    <!-- <i class="bi bi-exclamation-lg"></i> -->
                    !
                </div>
                <h5>신청내역이 없습니다.</h5>
                <p>상담 및 입학 신청 시 내역 확인이 가능합니다.</p>
                <router-link to="/search"><button class="goapply">신청하러 가기</button></router-link>
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
    width:100%;
    /* margin:0px auto; */
}

.data_box{
    width:100%; height:230px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:0;
    font-weight:900;
    padding:15px 0;
    background:#F2506E;
    border-radius:15px;
    margin-bottom:30px;
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
    /* width:660px; */
    /* margin-top:91px; */
    /* padding-left:146px; */
}

.question{
    margin-top :100px;
}

.question_bt{
    width:80px;
    height:30px;
    border:3px solid #0d6efd;
    background:white;
    position:relative;
    right:0;
    border-radius: 3px;
}

.manager_bt {
    /* position: absolute;
    left:1px; */
    font-size: 15px;
    font-weight: 900;
    color: white;
    border: none;
    border-radius: 10px;
    height: 30px;
    background:#1856b3ab ;
    /* background:#D93D04; */
    padding: 0px 15px;
    /* border:1px solid #0d6efd; */
    overflow: hidden;
}

.goapply{
    width:150px;
    height:30px;
    font-size:13px;
    color:black;
    background:#fff;
    border:none;
    border-radius:5px;
} 

.apply_header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top:60px;
    margin-bottom:40px;
    position:relative;
    width:100%;
    height:0;
    /* padding:10px 0; */
}

.cancel {
    /* position: absolute;
    right:5px; */
    font-size: 15px;
    font-weight: 900;
    color: white;
    /* border:3px solid #0d6efd; */
    border-radius: 10px;
    width: 100px;
    height: 30px;
    background:#1856b3ab ;
    bottom: 0;
    outline: none;
    border: none;
    overflow: hidden;
}

@media(max-width:490px){
    .apply_header{
        margin:40px 0;
    }

    .manager_bt,.cancel{
        font-size:12px;
        border:1px solid black;
    }

    .question_zone{
        font-size:15px;
        
    }


}


</style>