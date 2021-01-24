<template>
  <div id="EditLottery">
    <van-nav-bar fixed title="编辑彩票" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="scroll-content" style="padding-top: 48px;">
      <p class="p1 padding-left">已选彩种</p>
      <div class="list">
        <div class="lotterys" v-for="(name,idx) in selectedLotteryList" :key="idx">
          <van-icon class="down icon icon-ios ion-ios-remove-circle padding-left"></van-icon>
          <div class="item-inner">
            <div>
              <div class="brick-name">{{ name }}</div>
            </div>
            <van-icon class="icon icon-ios ion-ios-close" @click="subLottery(idx,name)"></van-icon>
          </div>
        </div>
      </div>

      <div class="list" v-if="isShowCollection">
        <div class="lotterys">
          <div class="item-inner">
            <div class="add-collection">
              <van-icon class="collection icon-ios ion-ios-add-circle"></van-icon>
              <span>请添加你的收藏</span>
            </div>
          </div>
        </div>
      </div>

      <p class="p1 padding-left">全部彩种</p>
      <div class="list">
        <div
          class="lotterys"
          v-for="(name,idx) in allLotteryList"
          :key="idx"
          @click="addLottery(idx,name)"
        >
          <van-icon
            class="down add-color icon icon-ios ion-ios-add-circle padding-left"
            ios="ios-add-circle"
          ></van-icon>
          <div class="item-inner">
            <div>
              <div class="brick-name">{{ name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLotteryList: ["腾讯10分彩", "河内分分彩"],
      allLotteryList: [
        "河内5分彩",
        "奇趣腾讯分分彩",
        "奇趣腾讯5分彩",
        "奇趣腾讯10分彩",
        "QQ分分彩",
      ],
      isShowCollection: false, // 默认不显示添加收藏
    };
  },
  watch: {
    selectedLotteryList(val) {
        val.length == 0 ? this.isShowCollection = true : this.isShowCollection = false;
    },
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    subLottery(id, name) {
      this.selectedLotteryList.splice(id, 1);
      this.allLotteryList.unshift(name);
    },
    addLottery(id, name) {
      this.selectedLotteryList.push(name);
      this.allLotteryList.splice(id, 1);
    },
  },
};
</script>

<style scoped lang="scss">
#EditLottery {
  .padding-left {
    padding-left: 10px;
  }
  .scroll-content {
    .p1 {
      font-size: 14px;
      color: #333;
      font-weight: bold;
      height: 30px;
      line-height: 30px;
      margin-bottom: 0;
    }
    .list {
      padding: 0 10px;
      .lotterys {
        display: flex;
        justify-content: flex-start;
        border: 1px solid #eee;
        border-radius: 4px;
        background-color: #fff;
        margin-bottom: 8px;
        .down {
          width: 34px;
          height: 34px;
          font-size: 20px;
          color: #0468a5;
          float: right;
          line-height: 33px;
          margin: 8px 0;
        }
        .item-inner {
          display: flex;
          width: calc(100% - 34px);
          justify-content: space-between;
          padding-right: 8px;
          .add-collection {
            margin: 10px auto;
            display: flex;
            .collection {
              color: #0468a5;
              font-size: 30px;
            }
            span {
              display: inline-block;
              padding-left: 10px;
              line-height: 40px;
              font-size: 16px;
            }
          }
          .brick-name {
            margin: 16px 8px 16px 0;
            font-size: 14px;
          }
          .icon {
            color: red;
            font-size: 30px;
            margin-top: 6px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
