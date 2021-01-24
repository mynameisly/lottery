<template>
  <!-- 充值 -->
  <div id="Recharge">
    <!-- NavBar导航栏 -->
    <!-- <van-nav-bar
      title="充值"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
      </template>
    </van-nav-bar>-->
    <div class="Recharge-header">
      <div class="goBack-btn">
        <i role="img" class="icon icon-ios ion-ios-arrow-back"></i>
      </div>
      <div class="Recharge-title">充值</div>
      <div class="Recharge-record">
        <i role="img" class="icon icon-ios ion-ios-paper-outline"></i>
      </div>
    </div>
    <!-- 主账户&冻结资金 -->
    <van-row class="account-room">
      <van-col :span="10" offset="2">
        <div>
          主账户
          <br />
          <span class="bold">1.6950</span>元
        </div>
      </van-col>
      <van-col :span="10" offset="2">
        <div>
          冻结资金
          <br />
          <span class="bold">0.000</span>元
        </div>
      </van-col>
    </van-row>
    <div class="Recharge-body">
      <!-- 充值方式 -->
      <div class="Recharge-mode" @click="onRechargeMode">
        <span>充值方式</span>
        <span>旧银行转账充值</span>
        <i role="img" class="icon icon-ios ion-ios-arrow-down"></i>
      </div>
      <!-- 充值方式弹出层 -->
      <van-popup
        v-model="isShowRechargeMode"
        round
        position="center"
        :style="{ width: '250px', height: '100' }"
      >
        <h1 class="mode-title">充值方式</h1>
        <div class="mode-body">
          <ul>
            <li v-for="(item,index) in modeList" :key="index" @click="selected(item.text)">
              <p
                :class="{active : activeItem == item.text}"
                style="display: flex;justify-content: space-between;"
              >
                {{ item.text }}
                <i role="img" class="icon-check icon-ios ion-ios-checkmark"></i>
              </p>
            </li>
          </ul>
          <div class="alert-button-group">
            <p @click="cancel">取消</p>
            <p @click="confirm">确定</p>
          </div>
        </div>
      </van-popup>

      <van-row>
        <van-col span="19" :offset="1">
          <van-field
            v-model="backAccount"
            label="银行账号"
            placeholder="银行账号"
            style="padding: 18px 0 16px 20px;background: #F6F7F9"
          />
        </van-col>
        <van-col span="4" class="copyText">复制</van-col>
      </van-row>
      <van-row>
        <van-col span="19" :offset="1">
          <van-field
            v-model="backName"
            label="银行名称"
            placeholder="银行名称"
            style="padding: 18px 0 16px 20px;background: #F6F7F9"
          />
        </van-col>
        <van-col span="4" class="copyText">复制</van-col>
      </van-row>
      <van-row>
        <van-col span="19" :offset="1">
          <van-field
            v-model="accountName"
            label="账户姓名"
            placeholder="账户姓名"
            style="padding: 18px 0 16px 20px;background: #F6F7F9"
          />
        </van-col>
        <van-col span="4" class="copyText">复制</van-col>
      </van-row>
      <van-row>
        <van-col span="19" :offset="1">
          <van-field
            v-model="accountAmount"
            label="充值金额"
            style="padding: 18px 0 16px 20px;background: #F6F7F9"
          />
        </van-col>
      </van-row>

      <van-row>
        <van-col span="19" :offset="2">
          <div class="btn-wrapper">
            <button class="btn-group" v-for="(account,index) in btnGroup" :key="index">{{account}}</button>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="19" :offset="1">
          <van-field
            v-model="accountTime"
            label="充值时间"
            style="padding: 18px 0 16px 20px;background: #F6F7F9"
          />
        </van-col>
      </van-row>
      <van-row>
        <van-col span="19" :offset="1">
          <van-field
            v-model="realName"
            label="真实姓名"
            style="padding: 18px 0 16px 20px;background: #F6F7F9"
          />
        </van-col>
      </van-row>
      <div class="remarks">
        <div>
          <i item-left role="img" class="information icon-ios ion-ios-information-circle"></i>
          <span>单笔限额1-100000元</span>
        </div>
        <div>
          <i item-left role="img" class="information icon-ios ion-ios-information-circle"></i>
          <span>充值时间举例： 晚上18点30分，请输入1830</span>
        </div>
      </div>
      <div class="submit-wrapper">
        <button class="threeMinutes">三分钟催到账</button>
        <button class="submitCheck">已到账，提交审核</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowRechargeMode: false,
      activeItem: "旧银行转账充值",
      modeList: [
        { text: "旧银行转账充值" },
        { text: "云闪付转账充值" },
        { text: "支付宝扫码充值一" },
        { text: "支付宝扫码充值二" },
        { text: "支付宝手机充值一" },
        { text: "支付宝手机充值二" },
        { text: "支付宝转卡充值" }
      ],
      backName: "工商银行",
      backAccount: "1804001901033836759",
      accountName: "杨薇",
      btnGroup: [500, 1000, 2000, 3000, 5000],
      accountAmount: "",
      accountTime: "",
      realName: ""
    };
  },
  methods: {
    onClickLeft() {
      // 点击左侧返回按钮
    },
    onClickRight() {},
    onRechargeMode() {
      this.isShowRechargeMode = true;
    },
    selected(value) {
      this.activeItem = value;
    },
    cancel() {
      this.isShowRechargeMode = false;
    },
    confirm() {}
  }
};
</script>

<style lang="scss" scoped>
#Recharge {
  .icon {
    font-size: 26px;
  }
  .Recharge-header {
    display: flex;
    justify-content: space-between;
    height: 48px;
    line-height: 48px;
    background: #0468a5;
    color: #fff;
    .goBack-btn {
      padding-left: 10px;
    }
    .Recharge-title {
      font-size: 20px;
    }
    .Recharge-record {
      padding-right: 10px;
    }
  }
  .account-room {
    background: #0468a5;
    padding: 0.3rem 0;
    color: #fff;
    .bold {
      font-size: 20px;
    }
  }
  .Recharge-body {
    margin-top: 14px;
    .Recharge-mode {
      display: flex;
      justify-content: space-around;
      background: #fff;
      color: #535353;
      height: 50px;
      line-height: 50px;
      p {
        height: 46px;
        line-height: 46px;
        i {
          font-size: 30px;
        }
      }
    }
    .mode-title {
      font-size: 20px;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid gainsboro;
    }
    .mode-body {
      ul {
        padding: 10px;
        height: 240px;
        overflow: auto;
        li {
          height: 40px;
          line-height: 40px;
        }
        .active {
          color: #0468a5;
        }
      }
      .alert-button-group {
        border-top: 1px solid gainsboro;
        display: flex;
        p {
          width: 50%;
          height: 44px;
          line-height: 44px;
          text-align: center;
          color: #0468a5;
        }
        p:nth-child(1) {
          border-right: 1px solid gainsboro;
        }
      }
    }
    .van-row,
    .van-col {
      height: 60px;
      line-height: 60px;
    }
    .van-row {
      border-bottom: 1px solid #e5e5e5;
    }
    .copyText {
      color: #0468a5;
    }
    .btn-wrapper {
      text-align: center;
      .btn-group {
        border: 1px solid #0468a5;
        text-align: center;
        padding: 0 10px;
        border-radius: 5px;
        color: #0468a5;
        background-color: #FAFAFA;
        height: 35px;
        line-height: 35px;
        margin: 12px 5px;
      }
    }
    .remarks{
      margin: 4px 0 0 8px;
      color: #9D9D9D;
      .information{
        font-size: 14px;
        margin: 4px;
      }
    }
    .submit-wrapper{
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      button{
        width: 46%;
        color: #fff;
        font-size: 16px;
        padding: 10px 8px;
        border-radius: 5px;
        background-color: #0468a5;
      }
    }
  }
}
</style>