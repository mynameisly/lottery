<template>
  <div id="LoginAddress">
    <van-nav-bar fixed title="登录地址" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
          <div class="card-header">
            用户:&nbsp;&nbsp;a794658
            <p class="r">状态:&nbsp;&nbsp;登陆</p>
          </div>
          <div class="card-content">
            <p>登陆地址:&nbsp;&nbsp;【四川省成都市电信】</p>
            <p>IP地址:&nbsp;&nbsp;110.188.58.66</p>
            <p>时间:&nbsp;&nbsp;2020-07-16 22:08:22</p>
          </div>
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
    background-color: #fff;
    .card-header{
        display: flex;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        padding-right: 10px;
        .r{
            color: #b0b0b0;
        }
    }
    .card-content{
        color: #b0b0b0;
        padding: 0 10px 20px 10px;
        p{
            margin: 10px auto;
        }
    }
  }
}
</style>
