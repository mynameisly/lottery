<template>
  <div id="SetUp">
    <van-nav-bar fixed title="通知设置" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <div class="item">
          <p>
            中奖通知
            <span :style="checked1?'color: #000': 'color: #888'">({{ winNotice }})</span>
          </p>
          <van-switch v-model="checked1" @change="switchWinNotice" />
        </div>
        <div class="item">
          <p>
            封单提示音
            <span :style="checked2?'color: #000': 'color: #888'">({{ Sound }})</span>
          </p>
          <van-switch v-model="checked2" @change="switchSound"/>
        </div>
        <div class="item">
          <p>
            聊天新消息通知
            <span :style="checked3?'color: #000': 'color: #888'">({{ news }})</span>
          </p>
          <van-switch v-model="checked3" @change="switchNews"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winNotice: "关",
      Sound: "关",
      news: "关",
      checked1: false,
      checked2: false,
      checked3: false
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    switchWinNotice(val) {
      if (val === false) {
        this.winNotice = "关";
      } else {
        this.winNotice = "开";
      }
    },
    switchSound(val) {
      if (val === false) {
        this.Sound = "关";
      } else {
        this.Sound = "开";
      }
    },
    switchNews(val) {
      if (val === false) {
        this.news = "关";
      } else {
        this.news = "开";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  .tab-content {
    width: 100%;
    padding-top: 50px;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      line-height: 25px;
      background-color: #fff;
      border-bottom: 1px solid gainsboro;
    }
  }
}
</style>
