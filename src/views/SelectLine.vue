<template>
  <div class="select-line">
    <div class="wrapper">
      <!-- 背景层 -->
    </div>
    <div class="close_btn" @click="closeSelectLine">
      <van-icon name="cross" />
      <span>关闭</span>
    </div>
    <div class="line_list">
      <p class="title">线路选择</p>
      <ul>
        <li class="line_item">
          <div class="line_txt">https:www.baidu.com</div>
          <div class="line_pin green">56ms</div>
          <div class="tag green">推荐</div>
        </li>
        <li class="line_item">
          <div></div>
        </li>
      </ul>
      <div class="btn_check_speed">点击重新测速</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    closeSelectLine() {
      this.$router.back();
    }
  }
};
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.green {
  color: #4cef0c;
}
.orange {
  color: #f27d0a;
}

.select-line {
  position: relative;
}
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/images/bg-domains.jpg");
}
.close_btn {
  position: absolute;
  top: 20px;
  left: 20px;
  line-height: 20px;
  color: #ffffff;
  font-size: 20px;
  i {
    vertical-align: middle;
  }
}
.line_list {
  position: absolute;
  top: 70px;
  width: 100%;
  text-align: center;
  .title {
    line-height: 40px;
    font-size: 22px;
    color: #ffffff;
  }
  .line_item {
    position: relative;
    width: 250px;
    height: 36px;
    line-height: 36px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-block;
    .line_txt {
      float: left;
      padding-left: 10px;
      color: #666;
    }
    .line_pin {
      float: right;
      padding-right: 10px;
    }
    .tag {
      position: absolute;
      top: 0px;
      right: -40px;
      font-size: 12px;
    }
  }
  .btn_check_speed {
     
      width: 60%;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      color: #ffffff;
      margin: 20px 20%;
      border-radius: 4px;
      background-image: linear-gradient(to top, #df5d63, #972026);
      box-shadow: 0 0 15px rgba(0,0,0,0.3);
  }
}
</style>