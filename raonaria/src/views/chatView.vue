<template>
    <div id="chat">
        <p>동창회 채팅방</p>
        <input type="text" placeholder="검색어 입력">
        <i class="bi bi-plus-circle"></i>
        <div id="list1">
            <div class="title">
                <p class="word_1">서구 유치원</p>
                <p class="word_2">오픈채팅방</p>
            </div>
            <div class="title2">
                <p class="word3">새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" class="position">
            </div>
        </div>
        <div id="list2">
            <div class="title">
                <p class="word_1">00 유치원</p>
                <p class="word_2">오픈채팅방</p>
            </div>
            <div class="title2">
                <p class="word3">새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" class="position">
            </div>
        </div>
        <div id="list3">
            <div class="title">
                <p class="word_1">00 유치원</p>
                <p class="word_2">오픈채팅방</p>
            </div>
            <div class="title2">
                <p class="word3">새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" class="position">
            </div>
        </div>
        <div id="list4">
            <div class="title">
                <p class="word_1" >00 유치원</p>
                <p class="word_2">오픈채팅방</p>
            </div>
            <div class="title2">
                <p class="word3">새싹반 유치원 채팅방</p>
                <input type="button" value="입장하기" class="position">
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

.list1{
    display:flex;
}

.word1{
    font-size:18px;
    
}

.word2{
    font-size:12px;
    font-weight:800;
}

.word3{
    font-size:18px;
    font-weight:800;
}

.position{
    border:2px solid #BEC1FF;
    background:white;
    font-size:18px;
    font-weight:800;
    
}


</style>
