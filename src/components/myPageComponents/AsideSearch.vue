<template>
  <div v-if="isVisible" id="right-aside-search">
    <!-- 遮罩层 -->
    <div class="wrapper">
      <div class="search-panel">
        <div class="search-panel-header">
          <div class="tab-title" :class="{'focus':tabFocus==0}" @click="changeTab(0)">今天</div>
          <div class="tab-title" :class="{'focus':tabFocus==1}" @click="changeTab(1)">近三天</div>
          <div class="tab-title" :class="{'focus':tabFocus==2}" @click="changeTab(2)">近一周</div>
        </div>
        <div class="search-panel-content">
          <van-cell-group>
            <!-- 下级用户 -->
            <van-field v-model="subordinateName" label="下级用户名" input-align="left" placeholder="下级用户名" />
            <!-- 账单类型 -->
            <van-field
              v-model="accountType"
              label="账单类型"
              placeholder="账单类型"
              input-align="right"
              readonly
              @click="selectType"
            />
            <!-- 起始截止时间 -->
            <van-cell title="起始时间:" :value="dtStart" @click="changeDate(0)" is-link/>
            <van-cell title="截止时间:" :value="dtEnd" @click="changeDate(1)" is-link/>
            <van-calendar v-model="showCalendar" :min-date='minDate' @confirm="onConfirmDate" />
          </van-cell-group>
        </div>
        <div class="search-panel-footer">
          <div class="btn-cancel" @click="onCancel">取消</div>
          <div class="btn-confirm" @click="onConfirm">确定</div>
        </div>
      </div>
    </div>

    <!-- 类型选择弹框 -->
    <van-dialog width="70%" v-model="showDialog" title="账单类型" show-cancel-button>
      <ul>
        <li
          class="type-item"
          @click="changeAccountType(item, index)"
          :class="{'focus':accountTypeIndex==index}"
          v-for="(item, index) in typeList"
          :key="index"
        >
          <span class="item-txt">{{ item }}</span>
          <span v-if="accountTypeIndex == index" class="item-icon">
            <van-icon name="success" />
          </span>
        </li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      tabFocus: 0,
      subordinateName: "", // 下级用户名
      accountType: "", // 账单类型
      accountTypeIndex: 0,
      dtFlag: null, // 用于标识当前开始日期还是结束日期
      dtStart: "",
      dtEnd: "",
      minDate: new Date(2020, 0, 1),
      showCalendar: false,
      showDialog: false,
      typeList: ["全部", "加码日返水", "开元日返水"]
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    /** 初始化方法 */
    init() {
        let today = new Date();
        this.dtStart = this.$options.filters["formatDate"](today, 'yyyy-MM-dd');
        this.dtEnd = this.$options.filters["formatDate"](today, 'yyyy-MM-dd');
    },
    showPage() {
      this.isVisible = true;
    },
    changeTab(index) {
      this.tabFocus = index;

      let today = this.moment();
      let preThree = this.moment().subtract(3, 'd');
      let preSeven = this.moment().subtract(7, 'd')

      if(index == 0) {
        this.dtStart = this.$options.filters["formatDate"](today, 'yyyy-MM-dd');
        this.dtEnd = this.$options.filters["formatDate"](today, 'yyyy-MM-dd');
      } else if(index == 1) {
        this.dtStart = this.$options.filters["formatDate"](preThree, 'yyyy-MM-dd');
        this.dtEnd = this.$options.filters["formatDate"](today, 'yyyy-MM-dd');
      } else if(index == 2) {
        this.dtStart = this.$options.filters["formatDate"](preSeven, 'yyyy-MM-dd');
        this.dtEnd = this.$options.filters["formatDate"](today, 'yyyy-MM-dd');
      }
    },
    selectType() {
      this.showDialog = true;
    },
    changeAccountType(item, index) {
      this.accountType = item;
      this.accountTypeIndex = index;
    },
    changeDate(index) {
      console.log("选择日期：", index);
      this.showCalendar = true;

      this.dtFlag = index;
    },
    onConfirmDate(event) {
      if (this.dtFlag == 0) {
        this.dtStart = this.$options.filters["formatDate"](event, 'yyyy-MM-dd');
      } else if (this.dtFlag == 1) {
        this.dtEnd = this.$options.filters["formatDate"](event, 'yyyy-MM-dd');
      }
      this.dtFlag = null;
      this.showCalendar = false;
    },
    onCancel() {
      this.isVisible = false;
    },
    onConfirm() {
      this.isVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 91;
}
.search-panel {
  position: absolute;
  top: 40px;
  right: 0;
  width: 90%;
  height: 90%;
  background: #ffffff;
  z-index: 95;
  .search-panel-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #efefef;
    .tab-title {
      display: inline-block;
      width: 33.3%;
      font-size: 14px;
      text-align: center;
      &.focus {
        font-size: 16px;
        color: $themeColor;
      }
    }
  }
}

.search-panel-footer {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  z-index: 97;
  .btn-cancel {
    width: 40%;
    display: inline-block;
    background-color: #efefef;
    text-align: center;
  }
  .btn-confirm {
    width: 60%;
    display: inline-block;
    background-color: $themeColor;
    color: #ffffff;
    text-align: center;
  }
}

.type-item {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  padding: 0 20px;
  &.focus {
    color: $themeColor;
  }
  .item-txt {
    display: inline-block;
    width: 90%;
  }
}
</style>
