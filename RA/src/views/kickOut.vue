<template>
    <div id="wrap">
            <div class="title_head">
                <router-link to="/chatWindow">
                    <i class="bi bi-arrow-left-circle"></i>
                </router-link>
                    <div class="title">강퇴 관리</div>
                </div>
        <div class="write_zone">
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
        <div class="user_list">
            <div class="user_name">김선향</div>
            <input class="user_check" type="checkbox">
        </div>
        <div class="user_list">
            <div class="user_name">김선향</div>
            <input class="user_check" type="checkbox">
        </div>
    </div>
    <button @click="banON()" class="save">강퇴하기</button>
    <Chatwindow_KickOut v-show="isBan"/>
</div>
</template>
<script>
import {ref, provide} from 'vue'
import Chatwindow_KickOut from '../components/chatwindow_KickOut.vue'
export default{
    name:"kickOut",
    components:{
        Chatwindow_KickOut
    },
    setup(){
        const isBan = ref(false);
        provide('isBan', isBan);

        const banON = () => isBan.value = true;

        return{
            isBan, banON
        }
    }
}
</script>
<style scoped>
body{
    overflow-y: hidden;
}
a{color:black; text-decoration: none;}
#wrap{
    width:800px;
    height:100%;
    margin:20px auto;
}

.title_head{
    display:flex;
    justify-content:center;
    align-items:center;
    

}

.title{
    font-size:30px;
    width:88%;
    border-bottom:3px solid #f35b56;
    text-align:center; 
}

.bi-arrow-left-circle{
    position:absolute;
    font-size:30px;
    left:32%;
    top:20px;
}

.write_zone{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    row-gap:20px;
    margin-top:30px;
    width:800px;
    max-height:700px;
    overflow-y:scroll;


}
.user_list{
    width:600px;
    height:0px;
    padding:10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.user_name{
    font-size:17px;
    font-weight:900;
}

.user_check{
    width:20px;
}

.save{
    width:600px;
    height:50px;
    margin:10px 100px;
    background:#f35b56;
    color:#fff;
    border:1px solid #f35b56;
    border-radius: 5px;
}



</style>