<template>
  <div>
    <van-nav-bar
      title="提现"
      :border="false"
      fixed
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <div slot="right">
        <van-icon name="notes-o" />
      </div>
    </van-nav-bar>
    <div class="scroll-content">
      <div class="person-box">
        <van-row>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">彩票账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">冻结金额</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="main-content">
        <van-field v-model="amount" label="提现金额" placeholder="请输入提现金额" />
        <div class="tips">
          <p>
            <i
              class="red-text iconsty icon icon-ios ion-ios-information-circle"
              name="information-circle"
              role="img"
              aria-label="information circle"
            ></i>
            <span style="margin-left:4px;">
              温馨提示：实际到账
              <font class="red-text">{{ '0' }}</font>
            </span>
          </p>
          <p>
            <i
              class="red-text iconsty icon icon-ios ion-ios-information-circle"
              name="information-circle"
              role="img"
              aria-label="information circle"
            ></i>
            <span style="margin-left:4px;">单次可转1—100000元</span>
          </p>
        </div>
        <van-field v-model="amount" label="资金密码" placeholder="请输入资金密码" />
        <div class="bank-room">
          <p class="bank-name">
            工商银行
            <span>(尾号*******2366)</span>
          </p>
          <p class="bank-username">
            祁***
            <span>
              <i
                name="md-arrow-dropdown"
                role="img"
                class="icon icon-ios ion-md-arrow-dropdown"
                aria-label="arrow dropdown"
              ></i>
            </span>
          </p>
        </div>
        <div class="tips">
          <p>
            <i
              class="red-text iconsty icon icon-ios ion-ios-information-circle"
              name="information-circle"
              role="img"
              aria-label="information circle"
            ></i>
            <span style="margin-left:4px;">
              今日已提现次数
              <font class="red-text">{{ '0' }}</font> &frasl;100&nbsp;次
            </span>
          </p>
          <p>
            <i
              class="red-text iconsty icon icon-ios ion-ios-information-circle"
              name="information-circle"
              role="img"
              aria-label="information circle"
            ></i>
            <span style="margin-left:4px;">*温馨提示：新绑定的银行卡需要6小时才能提现</span>
          </p>
        </div>
        <!-- 按钮 -->
        <div class="white-block">
          <van-button block type="info">提现</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: null // 提现金额
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onClickRight() {
      console.log(111);

      // 跳转
      //   this.$router.push({
      //     name: "AccountChangeRecord",
      //     query: {
      //       a: 1
      //     }
      //   });
    }
  }
};
</script>

<style scoped lang="scss">
.icon {
  font-size: 12px;
}
.large-size {
  font-size: 20px;
}
.mb-3 {
  margin-bottom: 15px;
}
.a-title {
  line-height: 20px;
}

.scroll-content {
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
}
.person-box {
  color: #fff;
  background-color: $themeColor;
  padding-left: 20px;
  padding-top: 60px;
  font-size: 12px;
  .person-name {
    font-size: 12px;
  }
}

.main-content {
  width: 100%;
  padding-top: 10px;
}

.tips {
  background: #f2f2f2;
  color: #333;
  padding: 6px 10px;
}
.bank-room {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  background-color: #fafafa;
  p {
    display: flex;
    align-items: center;
    height: 36px;
    line-height: 36px;
    color: #666;
    padding-left: 10px;
    padding-right: 10px;
  }
}

.white-block {
  width: 100%;
  height: 65px;
  margin-top: 5px;
  background-color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>
