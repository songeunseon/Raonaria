<script>
    import {inject} from 'vue';
    import data from '@/assets/일반현황.json';

    const RAdata= data;

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
        },
        methods:{
            search(event){
            this.$emit('sendKeyword',event.target.value);
            }
        },
        data(){
            return{
            searchKeyword: '',
            };
        },
        name:'EasySearch',
        props:["keyword"],
        methods:{
            search_Group(){
                const len = this.RAdata.length;
                for(let i=0; i<len;i++){
                if(this.RAdata[i].Column3.includes(this.keyword) == false ){
                    document.querySelectorAll(".left")[i].style.display="none";
                }else{
                    document.querySelectorAll(".left")[i].style.display="table-row";
                }
                }
            },
        },
        watch:{
            keyword(){
                this.search_Group();
            },
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
            <div class="section left" v-for="item in RAdata" :key="item.id">
                <table>
                    <tr>
                        <td>유치원명</td>
                        <td>{{ item.Column3  }}</td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>{{ item.Column9 }}</td>
                    </tr>
                    <tr>
                        <td>설립유형</td>
                        <td>{{ item.Column4 }}</td>
                    </tr>
                    <tr>
                        <td>운영시간</td>
                        <td>{{ item.Column12 }}</td>
                    </tr>
                </table>
                <div id="easyCheck">
                    <input type="checkbox" class="btn-check" name="options-base" id="car" autocomplete="off" checked>
                    <label class="btn" for="car">차량운행여부</label>
                    
                    <input type="checkbox" class="btn-check" name="options-base" id="special" autocomplete="off" checked>
                    <label class="btn" for="special">특수학급여부</label>
                    
                    <input type="checkbox" class="btn-check" name="options-base" id="after" autocomplete="off" checked>
                    <label class="btn" for="after">방과후돌봄</label>
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
    height: 300px;
    z-index: 100;
    position: absolute;
    background: #ffffff;
    border: 5px solid #a9bb51;
    border-radius: 30px;
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
.left{
    width: 300px;
    height: 200px;
    margin: 20px auto;
}

.left{
    display: flex;
    flex-direction: column;
    text-align: left;
}
.left table tr td{
    font-weight: 700;
    height: 40px;

}
#easyCheck{
    width: 300px;
    display: flex;
    justify-content: space-around;
}
#easyCheck .btn-check[type='checkbox']:checked+label{
    background: #FFD12499;
    border: 0;
    border-radius: 100px;
    font-size: 13px;
}
#easyCheck .btn-check[type='checkbox']:not(:checked)+label{
    background: #fff;
    border: 0;
    border-radius: 100px;
    font-size: 13px;
}

.easyimg{
    width: 250px;
    height: 200px;
    margin: 20px auto;
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
        width: 340px;
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
    width: 240px;
    display: flex;
    justify-content: center;
    column-gap: 10px;
}
#easyCheck .btn-check[type='checkbox']:checked+label{
    background: #FFD12499;
    border: 0;
    border-radius: 100px;
    font-size: 10px;
}
#easyCheck .btn-check[type='checkbox']:not(:checked)+label{
    background: #fff;
    border: 0;
    border-radius: 100px;
    font-size: 10px;
}
    .left{
        width: 250px;
        height: 150px;
        margin: 0px auto;
        padding: 10px;
    }
    .easyimg{
    
    width: 250px;
    height: 150px;
    margin: 0px auto;
    margin-top: 70px;
    border: 1px solid #aaa;
    bottom: 0;
}
}
</style>