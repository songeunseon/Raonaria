<template>
    <div v-if="isCancel" class="wrap">
        <div class="words">정말 취소하시겠습니까?</div>
        <div class="button_wrap">
            <button class="bt">확인</button>
            <button @click='cancelOpen()' class="bt" value="취소">취소</button>
        </div>
    </div>
</template>

<script>
import {ref, inject} from 'vue';
export default{
    name:'Cancel_Alert',
    setup(){
        // const CheckCancle = ref(true);
        // const CheckAgain = () => CheckCancle.value = !CheckCancle;

        const isCancel = inject('isCancel');
        const cancelOpen = inject('cancelOpen');

        return{
            isCancel, cancelOpen
        }
    }


}
</script>

<style scoped>
.wrap{
    width:409px;
    height:107px;
    border:1px solid black;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    font-size:20px;
    background:white;
    position:fixed;
    top:20%;
    left:50%;
    transform: translate(-50%);
}
.button_wrap{
    display:flex;
    gap:10px;
}

.bt{
    width:118px;
    height:37px;
    border:none;
    background-color:#AAAAAA;
    font-size:20px;
    cursor:pointer;
}

</style>