<template>
    <div id="wrap">
        <div class="title_head">
            <router-link to="/chatWindow">
                <i class="bi bi-arrow-left-circle"></i>
            </router-link>
            <div class="title">정보변경</div>
        </div>
        <div class="write_zone">
            <input type="text" class="chat_name" placeholder="유치원 이름">
            <textarea row="5" clos="40" class="room_intro" placeholder="채팅방 소개"></textarea>
            <router-link to="/chatWindow"><button class="save">저장</button></router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "Chatwindow_InfoChange",
    setup() {
    }
}
</script>
<style scoped>
*{font-family: 'SUITE-Regular';}
a {
    color: black;
    text-decoration: none;
}

#wrap {
    width: 800px;
    height: 100%;
    margin: 20px auto;
}

.title_head {
    display: flex;
    justify-content: center;
    align-items: center;


}

.title {
    font-size: 30px;
    width: 100%;
    border-bottom: 3px solid #f35b56;
    text-align: center;
}

.bi-arrow-left-circle {
    position: absolute;
    font-size: 30px;
    left: 30%;
    top: 20px;
}

.write_zone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    margin-top: 30px;

}

.chat_name {
    width: 800px;
    height: 50px;
    border: 0.5px solid grey;
    padding: 20px;
}

.room_intro {
    width: 800px;
    height: 100px;
    border: 0.5px solid grey;
    padding: 20px 20px;
}

.save {
    width: 800px;
    height: 50px;
    margin-top: 410px;
    background: #f35b56;
    color: #fff;
    border: 1px solid #f35b56;
    border-radius: 5px;
}
</style>