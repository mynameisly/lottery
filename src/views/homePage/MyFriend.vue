<template>
  <div id="MyFriend">
    <van-nav-bar
      title="我的好友"
      left-arrow
      fixed
      right-text="新建群发"
      @click-left="goBack"
      @click-right="goSelectRecipients"
    />
    <div class="myfriend-content">
      <div class="ion-top">
        <div class="item-left">
          <img src="../../assets/images/default.jpg" />
          <div class="item-inner">
            <h3>上级代理</h3>
          </div>
        </div>
      </div>

      <div class="ion-top">
        <div class="item-left">
          <img src="../../assets/images/default.jpg" />
          <div class="item-inner">
            <h3>aad32432</h3>
          </div>
        </div>
        <div class="item-left">
          <img src="../../assets/images/default.jpg" />
          <div class="item-inner">
            <h3>xxa331212</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFriend",
  data() {
    return {};
  },
  mounted() {
    this.getMyFriend();
  },
  methods: {
    getMyFriend() {},
    goBack() {
      this.$router.go(-1);
    },
    goSelectRecipients() {
      this.$router.push({ name: "SelectRecipients" });
    }
  }
};
</script>

<style lang="scss" scoped>
#MyFriend {
  padding-top: 1.2rem;
  box-sizing: border-box;
  height: 100vh;
  .myfriend-content {
    width: 100%;
    // height: 100%;
    // border: 1px solid red;
    .ion-top {
      padding-top: 30px;
      .item-left {
        padding-left: 14px !important;
        border: none !important;
        border-bottom: 1px solid #555;
        display: flex;
        background: #fff;
        padding: 10px 0;
        img {
          width: 36px;
          height: 36px;
        }
        .item-inner {
          line-height: 36px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>