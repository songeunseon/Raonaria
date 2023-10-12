<template>
    <div v-if="isCancel" class="wrap">
        <div class="words">정말 취소하시겠습니까?</div>
        <div class="button_wrap">
            <button class="check_bt">확인</button>
            <button @click='cancelOpen()' class="cancle_bt" value="취소">취소</button>
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
    height:135px;
    border:1px solid black;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    font-size:20px;
    background:white;
    position:fixed;
    top:32%;
    left:68%;
    transform: translate(-50%);
    z-index:120;
}
.button_wrap{
    display:flex;
    gap:10px;
}

.check_bt{
    width:118px;
    height:37px;
    border:none;
    background-color:#ffff;
    font-size:20px;
    cursor:pointer;
    border:2px solid #AAAAAA;
    color:#AAA;

}

.cancle_bt{
    width:118px;
    height:37px;
    border:none;
    background-color:#AAAAAA;
    color:#ffff
}

</style>