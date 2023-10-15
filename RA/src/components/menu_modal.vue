<template>
    <div class="menu_modal slideOut">
            <div class="menu">
                <i @click="menuOpen()" class="bi bi-chevron-left"></i>
                <div class="menu_bar">
                    <span>채팅방 관리</span>
                    <!-- <i class="bi bi-chevron-compact-down"></i> -->
                </div>
                <router-link to="/infoChange">
                    <div class="title_change">
                        <i class="bi bi-arrow-right-square"></i>   
                        정보변경
                    </div>
                </router-link>
                <div class="content_change">
                </div>
            </div>
            <div class="menu">
                <router-link to="/noticeWrite">
                    <div class="notice">
                        <i class="bi bi-arrow-right-square"></i>
                        <span>공지사항 작성하기</span>
                    </div>
                </router-link>
                <!-- <div class="notice_write">
                    <input type="text" class="write" placeholder="올리고 싶은 공지사항을 작성하세요.">
                </div>
                <div class="notice_info_bt">
                    <button class="notice_info">저장</button>
                </div> -->
            </div>
            <div class="menu">
                <router-link to="/kickOut">
                    <div class="kick_out">
                        <i class="bi bi-arrow-right-square"></i>
                        <span>강퇴관리</span>
                    </div>
                </router-link>
                <!-- <div class="kick_out_detail">
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
                    <button @click="banOn()" class="kick">강퇴하기</button>
                    </div>
                </div> -->
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
            const menu_modal = document.querySelector('.menu_modal');
            watch(isMenu,(newVal,oldVal) =>{
                menu_modal.classList.toggle('slideIn');
                menu_modal.classList.toggle('slideOut');
            })
        })




        return{ banOn, isMenu, menuOpen,watch,onMounted };
    }
}
</script>

<style scoped>
a{color:black; text-decoration: none;}
.menu_modal{
    position:fixed;
    top:14%;
    left:300px;
    /* transform: translate(100%, -20%);  */
    width:325px;
    height:198px;
    background:white;
    border:1px solid black;
    /* display:none; */
}

.menu{
    width:325px;
    height:fit-content;
}

.bi-chevron-left{
    position:absolute;
    left:15px;
    top:10px;
}

.bi-arrow-right-square{
    position:relative;
    left:280px;
    top:0px;
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
    padding:15px 10px;
    font-size:15px;
    text-align:left;
    border-bottom:1px solid black;
}






/* .menu_modal{display:none;} */

.slideIn{
    animation:slideIn 0.5s ease-in-out forwards;
}

.slideOut{
    animation:slideOut 0.5s ease-in-out forwards;
}

@keyframes slideIn {
    0%{left:1000px; opacity: 0;  display:none;}
    100%{left:840px; opacity: 1;  display:block;}
}

@keyframes slideOut{
    0%{left:840px; opacity: 1;  display:block;}
    100%{left:1000px; opacity: 0;  display:none;}
}



.save_bt{
    padding:10px 100px;
}

.save{
 width:100px;
 height:25px;
 border:none;
 font-weight:800;
 background:#D9D9D9;
 margin:0 10px;
}

.kick{
width:100px;
 height:25px;
 border:none;
 font-weight:800;
 background:#D9D9D9;
 margin:0 25px;
}

.notice{
    border:none;
    border-bottom:1px solid black;
    padding:15px 1px;
    text-align:left;
    font-size:15px;

    

}

.notice span{
    /* margin-left:97px;
    font-weight:800; */
    text-align:left;
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
    margin:10px 20px;
    font-weight:800;
    border:none;
    background:#d9d9d9;

}

.kick_out{
    /* font-weight: 900; */
    font-size:15px;
    /* border-bottom: 1px solid black;
    border-top: 1px solid black; */
    text-align: left;
    padding:10px 10px;
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