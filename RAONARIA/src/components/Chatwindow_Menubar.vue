<template>
    <div class="header">
        <div class="chat_name">
            <router-link to="/Reunion"><i class="bi bi-arrow-left-circle"></i></router-link>
            새싹반 유치원 채팅방
            <div class="icon">
                <i @click="menuOpen()" class="bi bi-list"></i>
                <i @click="exitOpen()" class="bi bi-door-open"></i>
            </div>
        </div>
    </div>


    

</template>
<script>
import { inject } from 'vue';
export default {
    name: "Chatwindow_Menubar",
    setup() {
        const isMenu = inject("isMenu");
        const menuOpen = inject('menuOpen');

        const isBan = inject('isBan')

        const isExit = inject('isExit');
        const exitOpen = inject('exitOpen');

        const banOff = () => isBan.value = false;

        return { isMenu, menuOpen, isBan, isExit, exitOpen, banOff }
    }

}
</script>

<style scoped>
/* .header{
    width:800px;
    height:200px;
    border:1px solid black;
    margin:10px 30px 0px 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
} */
a{color:black;}
input[type="checkbox"]{cursor:pointer;}
.bi{cursor:pointer; color: #fff;}

.header {
    width: 1000px;
    height: 60px;
    border: none;
    margin: 0 auto;
    font-size: 18px;
    background-color: #0d6efd;
    border-radius: 100px;
    margin:30px auto;
    color: #fff;
}

.chat_name {
    font-weight: 800;
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:100%;
    padding:0 10px;
}

.bi{font-size:30px;
}

.icon {
    /* padding:0 20px; */
    display: flex;
    justify-content:right;
    column-gap: 25px;
    font-size: 20px;
    position: relative;
    font-size:30px;
    color:BLACK;
}

.ban_modal {
    position: fixed;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 300px;
    height: 260px;
    background: white;
    border: 1px solid black;
    z-index: 10;
}

.top_bar {
    box-sizing: border-box;
    border-bottom: 1px solid black;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 800;
}

.modal_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 210px;
    padding: 20px 0;
    box-sizing: border-box;
}

.content_title {
    font-size: 20px;
    font-weight: 800;
    text-align: center;
}

.content_detail {
    font-size: 18px;
    text-align: center;
}

.button_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.modal_bt {
    border: none;
    width: 110px;
    height: 40px;
    font-size: 18px;
    background: #D9D9D9;
}
</style>