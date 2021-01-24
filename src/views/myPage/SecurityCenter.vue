<template>
  <div id="SecurityCenter">
    <van-nav-bar title="安全中心" :border="false" fixed left-arrow @click-left="onMyPage"></van-nav-bar>
    <div class="scroll-content">
      <!-- 安全等级模块 -->
      <div class="safetyLevel">
        <h1>
          安全等级：
          <i ios="ios-star-outline" class="icon ion-ios-star-outline"></i>
          <i ios="ios-star-outline" class="icon ion-ios-star-outline"></i>
          <i ios="ios-star-outline" class="icon ion-ios-star-outline"></i>
          <i ios="ios-star-outline" class="icon ion-ios-star-outline"></i>
          <i ios="ios-star-outline" class="icon ion-ios-star-outline"></i>
        </h1>
        <div class="info-wrapper"> 

        <van-row class="row">
          <van-col class="ion-font col">您的账号级别为"中"还有提升空间!</van-col>
        </van-row>
        <van-row class="row">
          <van-col class="col">上次登录:2020-07-16 22:08:22</van-col>
        </van-row>
        <van-row class="row">
          <van-col class="col">地址:【四川省成都市电信】</van-col>
        </van-row>
        <van-row class="row">
          <van-col class="van-col col">
            IP:110.188.58.66 &nbsp;
            <span>不是本人登录?</span> &nbsp;
            <a>修改密码</a>
          </van-col>
        </van-row>
        
        </div>
      </div>

      <!-- 设置 -->
      <div class="setUp">
        <div class="item-inner">
          <div class="input-wrapper" @click="goLoginPwd()">
            <i ios="ios-lock" class="icon ion-ios-lock"></i>
            <span class="liststy" style="margin-right:4px">登录密码</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="item-inner">
          <div class="input-wrapper" @click="goFundPwd()">
            <i ios="ios-contact" class="icon ion-ios-contact"></i>
            <span class="liststy">资金密码</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="item-inner">
          <div class="input-wrapper" @click="goSecuritySettings()">
            <i ios="ios-hammer" class="icon ion-ios-hammer"></i>
            <span class="liststy">密保设置</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="item-inner">
          <div class="input-wrapper" @click="goBankCardSet()">
            <i ios="ios-card" class="icon ion-ios-card"></i>
            <span class="liststy">银行卡设置</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="item-inner">
          <div class="input-wrapper" @click="goLoginAddress()">
            <i ios="ios-calendar" class="icon ion-ios-calendar"></i>
            <span class="liststy">登录记录</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="item-inner">
          <div class="input-wrapper">
            <i ios="logo-google" class="icon ion-logo-google"></i>
            <span class="liststy">Google验证</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

      <!-- 确定 -->
      <div class="rebate-box">
        <div class="button-inner" @click="fandian()">安全退出</div>
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
    onMyPage() {
      this.$router.push({
        name: "MyPage"
      });
    },
    goLoginPwd() {
      this.$router.push({
        name: "LoginPwd"
      });
    },
    goFundPwd() {
      this.$router.push({
        name: "FundPwd"
      });
    },
    goSecuritySettings() {
      this.$router.push({
        name: "SecuritySettings"
      });
    },
    goBankCardSet() {
      this.$router.push({
        name: "BankCardSet"
      });
    },
    goLoginAddress() {
      this.$router.push({
        name: "LoginAddress"
      });
    }
  }
};
</script>

<style scoped lang='scss'>
#SecurityCenter {
  .scroll-content {
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 48px;

    &::-webkit-scrollbar {
      display: none;
    }

    .safetyLevel{
      background-color: #f1f1f1;
      padding: 30px;
      h1{
        margin-left: 5px;
        font-size: 22px;
        font-weight: 500;
        .icon{
          font-size: 22px;
        }
      }
      .info-wrapper{
        padding: 5px;
        width: 100%;
        .ion-font{
          font-size: 18px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .col{
          margin-bottom: 5px;
          span{
            color: red;
          }
          a{
            color: blue;
          }
        }
      }
    }

    .setUp{
      .item-inner{
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
        background-color: #fff;
        .input-wrapper{
          font-size: 16px;
          height: 40px;
          width: 100%;
          line-height: 40px;
          border-bottom: 1px solid gainsboro;
          .icon{
            font-size: 20px;
          }
          .liststy{
            font-size: 16px;
            width: 88%;
            display: inline-block;
            padding-left: 10px;
          }
        }
      }
    }

    .rebate-box {
      .button-inner {
        width: 80%;
        height: 40px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: #0468A5;
      }
    }
  }
}
</style>