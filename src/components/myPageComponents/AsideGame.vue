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
            <!-- 起始截止时间 -->
            <van-cell title="起始时间:" :value="dtStart" @click="changeDate(0)" is-link/>
            <van-cell title="截止时间:" :value="dtEnd" @click="changeDate(1)" is-link/>
            <!-- picker时间选择器 -->
            <van-popup v-model="showTime" position="bottom" :style="{ width:'100%',height: '40%' }">
                <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirmTime"
                @cancel="onCancelTime" />
            </van-popup>

            <!-- 订单状态 -->
            <van-field
              v-model="orderStatus"
              label="订单状态:"
              placeholder="订单状态"
              readonly
              @click="selectOrder"
              right-icon="arrow-down"
            />

            <!-- 投注期号 -->
            <van-field v-model="bettingPeriodNumber" label="投注期号:" input-align="left" placeholder="请输入投注期号" />
            
            <!-- 游戏类别 -->
            <van-field
              v-model="gameCategories"
              label="游戏类别:"
              placeholder="游戏类别"
              readonly
              @click="selectGameCategories"
              right-icon="arrow-down"
            />

            <!-- 游戏类型 -->
            <van-field
              v-model="gameType"
              label="游戏类别:"
              placeholder="游戏类别"
              readonly
              @click="selectGameType"
              right-icon="arrow-down"
            />
          </van-cell-group>
        </div>

        <!-- 订单状态弹框 -->
        <van-dialog width="70%" v-model="showOrderDialog" title="订单状态" show-cancel-button>
        <ul>
            <li
            class="type-item"
            @click="changeOrderStatus(item, index)"
            :class="{'focus':OrderStatusIndex==index}"
            v-for="(item, index) in orderList"
            :key="index"
            >
            <span class="item-txt">{{ item }}</span>
            <span v-if="OrderStatusIndex == index" class="item-icon">
                <van-icon name="success" />
            </span>
            </li>
        </ul>
        </van-dialog>

        <!-- 游戏类别弹框 -->
        <van-dialog width="70%" v-model="showGameDialog" title="游戏类别" show-cancel-button>
        <ul>
            <li
            class="type-item"
            @click="changeGameCategories(item, index)"
            :class="{'focus':GameCategoriesIndex==index}"
            v-for="(item, index) in gameList"
            :key="index"
            >
            <span class="item-txt">{{ item }}</span>
            <span v-if="GameCategoriesIndex == index" class="item-icon">
                <van-icon name="success" />
            </span>
            </li>
        </ul>
        </van-dialog>

        <!-- 游戏类型弹框 -->
        <van-dialog width="70%" v-model="showGameTypeDialog" title="游戏类型" show-cancel-button>
        <ul>
            <li
            class="type-item"
            @click="changeGameType(item, index)"
            :class="{'focus':GameTypeIndex==index}"
            v-for="(item, index) in gameTypeList"
            :key="index"
            >
            <span class="item-txt">{{ item }}</span>
            <span v-if="GameTypeIndex == index" class="item-icon">
                <van-icon name="success" />
            </span>
            </li>
        </ul>
        </van-dialog>

        <div class="search-panel-footer">
          <div class="btn-cancel" @click="onCancel">取消</div>
          <div class="btn-confirm" @click="onConfirm">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      tabFocus: 0,
      dtFlag: null, // 用于标识当前开始日期还是结束日期
      dtStart: "",
      dtEnd: "",
      showTime: false,
      columns: [
        {
          values: ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951", "1950", "1949", "1948", "1947", "1946", "1945", "1944", "1943", "1942", "1941", "1940", "1939", "1938", "1937", "1936", "1935", "1934", "1933", "1932", "1931", "1930", "1929", "1928", "1927", "1926", "1925", "1924", "1923", "1922", "1921", "1920"],
          defaultIndex: 1,
        },
        {
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
          defaultIndex: 7,
        },
        {
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
          defaultIndex: 13,
        },
      ],
      orderStatus: "", // 订单状态
      OrderStatusIndex: 0,
      showOrderDialog: false, // 是否显示订单状态弹框
      orderList: ["全部状态","未开奖","未中奖","已中奖","已缴单"], // 订单状态列表
      bettingPeriodNumber: "", // 投注期号
      gameCategories: "", //游戏类别
      GameCategoriesIndex: 0,
      showGameDialog: false, // 是否显示游戏类别弹框
      gameList: ["全部","75秒时时彩","腾讯分分彩","腾讯5分彩","腾讯10分彩",
      "微信分分彩","河内分分彩","奇趣腾讯分分彩","奇趣腾讯5分彩","奇趣腾讯10分彩",
      "QQ分分彩","重庆分分彩","旧重庆时时彩","重庆时时彩","新疆时时彩",
      "腾讯2分彩-单","腾讯2分彩-双","百事分分彩","辛运1.5分彩","百事1.5分彩"], // 游戏类别列表
      gameType: "", // 游戏类型
      showGameTypeDialog: false, // 是否显示游戏类型弹框
      GameTypeIndex: 0,
      gameTypeList: ["官方玩法","信用玩法"], 
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
    changeDate(index) {
    //   console.log("选择日期：", index);
      this.showTime = true;
      this.dtFlag = index;
    },
    onCancel() {
      this.isVisible = false;
    },
    onConfirm() {
      this.isVisible = false;
    },
    onConfirmTime(event) { // 时间选择器确定
        if (this.dtFlag == 0) {
            this.dtStart = this.$options.filters["formatDate"](event, 'yyyy-MM-dd');
        } else if (this.dtFlag == 1) {
            this.dtEnd = this.$options.filters["formatDate"](event, 'yyyy-MM-dd');
        }
        this.dtFlag = null;
        this.showTime = false;
    },
    onCancelTime() { // 时间选择器取消
      this.showTime = false;
    },
    selectOrder() {
      this.showOrderDialog = true;
    },
    changeOrderStatus(item, index) {
      this.orderStatus = item;
      this.OrderStatusIndex = index;
    },
    selectGameCategories() {
      this.showGameDialog = true;
    },
    changeGameCategories(item, index) {
      this.gameCategories = item;
      this.GameCategoriesIndex = index;
    },
    selectGameType() {
      this.showGameTypeDialog = true;
    },
    changeGameType(item, index) {
      this.gameType = item;
      this.GameTypeIndex = index;
    },
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
