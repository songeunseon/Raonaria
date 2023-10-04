<script>

</script>
<template>
    <div id="joinmain">
        <div id="title">
            <h1>SIGN-UP</h1>
        </div>
        <div id="prerequisite">
            <div id="prertitle"><b>필수 작성 항목</b></div>
            <div id="id"><b>ID</b><input type="text"></div>
            <div id="pw"><b>PW</b><input type="password"></div>
            <div id="name"><b>이름</b><input type="text"></div>
            <div id="tel"><b>휴대전화번호</b><input type="tel"></div>
        </div>
        <div id="choice">
            <div id="choicetitle"><b>선택 작성 항목</b></div>
            <div id="addr"><b>자택주소</b><input type="text"></div>
            <div id="sonname"><b>자녀 이름</b><input type="text"></div>
            <div id="sonBday"><b>자녀 생년월일</b><input type="date"></div>
            <div id="sonGender">
                <div><b>자녀 성별</b></div>
                <div id="genderinput">
                <div><b>남아</b><input type="radio" name="gender" value="남아"></div>
                <div><b>여아</b><input type="radio" name="gender" value="여아"></div>
                </div>
            </div>
        </div>
        <div id="affiliation">
            <b>졸업 유치원 소속</b><input type="text">
        </div>
        <div id="agree">
            <input type="checkbox" value="agree">
            <h3>개인정보 활용 동의</h3>
        </div>
        <input id="join" type="submit" value="JOIN">
    </div>
</template>
<style>
    #joinmain{
        max-width: 1000px;
        margin: 10px auto;
        text-align: center;
    }
    #title{
        width: 100%;
        margin: 0 auto;
        border-bottom: 3px solid #aaa;
    }
    #prerequisite, #choice, #affiliation, #agree{
        width: 60%;
        margin: 20px auto;
        border: 1px solid #aaa;
        border-radius: 5px;
    }
    #prertitle, #choicetitle{
        font-size: 20px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 3px solid #aaa;
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
        width: 400px;
        border: 0;
        outline: none;
        text-align: start;
        color: #aaa;
    }
    #genderinput{
        display: flex;
        width: 300px;
        column-gap: 50px;
    }
    #agree{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #agree h3{
        margin: 5px;
    }
    #agree input{
        width: 30px;
        height: 30px;
        margin-right: 50px;
    }
    #join{
        width: 40%;
        height: 50px;
        font-size: 30px;
        text-align: center;
        margin-top: 50px;
        border-radius: 10px;
        background: 0;
        border: 3px solid #BEC1FF;
    }
</style>