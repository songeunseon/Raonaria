<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue';
import { auth } from '@/main.js'
const router = useRouter();

export default{
    components:{
        TopMenu, TopMenu_Login
    },
    name: 'Join',
        data() {
            return {
                valid:{
                    email:false,
                    password:false
                },
                emailHasError: false,
                passwordHasError: false,
                email:'',password:''
             }
        },
        methods: {
            join(){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                    function(user){
                        alert('회원가입완료')
                    },
                    function(err){
                        alert('에러 : '+err.message)
                    }
                )
            },
            checkEmail() {
            // 이메일 형식 검사
                const validateEmail = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/

                if (!validateEmail.test(this.email) || !this.email) {
                    this.valid.email = true
                    this.emailHasError = true
                    return
                } this.valid.email = false
                    this.emailHasError = false
            },
            checkPassword() {
            // 비밀번호 형식 검사(영문, 숫자, 특수문자)
                const validatePassword = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,16}$/
                if (!validatePassword.test(this.password) || !this.password) {
                    this.valid.password = true
                    this.passwordHasError = true
                    return
                } this.valid.password = false
                    this.passwordHasError = false
            },
        },
        watch: {
            'email': function() {
            this.checkEmail()
            },
            'password': function() {
            this.checkPassword()
            },
        },

}
</script>
<template>
    <TopMenu />
    <TopMenu_Login />

    <div id="joinmain">
        <div id="title">
            <h1>회원가입</h1>
        </div>
        <div id="prerequisite">
            <div id="prertitle"><b>필수 작성 항목</b></div>
            <div id="id"><b>ID</b>
                <input type="text" v-model="email" placeholder="email@email.com" :class="{ 'input-danger': emailHasError }" required>
                <p v-show="valid.email" class="input-error">
                    이메일주소를 정확히입력하세요
                </p>
            </div>
            <div id="pw"><b>PW</b>
                <input type="password" v-model="password" placeholder="영문,숫자 조합으로 8자리 이상 조합" :class="{ 'input-danger': passwordHasError }" required>
                <p v-show="valid.password" class="input-error">
                비밀번호를 올바르게 입력하세요
                </p>
            </div>
            <div id="name"><b>이름</b><input type="text" required></div>
            <div id="tel"><b>휴대전화번호</b><input type="tel" required></div>
        </div>
        <div id="choice">
            <div id="choicetitle"><b>선택 작성 항목</b></div>
            <div id="addr"><b>자택주소</b><input type="text"></div>
            <div id="sonname"><b>자녀 이름</b><input type="text"></div>
            <div id="sonBday"><b>자녀 생년월일</b><input type="date"></div>
            <div id="sonGender">
                <div><b>자녀 성별</b></div>
                <div id="genderinput">
                    <input type="radio" class="btn-check" name="options-base" id="genderM" autocomplete="off" checked>
                        <label class="btn" for="genderM">남아</label>
                        <input type="radio" class="btn-check" name="options-base" id="genderW" autocomplete="off" checked>
                        <label class="btn" for="genderW">여아</label>
                </div>
            </div>
        </div>
        <div id="affiliation">
            <b>졸업 유치원 소속</b><input type="text">
        </div>
        <div id="agree">
            <input type="checkbox" value="agree">
            <b>개인정보 활용 동의</b>
        </div>
        <button id="join" v-on:click="join" type="submit"><RouterLink to="/">JOIN</RouterLink></button>
    </div>
</template>
<style scoped>
*{font-family: 'SUITE-Regular';}

.input-error {
    line-height: 16px;
    font-size: 11px;
    color: red;
  }
  .input-danger {
    border-bottom: 1px solid red !important;
  }


    h1{
        color: #FFD124;
    }
    #joinmain{
        width: 1000px;
        margin: 10px auto;
        text-align: center;
        font-size: 13px;
    }
    #title{
        width: 100%;
        margin: 0 auto;
    }
    #prerequisite, #choice, #affiliation, #agree{
        width: 55%;
        margin: 20px auto;
        border: 1px solid #aaa;
        border-radius: 5px;
    }
    #prertitle, #choicetitle{
        font-size: 20px;
        height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-bottom: 3px solid #aaa;

    }
    h4{        
        margin-bottom: 0;
    }
    .btn{
        width: 30px;
        height: 30px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        font-size: 13px;
    }

    #genderinput #genderM[type='radio']:checked + label {
        background: #0d6efd;
        color: #fff;
    }
    #genderinput #genderW[type='radio']:checked + label {
        background: #f35b56;
        color: #fff;
    }
    #genderinput #genderM[type='radio']:not(:checked) + label {
        background: #fff;
        color: #0d6efd;
    }
    #genderinput #genderW[type='radio']:not(:checked) + label {
        background: #fff;
        color: #f35b56;
    }
    
    #tel, #sonGender, #affiliation{
        height: 40px;
        display: flex;
        align-items: center;
        padding:0 30px 0 30px;
        justify-content: space-between;
    }
    #id, #pw, #name, #addr, #sonname, #sonBday{
        border-bottom: 1px solid #aaa;
        height: 40px;
        display: flex;
        align-items: center;
        padding:0 30px 0 30px;
        justify-content: space-between;
    }
    #id input, #pw input, #name input, #tel input, #addr input, #sonname input, #sonBday input, #affiliation input{
        width: 300px;
        border: 0;
        outline: none;
        text-align: start;
        color: #aaa;
    }
    #genderinput{
        display: flex;
        justify-content: center;
        padding-right: 100px;
        width: 300px;
        column-gap: 50px;
    }
    #agree{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #agree h5{
        margin: 5px;
    }
    #agree input{
        width: 20px;
        height: 30px;
        margin-right: 50px;
    }
    #join{
        width: 200px;
        height: 50px;
        font-size: 25px;
        text-align: center;
        margin-top: 20px;
        border-radius: 30px;
        background: #fcd03e99;
        border: 0;
        
    }
    a{
        color: #000;
        text-decoration: none;
    }
    #join:hover{
        background: #fcd03e;
        color: #fff;
    }
    @media(min-width:490px) and (max-width:1194px){
        b{
            width: 150px;
            text-align: left;
        }
    }
    @media(max-width:490px){
        b{
            width: 200px;
            text-align: left;
        }
        #joinmain{
            width: 100%;
            margin: 10px auto;
            text-align: center;
        }
        h1{
            font-size: 20px;
        }
        #prerequisite, #choice, #affiliation, #agree{
            width: 300px;
            margin: 10px auto;
            border: 1px solid #aaa;
            border-radius: 5px;
            font-size: 12px;
        }
        #prertitle, #choicetitle{
            font-size: 15px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #aaa;
            
        }
        #prertitle b, #choicetitle b{
            text-align: center;
        }
        #tel, #sonGender, #affiliation{
            height: 30px;
            display: flex;
            align-items: center;
            padding:0 10px;
        }
        #id, #pw, #name, #addr, #sonname, #sonBday{
            border-bottom: 1px solid #aaa;
            height: 30px;
            display: flex;
            align-items: center;
            padding:0 10px;
            justify-content: center;
        }
        #genderinput{
            width: 150px;
            display: flex;
            justify-content: start;
            column-gap: 20px;
            padding-right: 0;
        }
        /* #genderinput{
        width: 200px;
        column-gap: 50px;
        font-size: 12px;
    } */
    .btn{
        width: 30px;
        height: 30px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        font-size: 10px;
    }

    #genderinput #genderM[type='radio']:checked + label {
        background: #0d6efd;
        color: #fff;
        
    }
    #genderinput #genderW[type='radio']:checked + label {
        background: #f35b56;
        color: #fff;
    }
    #genderinput #genderM[type='radio']:not(:checked) + label {
        background: #fff;
        color: #0d6efd;
    }
    #genderinput #genderW[type='radio']:not(:checked) + label {
        background: #fff;
        color: #f35b56;
    }
    #btn-check{
        width: 50px;
        height: 30px;
    }
        #agree input{
            width: 15px;
            margin-right: 10px;
            
        }
        #agree b{
            text-align: center;
        }
        #join{
            width: 100px;
            height: 40px;
            font-size: 20px;
            text-align: center;
            margin-top: 20px;
            border-radius: 100px;
            background: #0d6efd;
            color: #fff;
            border:0;
        }
    }

</style>