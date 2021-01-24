<template>
  <div id="FundPwd">
    <van-nav-bar fixed title="资金密码设置" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        请<a @click="goSecuritySettings()">前往</a>密保管理页面，设置密保后，即可修改资金密码
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPwd: "",
      newPwd: "",
      confirmPwd: ""
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    modifyLoginPwd() {

    },
    goSecuritySettings() {
      this.$router.push({name: 'SecuritySettings'})
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  .tab-content {
    width: 100%;
    padding-top: 50px;
    text-align: center;
    a{
      color: blue;
    }
  }
}
</style>
