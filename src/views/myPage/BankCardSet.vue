<template>
  <div id="BankCardSet">
    <van-nav-bar
      fixed
      title="银行卡"
      left-arrow
      @click-left="onClickLeft"
      style="background-color: #303030"
    ></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <ul class="cardList">
          <li>
            <div class="cardItem">
              <div class="cardInfo">
                <p class="infoIcon">
                  <span class="iconContain">
                    <i class="icon iconfont icon-ICBC"></i>
                  </span>
                </p>
                <p class="infoDetail">
                  <span class="bankType">工商银行</span>
                  <span class="cardNumber">**** **** **** 2366</span>
                </p>
              </div>
              <span class="cardLogo">
                <i class="icon iconfont icon-ICBC"></i>
              </span>
            </div>
          </li>
        </ul>
        <div class="cardAdd" @click="addCard()">
          <i class="icon iconfont icon-plus"></i>
          <span>添加银行卡</span>
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
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    addCard() {
      this.$router.push({
        name: 'AddCard'
      })
    }
  }
};
</script>

<style scoped lang="scss">
#BankCardSet {
  background-color: #303030;
  height: 100vh;
  .content {
    .tab-content {
      width: 100%;
      padding-top: 50px;
      text-align: center;
      .cardItem {
        width: 95%;
        height: 14.5vh;
        margin-bottom: 8px;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        background-color: #9e9d9d;
        margin: 10px;
        .cardInfo {
          padding: 12px;
          padding-bottom: 20px;
          display: flex;
          // justify-content: space-between;
          .infoIcon {
            width: 16%;
            padding-bottom: 16%;
            margin-right: 8px;
            position: relative;
            .iconContain {
              position: absolute;
              min-width: 80%;
              min-height: 80%;
              left: 50%;
              -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
              border-radius: 50%;
              background-color: rgba(255, 255, 255, 0.6);
              text-align: center;
              .icon {
                position: absolute;
                top: 50%;
                left: 50%;
                color: rgba(255, 255, 255, 0.6);
                transform: translate(-50%, -50%);
                font-size: 3.2em;
                margin: auto 0;
              }
            }
          }
          .infoDetail {
            .bankType {
              display: flex;
              font-size: 1.5em;
              color: #fff;
            }
            .cardNumber {
              margin-top: 6px;
              font-size: 22px;
              color: #fff;
            }
          }
          .cardLogo {
            .icon {
              position: absolute;
              top: 50%;
              right: 8%;
              -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
              font-size: 8em;
              color: rgba(252, 249, 249, 0.15);
            }
          }
        }
        .cardLogo {
          .icon {
            position: absolute;
            top: 50%;
            right: 8%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            font-size: 8em;
            color: rgba(252, 249, 249, 0.15);
          }
        }
      }

      .cardAdd {
        padding: 10px 4px;
        margin: 0px 14px;
        border-bottom: 1px solid #262626;
        box-shadow: 0px 1px 0px #383838;
        display: flex;
        span {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
        }
        .icon {
          font-size: 1.6em;
          color: rgba(255, 255, 255, 0.5);
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
