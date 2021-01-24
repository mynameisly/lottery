<template>
  <div id="account-change-record">
    <van-nav-bar fixed title="追号记录" left-arrow  @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <van-tabs v-model="active" :color="themeColor" style="box-shadow: 0 2px 2px rgba(0,0,0,0.1);padding-top: 40px;">
        <van-tab title="个人追号"></van-tab>
        <van-tab title="团队追号"></van-tab>
      </van-tabs>
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
  padding-top: 8px;
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
