<template>
  <div id="MassMessage">
    <van-nav-bar fixed title="群发" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <div class="msgtouser">
          <p class="msgsend">
            您将发送消息给
            <span>&nbsp;3&nbsp;</span>位朋友
          </p>
          <p class="msgname">
            <span>我的上级,</span>
            <span>aad32432,</span>
            <span>xxa331212,</span>
          </p>
        </div>

        <div class="footer">
          <van-notice-bar scrollable text="温馨提示：为了您的账户资金安全，请勿向他人透漏您的账户密码及银行绑定信息！" />
          <div class="item-inner">
            <div class="label">
              <div class="message-box" id="message-box"></div>
              <span class="placeholder">给 3 位朋友发送消息(最多50字符)...</span>
            </div>
            <span class="button-inner">
              <i class="happy-fontsize icon icon-ios ion-ios-happy"></i>
            </span>
            <span class="button-inner">
              <i class="footer-btn icon icon-ios ion-ios-send"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
#MassMessage {
  .content {
    .tab-content {
      width: 100%;
      padding-top: 50px;
      .msgtouser {
        background-color: #fff;
        padding: 10px;
        .msgsend {
          color: #8c8b8b;
          margin-bottom: 14px;
        }
        .msgname {
          border: 1px solid #bfb9b9;
          min-height: 10px;
          padding: 8px 6px;
          border-radius: 10px;
        }
      }

      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: block;
        width: 100%;
        .item-inner {
          padding-left: 16px;
          display: flex;
          justify-content: space-around;
          background-color: #fff;
          .label {
            width: 50%;
            margin: 11px 8px 11px 0;
            .message-box {
              height: 20px;
              line-height: 20px;
            }
            .placeholder {
              color: #999;
              position: absolute;
              top: 50px;
              left: 16px;
              z-index: 10;
            }
          }
          .button-inner {
            // padding: 0 0.5em;
            // height: 24px;
            // font-size: 1.3rem;
            .icon {
              font-size: 26px;
              position: absolute;
              top: 50px;
              color: #0468A5;
            }
          }
        }
      }
    }
  }
}
</style>
