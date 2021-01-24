<template>
  <div id="LoginPwd">
    <van-nav-bar fixed title="登录密码" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <van-cell-group>
          <van-field v-model="params.oldPassword" label="旧密码" />
          <van-field v-model="params.newPassword" label="新密码" />
          <van-field v-model="params.confirmPwd" label="确认密码" />
        </van-cell-group>
      </div>
      <!-- 确定 -->
      <div class="rebate-box">
        <div class="button-inner" @click="modifyLoginPwd()">修改登录密码</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params:{
        oldPassword: "",
        newPassword: "",
        confirmPwd: ""
      }
      
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    modifyLoginPwd() {
      if(this.params.newPassword==this.params.confirmPwd) {
        let formData = this.formDataObject(this.params);
        this.fetchpost("/api/updateUserLoginPwd", formData).then(res => {
          console.log('updateUserLoginPwd',res)
          if(res.code === 500) {
            this.$toast(res.msg)
          }
        })
      }else{
        this.$toast('请确认密码和新密码是否一致！')
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
  }

  .rebate-box {
    .button-inner {
      width: 90%;
      height: 40px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background: #0468a5;
      border-radius: 4px;
      box-shadow: 0 10px 10px 3px #cccccc;
    }
  }
}
</style>
