<template>
<div class="Login_modal">
    <div class="modal_header">
        <i  @click="loginOpen()" class="bi bi-x-circle"></i>
        <div class="modal_title">Sign_in</div>
        <div class="modal_line"></div>
    </div>
    <div class="login">
        <div class="input"><p><b>ID</b></p><input id ="hid" type ="text" ></div>
        <div class="input"><p><b>PW</b></p><input id ="hpw" type ="password"></div>
    </div>
    <div class="login_button">
        <button class="sign_bt">회원가입</button>
        <button class="login_bt">로그인</button>
    </div>
    <div class="sns_line">
        <img src="../assets/google.png" style="width: 50px;"  class="google">
        <img src="../assets/kakao.png" style="width: 50px;" class="kakao">
    </div>
    <footer>
        <div class="line2"></div>
        <div class="coment">
            회원이 아닐시 일부 서비스를 이용할실 수 없습니다.<br>
            서비스 이용 원할시 회원가입을 해주세요
        </div>
    </footer>
</div>

</template>

<script>

 import {inject} from 'vue';
 export default{
    name:'Login_Modal',
    setup(){
        const isLoginModal = inject('isLoginModal');
        const loginOpen = inject('loginOpen');
        return{
            isLoginModal, loginOpen
        }
    }
 }
</script>

<style scoped>
.Login_modal{
position:fixed;
 width:500px;
 height:300px;
 border:1px solid black;
 background:white;
 z-index:100;
 left:700px;
 top:160px;
}

.modal_header{
    display:flex;
    /* justify-content:space-between; */
    border-bottom:3px solid #AAAAAA;
}

.modal_title{
    font-size:30px;
    padding-left:130px;
    text-align: center;
}

.Login_modal i{
    font-size:30px;
    padding:0 20px;
}

.login{
    margin:10px auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
}

.input{
    width:250px;
    height:30px;
    display:flex;
    border-bottom: 4px solid #BEC1FF;
    text-align: center;
    
    
}

.input p{
    font-size:20px;
    padding-left:15px;
    font-weight:800;
}



#hid{
    padding-top:5px;
    outline:none;
    border:none;
    text-align: center;
    
    
}

#hpw{
    padding-top:5px;
    outline:none;
    border:none;
    text-align: center;
}

.login_button{
    display:flex;
    justify-content:center;
    /* align-items: center; */
    margin:5px auto;
    /* row-gap: 30px;  */
    column-gap: 50px;
    
}

.sign_bt{
    width:100px;
    height:40px;
    border:4px solid #BEC1FF;
    border-radius: 3px;
    /* margin-left:125px; */
    background:white;
    font-size:20px;
}

.login_bt{
    width:100px;
    height:40px;
    border:4px solid #BEC1FF;
    border-radius: 3px;
    /* margin-right:126px; */
    background:white;
    font-size:20px;
    
}

.sns_line{
    display:flex;
    justify-content: center;
    padding-top:5px;
    column-gap: 30px;
    
}

/* .google{
    margin-left:190px;
    
}

.kakao{
    margin-right:190px;
} */

.line2{
    border-top:2px solid #AAAAAA;
    margin-top:15px;
    width:60%;
    margin-left:100px;
}

.coment{
    width: 80%;
    text-align:center;
    font-size:10px;
    margin-top:20px;
    margin:0 auto;
    padding-top:3px;
    font-weight: 800;
}




</style>