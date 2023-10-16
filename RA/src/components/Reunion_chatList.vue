<template>
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
</template>

<script setup>

</script>


<style scoped>
#chat_info {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    width: 800px;
}



.list {
    width: 250px;
    height: 200px;
    border: 2px solid #BEC1FF;
    /* display:flex; */
    border-radius: 8px;
}

.word {
    position: relative;
    top: 130px;
    left: 20px;
    font-weight: 700;
}

.position {
    width: 54px;
    height: 53px;
    border-radius: 50px;
    border: 2px solid #BEC1FF;
    background: white;
    position: relative;
    left: 188px;
    bottom: 40px;

}

.position:hover {
    background: #BEC1FF;
    color: white;
}
</style>