<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
import TopMenu_Login from '../components/TopMenu_Login.vue';
const router = useRouter();

export default{
    components:{
        TopMenu, TopMenu_Login
    }

}

</script>
<template>
    <TopMenu />
    <TopMenu_Login />

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
                    <div id="songender">
                        <b>자녀 성별</b>
                        <input type="radio" class="btn-check" name="options-base" id="genderM" autocomplete="off" checked>
                        <label class="gd" for="genderM">남아</label>
                        <input type="radio" class="btn-check" name="options-base" id="genderW" autocomplete="off" checked>
                        <label class="gd" for="genderW">여아</label>
                    </div>
                </div>
                <div class="schoolBox">
                    <div class="boxlist">
                        <b>주 양육자 이름</b>
                        <input type="text">
                    </div>
                    <div>
                        <b>주 양육자 전화번호</b>
                        <input type="number">
                    </div>
                </div>
                <div class="schoolBox">
                    <div class="boxlist">
                        <b>부 양육자 이름</b>
                        <input type="text">
                    </div>
                    <div>
                        <b>부 양육자 전화번호</b>
                        <input type="number">
                    </div>
                </div>
                </div>
            <div  id="imgBox">
                <div id="image">    
                <!--사진첨부-->
                </div>
                <div id="imgicon">
                    <svg @click="photo()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
            </div>
            
        </div>
        <div id="son">
            <div id="sonTitle">
                <b>자녀특징</b>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                </svg>
            </div>
            <div id="soncheck">
                <input type="checkbox" class="btn-check" id="allergy" checked autocomplete="off">
                <label class="btn" for="allergy">알러지 주의</label>
                <input type="checkbox" class="btn-check" id="disease" checked autocomplete="off">
                <label class="btn" for="disease">선천적 질병</label>
                <input type="checkbox" class="btn-check" id="special" checked autocomplete="off">
                <label class="btn" for="special">특별학급 희망</label>
                <input type="checkbox" class="btn-check" id="nothing" checked autocomplete="off">
                <label class="btn" for="nothing">없음</label>
            </div>
            <div id="sontext">
                <textarea id="textarea" rows="5" cols="50" placeholder="전달사항을 입력해주세요"></textarea>
            </div>
        </div>
    </div>
    <div id="send">
        <input type="submit" value="입학신청서 제출">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
        </svg>
    </div>
    <RouterView />
</template>
<style scoped>
*{font-family: 'SUITE-Regular';}
b{
    width: 200px;
    text-align: start;
}
#schoolpage{
    width: 1000px;
    margin: 0 auto;
    text-align: center;
}
#schoolTitle{
    width: 80%;
    margin: 20px auto;
    border-bottom: 3px solid #a9bb51;
}
#bodyBox{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    column-gap: 100px;

    }
#textBox{
    width: 400px;
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
}
.schoolBox{
    height: 70px;
    border: 1px solid #aaa;
    border-radius: 5px;
    font-size: 15px;
    
}
.schoolBox div{
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
.schoolBox input{
    border: 0;
    outline: none;
    text-align: center;
    width: 60%;
}
#songender{
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

#songender .gd{
    width: 35px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    border-radius: 100px;
    padding: 0;
    margin-left: 30px;
}
    #songender #genderM[type='radio']:checked + label {
        background: #0d6efd;
        color: #fff;
    }
    #songender #genderW[type='radio']:checked + label {
        background: #f35b56;
        color: #fff;
    }
    #songender #genderM[type='radio']:not(:checked) + label {
        background: #fff;
        color: #0d6efd;
    }
    #songender #genderW[type='radio']:not(:checked) + label {
        background: #fff;
        color: #f35b56;
    }
.boxlist{
    height: 34px;
    border-bottom: 1px solid #aaa;
}
#imgBox{
    display: flex;
    flex-direction: column;
    align-items: start;
}
#image{
    width: 150px;
    height: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
}
#imgicon{
    margin-top: 10px;
}
#son{
    width: 80%;
    margin: 20px auto;
    text-align: left;
}
#sonTitle{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
}
#sonTitle svg{
    width: 25px;
    height: 25px;
}
#sonTitle b{
    width: 100px;
}
#soncheck{
    display: flex;
    width: 60%;
    margin: 0 auto;
    margin-top: 10px;
    justify-content: space-around;
}

#sontext{
    width: 100%;
    text-align: center;
    padding: 10px;
}
#textarea{
    width: 650px;
    height: 200px;
    padding: 10px;
}

#send{
    border: 0;
    border-radius: 100px;
    width: 250px;
    height: 50px;
    margin: 50px auto 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
#send:hover{
    background: #a9bb51;
    color:#fff;
}
#send input{
    border: 0;
    font-size: 20px;
    background: 0;
    padding: 0;
    margin: 0;
    
}
@media(min-width:490px) and (max-width:1194px){
    #sontext{
        width: 100%;
        text-align: center;
        padding: 10px;
    }
    #textarea{
        width: 600px;
        height: 200px;
        padding: 10px;
        margin: 5px auto;
    }

}
@media(max-width:490px){
    h1{
        font-size: 20px;
    }
    svg{
        width: 20px;
        height: 20px;
    }
    b{
        font-size: 10px;
    }
    #schoolpage{
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    #schoolTitle{
        width: 300px;
        margin: 10px auto;
        border-bottom: 3px solid #BEC1FF;
    }
    #bodyBox{
        flex-direction: column-reverse;
    }
    #textBox{
    width: 300px;
    height: 200px;
    margin: 0 auto;
}
.schoolBox{
    height: 50px;
    border: 1px solid #aaa;
    border-radius: 5px;
    font-size: 12px;
    
}
.schoolBox div{
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
.schoolBox input{
    width: 200px;
}
.boxlist{
    height: 24px;
    border-bottom: 1px solid #aaa;
}
#songender{
    padding-right: 0px;
}

#songender .btn{
    width: 30px;
    display: flex;
    align-items: center;
    margin-right: 50px;
    text-align: center;
    font-size: 10px;
    --bs-btn-padding-x: 0;
    --bs-btn-padding-y: 0;
    padding: 0px;
    border-radius: 100px;
}
#son{
    width: 100%;
    margin: 20px auto;
    text-align: left;
}
#soncheck{
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    margin-top: 0px;
    justify-content: center;
}
#soncheck div{
    display: flex;
    column-gap: 5px;
    align-items: center;
}
#soncheck input{
    width: 10px;
    height: 10px;
}
#imgBox{
    display: flex;
    flex-direction: column;
    align-items: center;
}
#image{
    width: 150px;
    height: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
}
#imgicon{
    margin: 10px;
}
    #sontext{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding: 10px;
        font-size: 10px;
    }
    #textarea{
        width: 300px;
        height: 200px;
        padding: 10px;
        margin: 5px auto;
    }
    #send{
    border: 3px solid #BEC1FF;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
#send input{
    border: 0;
    font-size: 15px;
    background: 0;
    
}
}
</style>