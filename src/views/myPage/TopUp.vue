<template>
  <div>
    <van-nav-bar
      title="充值"
      :border="false"
      fixed
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <div slot="right">
        <van-icon name="notes-o" />
      </div>
    </van-nav-bar>
    <div class="scroll-content">
      <div class="person-box">
        <van-row>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">主账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">冻结资金</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="main-content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.large-size {
  font-size: 20px;
}
.mb-3 {
  margin-bottom: 15px;
}
.a-title {
  line-height: 20px;
}

.scroll-content {
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
}
.person-box {
  color: #fff;
  background-color: $themeColor;
  padding-left: 20px;
  padding-top: 60px;
  font-size: 12px;
  .person-name {
    font-size: 12px;
  }
}

.main-content {
  width: 100%;
  padding-top: 10px;
}
</style>