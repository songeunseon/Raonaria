<template>
<table>
    <thead>
        <th>문의 날짜</th>
        <th>문의 내용</th>
        <th><input type="checkbox" id="allcheck" @change="allCheck"></th>
    </thead>
    <tbody>
        <tr class="weather">
            <td></td>
            <td></td>
            <td><input type="checkbox" name="check" class="checkBox"></td>
        </tr>
        <tr class="content">
            <td></td>
            <td></td>
            <td><input type="checkbox" name="check" class="checkBox"></td>
        </tr>
        <tr class="check">
            <td></td>
            <td></td>
            <td><input type="checkbox" name="check" class="checkBox"></td>
        </tr>
        <tr class="check">
            <td></td>
            <td></td>
            <td><input type="checkbox" name="check" class="checkBox"></td>
        </tr>
    </tbody>
</table>
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

table{
    border:2px solid #d9d9d9;
    width:100%;
    height:180px;
    /* margin:20px 0px; */
    border-collapse: collapse;
    background:white;
}

table thead th{
    border:2px solid #d9d9d9;
    border-bottom:3px solid #d9d9d9;
    border-collapse: collapse;
    background:#f5f5f5;
    font-size:15px;
    height:36px;
    text-align: center;
    /* background:#38B6FF; */
    
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

tbody tr td{
    border:2px solid #d9d9d9;
}

tbody tr td input{
    width:20px;
    height:20px;
    position:relative;
    left:53%;
    transform: translate(-60%, 20%);
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
}


#allcheck{
    transform: translate(0%, 5%);
}
}








</style>