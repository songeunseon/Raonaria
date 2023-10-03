<template>
<div class="login_alert">
    <span>로그인 후 이용하세요</span>
    <div class="alert_button">
        <button @click='close()' class="alert_bt" value="확인">확인</button>
    </div>
</div>

</template>

<script>
import {inject} from 'vue';
export default{
    name:'login_Alert',
    setup(){
        const isAlert = inject('isAlert');
        const close = () => isAlert.value= false;
         return{
            isAlert, close
         }
    }
}
</script>

<style>

.login_alert{
    position:fixed;
    bottom:650px;
    left:500px;
    width:280px;
    height:190px;
    border:1px solid black;
    background: white;
}

.login_alert span{
    font-size:18px;
    font-weight:800;
    margin:60px 50px;
    display:inline-block;
}

.alert_bt{
    width:110px;
    height:40px;
    font-size:18px;
    margin:-10px 80px;
    border:none;
    background:#d9d9d9;
}
</style>