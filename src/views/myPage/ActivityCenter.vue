<template>
  <div id="LoginAddress">
    <van-nav-bar fixed title="活动中心" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
          <p>精彩活动即将推出，敬请期待！</p>
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
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  .tab-content {
    width: 100%;
    padding-top: 50px;
    p{
        text-align: center;
    }
  }
}
</style>
