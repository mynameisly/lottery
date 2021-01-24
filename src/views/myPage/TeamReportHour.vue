<template>
  <div id="account-change-record">
    <van-nav-bar fixed title="团队报表(小时)" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <div class="search-bar">
          <span class="search-info">{{ '2020-07-02' }}至{{ '2020-07-02' }}</span>
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

        <div class="contain">
          <div class="item-inner">
            <div class="input-wrapper">
              <van-row class="row">
                <van-col class="col">
                  <span class="xiao">用户:</span>
                  <span class="datetalid">a794658</span>
                </van-col>
              </van-row>
              <van-row class="row">
                <van-col :span="16">
                  <span>返点:</span>
                  <span class="datetalid">0.00</span>
                </van-col>
                <van-col :span="8">
                  <span>赠送:</span>
                  <span class="datetalid">0</span>
                </van-col>
              </van-row>
              <van-row class="row">
                <van-col :span="16">
                  <span>下级返点:</span>
                  <span class="datetalid">0</span>
                </van-col>
                <van-col :span="8">
                  <span>中奖金额:</span>
                  <span class="datetalid">0</span>
                </van-col>
              </van-row>
              <van-row class="row">
                <van-col :span="16">
                  <span>实际销售额:</span>
                  <span class="datetalid">0.000</span>
                </van-col>
                <van-col :span="8">
                  <span>投注量:</span>
                  <span class="datetalid">0</span>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
    </div>

    <aside-teamReportHour ref="asideTeamReportHour"></aside-teamReportHour>
  </div>
</template>

<script>
import AsideTeamReport from "../../components/myPageComponents/AsideTeamReportHour.vue";

export default {
  components: {
    AsideTeamReportHour
  },
  data() {
    return {
      active: 0
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
      this.$refs.asideTeamReportHour.showPage();
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
.contain {
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 1px 2px 3px #ccc;
  .input-wrapper {
    padding: 20px 100px 20px 20px;
    .row {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>
