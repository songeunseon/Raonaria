<template>
<table>
    <thead>
        <th>문의 날짜</th>
        <th>문의 내용</th>
        <th><input type="checkbox"></th>
    </thead>
    <tbody>
        <tr class="weather">
            <td></td>
            <td></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr class="content">
            <td></td>
            <td></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr class="check">
            <td></td>
            <td></td>
            <td><input type="checkbox"></td>
        </tr>
        <tr class="check">
            <td></td>
            <td></td>
            <td><input type="checkbox"></td>
        </tr>
    </tbody>
</table>
</template>

<script>
import MypageView from '../views/MypageView.vue';
export default{
    name:"Mypage_Question",
    setup(){
        
    }

}

</script>

<style scoped>

table{
    border:2px solid #d9d9d9;
    width:100%;
    height:180px;
    margin:20px 0px;
    border-collapse: collapse;
}

table thead th{
    border:2px solid #d9d9d9;
    border-bottom:3px solid #d9d9d9;
    border-collapse: collapse;
    background:#f5f5f5;
    font-size:15px;
    height:36px;
    text-align: center;
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


</style>