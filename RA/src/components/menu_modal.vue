<template>
    <div class="menu_modal slideOut">
        <div class="menu">
            <i @click="menuOpen()" class="bi bi-chevron-left"></i>
            <div class="menu_bar">
                <span>채팅방 관리</span>
                <!-- <i class="bi bi-chevron-compact-down"></i> -->
            </div>
            <div @click="toggleContent" class="title_change">
                <i i @click="toggleContent2" class="bi bi-chevron-down"></i>
                정보변경
            </div>
            <div class="infoChange">
                <div class="title_head">
                    <i @click="closeContent" class="bi bi-arrow-left-circle"></i>
                    <div class="title">정보변경</div>
                </div>
                <div class="write_zone">
                    <input type="text" class="chat_name" placeholder="유치원 이름">
                    <textarea row="5" clos="40" class="room_intro" placeholder="채팅방 소개"></textarea>
                    <button class="save">저장</button>
                </div>
            </div>
            <div class="content_change">
            </div>
        </div>
        <div class="menu">
            <div @click="toggleContent" class="title_change">
                <i i @click="toggleContent2" class="bi bi-chevron-down"></i>
                <span @click="toggleContent2">공지사항 작성하기</span>
            </div>
            <div class="infoChange">
                <div class="title_head">
                    <i @click="closeContent" class="bi bi-arrow-left-circle"></i>
                    <div class="title">공지사항 관리</div>
                </div>
                <div class="write_zone">
                    <textarea row="5" clos="40" class="room_intro"
                    placeholder="올리고 싶은 공지사항을 작성하세요."></textarea>
                    <button class="save">저장</button>
                </div>
            </div>
        </div>
        <div class="menu">
            <div @click="toggleContent" class="title_change">
                <i i @click="toggleContent2" class="bi bi-chevron-down"></i>
                <span @click="toggleContent2">강퇴관리</span>
            </div>
            <div class="infoChange">
            <div class="title_head">
                <i @click="closeContent" class="bi bi-arrow-left-circle"></i>
                <div class="title">강퇴 관리</div>
            </div>
            <div class="user_list">
                <div class="user_name">김선향</div>
                <input class="user_check" type="checkbox">
            </div>
            <div class="user_list">
                <div class="user_name">김선향</div>
                <input class="user_check" type="checkbox">
            </div>
            <div class="user_list">
                <div class="user_name">김선향</div>
                <input class="user_check" type="checkbox">
            </div>
            <div class="user_list">
                <div class="user_name">김선향</div>
                <input class="user_check" type="checkbox">
            </div>
            <div class="user_list">
                <div class="user_name">김선향</div>
                <input class="user_check" type="checkbox">
            </div>
            <div class="user_list">
                <div class="user_name">김선향</div>
                <input class="user_check" type="checkbox">
            </div>
            <button class="save">저장</button>
        </div>
        </div>
    </div>
</template>

<script>
import { inject, watch, onMounted } from 'vue';
export default {
    name: 'menu_modal',
    setup() {

        const isMenu = inject('isMenu');
        const menuOpen = inject('menuOpen')

        onMounted(() => {
            const menu_modal = document.querySelector('.menu_modal');
            watch(isMenu, (newVal, oldVal) => {
                menu_modal.classList.toggle('slideIn');
                menu_modal.classList.toggle('slideOut');
            })
        })

        const toggleContent = (event) => {
            const t = event.target.nextSibling;
            t.classList.toggle('show');
        }

        const toggleContent2 = (event) => {
            const t = event.target.parentNode.nextSibling;
            t.classList.toggle('show');
        }

        const closeContent = (event) => {
            const t = event.target.parentNode.parentNode;
            t.classList.remove('show');
        }




        return { isMenu, menuOpen, toggleContent, toggleContent2, closeContent };
    }
}
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

.menu_modal {
    position: absolute;
    top: 180px;
    left: 80%;
    /* transform: translate(50%, 50%); */
    width: 325px;
    height: fit-content;
    background: white;
    border: 1px solid black;
    /* display:none; */
}

.menu {
    width: 325px;
    height: fit-content;
}

.bi-chevron-left {
    position: absolute;
    left: 15px;
    top: 10px;
    cursor: pointer;
}

.bi-chevron-down {
    position: relative;
    left: 280px;
    top: 0px;
}

.menu_bar {
    width: 325px;
    border-bottom: 1px solid black;
    padding: 10px 0;

}

.menu_bar span {
    margin-left: 125px;
    font-weight: 800;
}

.menu_bar i {
    padding-left: 30px;
}

.title_change {
    padding: 15px 10px;
    font-size: 15px;
    text-align: left;
    border-bottom: 1px solid black;
    cursor:pointer;
}

span.show{
    border:none;
}







/* .menu_modal{display:none;} */

.slideIn {
    animation: slideIn 0.5s ease-in-out forwards;
}

.slideOut {
    animation: slideOut 0.5s ease-in-out forwards;
}

@keyframes slideIn {
    0% {
        opacity: 0;
        display: none;
    }

    100% {
        opacity: 1;
        display: block;
    }
}

@keyframes slideOut {
    0% {
        opacity: 1;
        display: block;
    }

    100% {
        opacity: 0;
        display: none;
    }
}



.save_bt {
    padding: 10px 100px;
}

.save {
    width: 100px;
    height: 25px;
    border: none;
    font-weight: 800;
    background: #D9D9D9;
    margin: 0 10px;
}

.kick {
    width: 100px;
    height: 25px;
    border: none;
    font-weight: 800;
    background: #D9D9D9;
    margin: 0 25px;
}

.notice {
    border: none;
    border-bottom: 1px solid black;
    padding: 15px 1px;
    text-align: left;
    font-size: 15px;
}

.notice span {
    /* margin-left:97px;
    font-weight:800; */
    text-align: left;
}

.notice i {
    padding-left: 10px;
}

.notice_write input {
    width: 220px;
    border: none;
    outline: none;
    margin-top: 25px;
    margin-left: 50px;
    text-align: left;
}

.notice_info_bt {
    padding: 10px 90px;
}

.notice_info {
    width: 100px;
    height: 25px;
    margin: 10px 20px;
    font-weight: 800;
    border: none;
    background: #d9d9d9;

}

.kick_out {
    /* font-weight: 900; */
    font-size: 15px;
    /* border-bottom: 1px solid black;
    border-top: 1px solid black; */
    text-align: left;
    padding: 10px 10px;
}

.Participants_list {
    text-align: center;
    font-weight: 900;
    padding-top: 5px;
}

.chat_box {
    width: 200px;
    margin: 10px auto;
    background: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.manager {
    position: relative;
    top: -2px;
    left: 9px;
}

.chat_box {
    display: flex;
    flex-direction: column;
}

.check_name {
    display: flex;
    align-self: end;
    margin-right: 50px;
    padding: 5px 0px;
    gap: 10px;
}

.kick_out_bt {
    padding: 10px 90px;
}



.infoChange{
    position:relative;
    left:-1px;
    height:fit-content;
    background:white;
    height:0px;
    overflow:hidden;
}
.title_head{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:10px 10px;
    font-size:20px;
    /* height:30px; */
}
.title_head .bi{
    position:absolute;
    left:10px;
}
textarea{
    resize:none;
}
.write_zone input, .write_zone textarea{
    margin:0px auto;
    width:100%;
    border-left:none;
    border-right:none;
    padding:5px;
}
.write_zone textarea{ height:200px;}
.user_list{
    display:flex;
    justify-content:space-around;
    border-top: 1px solid black;
    /* border-bottom: 1px solid black; */
    padding:5px 0;
}
.save{
    width:100%; height:40px;
    position:relative;
    margin:0;
    background:#eb6c68;
    color:white;
}

.bi-arrow-left-circle{
    cursor:pointer;
}

.show{
    height:fit-content;
    border:1px solid black;
    border-top:transparent;
}

</style>