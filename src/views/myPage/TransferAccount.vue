<template>
  <div class="transfer-account">
    <van-nav-bar
      title="转账"
      fixed
      :border="false"
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
            <div class="a-title">彩票账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">AG账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">IM电竞账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">KY棋牌账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">EBET账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">GM棋牌账户</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
          <van-col class="mb-3" span="10" offset="2">
            <div class="a-title">AIO沙巴体育</div>
            <div>
              <span class="large-size">{{ "0.00" }}</span>
              <span>元</span>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="main-content">
        <div style="padding:0 10px;">
          <div class="b-title">转出账户</div>
          <van-row gutter="18">
            <van-col span="8" v-for="(item, index) in btnList" :key="index">
              <div class="btn-multi" :class="{'focus':btnFocus1==index}">{{ item.name }}</div>
            </van-col>
          </van-row>
        </div>
        <van-divider />
        <div style="padding:0 10px;">
          <div class="b-title">转入账户</div>
          <van-row gutter="18">
            <van-col span="8" v-for="(item, index) in btnList" :key="index">
              <div class="btn-multi" :class="{'focus':btnFocus2==index}">{{ item.name }}</div>
            </van-col>
          </van-row>
        </div>
        <van-divider />
        <div style="padding:0 10px;">
          <div class="b-title">
            <span>转账金额</span>
            <van-field type="number" v-model="transferNum" label placeholder="请输入转账金额" />
          </div>
        </div>
        <van-divider />
        <div class="btn-box">
          <div class="btn-transfer">转账</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transferNum: null, // 转账金额
      btnFocus1: 0,
      btnFocus2: 1,
      btnList: [
        {
          name: "彩票账户",
          group: 1
        },
        {
          name: "AG账户",
          group: 2
        },
        {
          name: "IM电竞",
          group: 2
        },
        {
          name: "EBET账户",
          group: 2
        },
        {
          name: "GM棋牌",
          group: 2
        },
        {
          name: "KY棋牌",
          group: 2
        },
        {
          name: "AIO账户",
          group: 2
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    onClickRight() {
      console.log(111);

      // 跳转
      this.$router.push({
        name: "AccountChangeRecord",
        query: {
          a: 1
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: 12px;
}
.large-size {
  font-size: 20px;
}
.mb-3 {
  margin-bottom: 15px;
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

.a-title {
  line-height: 20px;
}
.b-title {
  line-height: 40px;
  font-size: 14px;
  color: #999;
}

.main-content {
  margin-top: 10px;
  width: 100%;
  background-color: #fff;
  font-size: 12px;
}
.btn-multi {
  width: 80px;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  color: #333;
  text-align: center;
  border-radius: 4px;
  padding: 0 6px;
  border: solid 1px #e0e0e0;
  margin-bottom: 10px;
  &.focus {
    color: #fff;
    background-color: $themeColor;
  }
}

.btn-box {
  height: 60px;
  text-align: center;
  padding-top: 20px;
  .btn-transfer {
    display: inline-block;
    width: 80%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: $themeColor;
    color: #fff;
    text-align: center;
    border-radius: 4px;
  }
}
</style>