<!--
 * @Author: your name
 * @Date: 2020-08-01 16:54:34
 * @LastEditTime: 2020-10-11 11:15:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\components\lotteryComponets\lotteryComponets.vue
--> 
<template>
  <div class="lotteryType-box">
    <div class="title">{{dataObj}}</div>
    <div class="content-box">
      <div class="left-box">
        <div class="left-content">
          <div class="item">
            <span class="num" id="1"  :class="selectId.indexOf('01') > -1 ? 'selectItem' : ''"  @click="activeItem('01')">01</span>
          </div>
          <div class="item">
            <span class="num" id="2" :class="selectId.indexOf('02') > -1 ? 'selectItem' : ''"  @click="activeItem('02')">02</span>
          </div>
          <div class="item">
            <span class="num" id="3" :class="selectId.indexOf('03') > -1 ? 'selectItem' : ''"  @click="activeItem('03')">03</span>
          </div>
          <div class="item">
            <span class="num" id="4" :class="selectId.indexOf('04') > -1 ? 'selectItem' : ''"  @click="activeItem('04')">04</span>
          </div>
          <div class="item">
            <span class="num" id="5" :class="selectId.indexOf('05') > -1 ? 'selectItem' : ''"  @click="activeItem('05')">05</span>
          </div>
          <div class="item">
            <span class="num" id="6" :class="selectId.indexOf('06') > -1 ? 'selectItem' : ''"  @click="activeItem('06')">06</span>
          </div>
          <div class="item">
            <span class="num" id="7" :class="selectId.indexOf('07') > -1 ? 'selectItem' : ''"  @click="activeItem('07')">07</span>
          </div>
          <div class="item">
            <span class="num" id="8" :class="selectId.indexOf('08') > -1 ? 'selectItem' : ''"  @click="activeItem('08')">08</span>
          </div>
          <div class="item"> 
            <span class="num" id="9" :class="selectId.indexOf('09') > -1 ? 'selectItem' : ''"  @click="activeItem('09')">09</span>
          </div>
          <div class="item">
            <span class="num" id="10" :class="selectId.indexOf('10') > -1 ? 'selectItem' : ''"  @click="activeItem('10')">10</span>
          </div>
          <div class="item">
            <span class="num" id="11" :class="selectId.indexOf('11') > -1 ? 'selectItem' : ''"  @click="activeItem('11')">11</span>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="item" @click="allClick">全</div>
        <div class="item" @click="bigClick">大</div>
        <div class="item" @click="smallClick">小</div>
        <div class="item" @click="danClick">单</div>
        <div class="item" @click="suangClick">双</div>
        <div class="item" @click="clearClick">清</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lotteryType',
  props: [
    'data',
    'indexNum',
    'clear'
  ],
  data() {
    return {
      selectId: [],
      dataObj: {}
    }
  },
  watch: {
    clear: {
      handler(val) {
        if(val) {
          this.selectId = [];
          this.backData()
        }
      },
      deep: true
    }
  },
  created() {
    if(this.data) {
      this.dataObj = this.data;
    }
  },
  methods: {
    activeItem(id) {
      let onOf = true;
      let arr = JSON.parse(JSON.stringify(this.selectId));
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] == id) {
          arr.splice(i, 1)
          console.log(arr)
          onOf = false;
          break;
        }
      }
      if(onOf) {
        this.selectId.push(id)
      }else {
        this.selectId = arr;
      }
      this.backData();
    },
    allClick() {
      this.selectId = ['01','02','03','04','05','06','07','08','09','10', '11'];
      this.backData();
    },
    bigClick() {
      this.selectId = ['05','06','07','08','09','10', '11'];
      this.backData();
    },
    smallClick() {
      this.selectId = ['01','02','03','04', '05'];
      this.backData();
    },
    danClick() {
      this.selectId = ['01','03','05','07','09', '11'];
      this.backData();
    },
    suangClick() {
      this.selectId = ['02','04','06','08','10'];
      this.backData();
    },
    clearClick() {
      this.selectId = [];
      this.backData();
    },
    backData() {
      this.$emit('backData', {
        type: this.dataObj,
        typeIndex: this.indexNum,
        data: this.selectId
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.lotteryType-box {
  width: 100%;
  box-shadow: 0 0 5px 2px #EBEBEB;
  .title {
    font-size: 12px;
    color: #0468a5;
    text-align: left;
    border-bottom: 2px solid #0468a5;
    box-sizing: border-box;
    padding: 5px;
  }
  .content-box {
    width: 100%;
    height: 150px;
    .left-box {
      width: calc(100% - 80px);
      height: 100%;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .left-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .item {
        width: 20%;
        text-align: center;
        padding: 8px 0;
        .num {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #c8c7cc;
          box-sizing: content-box;
          text-align: center;
          line-height: 25px;
        }
        .selectItem {
          border-color: red;
        }
      }
      
    }
    .right-box {
      width: 70px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      float: right;
      box-sizing: border-box;
      padding-top: 10px;
      .item {
        width: 28px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 10px;
        border: 1px solid #eee;
        margin-bottom: 10px;
      }
    }
  }
}

</style>