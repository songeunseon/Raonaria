<template>
    <div id="chat_info">

        <div class="list">
            <div class="title">
                <div class="master">방장 : 김선향</div>
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
            <div class="title">
                <div class="word">서구 유치원<br>새싹반 유치원 채팅방</div>
            </div>
        </div>

        <div class="list">
            <div class="title">
                <div class="master">방장 : 송은선</div>
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
            <div class="title">
                <div class="word">동구 유치원<br>열매반 유치원 채팅방</div>
            </div>
        </div>

        <div class="list">
            <div class="title">
                <div class="master">방장 : 송은선</div>
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
            <div class="title">
                <div class="word">중구 유치원<br>참외반 유치원 채팅방</div>
            </div>
        </div>

        <div class="list">
            <div class="title">
                <div class="master">방장 : 전계림</div>
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
            <div class="title">
                <div class="word">유성구 유치원<br>딸기반 유치원 채팅방</div>
            </div>
        </div>
        <div class="list">
            <div class="title">
                <div class="master">방장 : 신상수</div>
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
            <div class="title">
                <div class="word">동구 유치원<br>예쁜나 유치원 채팅방</div>
            </div>
        </div>
        <div class="list">
            <div class="title">
                <div class="master">방장 : 김선향</div>
                <RouterLink to="/chatWindow">
                    <input type="button" value="입장" class="position">
                </RouterLink>
            </div>
            <div class="title">
                <div class="word">중구 유치원<br>수박반 유치원 채팅방</div>
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
    margin-bottom:150px;
}



.list {
    background:white;
    width: 250px;
    height: 200px;
    border: 2px solid #0d6efd99;
    display:flex;
    flex-direction: column; justify-content: space-between;
    border-radius: 8px;
    padding:10px;
}

.title{
    display:flex; align-items: center;
    justify-content: space-between;
}

.master{
    font-size:20px;
}

.word {
    position: relative;
    font-weight: 700;
    padding-bottom:13px;
    font-size:18px;

}

.position {
    width: 54px;
    height: 53px;
    border-radius: 50px;
    border: 2px solid #0d6efd;
    background: white;
    /* position: relative; */
    /* left: 188px;
    bottom: 40px; */

}

.position:hover {
    background: #0d6efd;
    color: white;
}
@media (max-width:490px){
    #chat_info {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    width: 400px;
    margin-bottom:150px;
    justify-content: center;
}



.list {
    background:white;
    width: 150px;
    height: 150px;
    border: 2px solid #0d6efd99;
    display:flex;
    flex-direction: column; justify-content: space-between;
    border-radius: 8px;
    padding:10px;
}

.title{
    display:flex; align-items: center;
    justify-content: space-between;
}

.master{
    font-size:10px;
}

.word {
    position: relative;
    font-weight: 700;
    padding-bottom:13px;
    font-size:15px;

}

.position {
    width: 54px;
    height: 53px;
    border-radius: 50px;
    border: 2px solid #0d6efd;
    background: white;
    /* position: relative; */
    /* left: 188px;
    bottom: 40px; */

}

.position:hover {
    background: #0d6efd;
    color: white;
}
}
</style>