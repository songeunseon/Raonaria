<template>
    <div id="wrap">
            <div class="title_head">
                <router-link to="/reunion">
                    <i class="bi bi-arrow-left-circle"></i>
                </router-link>
                    <div class="title">공지사항 관리</div>
                </div>
        <div class="write_zone">
        <textarea v-model="noticeContent" rows="5" cols="40" class="room_intro"
        placeholder="올리고 싶은 공지사항을 작성하세요."></textarea>
        <button @click="saveNotice" class="save">저장</button>
    </div>
</div>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNoticeStore } from '@/stores/notice';
import { useAuthStore } from '@/stores/auth';

export default{
    name:"noticeWrite",
    setup(){
        const noticeContent = ref('');
        const router = useRouter();
        const noticeStore = useNoticeStore();
        const authStore = useAuthStore();

        const saveNotice = async () => {
            if (!noticeContent.value.trim()) {
                alert('내용을 입력해주세요');
                return;
            }
            try {
                await noticeStore.addNotice(
                    '공지사항',
                    noticeContent.value.trim(),
                    authStore.userName || '관리자',
                    authStore.userId
                );
                noticeContent.value = '';
                alert('공지사항이 저장되었습니다');
                router.push('/notice');
            } catch (err) {
                alert('저장 실패: ' + err.message);
            }
        };

        return { noticeContent, saveNotice };
    }
}
</script>
<style scoped>
*{font-family: 'SUITE-Regular';}
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
    width:100%;
    border-bottom:3px solid #f35b56;
    text-align:center;
}

.bi-arrow-left-circle{
    position:absolute;
    font-size:30px;
    left: 30%;
    top:20px;
}

.write_zone{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    row-gap:20px;
    margin-top:30px;

}

.chat_name{
    width:800px;
    height:50px;
    border:0.5px solid grey;
    padding:20px;
}

.room_intro{
    width:800px;
    height:100px;
    border:0.5px solid grey;
    padding:20px 20px;
}

.save{
    width:800px;
    height:50px;
    margin-top:480px;
    background:#f35b56;
    color:#fff;
    border:1px solid #f35b56;
    border-radius: 5px;
    cursor: pointer;
}
.save:hover{
    background:#d94440;
}
</style>
