<template>
  <div id="account-change-record">
    <van-nav-bar fixed title="团队报表" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <div class="search-bar">
          <span class="search-info">{{ sDate }}至{{ eDate }}</span>
          <span class="search-select" @click="clickSelect">
            筛选
            <i
              name="ios-funnel-outline"
              role="img"
              class="icon icon-ios ion-ios-funnel-outline"
              aria-label="funnel outline"
            ></i>
          </span>
        </div>

        <div class="item-inner">
          <div class="input-wrapper" @click="goUserDetails">
            <van-row class="row">
              <van-col :span="13" :offset="1">&nbsp;&nbsp;&nbsp;&nbsp;汇总</van-col>
              <van-col :span="9">下级账变(0)</van-col>
              <van-col :span="1">
               <van-icon name="arrow" class="right"/>
              </van-col>
            </van-row>
            <van-row class="row">
              <van-col :span="13" :offset="1">
                盈亏金额：
                <span class="money">{{ totalLotteryProfit }}</span>
              </van-col>
              <van-col :span="8">返点：0.00</van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>

    <aside-teamReport ref="asideTeamReport" @getTeamReport="getTeamReport"></aside-teamReport>
  </div>
</template>

<script>
import AsideTeamReport from "../../components/myPageComponents/AsideTeamReport.vue";

export default {
  components: {
    AsideTeamReport
  },
  data() {
    return {
      active: 0,
      sDate: "2020-07-02",
      eDate: "2020-07-02",
      totalLotteryProfit: "0.00", //盈亏金额
      userDetails: {}, // 传递给用户详情的数据
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      console.log(11);

      this.$router.back();
    },
    clickSelect() {
      this.$refs.asideTeamReport.showPage();
    },
    getTeamReport(time) {
      this.sDate = time.sDate;
      this.eDate = time.eDate;
      console.log('time',time);
      this.fetchget('/api/loadProxyIndex',time).then(res => {
        console.log('loadProxyIndex',res);
        if(res.code === 500) {
          this.$toast(res.msg)
        } else if(res.code === 200) {
          let reportTeamVO = res.data.uLotteryReportTeamStatisticsVO;
          this.totalLotteryProfit = reportTeamVO.totalLotteryProfit;
          this.userDetails = {
            totalLotteryProfit: reportTeamVO.totalLotteryProfit,//盈亏金额
            totalLotteryPrize: reportTeamVO.totalLotteryPrize,//中奖金额
            totalLotteryBillingOrder: reportTeamVO.totalLotteryBillingOrder, //实际销售额
            totalRecharge: res.data.uMainReportTeamStatisticsVO.totalRecharge,//充值金额
            totalWithdraw: res.data.uMainReportTeamStatisticsVO.totalWithdraw,//体现金额
            totalLotterySpendReturn: reportTeamVO.totalLotterySpendReturn,//返点
            totalLotteryProxyReturn: reportTeamVO.totalLotteryProxyReturn//下级返点
          }
        }
      })
    },
    goUserDetails() { // 前往用户详情
      this.$router.push({name: "TeamReportToUserDetails",params: { userDetails: this.userDetails }});
    }
  }
};
</script>

<style scoped lang="scss">
.content{
  .tab-content {
    width: 100%;
    padding-top: 50px;
  }
}
.search-bar {
  height: 35px;
  line-height: 35px;
  background: #fafafa;
  border-bottom: solid 1px #e0e0e0;
  color: #a6a6a6;
  font-size: 14px;
  text-align: center;
  .search-info {
    display: inline-block;
    width: 70%;
  }
  .search-select {
    display: inline-block;
    width: 30%;
    color: $themeColor;
  }
}
.input-wrapper{
  background: #fff;
    padding: 10px;
    .money{
      color: #11a311;
    }
    .right{
      padding-top: 15px;
      color: gray;
    }
}
</style>
