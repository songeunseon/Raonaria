<script>
    import {inject} from 'vue';

    export default{
        name:'EasySearch',
        setup(){
            const isEasySearch = inject('isEasySearch');
            const easySearch = inject('easySearch');
            // const isCloseEasySearch = ref(false);
            const CloseEasySearch = () => {
                    isEasySearch.value = false;
    }
            return{
                isEasySearch, easySearch, CloseEasySearch
            }
        }
    }

</script>
<template>
    <div id="easyBody">
        <div id="easyTitle">
            <svg @click="CloseEasySearch()" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <h3>간단조회</h3>
        </div>
        <div id="easyMain">
            <div class="section left">
                <table>
                    <tr>
                        <td>유치원명</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>설립유형</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>운영시간</td>
                        <td></td>
                    </tr>
                </table>
                <div id="easyCheck">
                    <div><b>차량운행여부</b><input type="checkbox"></div>
                    <div><b>특수학급여부</b><input type="checkbox"></div>
                    <div><b>방과 후 돌봄</b><input type="checkbox"></div>
                </div>
            </div>
            <div class="section easyimg">
                <!---->
            </div>
        </div>
    </div>
</template>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: 0;
}
#easyBody{
    width: 600px;
    height: 500px;
    z-index: 100;
    position: absolute;
    background: #b0d0ff;
    border-radius: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
#easyTitle{
    display: flex;
    margin: 10px 250px 0 10px;
    justify-content: space-between;
    align-items: center;
}
#easyTitle h3{
    font-weight: 900;
}
#easyMain{
    display: flex;
    justify-content: space-around;
}
.section{
    width: 290px;
    height: 400px;
    margin: 20px auto;
    padding: 10px;
}
.left{
    display: flex;
    flex-direction: column;
    text-align: left;
    row-gap: 30px;
}
.left table tr td{
    font-weight: 700;
    height: 60px;

}
#easyCheck{
    display: flex;
    flex-direction: column;
    font-size: 15px;
    row-gap: 10px;
} 
.easyimg{

    border: 1px solid #aaa;
}
@media(max-width:490px){
    #easyBody{
        width: 350px;
        height: 500px;
    }
    #easyTitle{
        width: 100%;
        display: flex;
        margin: 10px;
        justify-content: start;
        align-items: center;
        column-gap: 100px;
    }
    #easyMain{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .left{
        display: flex;
        flex-direction: column;
        text-align: left;
        row-gap: 10px;
    }
    .left table tr td{
        font-weight: 700;
        height: 40px;

    }
    #easyCheck{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        row-gap: 0px;
    } 
    #easyCheck div{
        display: flex;
        column-gap: 2px;
    }
    .section{
        width: 250px;
        height: 200px;
        margin: 10px auto;
        padding: 10px;
    }
}
</style>