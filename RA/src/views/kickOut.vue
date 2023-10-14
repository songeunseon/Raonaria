<template>
    <div id="wrap">
            <div class="title_head">
                <router-link to="/chatWindow">
                    <i class="bi bi-arrow-left-circle"></i>
                </router-link>
                    <div class="title">강퇴 관리</div>
                </div>
        <div class="write_zone">
        <div class="user_list">
            <div class="user_name">아이콘 이름</div>
            <input class="user_check" type="checkbox">
        </div>
        <router-link to="/chatWindow"><button class="save">강퇴하기</button></router-link>
    </div>
</div>        
</template>
<script>
export default{
    name:"kickOut",
    setup(){
    }
}
</script>
<style scoped>
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
    border-bottom:3px solid #BEC1FF;
    text-align:center; 
}

.bi-arrow-left-circle{
    position:absolute;
    font-size:30px;
    left:30%;
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
.user_list{
    width:600px;
    height:60px;
    border:0.5px solid grey;
    padding:20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.user_name{
    font-size:17px;
    font-weight:900;
}

.user_check{
    width:20px;
}

.save{
    width:800px;
    height:50px;
    margin-top:582px;
    background:#BEC1FF;
    color:#fff;
    border:1px solid #BEC1FF;
    border-radius: 5px;
}



</style>