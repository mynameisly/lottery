<template>
  <div id="FundPwd">
    <van-nav-bar fixed title="添加银行卡" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <van-cell-group>
          <van-field v-model="userName" label="持卡人姓名" placeholder="祁**" style="margin-left:6px" />
          <van-field
            v-model="bankName"
            label="选择银行"
            placeholder="选择银行"
            right-icon="arrow-down"
            @click="selectBank()"
          />
          <div class="input-wrapper">
            <label>开户行地址</label>
            <!-- 省 -->
            <div class="select-text">{{ province }}</div>
            <div class="select-icon" @click="selectProvince()">
              <div class="select-icon-inner"></div>
            </div>
            <!-- 市 -->
            <div class="select-text">{{ city }}</div>
            <div class="select-icon" @click="selectCity()">
              <div class="select-icon-inner"></div>
            </div>
            <!-- 区 -->
            <div class="select-text">{{ area }}</div>
            <div class="select-icon" @click="selectArea()">
              <div class="select-icon-inner" style="margin-right: 14px;"></div>
            </div>
          </div>
          <!-- <van-field v-model="bankAddress" label="开户行地址" placeholder="选择银行" /> -->
          <van-field v-model="bankNum" label="银行卡号" placeholder="请输入银行卡号" />
          <van-field v-model="cofirmCardNum" label="确认卡号" placeholder="请再次确认银行卡号" />
        </van-cell-group>
        <van-field v-model="fundPwd" label="资金密码" placeholder="请输入密码" />

        <div class="rebate-box">
          <div class="button-inner" @click="addCard()">确认添加</div>
        </div>
      </div>

      <!-- 银行弹框 -->
      <van-dialog width="70%" v-model="showBankDialog" title="选择银行" show-cancel-button>
        <ul>
          <li
            class="type-item"
            @click="changeBankType(item, index)"
            :class="{'focus':bankTypeIndex==index}"
            v-for="(item, index) in bankTypeList"
            :key="index"
          >
            <span class="item-txt">{{ item }}</span>
            <span v-if="bankTypeIndex == index" class="item-icon">
              <van-icon name="success" />
            </span>
          </li>
        </ul>
      </van-dialog>

      <!-- 省弹框 -->
      <van-dialog width="70%" v-model="showProvinceDialog" title="开户行地址" show-cancel-button>
        <ul>
          <li
            class="type-item"
            @click="changeProvinceType(item, index)"
            :class="{'focus':provinceIndex==index}"
            v-for="(item, index) in provinceList"
            :key="index"
          >
            <span class="item-txt">{{ item }}</span>
            <span v-if="provinceIndex == index" class="item-icon">
              <van-icon name="success" />
            </span>
          </li>
        </ul>
      </van-dialog>

      <!-- 市弹框 -->
      <van-dialog width="70%" v-model="showCityDialog" title="开户行地址" show-cancel-button>
        <ul>
          <li
            class="type-item"
            @click="changeCityType(item, index)"
            :class="{'focus':cityIndex==index}"
            v-for="(item, index) in cityList"
            :key="index"
          >
            <span class="item-txt">{{ item }}</span>
            <span v-if="cityIndex == index" class="item-icon">
              <van-icon name="success" />
            </span>
          </li>
        </ul>
      </van-dialog>

      <!-- 区弹框 -->
      <van-dialog width="70%" v-model="showAreaDialog" title="开户行地址" show-cancel-button>
        <ul>
          <li
            class="type-item"
            @click="changeAreaType(item, index)"
            :class="{'focus':areaIndex==index}"
            v-for="(item, index) in areaList"
            :key="index"
          >
            <span class="item-txt">{{ item }}</span>
            <span v-if="areaIndex == index" class="item-icon">
              <van-icon name="success" />
            </span>
          </li>
        </ul>
      </van-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      bankName: "",
      province: "-请选择-", // 省
      city: "成都市", // 市
      area: "青羊区", // 区
      bankNum: "",
      cofirmCardNum: "",
      fundPwd: "",
      showBankDialog: false,
      bankTypeIndex: 0,
      bankTypeList: [
        "中国银行",
        "工商银行",
        "建设银行",
        "招商银行",
        "交通银行",
        "深圳发展银行",
        "农业银行",
        "中信银行"
      ],
      showProvinceDialog: false,
      provinceIndex: 0,
      provinceList: [
        "北京市",
        "天津市",
        "河北省",
        "山西省",
        "内蒙古自治区",
        "辽宁省",
        "吉林省",
        "黑龙江省"
      ],
      showCityDialog: false,
      cityIndex: 0,
      cityList: ["成都市", "绵阳市", "宜宾市", "乐山市", "达州市"],
      showAreaDialog: false,
      areaIndex: 0,
      areaList: ["青羊区", "锦江区", "金牛区", "双流区", "郫都区"]
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    selectBank() {
      this.showBankDialog = true;
    },
    changeBankType(item, index) {
      this.bankName = item;
      this.bankTypeIndex = index;
    },
    selectProvince() {
      this.showProvinceDialog = true;
    },
    changeProvinceType(item, index) {
      this.province = item;
      this.provinceIndex = index;
    },
    selectCity() {
      this.showCityDialog = true;
    },
    changeCityType(item, index) {
      this.city = item;
      this.cityIndex = index;
    },
    selectArea() {
      this.showAreaDialog = true;
    },
    changeAreaType(item, index) {
      this.area = item;
      this.areaIndex = index;
    },
    addCard() {
      // 添加银行卡
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
    .input-wrapper {
      display: flex;
      justify-content: space-around;
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid gainsboro;
      label {
        padding-left: 30px;
        color: #888;
      }
      .select-text {
        margin: 0 20px;
      }
      .select-icon .select-icon-inner {
        margin-top: 0.5rem;
        width: 0;
        height: 0;
        border-top: 5px solid;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-left-width: 5px;
        border-left-style: solid;
        border-left-color: transparent;
        color: #999;
        pointer-events: none;
      }
    }
    .van-cell-group {
      margin-top: 10px;
      margin-bottom: 10px;
      .van-cell {
        border-bottom: 1px solid gainsboro;
      }
    }

    .rebate-box {
      .button-inner {
        margin: 20px 10px 10px 10px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: linear-gradient(#0468a5, #2587c3);
      }
    }
  }
  .type-item {
    display: flex;
    height: 40px;
    line-height: 40px;
    border-top: 0.55px solid #dbdbdf;
    color: blue;
    .item-txt {
      width: 70%;
      margin-left: 10%;
    }
    .item-icon {
      width: 20%;
    }
  }
}
</style>
