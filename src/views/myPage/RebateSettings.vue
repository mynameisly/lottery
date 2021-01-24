<template>
  <div id="RebateSettings">
    <van-nav-bar title="返点设置" :border="false" fixed left-arrow @click-left="onMyPage"></van-nav-bar>
    <div class="scroll-content">
      <!-- 代理行 -->
      <div class="rebatetop-sty">
        <van-row style="width:100%;">
          <van-col :span="18" class="rebate-wrapper">
            <i class="icon icon-ios ion-ios-undo" name="undo" role="img" @click="onClickLeft"></i>
            <span class="usertypename">代理</span>
            <span class="username">aad32432</span>
          </van-col>
          <van-col :span="6">
            <span class="balance">余额：0</span>
          </van-col>
        </van-row>
      </div>

      <!-- 调整返点 -->
      <div class="rebatecontainer">
        <p>调整返点</p>
        <div class="rebate-wrapper" @click="goDetailRebate">
          <span class="rebate-point">1956-7.8</span>
          <div class="select-icon-inner"></div>
        </div>
      </div>

      <!-- 弹出框 -->
      <van-dialog width="70%" v-model="showDialog" title="1956-7.8" show-cancel-button>
        <ul>
          <li
            class="type-item"
            @click="changeAccountType(item, index)"
            :class="{'focus':accountTypeIndex==index}"
            v-for="(item, index) in typeList"
            :key="index"
          >
            <span class="item-txt">{{ item }}</span>
            <span v-if="accountTypeIndex == index" class="item-icon">
              <van-icon name="success" />
            </span>
          </li>
        </ul>
      </van-dialog>

      <!-- 确定 -->
      <div class="rebate-box">
        <div class="button-inner" @click="fandian()">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false, // 控制弹出层的显示和影藏
      accountTypeIndex: 0,
      typeList: ["1956-7.8"]
    };
  },
  methods: {
    onMyPage() {
      this.$router.push({
        name: "MyPage",
        query: {
          a: 111
        }
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    goDetailRebate() {
      this.showDialog = true;
    },
    changeAccountType() {

    }
  }
};
</script>

<style scoped lang='scss'>
#RebateSettings {
  .scroll-content {
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 48px;

    &::-webkit-scrollbar {
      display: none;
    }
    .rebatetop-sty {
      display: flex;
      align-items: center;
      padding: 5px;
      .rebate-wrapper {
        display: flex;
        .icon {
          font-size: 26px;
          color: #6a6a6a;
        }
        .usertypename {
          width: 60px;
          display: inline-block;
          padding: 5px;
          margin: 0 10px;
          text-align: center;
          color: #fff;
          background: #e31414;
          border-radius: 4px;
        }
        .username {
          font-size: 14px;
          color: #6a6a6a;
          line-height: 30px;
        }
      }
      .balance {
        font-size: 14px;
        color: #6a6a6a;
        line-height: 30px;
      }
    }
    .rebatecontainer {
      background-color: #fff;
      height: 90px;
      p {
        text-align: center;
        color: #888;
        padding: 20px 0 10px 0;
      }
      .rebate-wrapper {
        display: flex;
        justify-content: space-around;
        background-color: #fafafa;
        height: 20px;
        line-height: 20px;
        .rebate-point {
          padding-left: 30%;
        }
        .select-icon-inner {
          width: 0;
          height: 0;
          border-top: 5px solid;
          border-right: 5px solid transparent;
          border-left: 5px solid transparent;
          color: #999;
          pointer-events: none;
          margin-top: 5px;
        }
      }
    }
    .type-item{
      display: flex;
      justify-content: space-around;
      height: 40px;
      line-height: 40px;
      border-top: 0.55px solid #dbdbdf;
      border-bottom: 0.55px solid #dbdbdf;
      color: blue;
    }
    .rebate-box {
      .button-inner {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: linear-gradient(#4aabe6, #1d8dd2);
      }
    }
  }
}
</style>