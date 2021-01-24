<template>
  <div id="PersonalReport">
    <van-nav-bar title="个人报表" :border="false" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="scroll-content">
      <div class="report-info">
        <p class="time">2020-07-12 至 2020-07-12</p>
        <p class="screen" @click="clickSelect">
          <i class="icon icon-ios ion-ios-funnel-outline"></i>&nbsp;&nbsp;筛选
        </p>
      </div>

      <!-- 实际销售总额 -->
      <div class="contain">
        <div class="pal">
          <p class="pal-top">实际销售总额</p>
          <p class="pal-mid">
            0
            <span>&nbsp;&nbsp;元</span>
          </p>
          <p class="pal-bottom">
            盈亏金额：
            <span>0.00</span>
            元
            <i class="eye icon icon-ios ion-ios-eye"></i>
          </p>
        </div>
        <div class="row">
          <div class="col">
            <span class="str">中奖金额(元)</span>
            <br />
            <span class="num">0.00</span>
          </div>
          <div class="col">
            <span class="str">游戏返点(元)</span>
            <br />
            <span class="num">0.00</span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="str">下级返点(元)</span>
            <br />
            <span class="num">0.00</span>
          </div>
          <div class="col">
            <span class="str">系统赠送(元)</span>
            <br />
            <span class="num">0.0000</span>
          </div>
        </div>
      </div>
    </div>
    
    <aside-selectTime ref="asideSelectTime"></aside-selectTime>
  </div>
</template>

<script>
import AsideSelectTime from "../../components/myPageComponents/AsideSelectTime.vue";
export default {
  components: {
    AsideSelectTime
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    clickSelect() {
      this.$refs.asideSelectTime.showPage();
    }
  }
};
</script>

<style lang="scss" scoped>
#PersonalReport {
  .scroll-content {
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 48px;

    &::-webkit-scrollbar {
      display: none;
    }
    .report-info {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      border-bottom: 1px solid #e0e0e0;
      .time {
        color: grey;
      }
      .screen {
        color: #0468a5;
      }
    }
    .contain {
      background: #fafafa;
      padding: 10px;
      .pal {
        width: 100%;
        height: 180px;
        text-align: center;
        margin-top: 40px;
        .pal-top {
          color: #888;
          font-size: 18px;
        }
        .pal-mid {
          font-size: 35px;
          color: #333;
          margin-top: 26px;
          margin-bottom: 26px;
        }
        .pal-bottom {
          color: #666;
          font-size: 16px;
          span {
            color: #11a311;
            font-size: 18px;
          }
          .icon {
            font-size: 20px;
          }
        }
      }
      .row {
        display: flex;
        justify-content: space-around;
        .str {
          color: #999;
          font-size: 14px;
        }
        .num {
          padding-bottom: 10px;
          color: #333;
          font-size: 26px;
          margin-left: 10px;
        }
      }
    }

    .list {
      margin: 5px;
      .item-inner {
        display: flex;
        justify-content: space-between;
        // height: 40px;
        // line-height: 40px;
        padding: 10px;
        .input-wrapper {
          display: flex;
          justify-content: space-between;
          span {
            color: gray;
          }
        }
      }
    }

    .main_btns {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 45px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .l {
        width: 40%;
        height: 100%;
        background: #f5f5f5;
        border: none !important;
        color: #333;
      }
      .r {
        width: 60%;
        background: linear-gradient(#4d82a3, #1b6491);
        color: #fafafa;
      }
    }
  }
}
</style>