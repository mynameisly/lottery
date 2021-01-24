<!--
 * @Author: your name
 * @Date: 2020-08-01 01:26:01
 * @LastEditTime: 2020-11-04 23:28:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\components\lotteryComponets\lotteryType10.vue
--> 
<template>
  <div class="lotteryType5-box">
    <div class="list-box">
      <div class="list-h">
        <div class="num-list">
          <div class="item-num num1">{{codeNumArr[0]}}</div>
          <div class="item-num num2">{{codeNumArr[1]}}</div>
          <div class="item-num num3">{{codeNumArr[2]}}</div>
          <div class="item-num num4">{{codeNumArr[3]}}</div>
          <div class="item-num num5">{{codeNumArr[4]}}</div>
          <div class="item-num num6">{{codeNumArr[5]}}</div>
          <div class="item-num num7">{{codeNumArr[6]}}</div>
          <div class="item-num num8">{{codeNumArr[7]}}</div>
          <div class="item-num num9">{{codeNumArr[8]}}</div>
          <div class="item-num num10">{{codeNumArr[9]}}</div>
        </div>
        <div class="icon-box" @click="activeFunc">
          <van-icon :name="showMore?'arrow-up':'arrow-down'" size="20" color="#0468a5" />
        </div>
      </div>
      <div class="list-num" :class="showMore?'showList-num':''">
        <div class="list-item" v-for="item in dataObj" :key="item.expect">
          <div class="title"><span>{{item.expect}}期</span></div>
          <div class="item-nums">
            <div class="item-num">{{item.code.split(',')[0]}}</div>
            <div class="item-num">{{item.code.split(',')[1]}}</div>
            <div class="item-num">{{item.code.split(',')[2]}}</div>
            <div class="item-num">{{item.code.split(',')[3]}}</div>
            <div class="item-num">{{item.code.split(',')[4]}}</div>
            <div class="item-num">{{item.code.split(',')[5]}}</div>
            <div class="item-num">{{item.code.split(',')[6]}}</div>
            <div class="item-num">{{item.code.split(',')[7]}}</div>
            <div class="item-num">{{item.code.split(',')[8]}}</div>
            <div class="item-num">{{item.code.split(',')[9]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lotteryType5', // 投注类型（五个数）
  props: ['dataObj', 'clear'],
  data() {
    return {
      showMore: false,
      codeNumArr: [],
    }
  },
  methods: {
    activeFunc() {
      this.showMore = !this.showMore;
    },
    backData() {
      this.$emit('backData', {
        type: this.dataObj,
        typeIndex: this.indexNum,
        data: this.selectId
      })
    },
    getCodeNums() {
      this.randomNumFunc = setInterval(() => {
        let nums = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)];
        this.codeNumArr = nums
      }, 100)
    }
  }
}
</script>
<style lang="scss" scoped>
.lotteryType5-box {
  width: 100%;
  box-sizing: border-box;
  .list-box {
    width: 100%;
    .list-h {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 5px;
      padding-top: 0;
      .num-list {
        width: calc(100% - 30px);
        display: flex;
        justify-content: space-around;
        .item-num {
          width: 28px;
          height: 28px;
          background: #0468a5;
          border-radius: 50%;
          text-align: center;
          line-height: 29px;
          font-size: 12px;
          color: #ffffff;
          font-weight: bold;
        }
        .num1 {
          background: #5234ff;
        }
        .num2 {
          background: #bfbfbf;
        }
        .num3 {
          background: #760600;
        }
        .num4 {
          background: #ff7600;
        }
        .num5 {
          background: #17e2e5;
        }
        .num6 {
          background: #4b4b4b;
        }
        .num7 {
          background: #03bc00;
        }
        .num8 {
          background: #ff2600;
        }
        .num9 {
          background: #e6de00;
        }
        .num10 {
          background: #0092dd;
        }
      }
      .icon-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .list-num {
      width: 100%;
      height: 120px;
      box-sizing: border-box;
      padding: 5px;
      overflow: auto;
      display: none;
      .list-item {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 5px;
        .title {
          width: 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .item-nums {
          width: calc(100% - 2.2rem);
          display: flex;
          justify-content: space-between;
          .item-num {
            width: 24px;
            height: 24px;
            border: 1px solid #0468a5;
            border-radius: 50%;
            text-align: center;
            line-height: 25px;
            font-size: 12px;
            color: #000;
          }
        }
      }
      
    }
    .showList-num {
      display: block!important;
    }
  }
}

</style>