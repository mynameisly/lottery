<!--
 * @Author: your name
 * @Date: 2020-08-01 16:54:34
 * @LastEditTime: 2020-11-03 21:28:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\components\lotteryComponets\lotteryComponets.vue
--> 
<template>
  <div class="lotteryType-box">
    <div class="title">龙虎和</div>
    <div class="content-box">
      <div class="left-box">
        <div class="left-content">
          <div class="item">
            <span class="num" id="1"  :class="selectId.indexOf(0) > -1 ? 'selectItem' : ''"  @click="activeItem(0)">龙</span>
          </div>
          <div class="item">
            <span class="num" id="2" :class="selectId.indexOf(1) > -1 ? 'selectItem' : ''"  @click="activeItem(1)">虎</span>
          </div>
          <div class="item">
            <span class="num" id="3" :class="selectId.indexOf(2) > -1 ? 'selectItem' : ''"  @click="activeItem(2)">和</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lotteryType',
  props: [
    'data',
    'clear'
  ],
  data() {
    return {
      message: '',
      selectId: [],
      dataObj: {}
    }
  },
  watch: {
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
        this.$nextTick(() => {
          this.selectId = arr;
        })
      }
    },
    allClick() {
      this.selectId = [0,1,2,3,4,5,6,7,8,9];
    },
    bigClick() {
      this.selectId = [5,6,7,8,9];
    },
    smallClick() {
      this.selectId = [0,1,2,3,4];
    },
    danClick() {
      this.selectId = [1,3,5,7,9];
    },
    suangClick() {
      this.selectId = [0,2,4,6,8];
    },
    clearClick() {
      this.selectId = [];
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
    height: auto;
    .left-box {
      width: 100%;
      height: 100%;
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