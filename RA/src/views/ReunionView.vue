<template>
    <div id="chat">
        <div class="chat_box">
            <p class="chat_room">동창회 채팅방</p>
            <div class="chat_add">
                <div class="icon">
                    <i class="bi bi-search"></i>
                </div>
                    <input type="text" class="search_input">
                    <i @click="makeRoomOpen()" class="bi bi-plus-circle"></i>
            </div>
        </div>
        <div id="chat_info">
            <div class="list">
            <div class="title">
                <div class="word">서구 유치원<br>새싹반 유치원 채팅방</div>
                
            </div>
            <div class="title">
                <RouterLink to="/chatWindow">
                <input type="button" value="입장" class="position">
            </RouterLink>
            </div>
        </div>
        <div class="list">
            <div class="title">
                <div class="word">동구 유치원<br>열매반 유치원 채팅방</div>
                
            </div>
            <div class="title">
                <RouterLink to="/chatWindow">
                <input type="button" value="입장" class="position">
            </RouterLink>
            </div>
        </div>
        <div class="list">
            <div class="title">
                <div class="word">중구 유치원<br>참외반 유치원 채팅방</div>
                
            </div>
            <div class="title">
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
        </div>
        <div class="list">
            <div class="title">
                <div class="word">유성구 유치원<br>딸기반 유치원 채팅방</div>
            </div>
            <div class="title">
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
        </div>
        <div class="list">
            <div class="title">
                <div class="word">동구 유치원<br>예쁜나 유치원 채팅방</div>
            </div>
            <div class="title">
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
        </div>
        <div class="list">
            <div class="title">
                <div class="word">중구 유치원<br>수박반 유치원 채팅방</div>
            </div>
            <div class="title">
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
        </div>
        </div>    
        <div class="info">
            <div class="info_title">로그인을 하시면 채팅방 입장이 가능합니다.</div>
        </div>
        
    </div>

    <login_Alert v-if="isAlert"/>
    <makeRoom v-if="isMakeRoom"/>

</template>

<script>
import login_Alert from '../components/login_Alert.vue';
import makeRoom from '../components/makeRoom.vue'
import {ref, provide} from 'vue';
export default{
    name: 'chatRoom',
    components:{
        login_Alert,makeRoom
    },
    
    setup(){
        const isAlert = ref(false);
        provide('isAlert', isAlert);
        const alertOpen = () => {isAlert.value = true;}

        const isMakeRoom = ref(false);
        const makeRoomOpen = () => {isMakeRoom.value = !isMakeRoom.value;}

        const isCancle = ref(false);
        const XbtOpen = () => {isCancle.value = !isCancle.value;}
        
        provide('isMakeRoom', isMakeRoom);
        provide('makeRoomOpen',makeRoomOpen)
        

        return{
            isAlert, alertOpen,makeRoomOpen,isMakeRoom, 
        }
    }
}
</script>

<style scoped>
*{
            padding:0;
            margin:0;
            box-sizing:border-box;
        }
        
        #chat{
            width:800px;
            height:600px;
            /* border:1px solid black; */
            margin:20px auto;
        }

        .chat_box{
            margin: 50px 100px;
        }

        .chat_room{
            text-align:center;
            font-size:40px;
            font-weight:800;
        }

        .chat_add{
            padding-top:10px;
            position:relative;
            display:flex;
            align-items: center;
            
        }

        .chat_add input{
            width:440px;
            height:32px;
            border:none;
            outline: none;
            border-bottom:3px solid #4849A1;
            /* border-radius: 5px; */
            text-align:center;
            
            
        }

        .icon{
            position:absolute;
            top:5px;
            left:0px;
            font-size:25px;
        }

        .bi-search{
            position:absolute;
            left:80px;
            top:-5px;
            font-size:30px;
        }

        .search_input{
            margin:0 auto;
        }



        .chat_add .bi-plus-circle{
            position:relative;
            right:50px;
            top:5px;
            font-size:28px;
        }

        #chat_info{
            margin:0 auto;
            display:flex;
            flex-wrap:wrap;
            column-gap:20px;
            row-gap:20px;
        }

        .info_title{
            width:800px;
            text-align:center;
            padding-top:20px;
            padding-bottom:5px;
            border-bottom:4px solid #AAAA;
            font-weight:700;
        }

        .list{
            width:250px;
            height:200px;
            border:2px solid #BEC1FF;
            /* display:flex; */
            border-radius: 8px;
        }

        .word{
            position:relative;
            top:130px;
            left:20px;
            font-weight:700;
        }

        .position{
            width:54px;
            height:53px;
            border-radius: 50px;
            border:2px solid #BEC1FF;
            background:white;
            position:relative;
            left:188px;
            bottom:40px;
            
        }

        .position:hover{
            background: #BEC1FF;
            color:white;
        }
</style>