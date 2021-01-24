<template>
  <div id="PromoteAccountOpen">
    <van-nav-bar title="推广开户" :border="false" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="scroll-content">
      <van-tabs v-model="activeName">
        <van-tab title="精准开户" name="AccurateAccount">
          <accurate-account />
        </van-tab>
        <van-tab title="链接开户" name="LinkAccount">
          <link-account />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import AccurateAccount from "./AccurateAccount"; // 精准开户
import LinkAccount from "./LinkAccount"; // 链接开户
export default {
  components: {
    AccurateAccount,
    LinkAccount
  },
  data() {
    return {
      activeName: "AccurateAccount"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
#PromoteAccountOpen {
  .scroll-content {
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 48px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>