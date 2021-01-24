<template>
  <!-- 精准开户 -->
  <div id="AccurateAccount">
    <div class="scroll-content">
      <van-row>
        <van-col :span="24">
          <van-field v-model="username" label="用户名:" placeholder="用户名" />
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="24">
          <van-field v-model="password" label="密码:" placeholder="密码" />
        </van-col>
      </van-row>
      <van-row @click="goAccountCategory()">
        <van-col :span="22">
          <van-field v-model="accountCategory" label="开户类别:" placeholder="开户类别" />
        </van-col>
        <van-col :span="2">
          <van-icon class="icon" name="arrow-down" />
        </van-col>
      </van-row>
      <van-row @click="goLotteryRebate()">
        <van-col :span="22">
          <van-field v-model="lotteryRebate" label="彩票返点:" placeholder="彩票返点" />
        </van-col>
        <van-col :span="2">
          <van-icon class="icon" name="arrow-down" @click="getLotteryRebateList"/>
        </van-col>
      </van-row>

      <!-- 开户类别弹框 -->
      <van-dialog width="70%" v-model="showAccountCategoryDialog" title="开户类别" show-cancel-button>
        <ul>
          <li
            class="type-item"
            @click="changeAccountCategory(item, index)"
            :class="{'focus':accountCategoryIndex==index}"
            v-for="(item, index) in accountCategoryList"
            :key="index"
          >
            <span class="item-txt">{{ item }}</span>
            <span v-if="accountCategoryIndex == index">
              <van-icon name="success" style="margin-top: 15px" />
            </span>
          </li>
        </ul>
      </van-dialog>


      <!-- 彩票返点弹框 -->
      <van-dialog width="70%" v-model="showLotteryRebateDialog" title="彩票返点" show-cancel-button>
        <ul>
          <li
            class="type-item"
            @click="changeLotteryRebate(item, index)"
            :class="{'focus':lotteryRebateIndex==index}"
            v-for="(item, index) in lotteryRebateList"
            :key="index"
          >
            <span class="item-txt">{{ item }}</span>
            <span v-if="lotteryRebateIndex == index">
              <van-icon name="success" style="margin-top: 15px" />
            </span>
          </li>
        </ul>
      </van-dialog>


      <!-- 立即开户 -->
      <div class="rebate-box">
        <div class="button-inner" @click="openAccount()">立即开户</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccurateAccount",
  data() {
    return {
      accountCategory: "代理",
      username: "a794658",
      password: "123456",
      lotteryRebate: "",
      showAccountCategoryDialog: false, // 开户类别弹框
      accountCategoryIndex: 0,
      accountCategoryList: ["代理","普通会员"], // 开户类别列表
      showLotteryRebateDialog: false, // 彩票返点弹框
      lotteryRebateIndex: 0,
      lotteryRebateList: [], // 彩票返点列表
    };
  },
  methods: {
    goAccountCategory() {
      this.showAccountCategoryDialog = true;
    },
    changeAccountCategory(item, index) {
      this.accountCategory = item;
      this.accountCategoryIndex = index;
    },
    goLotteryRebate() {
      this.showLotteryRebateDialog = true;
    },
    changeLotteryRebate(item, index) {
      this.lotteryRebate = item;
      this.lotteryRebateIndex = index;
    },
    getLotteryRebateList() { // 获取彩票返点数据
      this.fetchget('/api/proxyQuotaInfo').then(res => {
        if(res.code === 500) {
          this.$toast(res.msg)
        } else if(res.code === 200) {
          this.lotteryRebateList = []; // 清空彩票返点数组
          let arr1 = [];
          for(let i = res.data.uCode.maxLocatePointCode; i >= 1800; i -= 2) {
            arr1.push(i)
          }
          let arr2 = [];
          for(let j = res.data.uCode.maxLocatePoint; j >= 0.0; j -= 0.1) {
            arr2.push(Number(j).toFixed(1));
          }
          for(let i = 0; i <= arr1.length-1; i++) {
            this.lotteryRebateList.push(arr1[i] + '-' + Number(arr2[i]).toFixed(1));
          }
        }
      })
    },
    openAccount() {// 立即开户
      let params = {
        type: 1,
        username: this.username,
        password: this.password,
        code: parseInt(this.lotteryRebate)
      }
      if(this.accountCategory === '代理') {
        params.type = 1;
      } else if(this.accountCategory === '普通会员') {
        params.type = 2;
      }
      let formData = this.formDataObject(params);
      console.log('formData',formData)
      this.fetchpost('/api/addProxyUser',formData).then(res => {
        if(res.code === 500) {
          this.$toast(res.msg)
        } else if(res.code === 200) {
          this.$toast('精准开户成功')
          this.proxyLinkList();
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#AccurateAccount {
  .scroll-content {
    background-color: #fff;
    margin-top: 10px;

    .van-row {
      border-bottom: 1px solid gainsboro;
      .van-field__label {
        color: gainsboro;
      }
    }
    .icon {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }
    .type-item{
      display: flex;
      height: 40px;
      line-height: 40px;
      border-top: 0.55px solid #dbdbdf;
      color: blue;
      .item-txt{
        width: 70%;
        margin-left: 10%;
      }
      .icon-item{
        width: 20%
      }
    }
    .rebate-box {
      .button-inner {
        margin: 0 auto;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 12px;
        background: linear-gradient(#0468a5, #2587c3);
      }
    }
  }
}
</style>