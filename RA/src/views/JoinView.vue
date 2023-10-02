<script>

</script>
<template>
    <div>
        <div id="title">
            <h1>SIGN-UP</h1>
        </div>
        <div id="prerequisite">
            <div><b>필수 작성 항목</b></div>
            <div><b>ID</b><input type="text"></div>
            <div><b>PW</b><input type="password"></div>
            <div><b>이름</b><input type="text"></div>
            <div><b>휴대전화번호</b><input type="numder">-<input type="numder">-<input type="numder"></div>
        </div>
        <div id="choice">
            <div><b>선택 작성 항목</b></div>
            <div><b>자택주소</b><input type="text"></div>
            <div><b>자녀 이름</b><input type="text"></div>
            <div><b>자녀 생년월일</b><input type="date"></div>
            <div>
                <div><b>자녀 성별</b></div>
                <div><b>남아</b><input type="radio" name="gender" value="남아"></div>
                <div><b>여아</b><input type="radio" name="gender" value="여아"></div>
            </div>
        </div>
        <div id="affiliation">
            <b>졸업 유치원 소속</b><input type="text">
        </div>
        <div id="agree">
            <input type="checkbox" value="agree">
            <h1>개인정보 활용 동의</h1>
        </div>
        <input type="submit" value="Join">
    </div>
</template>
<style>

</style>