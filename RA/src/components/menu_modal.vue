<template>
    <div class="menu_modal">
            <div class="menu">
                <i @click="menuOpen()" class="bi bi-x-circle"></i>
                <div class="menu_bar">
                    <span>채팅방 관리</span>
                    <i class="bi bi-chevron-compact-down"></i>
                </div>
                <div class="title_change">
                    정보변경
                </div>
                <div class="content_change">
                    <input type="text" class="chat_name" placeholder="유치원 이름">
                    <input type="text" class="chat_name" placeholder="채팅방 소개">
                </div>
                <div class="save_bt">
                    <button class="save">저장</button>
                </div>
            </div>
            <div class="menu">
                <div class="notice">
                    <span>공지사항 작성하기</span>
                    <i class="bi bi-chevron-compact-down"></i>
                </div>
                <div class="notice_write">
                    <input type="text" class="write" placeholder="올리고 싶은 공지사항을 작성하세요.">
                </div>
                <div class="notice_info_bt">
                    <button class="notice_info">저장</button>
                </div>
            </div>
            <div class="menu">
                <div class="kick_out">
                    <span>강퇴관리</span>
                    <i class="bi bi-chevron-compact-down"></i>
                </div>
                <div class="kick_out_detail">
                    <div class="Participants_list">강퇴관리 채팅상대</div>
                    <div class="chat_box">
                        <div class="check_name">
                            <i class="bi bi-award manager"></i>
                            김선향<input type="checkbox" name="name" value="김선향">
                        </div>
                        
                        <div class="check_name">김선향 <input type="checkbox" name="name" value="김선향"></div>
                        <div class="check_name">김선향<input type="checkbox" name="name" value="김선향"></div>
                        <div class="check_name">김선향<input type="checkbox" name="name" value="김선향"></div>
                        <div class="check_name">김선향<input type="checkbox" name="name" value="김선향"></div>
                    </div>
                    <div class="kick_out_bt">
                    <button @click="banOn()" class="save">강퇴하기</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {inject,watch,onMounted} from 'vue';
export default{
    name: 'menu_modal', 
    setup(){
        const banOn = inject('banOn');

        const isMenu = inject('isMenu');
        const menuOpen = inject('menuOpen')

        onMounted(() =>{
            const menu_modal = document.querySelector('.menu_window');
        }

        )

        watch(isMenu,(newVal,oldVal) =>{
            menu_modal.classList.toggle('slideIn');
            menu_modal.classList.toggle('slideOut');
        })



        return{ banOn, isMenu, menuOpen,watch,onMounted };
    }
}
</script>

<style scoped>
.menu_modal{
    position:absolute;
    top:26%;
    left:68%;
    /* transform: translate(-50%, -20%);  */
    width:325px;
    height:700px;
    background:white;
    border:1px solid black;
    
    
}

.menu{
    width:325px;
    height:fit-content;
}

.bi-x-circle{
    position:absolute;
    left:15px;
    top:10px;
}

.menu_bar{
    width:325px;
    border-bottom: 1px solid black;
    padding:10px 0;
    
}

.menu_bar span{
margin-left:125px;
font-weight:800;
}

.menu_bar i{
    padding-left:30px;
}

.title_change{
    margin:5px 120px;
    font-size:15px;
    text-align:center;
}

.content_change{
    padding:5px 30px;
}


.write{
    text-align:center;
}

.content_change input{
    border:none;
    border-bottom: 1px solid black;
    margin:2px 55px;
    padding:5px 3px;
    width:150px;
    text-align:center;
}

.menu_modal{display:none;}

.slideIn{
    animation:slideIn 0.5s ease-in-out forwards;
}

.slideOut{
    animation:slideOut 0.5s ease-in-out forwards;
}

@keyframes slideIn {
    0%{weight:0px; opacity:0;}
    100%{weight:325px; opacity:1;}
}

@keyframes slideOut{
    0%{weight:325px; opacity:1;}
    100%{weight:0px; opacity:0;}
}



.save_bt{
    padding:10px 100px;
}

.save{
 width:100%;
 height:25px;
 border:none;
 font-weight:800;
 background:#D9D9D9;
}

.notice{
    border:none;
    border-top:1px solid black;
    border-bottom:1px solid black;
    padding:10px 0;
    

}

.notice span{
    margin-left:97px;
    font-weight:800;
}

.notice i{
    padding-left:10px;
}

.notice_write input{
    width:220px;
    border:none;
    outline:none;
    margin-top:25px;
    margin-left:50px;
    text-align:left;
}

.notice_info_bt{
    padding:10px 90px;
}

.notice_info{
    width:100px;
    height:25px; 
    margin:10px 10px;
    font-weight:800;
    border:none;
    background:#d9d9d9;

}

.kick_out{
    font-weight: 900;
    font-size:18px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    text-align: center;
    padding:10px;
}

.Participants_list{
    text-align: center;
    font-weight:900;
    padding-top:5px;
}

.chat_box{
    width:200px;
    margin:10px auto;
    background:#d9d9d9;
    display:flex;
    flex-direction: column;
    align-items: center;
}


.manager{
    position:relative;
    top:-2px;
    left:9px;
}

.chat_box{
    display:flex;
    flex-direction: column;
}

.check_name{
    display:flex;
    align-self: end;
    margin-right:50px;
    padding:5px 0px;
    gap:10px;
}

.kick_out_bt{
    padding:10px 90px;
}
</style>