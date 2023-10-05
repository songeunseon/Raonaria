<template>
    <TopMenu />
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
    </div>

    <login_Alert v-if="isAlert"/>
    <makeRoom v-if="isMakeRoom"/>
    <chat_List/>
    <chat_Footer/>

</template>

<script>
import login_Alert from '../components/login_Alert.vue';
import makeRoom from '../components/makeRoom.vue'
import {ref, provide} from 'vue';
import TopMenu from '../components/TopMenu.vue'
import chat_List from '../components/chat_List.vue';
import chat_Footer from '../components/chat_Footer.vue';

export default{
    name: 'chatRoom',
    components:{
        login_Alert,makeRoom,TopMenu,chat_List,chat_Footer
    },
    
    setup(){
        const isAlert = ref(false);
        provide('isAlert', isAlert);
        const alertOpen = () => {isAlert.value = true;}

        const isMakeRoom = ref(false);
        const makeRoomOpen = () => {isMakeRoom.value = !isMakeRoom.value;}

                
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
            /* height:600px; */
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
            
            font-size:28px;
        }
</style>