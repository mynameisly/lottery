<template>
  <!-- 团队报表下用户详情 -->
  <div id="userDetails">
    <van-nav-bar
      fixed
      title="用户详情"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>

    <div class="content">
      <div class="list">
        <!-- 顶部内容 -->
        <div class="topbgc">
          <div class="details_wrapper">
            <div class="row">
              <div class="col">用户名称：<span class="textright">汇总</span></div>
            </div>
            <div class="row user_type">
              <div class="col">用户类型：<span class="textright">总代</span></div>
              <div class="col">下级：0&nbsp;&nbsp;&nbsp;&nbsp;&gt;</div>
            </div>
          </div>
        </div>

        <!-- 用户详情 -->
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">盈亏金额</div>
              <div class="col">{{ userDetails.totalLotteryProfit }}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">中奖金额</div>
              <div class="col">{{ userDetails.totalLotteryPrize }}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">实际销售额</div>
              <div class="col">{{ userDetails.totalLotteryBillingOrder }}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">充值金额</div>
              <div class="col">{{ userDetails.totalRecharge }}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">提现金额</div>
              <div class="col">{{ userDetails.totalWithdraw }}</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">返点</div>
              <div class="col">{{ userDetails.totalLotterySpendReturn }}</div>
            </div>
          </div>
        </div>
        <!-- 接口暂未返回赠送数据 -->
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">赠送</div>
              <div class="col">0</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-inner">
            <div class="row">
              <div class="col">下级返点</div>
              <div class="col">{{ userDetails.totalLotteryProxyReturn }}</div>
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
      userDetails: {
        totalLotteryProfit: "", //盈亏金额
        totalLotteryPrize: "", //中奖金额
        totalLotteryBillingOrder: "", //实际销售额
        totalRecharge: "", //充值金额
        totalWithdraw: "", //体现金额
        totalLotterySpendReturn: "", //返点
        totalLotteryProxyReturn: "", //下级返点
      },
    };
  },
  mounted() {
    this.userDetails = this.$route.params.userDetails;
  },
  methods: {
    onClickLeft() {
      console.log(11);
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
#userDetails {
  .content {
    width: 100%;
    padding-top: 46px;

    .list {
      .topbgc {
        width: 100%;
        background: #eceaea;
        padding-left: 8px;
        padding-right: 8px;
        .details_wrapper {
          width: 100%;
          padding: 11px 8px 11px 0;
          .row {
            .col {
              padding: 5px;
            }
          }
          .user_type {
            display: flex;
            justify-content: space-around;
            .col:nth-child(1) {
              width: 80%;
            }
            .col:nth-child(2) {
              width: 20%;
            }
          }
        }
      }
      .item {
        .item-inner {
          padding: 15px 11px;
          background-color: #f1f1f1;
          border-bottom: 0.55px solid #c8c7cc;
          .row {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>