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
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:280px;
    height:190px;
    border:1px solid black;
    border-radius: 10px;
    background: white;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login_alert span{
    font-size:18px;
    font-weight:800;
    display:inline-block;
    margin-bottom: 20px;
}

.alert_bt{
    width:110px;
    height:40px;
    font-size:18px;
    border:none;
    background:#d9d9d9;
    border-radius: 5px;
    cursor: pointer;
}
</style>