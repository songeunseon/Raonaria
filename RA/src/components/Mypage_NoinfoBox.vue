<template>
    <div id="window">

        <div id="alert_window">
            <div class="textWrap">활동 중인 채팅방이 없습니다.</div>
        </div>
        <div id="alert_window">
            <div class="textWrap">활동 중인 채팅방이 없습니다.</div>
        </div>
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
#window{
    /* position:relative; top: 0px; */
    margin-top:15px;
    width:220px; height:185px;
    display:flex;
    flex-direction: column;
    gap:10px;
    overflow-y:scroll;
    overflow:hidden;
}
.textWrap{
    text-align:center;
    font-size:15px;
    /* padding:8px 15px; */
    padding-bottom:8px;
    padding-left:20px;
    font-weight:800;
}

#alert_window{
    box-sizing: border-box;
    width:193.23px;
    height:50px;
    /* padding: 30px 10px; */
    margin:0px auto;
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