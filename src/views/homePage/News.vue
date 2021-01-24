<template>
  <div id="News">
    <van-nav-bar title="消息(0)" left-arrow fixed @click-left="goBack">
      <template #right>
        <div class="mailList-wrapper" @click="goMyFriend">
          <span class="mailList">通讯录</span>
          <i class="icon icon-ios ion-ios-people"></i>
        </div>
      </template>
    </van-nav-bar>
    <div class="scroll-content">
        <p class="im-message">消息</p>
        <div class="item-left">
          <div class="avatar-pos">
            <img src="../../assets/images/default.jpg" />
          </div>
          <div class="item-inner">
            <div class="input-wrapper">
                <h2>我的上级</h2>
                <p class="text">[动画表情]</p>
            </div>
            <span class="note">1周前</span>
          </div>
          <div class="button-effect"></div>
        </div>
        <div class="item-left">
          <div class="avatar-pos">
            <img src="../../assets/images/default.jpg" />
          </div>
          <div class="item-inner">
            <div class="input-wrapper">
                <h2>aad32432</h2>
                <p class="text">4</p>
            </div>
            <span class="note">2天前</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {};
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
        
    },
    goBack() {
      this.$router.go(-1);
    },
    goMyFriend() {
      this.$router.push({name: 'MyFriend'})
    }
  }
};
</script>

<style lang="scss" scoped>
#News {
  .mailList-wrapper{
    display: flex;
    .mailList{
      line-height: 40px;
      margin-right: 5px;
    }
  }
  .icon {
    font-size: 26px;
  }
  padding-top: 1.2rem;
  box-sizing: border-box;
  height: 100vh;
  .scroll-content{
      margin-top: 15px;
      .im-message{
        padding: 10px 0 0 10px;
        font-size: 16px;
        background: #ffffff;
      }
      .item-left{
          display: flex;
          background: #fff;
          .avatar-pos{
              margin: 10px;
              width: 36px;
              height: 36px;
          }
          .item-inner{
            width: calc(100% - 36px);
            line-height: 25px;
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid gainsboro;
            .text{
              color: gainsboro;
            }
            .note{
              line-height: 50px;
              margin-right: 10px;
              color: gainsboro;
            }
          }
      }
  }
}
</style>