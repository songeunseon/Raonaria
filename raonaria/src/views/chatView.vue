<template>
    <div id="chat">
        <p>동창회 채팅방</p>
        <input type="text" placeholder="검색어 입력">
        <i class="bi bi-plus-circle"></i>
        <div id="list1">
            <div class="title">
                <p>서구 유치원</p>
                <p>오픈채팅방</p>
            </div>
            <div class="title2">
                <p>새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" id=position>
            </div>
        </div>
        <div id="list2">
            <div class="title">
                <p>00 유치원</p>
                <p>오픈채팅방</p>
            </div>
            <div class="title2">
                <p>새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" id=position>
            </div>
        </div>
        <div id="list3">
            <div class="title">
                <p>00 유치원</p>
                <p>오픈채팅방</p>
            </div>
            <div class="title2">
                <p>새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" id=position>
            </div>
        </div>
        <div id="list4">
            <div class="title">
                <p>00 유치원</p>
                <p>오픈채팅방</p>
            </div>
            <div class="title2">
                <p>새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" id=position>
            </div>
        </div>
    </div>
</template>



<script>
export default{
    name:'chatView',
    setup() {
        
    },
}
</script>

<style scoped>
#chat{
    width:1000px;
    border:1px solid black;

}
</style>
