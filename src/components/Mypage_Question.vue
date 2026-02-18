<template>
<div class="table_wrap">
    <table>
        <thead>
            <th>문의 날짜</th>
            <th>문의 내용</th>
            <th><input type="checkbox" id="allcheck" @change="allCheck" v-model="allChecked"></th>
        </thead>
        <tbody>
            <tr class="content" v-for="inquiry in mypageStore.inquiries" :key="inquiry.id">
                <td>{{ formatDate(inquiry.createdAt) }}</td>
                <td>{{ inquiry.content }}</td>
                <td><input type="checkbox" class="checkBox" v-model="selectedInquiries" :value="inquiry.id"></td>
            </tr>
            <tr v-if="mypageStore.inquiries.length === 0">
                <td colspan="3" style="text-align:center; color:#888; padding:20px;">문의 내역이 없습니다</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
    name: "Mypage_Question",
    setup() {
        const mypageStore = inject('mypageStore')
        const selectedInquiries = inject('selectedInquiries')

        const allChecked = computed({
            get: () => {
                if (mypageStore.inquiries.length === 0) return false
                return selectedInquiries.value.length === mypageStore.inquiries.length
            },
            set: (val) => {
                if (val) {
                    selectedInquiries.value = mypageStore.inquiries.map(i => i.id)
                } else {
                    selectedInquiries.value = []
                }
            }
        })

        const allCheck = () => {}

        const formatDate = (timestamp) => {
            if (!timestamp) return ''
            const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
            return date.toLocaleDateString('ko-KR')
        }

        return { mypageStore, selectedInquiries, allChecked, allCheck, formatDate }
    }
}
</script>

<style scoped>

.table_wrap{
    width:100%;
    height: 150px;
    overflow-y:scroll;
    overflow-y: hidden;
    border-bottom:1px solid #d9d9d9;
}

table{
    border:2px solid #d9d9d9;
    width:100%;
    border-collapse: collapse;
    background:white;
    border:none;
}

table thead th{
    border:2px solid #d9d9d9;
    border-collapse: collapse;
    background:#a9bb51;
    font-size:15px;
    height:36px;
    text-align: center;
    color:white;
    font-weight:900;
}

table thead th input{
    width:20px;
    height:20px;
}

table thead th:nth-child(1){width:20%;}
table thead th:nth-child(2){width:70%;}
table thead th:nth-child(3){width:10%;}

.bi-check2-circle{
    color:#ff8d45;
    position:absolute;
    left:126px;
    top:0px;
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
    top:3px;
}

@media(max-width:576px){
    table thead th{
        font-size:12px;
        font-weight:800;
    }
    .content td:last-child{
        width: 10%;
        text-align: center;
    }
    tbody tr td{
        background:#fff;
        font-size:12px;
        text-align: center;
    }
    #allcheck{
        transform: translate(0%, 5%);
    }
}
</style>