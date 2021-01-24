<template>
  <div>
    <van-nav-bar title="成员管理" :border="false" fixed left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="scroll-content">
      <div class="search-box">
        <input type="text" placeholder="请输入用户名" />
        <i name="search" role="img" class="icon icon-ios ion-ios-search"></i>
      </div>
      <div class="agent-box">
        <div class="team-lump">
          <div class="team-top">
            <div class="team-left">
              <van-row>
                <van-col :span="18">
                  <span class="usertypename">代理</span>
                  aad32432
                </van-col>
                <van-col :span="6">
                  <span class="col">下级人数：1</span>
                </van-col>
              </van-row>
            </div>
            <div class="team-right">
              <van-icon name="arrow" class="right" />
            </div>
          </div>

          <div class="team-main">
            <ul class="topul">
              <li>
                <span class="firsty">账户余额:</span>
                <span>0</span>
              </li>
              <li class="textright">
                <span class="firsty">冻结金额:</span>
                <span>0</span>
              </li>
            </ul>
            <ul>
              <li>
                <span class="firsty">个人返点:</span>
                <span>7.8</span>
              </li>
              <li class="textright">
                <span class="firsty">注册日期:</span>
                <span>2020-07-06 11:01</span>
              </li>
            </ul>
          </div>
          <div class="button-inner" @click="foRebateSettings()">返点</div>
        </div>
      </div>

      <div class="agent-box">
        <div class="team-lump">
          <div class="team-top">
            <div class="team-left">
              <van-row>
                <van-col :span="18">
                  <span class="usertypename">代理</span>
                  aad32432
                </van-col>
                <van-col :span="6">
                  <span class="col">下级人数：0</span>
                </van-col>
              </van-row>
            </div>
            <div class="team-right">
              <van-icon name="arrow" class="right" />
            </div>
          </div>

          <div class="team-main">
            <ul class="topul">
              <li>
                <span class="firsty">账户余额:</span>
                <span>0</span>
              </li>
              <li class="textright">
                <span class="firsty">冻结金额:</span>
                <span>0</span>
              </li>
            </ul>
            <ul>
              <li>
                <span class="firsty">个人返点:</span>
                <span>7.8</span>
              </li>
              <li class="textright">
                <span class="firsty">注册日期:</span>
                <span>2020-07-06 11:01</span>
              </li>
            </ul>
          </div>
          <div class="button-inner" @click="fandian()">返点</div>
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
    foRebateSettings() {
      this.$router.push({
        name: "RebateSettings",
        query: {
          a: 111
        }
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.scroll-content {
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding-top: 48px;

  &::-webkit-scrollbar {
    display: none;
  }
  .search-box {
    background: #fff;
    display: flex;
    justify-content: space-start;
    padding-left: 15px;
    padding-right: 15px;
    input {
      margin: 15px 15px 15px 0;
      padding: 0;
      width: calc(100% - 15px);
      border: none;
    }
    .icon {
      font-size: 26px;
      padding-top: 5px;
    }
  }
  .agent-box {
    position: relative;
    width: 96%;
    margin: 10px auto;
    background: #fff;
    margin-bottom: 16px;
    border-radius: 2px;
    .team-lump {
      .team-top {
        display: flex;
        .team-left {
          width: 90%;
          padding: 10px;
          border-bottom: 1px solid gainsboro;
          .usertypename {
            display: inline-block;
            background: #e28a8a;
            padding: 0.1rem 0.6rem;
            color: #fff;
            border-radius: 4px;
            margin-right: 5px;
          }
          .col {
            line-height: 30px;
          }
        }
        .team-right {
          width: 10%;
          .right {
            font-size: 26px;
            color: gainsboro;
            line-height: 50px;
          }
        }
      }
      .team-main {
        ul {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          li {
            text-decoration: none;
            width: 50%;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .firsty {
            color: #888888;
          }
        }
      }
      .button-inner {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: linear-gradient(#4aabe6, #1d8dd2);
      }
    }
  }
}
</style>