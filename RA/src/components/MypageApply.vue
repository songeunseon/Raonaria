<template>
<div class="right_wrap">
        <div class="apply_header_question">
            <button @click="formOpen()" class="apply_bt">관리자 문의하기</button>
            <div class="apply">신청내역</div>
            <button @click="cancelOpen()" class="cancel">신청취소</button>
        </div>
        <i @click="slideLeft()" class="bi bi-arrow-left-circle"></i>
        <div class="apply_Zone">
            <div class="slider_wrap">
                <div class="apply_box">
                    <div>
                        <div class="apply_line">OO 유치원</div>
                        <input class="checkbox" type="checkbox">
                    </div>  
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
                </div>
                <div class="apply_box">
                    <div>
                        <div class="apply_line">OO 유치원</div>
                        <input class="checkbox" type="checkbox">
                    </div>  
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
                </div>
                <div class="apply_box">
                    <div>
                        <div class="apply_line">OO 유치원</div>
                        <input class="checkbox" type="checkbox">
                    </div>  
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
                </div>
                <div class="apply_box">
                    <div>
                        <div class="apply_line">OO 유치원</div>
                        <input class="checkbox" type="checkbox">
                    </div>  
                    <div><input class="checkbox" type="checkbox"> 상담신청완료 </div>
                    <div><input class="checkbox" type="checkbox"> 입학신청완료</div>
                </div> 

            </div> 
        </div>
        
        <i  @click="slideRight()" class="bi bi-arrow-right-circle"></i>
        <div class="apply_header">
            <button @click="formOpen()" class="manager_bt">관리자 문의하기</button>
            <div class="question_zone">나의문의</div>
            <button @click="askOpen()" class="cancel">문의취소</button>
        </div>
    </div>

</template>

<script>
import {inject} from 'vue'
import MypageViewVue from '../views/MypageView.vue';
export default{
    name:"Mypage_Apply",
    setup(){
        const isCancel = inject('isCancel');
        const cancelOpen = inject('cancelOpen');
        const isAsk =inject('isAsk');
        const askOpen = inject('askOpen')
        const isForm = inject('isForm')
        const formOpen = inject('formOpen')

        const slideRight = () => {
            const apply_Zone = document.querySelector(".apply_Zone");
            if( window.innerWidth <= 490 ){
                apply_Zone.scrollLeft += 335.33;
            }else{
                apply_Zone.scrollLeft += 10000;
            }
        }

        const slideLeft = () => {
            const apply_Zone = document.querySelector(".apply_Zone");
            if(window.innerWidth <=490){
                apply_Zone.scrollLeft  -= 335.33;
            }else{
                apply_Zone.scrollLeft -= 10000;
            }
        }

        return{isCancel, cancelOpen, isForm, formOpen,isAsk, askOpen,
            slideRight, slideLeft}
    }
}

</script>

<style scoped>
.right_wrap{
    width:100%;
    position: relative;
}

.apply_header_question{
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    position:relative;
    bottom:5px; 
    
}

.apply_header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin:184px auto 29px auto;
    position:relative;
    width:100%;
    height:0;
    /* padding:10px 0; */
}

.apply{
    /* width:100%; */
    font-size:20px;
    font-weight:900;
    text-align:center;
    padding:0 20px;
}

.cancel{
    /* position: absolute;
    right:5px; */
    font-size:15px;
    font-weight:900;
    color:white;
    /* border:3px solid #0d6efd; */
    border-radius: 100px;
    width:100px;
    height:30px;
    background:#0d6efd;
    bottom:0;
    outline:none;
    border:1px solid #0d6efd;
    overflow:hidden;
}

.apply_Zone{
    display:flex;
    align-items: center;
    justify-content: space-between;
    position:relative;
    overflow:hidden;
    overflow-x:scroll;
    top:35px;
    scroll-behavior: smooth;
    max-width:645px;
    height:165px;
    margin:0 auto;
    gap:15px;
}

.slider_wrap{
    display:flex;
    position:absolute;
    column-gap:15px;
    max-width:645px;
}

.bi-arrow-left-circle , .bi-arrow-right-circle{
    position: absolute; top:40%;
    font-size:25px; z-index:30;
    width:25px; height:25px;
    background: white; 
    cursor:pointer; border-radius: 5px;
}
.bi::before{position:absolute;}
.bi-arrow-left-circle{left:0;}
.bi-arrow-right-circle{right:0;} 


.apply_box{
background-color:#38B6FF;
    color:black;
    padding:0px 25px;
    gap:13px;
    display:flex;
    flex-direction: column;
    align-items:center;
    /* width:185px; */
    height:150px;
    border-radius:20px; 
    justify-content:center;
    color:white;
}


.apply_box > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    padding:0 15px;

} 

.apply_line{
    width:100px;
    /* height:30px; */
    border:0;
    /* border-bottom:3px solid #fff; */
    outline:none;
    background:none;
    margin-top:1px;
    font-weight:900;
    padding-left:15px;
}

.apply_bt{
    opacity: 0;
}
.apply_box .checkbox{
    width:15px;
    height:15px;
    margin-top:3px;
    margin-right:8px;
}


.question_zone{
    font-size:20px;
    text-align: center;
    font-weight: 900;
    /* width:660px;
    margin-top:95px;
    padding-left:104px; */
}

.question{
    margin-top :100px;
}

.question_bt{
    width:80px;
    height:30px;
    border:3px solid #0d6efd;
    background:white;
    /* position:relative;
    right:0; */
    border-radius: 3px;
}

.manager_bt{
    /* position: absolute;
    left:1px; */
    font-size:15px;
    font-weight:900;
    color:white;
    /* border:3px solid #0d6efd; */
    border-radius: 100px;
    height:30px;
    background:#0d6efd;
    /* padding:0px 5px; */
    border:1px solid #0d6efd;
    overflow:hidden;
}

/* 마이페이지 태블릿 버전 미디어 쿼리 */
@media(min-width:490px) and (max-width:1194px){
    .bi-arrow-left-circle , .bi-arrow-right-circle{
        background:none;
    }
} 



/*마이페이지 모바일 버전 media query*/
@media(max-width:490px){
    .apply_header_question{
        justify-content:center;
        margin-bottom:-5px;
    }
    .apply{font-size:15px;}
    .apply_header_question > .cancel{
        position:absolute;
        z-index:30;
        top:-5px; 
        right:0;
    }
    .slider_wrap{
        column-gap: 0;
        max-width:none;
    }
    .apply_bt{
        display:none;
    }
    .apply_Zone{
        height:103px;
        top:0;
    }
    .apply_box{
        border-radius: 0;
        width:calc(100vw - 40px);
        gap:5px;
        align-items:center;
        height:fit-content;
        margin-top:18px;
    }
    .apply_box div:first-child{
        flex-direction:row;
        gap:2.5px;
    }
    .apply_box div{
        width:fit-content;
        flex-direction:row-reverse;
    }
    .bi-arrow-left-square, .bi-arrow-right-square{
        top:65px;
    }
    .apply_header{
        margin: 40px auto;
        
    }

    .manager_bt{
        font-size:12px;
        border:1px solid black;
    }

    .question_zone{
        font-size:15px;
    }

    .cancel{
        font-size:12px;
        border:1px solid black;
    }

    .bi-arrow-left-circle , .bi-arrow-right-circle{
    background:none;
    position: absolute; top:35%;
    font-size:25px; z-index:30;
    width:25px; height:25px;
    }


}

</style>