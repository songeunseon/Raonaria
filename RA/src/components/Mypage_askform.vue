<template>
    <div class="wrap">
        <div class="title">
            <i @click="formOpen()" class="bi bi-x-circle"></i>
            <b>문의</b>
        </div>
            <textarea id="ask_area" name="ask_area" rows="5" column="50"  placeholder="문의 내용을 입력해주세요"></textarea>
        <div class="send_wrap"></div>
        <i class="bi bi-cursor"></i>
    </div>

</template>

<script>
import { inject} from 'vue';
export default {
    name: 'ask_form',
    setup() {
        const isForm = inject('isForm');
        const formOpen = inject('formOpen');
        return { isForm, formOpen }
    }
}

</script>

<style scoped>
.wrap {
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border: 5px solid #AAA;
    border-radius: 20px;
    gap: 10px;
    align-items: center;
    position: fixed;
    top: 105px;
    left: 55%;
    transform: translate(-50%);
    background: white;
}

.title {
    align-self: start;
    width: 55%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
}

.bi-x-circle {
    font-size: 25px;
    position: relative;
    left: 20px;
    cursor: pointer;
}

b {
    font-size: 30px;
}

#ask_area {
    width: 500px;
    height: 450px;
    padding: 20px 30px;
    margin: 0 auto;
}

.send_wrap {
    border-radius: 5px;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bi-cursor {
    font-size: 40px;
    cursor: pointer;
}

.fade-enter-from {
    margin-top: 300px;
}

.fade-enter-active {
    transition: all 0.5s;
}

.fade-enter-to {
    margin-top: 0px;
}


.fade-leave-from {

    margin-top: 0px;
}

.fade-leave-active {
    transition: all 0.5s;
}

.fade-leave-to {

    margin-top: 1000px;
}
</style>