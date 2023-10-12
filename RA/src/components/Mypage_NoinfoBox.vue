<template>
        <div class="alert_box">
            <div class="textWrap">활동 중인 채팅방이 없습니다.</div>
        </div>
        


</template>
<script>
import MypageView from  "../views/MypageView.vue"
export default{
    name:"Mypage_NoinfoBox",
    setup(){

    }
}

</script>
<style scoped>
.textWrap{
    text-align:center;
    font-size:12px;
    padding-left:10px;
}

.alert_box{
    box-sizing: border-box;
    width:200px;
    height:50px;
    padding: 5px 10px;
    border:1px solid #c1d7e5;
    font-size:15px;
    display:flex;
    align-items: center;
    gap:0 10px;
    background:white;
    border-radius: 2px;
    /* cursor: pointer;} */
}


</style>