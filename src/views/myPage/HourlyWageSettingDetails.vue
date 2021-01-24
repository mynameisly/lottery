<template>
  <div id="HourlyWageSettingDetails">
    <van-nav-bar title="小时工资设定 - 详情" :border="false" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="scroll-content">
      <!-- 用户信息 -->
      <div class="myuserinfo">
        <p>
          用户名：
          <span>xxa331212</span>
        </p>
        <p>
          用户类型：
          <span>代理</span>
        </p>
      </div>

      <!-- 工资详情 -->
      <div class="details-wrapper">
        <span>当前小时工资{{'2%'}}</span>
        <span>销售范围为：{{'1-100000000'}}</span>
        <span>封顶金额为：{{'0'}}</span>
      </div>

      <!-- 修改 -->
      <div class="rebate-box">
        <div class="button-inner" @click="openAccount()">立即开户</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
#HourlyWageSettingDetails {
  .scroll-content {
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 48px;

    &::-webkit-scrollbar {
      display: none;
    }
    .myuserinfo {
      display: flex;
      justify-content: space-between;
      padding: 12px;
    }
    .details-wrapper {
      background: #fff;
      padding: 12px;
      span{
        display: block;
      }
      span:nth-child(2) {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .rebate-box {
      .button-inner {
        margin: 20px 10px 10px 10px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: linear-gradient(#0468a5, #2587c3);
      }
    }
  }
}
</style>