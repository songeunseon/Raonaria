<script>
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import TopMenu from '../components/TopMenu.vue'
const router = useRouter();

export default{
  methods:{
    search(event){
      this.$emit('sendKeyword',event.target.value);
    },
    setLocation(event){
      this.selectOp.location=event.target.value;
      this.$emit('sendOption',this.selectOp);
    },
    setOp(event){
      this.selectOp.operation=event.target.value;
      this.$emit('sendOption',this.selectOp);
    },
    setEst(event){
      this.selectOp.est=event.target.value;
      this.$emit('sendOption',this.selectOp);
    },
    setClass(event){
      this.selectOp.uclass=event.target.value;
      this.$emit('sendOption',this.selectOp);
    },
  },
  data(){
    return{
      searchKeyword: '',
      selectOp:{
        location:'',
        operation:'',
        est:'',
        uclass:'',
      }
    };
  },
}
</script>
<template>
      <div id="SHbox">
  <div id="searchInput">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
    <input id="searchText" v-model="searchKeyword" @input="search($event)" type="text" placeholder="검색어를 입력하세요">
  </div>
    <div id="optionBox">
      <div class="searchList">
        <b class="optionText">지역</b>
        <div class="optionList">
          <select class="optiontag" aria-label="option1" @change="setLocation($event)">
            <option selected value="">구분</option>
            <option value="동구">동구</option>
            <option value="서구">서구</option>
            <option value="중구">중구</option>
            <option value="유성구">유성구</option>
            <option value="대덕구">대덕구</option>
          </select>
        </div>
      </div>
      <div class="searchList">
        <b class="optionText">운영항목</b>
        <div class="optionList">
          <select class="optiontag" aria-label="option2" @change="setOp($event)">
            <option selected value="">구분</option>
            <option value="운영">차량운행</option>
            <option value="1">특수학급</option>
          </select>
        </div>
      </div>
      <div class="searchList">
        <b class="optionText">설립유형</b>
        <div class="optionList">
          <select class="optiontag" aria-label="option3" @change="setEst($event)">
            <option selected value="">구분</option>
            <option value="국립/공립">국/공립</option>
            <option value="사립">사립</option>
          </select>
        </div>
      </div>
      <div class="searchList">
        <b class="optionText">학급</b>
        <div class="optionList">
          <select class="optiontag" aria-label="option4" @change="setClass($event)">
            <option selected value="">구분</option>
            <option value="3">만3세</option>
            <option value="4">만4세</option>
            <option value="5">만5세</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  #SHbox{
    width: 1000px;
    height: 200px;
    margin: 20px auto;
    padding: 10px;
  }
  #searchInput{
    width: 500px;
    height: 40px;
    font-size: 20px;
    margin: 10px auto;
    border-bottom: 3px solid #FFD124;
    display: flex;
    align-items: center;
    column-gap: 50px;
    padding: 10px;

  }
  .bi-search{
    width: 30px;
    height: 30px;
  }
  #searchText{
    width: 100%;
    border: 0;
    outline: none;
    text-align: center;
    display: flex;
    align-items: center;
    background: 0;
  }
  #optionBox{
    width: 80%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 15px;
  }
  .searchList{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .optionText{
    margin-bottom:0.5rem;
    font-size: 20px;
    font-weight: 700;
  }
  .optionList{
    font-size: 15px;
  }
  .optiontag{
    border: 0;
    background: 0;
    border-bottom:2px solid #FFD124;
    padding: 5px;
    outline: none;
    width: 100px;
  }
  option{
    text-align: left;
  }
  @media(min-width:490px) and (max-width:1194px){
    #SHbox{
      width: 100%; 
 
    }
    .optiontag option{
      font-size: 10px;
    }
  }
  @media(max-width:490px){
    #SHbox{
      width: 100%;
      height: 120px;  
    }
    .bi-search{
    width: 20px;
    height: 20px;
  }
    #searchInput{
      width: 200px;
    height: 30px;
      font-size: 13px;
    align-items: center;
    column-gap: 30px;
    padding: 5px;
    }
    
    .searchList{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    .optionText{
      width: 100%;
      font-size: 10px;
      text-align: center;
    }
    #optionBox{
    width: 100%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 15px;
  }
  .optiontag{
    width: 100%;
    font-size: 10px;
  }
  }
</style>