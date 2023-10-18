<template>
    <div style="width: 100%; height: 100%; position: fixed; left: 0; top: 0; background: rgba(0, 0, 0, 0.5);"></div>
<div class="Login_modal">
    <div class="modal_header mb" >
        <i  @click="loginOpen()" class="bi bi-x-circle" style="cursor: pointer;"></i>
        <div class="modal_title">Sign_in</div>
        <div class="modal_line"></div>
    </div>
    <div class="login mb">
        <div class="input"><b>ID</b><input id ="hid" type ="text" ></div>
        <div class="input"><b>PW</b><input id ="hpw" type ="password"></div>
    </div>
    <div class="login_button mb">
        <button class="sign_bt">회원가입</button>
        <button class="login_bt">로그인</button>
    </div>
    <footer class="mb">
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
position:absolute;
width:400px;
height:250px;
border-radius: 20px;
background:white;
z-index:100;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
}

.modal_header{
    display:flex;
    justify-content: start;
    align-items: center;
    margin: 10px auto;
    column-gap: 90px;
    /* justify-content:space-between; */
}

.modal_title{
    font-size:25px;
    font-weight: 700;
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
}

.input{
    width:250px;
    height:30px;
    display:flex;
    border-bottom: 3px solid #FFD124;
    text-align: start;
}

.input b{
    width: 60px;
    font-size:20px;
    padding: 5px 20px;
    font-weight:800;
}



#hid, #hpw{
    outline:none;
    border:none;
    padding-left: 30px;
    text-align: start;
    
    
}

.login_button{
    display:flex;
    justify-content:center;
    /* align-items: center; */
    margin:5px auto;
    /* row-gap: 30px;  */
    column-gap: 50px;
    
}

.sign_bt, .login_bt{
    width:80px;
    height:30px;
    border:0;
    border-radius: 30px;
    /* margin-left:125px; */
    background: #7bb1ff99;
    font-size:15px;
}
.sign_bt:hover, .login_bt:hover{
    background: #0d6efd;
    color: #fff;
}
.sns_line{
    display:flex;
    justify-content: center;
    padding-top:5px;
    column-gap: 50px;
    
}

/* .google{
    margin-left:190px;
    
}

.kakao{
    margin-right:190px;
} */

.line2{
    border-top:2px solid #AAAAAA;
    width:60%;
    margin: 10px auto;
}

.coment{
    width: 80%;
    text-align:center;
    font-size:10px;
    margin-top:10px;
    margin:0 auto;
    font-weight: 800;
}
@media(max-width:490px){
    .Login_modal{
        width: 300px;
        height: 250px;
        align-items: center;
        justify-content: center;
    }
    .modal_header{
    display:flex;
    justify-content: start;
    align-items: center;
    margin: 10px auto;
    column-gap: 50px;
    /* justify-content:space-between; */
}
    .modal_title{
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .input{
        width: 200px;
        border-bottom: 2px solid #BEC1FF;
        border-radius: 0;
    }
    .input b{
        width: 70px;
        font-size: 15px;
        padding:5px;
        font-weight:800;
    }
    .login_button{
        width: 130px;
    display:flex;
    justify-content:center;
    margin:0 auto;
    column-gap: 10px;

    
}
    .sign_bt, .login_bt{
    width:50px;
    height:50px;
    border-radius: 100px;
    font-size:10px;
}
.sns_line{
    display:flex;
    justify-content: center;
    padding-top: 0;
    column-gap: 10px;
    
}
.line2{
    width: 100%;
}
.coment{
    width: 100%;
    padding: 0;
    font-size: 8px;
}
}



</style>