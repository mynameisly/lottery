<template>
  <div id="account-change-record">
    <van-nav-bar fixed title="提现记录" left-arrow  @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <van-row class="filter">
          <van-col :span="8">
            <i ios="ios-stats-outline" class="icon icon-ios ion-ios-stats-outline"></i>&nbsp;奖金
          </van-col>
          <van-col :span="8">
            <i name="ios-time-outline" class="icon icon-ios ion-ios-time-outline"></i>&nbsp;期号
          </van-col>
          <van-col :span="8" class="selected" @click="clickSelect">
            <i name="ios-funnel-outline" class="icon icon-ios ion-ios-funnel-outline"></i>&nbsp;筛选
          </van-col>
        </van-row>
        <!-- 无数据组件 -->
        <no-data :noDataText="noDataText"></no-data>
      </div>
    </div>

    <aside-selectTime ref="asideSelectTime"></aside-selectTime>
  </div>
</template>

<script>
import AsideSelectTime from "../../components/myPageComponents/AsideSelectTime.vue";
import NoData from "../../components/NoData.vue";

export default {
  components: {
    AsideSelectTime,
    NoData
  },
  data() {
    return {
      noDataText: "目前没有数据，在右上角改变一下条件试试~",
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
      this.$refs.asideSelectTime.showPage();
    }
  }
};
</script>

<style scoped lang="scss">
.tab-content {
  width: 100%;
  padding-top: 50px;
  .filter{
    text-align: center;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #e0e0e0;
    .selected{
      color: #0468a5;
    }
  }
}
</style>
