<!--
 * @Author: your name
 * @Date: 2020-08-01 00:06:26
 * @LastEditTime: 2020-11-04 23:29:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\components\lotteryComponets\lotteryType3.vue
--> 
<template>
  <div class="lotteryType5-box">
    <div class="list-box">
      <div class="list-h">
        <div class="num-list">
          <div class="item-num">{{codeNumArr[0]}}</div>
          <div class="item-num">{{codeNumArr[1]}}</div>
          <div class="item-num">{{codeNumArr[2]}}</div>
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
          </div>
          <!-- <div class="title2"><span>组六</span></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lotteryType5', // 投注类型（3个数）
  props: ['dataObj', 'clear'],
  data() {
    return {
      showMore: false,
      codeNumArr: [],
      randomNumFunc: null
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
    this.getCodeNums();
  },
  destroyed() {
    clearInterval(this.randomNumFunc)
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
        let nums = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
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
          font-size: 0.5rem;
          color: #ffffff;
          font-weight: bold;
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
        .title2 {
          width: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: right;
        }
        .item-nums {
          width: calc(100% - 3.8rem);
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