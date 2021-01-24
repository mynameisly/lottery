<template>
  <div id="HourlyWageSetting">
    <van-nav-bar title="小时工资设定" :border="false" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="scroll-content">
      <!-- 我的工资 -->
      <div class="mydailywage">
        <p>
          我 的 ：
          <span>2%</span>
        </p>
        <p>
          <span>可设置 : 0 &lt; 小时工资 ≤ 2%</span>
        </p>
      </div>

      <!-- 搜索框 -->
      <div class="serchterm">
        <span>用户名：</span>
        <input type="text" placeholder="请输入用户名进行查询" />
        <button class="search">
          <i name="search" class="icon icon-ios ion-ios-search"></i>
        </button>
      </div>

      <!-- 列表 -->
      <div class="daily">
        <div class="daily-wrap">
          <div class="input-wrapper">
            <van-row class="row">
              <van-col :span="12">
                <span class="status">代理</span>
                <span class="name">aad32432</span>
              </van-col>
              <van-col :span="12">返点：7.8</van-col>
            </van-row>
            <van-row class="row">
              <van-col :span="12">用户余额：0</van-col>
              <van-col :span="12">
                当前小时工资范围：
                <span>0%</span>
              </van-col>
            </van-row>
          </div>
          <div class="arrow" @click="goHourlyWageSettingDetails()">
            <van-icon name="arrow" class="icon" />
          </div>
        </div>

        <div class="daily-wrap">
          <div class="input-wrapper">
            <van-row class="row">
              <van-col :span="12">
                <span class="status">代理</span>
                <span class="name">xxa331212</span>
              </van-col>
              <van-col :span="12">返点：7.8</van-col>
            </van-row>
            <van-row class="row">
              <van-col :span="12">用户余额：0</van-col>
              <van-col :span="12">
                当前小时工资范围：
                <span>2%</span>
              </van-col>
            </van-row>
          </div>
          <div class="arrow">
            <van-icon name="arrow" class="icon" />
          </div>
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
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goHourlyWageSettingDetails() {
      // 小时工资设定详情
      this.$router.push({
        name: "HourlyWageSettingDetails",
        query: {
          a: 111
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#HourlyWageSetting {
  .scroll-content {
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 48px;

    &::-webkit-scrollbar {
      display: none;
    }
    .mydailywage {
      display: flex;
      justify-content: space-between;
      background: #fafafa;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      padding-right: 10px;
      border-bottom: 1px solid #ddd;
    }
    .serchterm {
      display: flex;
      justify-content: space-between;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      border-bottom: 1px solid #ddd;
      span {
        width: 18%;
      }
      input {
        border: none;
        width: 70%;
        background-color: #f6f7f9;
      }
      .search {
        width: 12%;
        border: none;
        background-color: #a0c4f4;
        .icon {
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .daily {
      .daily-wrap {
        display: flex;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        .input-wrapper {
          width: 92%;
          padding: 5px 10px 0px 10px;
          .row {
            margin: 10px 0;
            .status {
              background: #ff3c00;
              color: #fff;
              padding: 2px 8px 0px 8px;
              border-radius: 4px;
              margin-right: 5px;
              display: inline-block;
              height: 20px;
              line-height: 20px;
            }
          }
        }
        .arrow {
          width: 8%;
          line-height: 70px;
          .icon {
            font-size: 20px;
            color: gray;
          }
        }
      }
    }
  }
}
</style>