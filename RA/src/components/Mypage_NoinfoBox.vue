<template>
        <div id="alert_window">
            <div class="textWrap">활동 중인 채팅방이 없습니다.</div>
        </div>
        


</template>
<script>
import MypageView from "../views/MypageView.vue"
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
    /* padding:8px 15px; */
    padding-bottom:8px;
    padding-left:20px;
    font-weight:800;
}

#alert_window{
    box-sizing: border-box;
    width:200px;
    height:50px;
    /* padding: 30px 10px; */
    margin:30px auto;
    border-bottom:3px solid #fff;
    font-size:15px;
    display:flex;
    align-items: center;
    gap:0 10px;
    /* background:white; */
    border-radius: 2px;

    /* cursor: pointer;} */
}


</style>