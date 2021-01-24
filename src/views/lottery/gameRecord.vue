<!--
 * @Author: your name
 * @Date: 2020-08-03 21:36:32
 * @LastEditTime: 2020-08-03 21:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\views\lottery\gameRecord.vue
--> 
<template>
  <div id="account-change-record">
    <van-nav-bar fixed title="游戏记录" left-arrow  @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <van-tabs v-model="active" :color="themeColor" style="box-shadow: 0 2px 2px rgba(0,0,0,0.1);padding-top: 40px;">
        <van-tab title="个人"></van-tab>
        <van-tab title="团队"></van-tab>
      </van-tabs>
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

    <aside-game ref="AsideGame"></aside-game>
  </div>
</template>

<script>
import AsideGame from "../../components/myPageComponents/AsideGame.vue";
import NoData from "../../components/NoData.vue";

export default {
  components: {
    AsideGame,
    NoData
  },
  data() {
    return {
      active: 0,
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
      this.$refs.AsideGame.showPage();
    }
  }
};
</script>

<style scoped lang="scss">
.tab-content {
  width: 100%;
  padding-top: 10px;
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
