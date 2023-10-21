<template>
<div class="table_wrap">
    <table>
        <thead>
            <th>문의 날짜</th>
            <th>문의 내용</th>
            <th><input type="checkbox" id="allcheck" @change="allCheck"></th>
        </thead>
        <tbody>
            <tr class="weather">
                <td>YYYY.MM.DD</td>
                <td>
                    <!-- <i class="bi bi-check2-circle"></i> -->
                    동창회 이용은 어떻게 하면 되나요?
                </td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>
                    <!-- <i class="bi bi-check2-circle"></i> -->
                    조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
            <tr class="content">
                <td>YYYY.MM.DD</td>
                <td>조회하려는 유치원이 어느 지역인지 잘 모르는데 어떻게 하면 될까요?</td>
                <td><input type="checkbox" name="check" class="checkBox"></td>
            </tr>
        </tbody>
    </table>
</div>
<!-- <span><i class="bi bi-check-square"></i> 답변완료 |</span>  -->
</template>

<script>
export default{
    name:"Mypage_Question",
    setup(){
        const allCheck = () => {
            const mainCheck = document.getElementById('allcheck');
            const checkBox = document.querySelectorAll('.checkBox');
            checkBox.forEach(function(item){
                item.checked = mainCheck.checked;
            });
        }
        return{
            allCheck
        }
    }
}

</script>

<style scoped>

.table_wrap{
    width:100%; height:290px;
    overflow-y:scroll;
    overflow-y: hidden;
    border-bottom:1px solid #d9d9d9;
}

table{
    border:2px solid #d9d9d9;
    width:100%;
    /* margin:20px 0px; */
    border-collapse: collapse;
    background:white;
    border:none;
    /* box-shadow: 0px 5px 3px 0px rgba(128, 128, 128, 0.304); */
}

table thead th{
    border:2px solid #d9d9d9;
    /* border-bottom:3px solid #d9d9d9;*/
    border-collapse: collapse;
    background:#a9bb51;
    /* background:#fff; */
    font-size:15px;
    height:36px;
    text-align: center;
    /* background:#38B6FF; */
    color:white;
    font-weight:900;
}
table thead th:first-child{
    /* border-radius: 10px 0 0 0; */
}
table thead th:last-child{
    /* border-radius: 0 10px 0 0; */
}

table thead th input{
    width:20px;
    height:20px;
    position:relative;
    top:3px;
}

table thead th:nth-child(1){width:20%;}
table thead th:nth-child(2){width:70%;}
table thead th:nth-child(3){width:10%;}
tbody tr{position:relative;}
/* tbody tr:nth-child(even){
    background:#ffc14e;
} */
.bi-check2-circle{
    color:#ff8d45;
    position:absolute; left:126px; top:0px;
    font-size:25px;
}

tbody tr td{
    border:1px solid #d9d9d9;
    text-align:center;
    overflow:hidden;
    padding: 5px 0;
}
tbody tr td:first-child{
    font-size:70%;
}
tbody tr td:nth-child(2){
    padding-left:5px;
    text-align: left;
    overflow:hidden;
}

tbody tr td input{
    width:20px;
    height:20px;
    position:relative;
    top:3px;
    /* left:53%;
    transform: translate(-60%, 20%); */
}

.answer_wrap{
    width:100%;
    height:135px;
    overflow-y:scroll;
    margin-top:10px;
    background:white;
}

.answer_wrap .list{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    background: white;
    /* border-radius: 30px; */
    border:2px solid #d9d9d9;
    margin-top:4px;
    padding: 5px 20px;
    cursor:pointer;
    font-size:10px;
    column-gap: 15px;
}

.answer_wrap .list .bi-check-square{
    font-size:20px;
    position:relative;
    display:flex;
    align-items:center;
}

.answer_wrap .list .aIcon{
    max-width:65px;
    display:flex; align-items: center;
    column-gap: 5px; white-space: nowrap;
}
.answer_wrap .list .aDetail{
    max-width:475px;
    font-weight:900;
    flex-grow:1;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}


.answer_wrap .list .aDate{
    width:100px;
    text-align: right;
    overflow:hidden;
    text-overflow: ellipsis;
}

@media(max-width:1194px){
    .answer_wrap .list .aIcon{
        display:none;
    }
    .answer_wrap .list .aDetail{
        width:100%;
        flex-grow:0;
    }
    .answer_wrap .list .aDate{
        display:none;
    }
}

@media(max-width:490px){
    table thead th{
        font-size:12px;
        font-weight:800;
    }
    .weather{
    background:white;
}

tbody tr td input{
    transform: translate(-50%, 20%);
}

tbody tr td{
    background:#fff;
    font-size:12px;
}


#allcheck{
    transform: translate(0%, 5%);
}

.checkBox{
    
}
}








</style>