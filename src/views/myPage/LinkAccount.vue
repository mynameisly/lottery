<template>
  <!-- 链接开户 -->
  <div id="LinkAccount">
    <div class="scroll-content">
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
          <van-icon class="icon" name="arrow-down" />
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
            <span v-if="accountCategoryIndex == index" class="item-icon">
              <van-icon name="success" />
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
            <span v-if="lotteryRebateIndex == index" class="item-icon">
              <van-icon name="success" />
            </span>
          </li>
        </ul>
      </van-dialog>

      <!-- 生成链接 -->
      <div class="rebate-box">
        <div class="button-inner" @click="generateLink()">生&nbsp;&nbsp;成&nbsp;&nbsp;链&nbsp;&nbsp;接</div>
      </div>

      <!-- 链接列表 -->
      <div class="management">
        <p>
          <i ios="ios-list-outline" role="img" class="icon icon-ios ion-ios-list-outline"></i>&nbsp;&nbsp;链接列表
        </p>
      </div>

      <!-- 生成的链接 -->
      <div class="container" v-for="(item,idx) in rows" :key="idx">
        <div class="openleft">
          <p class="linknum">
            <span class="font-color">链接序号：</span>{{item.code}}
          </p>
          <p>
            <span>
              <span class="font-color">开户类别：</span>{{item.type}}
            </span>
            <span class="ml-bouns">
              <span class="font-color">彩票返点：</span>{{item.locatePoint}}
            </span>
          </p>
        </div>
        <div class="openright">
          <span class="delete" @click="deleteLink(item.id)">
            <i
              ios="ios-trash-outline"
              class="icon icon-ios ion-ios-trash-outline"
            ></i>&nbsp;&nbsp;删除
          </span>
          <span class="copy" @click="copyLink()">
            <i ios="ios-copy-outline" role="img" class="icon icon-ios ion-ios-copy-outline"></i>&nbsp;&nbsp;复制
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkAccount",
  data() {
    return {
      accountCategory: "代理",
      lotteryRebate: "1956-7.8",
      showAccountCategoryDialog: false, // 开户类别弹框
      accountCategoryIndex: 0,
      accountCategoryList: ["代理","普通会员"], // 开户类别列表
      showLotteryRebateDialog: false, // 彩票返点弹框
      lotteryRebateIndex: 0,
      lotteryRebateList: ["1956-7.8","1954-7.7", "1952-7.6","1950-7.5", "1948-7.4","1946-7.5"], // 彩票返点列表
      rows: []
    };
  },
  mounted() {
    this.proxyLinkList();
  },
  methods: {
    proxyLinkList() {
      let params = {
        pageNo: 1,
        pageSize: 10,
        deviceType: 1
      };
      // let formData = this.formDataObject(params);
      this.fetchget('/api/proxyLinkList',params).then(res => {
        this.rows = res.data.rows;
      })
    },
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
    generateLink() { // 生成链接
      let params = {
        type: 1,
        days: 30, // 有效天数，先写死
        amount: 3, // 有效邀请数，先写死
        code: parseInt(this.lotteryRebate),
        deviceType: 1
      }
      if(this.accountCategory === '代理') {
        params.type = 1;
      } else if(this.accountCategory === '普通会员') {
        params.type = 2;
      }
      let formData = this.formDataObject(params);
      this.fetchpost('/api/addProxyLink',formData).then(res => {
        if(res.code === 500) {
          this.$toast(res.msg)
        } else if(res.code === 200) {
          this.$toast('链接用户成功')
          this.proxyLinkList();
        }
      })
    },
    deleteLink(id) { // 删除链接
      let params = {
        id
      }
      let formData = this.formDataObject(params);
      this.fetchpost('/api/delProxyLink',formData).then(res => {
        if(res.code === 500) {
          this.$toast(res.msg)
        } else if(res.code === 200) {
          this.$toast('删除链接用户成功')
          this.proxyLinkList();
        }
      })
    },
    copyLink() { // 复制链接

    }
  }
};
</script>

<style lang="scss" scoped>
#LinkAccount {
  .scroll-content {
    margin-top: 10px;
    .van-row {
      border-bottom: 1px solid gainsboro;
      background-color: #fff;
      .van-field__label {
        color: gainsboro;
      }
      .icon {
        height: 40px;
        line-height: 40px;
        font-size: 20px;
      }
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
      .item-icon{
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
    .management {
      height: 30px;
      margin-bottom: 10px;
      p {
        margin-left: 10px;
        line-height: 30px;
        color: #333;
        font-size: 16px;
        .icon {
          font-size: 20px;
        }
      }
    }
    .container {
      border-bottom: 1px solid #f7f7f7;
      padding: 8px 2px;
      background: #fff;
      padding-top: 12px;
      display: flex;
      .openleft {
        width: 66%;
        padding: 5px;
        .linknum {
          margin-bottom: 5px;
        }
        .ml-bouns{
            margin-left: 12px;
        }
      }
      .openright {
        width: 34%;
        padding: 5px;
        line-height: 38px;
        .copy{
            color: red;
            margin-left: 12px;
        }
      }
      .font-color {
        color: grey;
      }
    }
  }
}
</style>