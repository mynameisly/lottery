<!--
 * @Author: your name
 * @Date: 2020-08-01 16:54:34
 * @LastEditTime: 2020-11-03 23:13:11
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
            <span class="num" id="1"  :class="selectId.indexOf(0) > -1 ? 'selectItem' : ''"  @click="activeItem(0)">0</span>
          </div>
          <div class="item">
            <span class="num" id="2" :class="selectId.indexOf(1) > -1 ? 'selectItem' : ''"  @click="activeItem(1)">1</span>
          </div>
          <div class="item">
            <span class="num" id="3" :class="selectId.indexOf(2) > -1 ? 'selectItem' : ''"  @click="activeItem(2)">2</span>
          </div>
          <div class="item">
            <span class="num" id="4" :class="selectId.indexOf(3) > -1 ? 'selectItem' : ''"  @click="activeItem(3)">3</span>
          </div>
          <div class="item">
            <span class="num" id="5" :class="selectId.indexOf(4) > -1 ? 'selectItem' : ''"  @click="activeItem(4)">4</span>
          </div>
          <div class="item">
            <span class="num" id="6" :class="selectId.indexOf(5) > -1 ? 'selectItem' : ''"  @click="activeItem(5)">5</span>
          </div>
          <div class="item">
            <span class="num" id="7" :class="selectId.indexOf(6) > -1 ? 'selectItem' : ''"  @click="activeItem(6)">6</span>
          </div>
          <div class="item">
            <span class="num" id="8" :class="selectId.indexOf(7) > -1 ? 'selectItem' : ''"  @click="activeItem(7)">7</span>
          </div>
          <div class="item"> 
            <span class="num" id="9" :class="selectId.indexOf(8) > -1 ? 'selectItem' : ''"  @click="activeItem(8)">8</span>
          </div>
          <div class="item">
            <span class="num" id="10" :class="selectId.indexOf(9) > -1 ? 'selectItem' : ''"  @click="activeItem(9)">9</span>
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
    data: {
      handler(val) {
        console.log(val)
        this.dataObj = val;
      },
      deep: true
    },
    message: {
      handler(val) {
        this.message = val;
        this.backData()
      },
      deep: true
    },
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
      let index = arr.indexOf(id);
      if(index > -1) {
        arr.splice(index, 1)
        onOf = false;
      }
      if(onOf) {
        this.selectId.push(id)
      }else {
        this.selectId = arr;
      }
      this.backData()
    },
    allClick() {
      this.selectId = [0,1,2,3,4,5,6,7,8,9];
      this.backData()
    },
    bigClick() {
      this.selectId = [5,6,7,8,9];
      this.backData()
    },
    smallClick() {
      this.selectId = [0,1,2,3,4];
      this.backData()
    },
    danClick() {
      this.selectId = [1,3,5,7,9];
      this.backData()
    },
    suangClick() {
      this.selectId = [0,2,4,6,8];
      this.backData()
    },
    clearClick() {
      this.selectId = [];
      this.backData()
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
    height: 84px;
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
      .item {
        width: 28px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 10px;
        border: 1px solid #eee;
        margin-bottom: 2px;
      }
    }
  }
}

</style>