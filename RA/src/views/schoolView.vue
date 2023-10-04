<script>

</script>
<template>
    <div id="schoolpage">
        <div id="schoolTitle">
            <h1>입학신청</h1>
        </div>
        <div id="bodyBox">
            <div id="textBox">
                <div class="schoolBox">
                    <div class="boxlist">
                        <b>자녀 이름</b>
                        <input type="text">
                    </div>
                    <div>
                        <b>자녀 성별</b>
                        <section><b>남아</b><input type="radio"></section>
                        <section><b>여아</b><input type="radio"></section>
                    </div>
                </div>
                <div class="schoolBox">
                    <div class="boxlist">
                        <b>주 양육자 이름</b>
                        <input type="text">
                    </div>
                    <div>
                        <b>주 양육자 전화번호</b>
                        <input type="tel">
                    </div>
                </div>
                <div class="schoolBox">
                    <div class="boxlist">
                        <b>부 양육자 이름</b>
                        <input type="text">
                    </div>
                    <div>
                        <b>부 양육자 전화번호</b>
                        <input type="tel">
                    </div>
                </div>
                </div>
            <div id="imgBox">
                <!--사진첨부-->
            </div>
        </div>
        <div id="son">
            <h1>자녀특징</h1>
            <div id="soncheck">
                <div><input type="radio"><b>알러지 주의</b></div>
                <div><input type="radio"><b>선천적 질병</b></div>
                <div><input type="radio"><b>특별학급 희망</b></div>
                <div><input type="radio"><b>없음</b></div>
            </div>
            <div id="sontext">
                <textarea id="textarea" rows="5" cols="50" placeholder="전달사항을 입력해주세요"></textarea>
            </div>
        </div>
    </div>
    <div id="send">
        <input type="submit" value="입학신청서 제출">
    </div>
</template>
<style>
#schoolpage{
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}
#schoolTitle{
    width: 80%;
    margin: 20px auto;
    border-bottom: 3px solid #BEC1FF;
}
#bodyBox{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    }
#textBox{
    width: 500px;
    display: flex;
    flex-direction: column;
    height: 400px;
    justify-content: space-between;
}
.schoolBox{
    height: 100px;
    border: 1px solid #aaa;
    border-radius: 5px;
    font-size: 20px;
    
}
.schoolBox div{
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
.schoolBox input{
    border: 0;
    outline: none;
    text-align: center;
    width: 60%;
}
.boxlist{
    height: 49px;
    border-bottom: 1px solid #aaa;
}
#imgBox{
    width: 150px;
    height: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
}
#son{
    width: 80%;
    margin: 50px auto;
    text-align: left;
}
#soncheck{
    display: flex;
    width: 60%;
    margin-top: 20px;
    justify-content: space-around;
}
#son h1, #soncheck{
    margin-left: 50px;
}
#sontext, #textarea{
    width: 700px;
    height: 200px;
    margin: 20px auto;
    padding: 10px;
}

#send{
    width: 1000px;
    text-align: center;
}
#send input{
    width: 300px;
    height: 50px;
    font-size: 30px;
    background: 0;
    border: 3px solid #BEC1FF;
    border-radius: 5px;
    margin-top: 50px;
}
</style>