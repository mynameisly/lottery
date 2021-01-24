<!--
 * @Description: 列表详情
 * @FilePath: \wb_litoob\src\views\trend\LotteryDetails.vue
 * @LastEditTime: 2020-08-13 23:46:41
--> 
<template>
  <div class="LotteryBody LotteryDetails">
    <van-nav-bar
      fixed
      :title="title"
      :border="false"
      left-arrow
      @click-left="$router.go(-1)"
      z-index="88"
    />
    <div class="lot-head">
      <!-- tabs -->
      <div class="diy-tabs">
        <span
          class="diy-tabs-item"
          :class="{'tabs-active':tabsActive===item.id}"
          v-for="item in tabs"
          :key="item.id"
          @click="changeTabas(item)"
        >{{item.title}}</span>
      </div>
      <!-- digit -->
      <div class="select-digit">
        <div v-if="showGridTitle == 'tab'" class="digit-box">
          <span
            class="digit"
            :class="{'digit-active':digitActive===item.indexId}"
            v-for="item in digitTabs"
            :key="item.indexId"
            @click="changeDigitTabas(item)"
          >{{item.title}}</span>
        </div>
        <div v-else class="grid-title">{{ gridTitle }}</div>
        <van-icon class="icon-more" name="weapp-nav" @click="moreShow=true" />
      </div>
      <div class="lot-sum">
        <!-- 定位胆 -->
        <div v-if="showGrid == 'basic'" class="lot-table">
          <!-- 期数 -->
          <div ref="lotLine" class="lot-line lot-table-header">
            <p class="l-title" ref="periods">期数</p>
            <p
              class="num"
              :class="numWidth"
              v-for="(code, index) in codeList"
              :key="index"
            >{{ code }}</p>
          </div>
          <div class="lot-table-body">
            <div class="body-list" ref="bodySize">
              <div class="lot-line" v-for="(item,index) in gridList" :key="index">
                <p class="l-title">{{ openCodeList&&openCodeList[index].expectSubstr }}</p>
                <p
                  ref="grid"
                  class="num"
                  :class="numWidth"
                  v-for="(code, codeIndex) in item"
                  :key="codeIndex"
                >
                  <span
                    :class="{colorBall: code == openCodeList[index].digitCodeList[digitActive]}"
                  >{{ code }}</span>
                </p>
              </div>
            </div>
            <canvas class="body-chart" ref="chart"></canvas>
          </div>
        </div>
        <!-- 多号走势 -->
        <div v-if="showGrid == 'multiNumTrend'" class="lot-table">
          <!-- grid-header -->
          <div>
            <van-row class="grid-header-row grid-header">
              <van-col class="grid-col" span="4">期数</van-col>
              <van-col
                class="grid-col"
                :span="20/codeList.length"
                v-for="(code, index) in codeList"
                :key="index"
              >{{ code }}</van-col>
            </van-row>
          </div>
          <!-- grid-body -->
          <div v-for="(item, index) in openCodeList" :key="index">
            <van-row class="grid-body-row grid-header" justify="center" align="center">
              <van-col class="grid-col" span="4">{{ item.expectSubstr }}</van-col>
              <van-col
                class="grid-col"
                :span="20/codeList.length"
                v-for="(item, index) in multiNumList[index]"
                :key="index"
              >
                <div v-if="Object.values(item)[0]>0" class="grid-cell multi-num-bingo">
                  <span>{{ Object.keys(item)[0] }}</span>
                  <div
                    v-if="Object.values(item)[0]>1"
                    class="multi-num-bingo2"
                  >{{ Object.values(item)[0] }}</div>
                </div>
                <div v-else class="grid-cell">
                  <span>{{ Object.keys(item)[0] }}</span>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
        <!-- 组三形态 -->
        <div v-if="showGrid == 'groupThree'" class="lot-table">
          <!-- grid-header -->
          <div>
            <van-row class="grid-header-row grid-header">
              <van-col class="grid-col" span="4">期数</van-col>
              <van-col class="grid-col" span="8">万 千 百 十 个</van-col>
              <van-col class="grid-col" span="2">前三组三</van-col>
              <van-col class="grid-col" span="2">前三组六</van-col>
              <van-col class="grid-col" span="2">中三组三</van-col>
              <van-col class="grid-col" span="2">中三组六</van-col>
              <van-col class="grid-col" span="2">后三组三</van-col>
              <van-col class="grid-col" span="2">后三组六</van-col>
            </van-row>
          </div>
          <!-- grid-body -->
          <div v-for="(item, index) in openCodeList" :key="index">
            <van-row class="grid-body-row grid-header" justify="center" align="center">
              <van-col class="grid-col" span="4">{{ item.expectSubstr }}</van-col>
              <van-col class="grid-col" span="8">{{ item.code.replace(/,/g, ' ') }}</van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="group-three-bingo1"
                  v-if="groupThreeList[index][0] == '三'"
                >{{ groupThreeList[index][0] }}</span>
                <span v-else>{{ groupThreeList[index][0] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="group-three-bingo2"
                  v-if="groupThreeList[index][1] == '六'"
                >{{ groupThreeList[index][1] }}</span>
                <span v-else>{{ groupThreeList[index][1] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="group-three-bingo1"
                  v-if="groupThreeList[index][2] == '三'"
                >{{ groupThreeList[index][2] }}</span>
                <span v-else>{{ groupThreeList[index][2] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="group-three-bingo2"
                  v-if="groupThreeList[index][3] == '六'"
                >{{ groupThreeList[index][3] }}</span>
                <span v-else>{{ groupThreeList[index][3] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="group-three-bingo1"
                  v-if="groupThreeList[index][4] == '三'"
                >{{ groupThreeList[index][4] }}</span>
                <span v-else>{{ groupThreeList[index][4] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="group-three-bingo2"
                  v-if="groupThreeList[index][5] == '六'"
                >{{ groupThreeList[index][5] }}</span>
                <span v-else>{{ groupThreeList[index][5] }}</span>
              </van-col>
            </van-row>
          </div>
        </div>
        <!-- 龙虎和 -->
        <div v-if="showGrid == 'LongHuHe'" class="lot-table">
          <!-- grid-header -->
          <div>
            <van-row class="grid-header-row grid-header">
              <van-col class="grid-col" span="4">期数</van-col>
              <van-col
                class="grid-col"
                span="4"
              >{{ longHuHeHeader[0] }}&nbsp;vs&nbsp;{{ longHuHeHeader[1] }}</van-col>
              <van-col class="grid-col" span="2">龙</van-col>
              <van-col class="grid-col" span="2">和</van-col>
              <van-col class="grid-col" span="2">虎</van-col>
              <van-col
                class="grid-col"
                span="4"
              >{{ longHuHeHeader[2] }}&nbsp;vs&nbsp;{{ longHuHeHeader[3] }}</van-col>
              <van-col class="grid-col" span="2">龙</van-col>
              <van-col class="grid-col" span="2">和</van-col>
              <van-col class="grid-col" span="2">虎</van-col>
            </van-row>
          </div>
          <!-- grid-body -->
          <div v-for="(item, index) in openCodeList" :key="index">
            <van-row class="grid-body-row grid-header" justify="center" align="center">
              <van-col class="grid-col" span="4">{{ item.expectSubstr }}</van-col>
              <van-col
                class="grid-col pale-yellow"
                span="4"
              >{{ longHuHeList[index][0] }} vs {{ longHuHeList[index][1] }}</van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="lhh-bingo"
                  v-if="longHuHeBingo.indexOf(longHuHeList[index][2]) > -1"
                >{{ longHuHeList[index][2] }}</span>
                <span v-else>{{ longHuHeList[index][2] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="lhh-bingo"
                  v-if="longHuHeBingo.indexOf(longHuHeList[index][3]) > -1"
                >{{ longHuHeList[index][3] }}</span>
                <span v-else>{{ longHuHeList[index][3] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="lhh-bingo"
                  v-if="longHuHeBingo.indexOf(longHuHeList[index][4]) > -1"
                >{{ longHuHeList[index][4] }}</span>
                <span v-else>{{ longHuHeList[index][4] }}</span>
              </van-col>
              <van-col
                class="grid-col pale-yellow"
                span="4"
              >{{ longHuHeList[index][5] }} vs {{ longHuHeList[index][6] }}</van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="lhh-bingo"
                  v-if="longHuHeBingo.indexOf(longHuHeList[index][7]) > -1"
                >{{ longHuHeList[index][7] }}</span>
                <span v-else>{{ longHuHeList[index][7] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="lhh-bingo"
                  v-if="longHuHeBingo.indexOf(longHuHeList[index][8]) > -1"
                >{{ longHuHeList[index][8] }}</span>
                <span v-else>{{ longHuHeList[index][8] }}</span>
              </van-col>
              <van-col class="grid-col" span="2">
                <span
                  class="lhh-bingo"
                  v-if="longHuHeBingo.indexOf(longHuHeList[index][9]) > -1"
                >{{ longHuHeList[index][9] }}</span>
                <span v-else>{{ longHuHeList[index][9] }}</span>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>

    <!-- 选择更多内容弹框 -->
    <van-popup class="popupModel" v-model="moreShow" position="right" :style="{ height: '90%' }">
      <div class="popupBody">
        <div class="select-chunk">
          <p class="chunk-title">单号走势：</p>
          <div class="chunk-btns">
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='定位胆'}"
              @click="changePositionGall('定位胆')"
            >定位胆</button>
          </div>
        </div>

        <div v-if="lotteryType == 1" class="select-chunk">
          <p class="chunk-title">多号走势：</p>
          <div class="chunk-btns">
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='五星'}"
              @click="changeMultiNumTrend('五星')"
            >五星</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='前四'}"
              @click="changeMultiNumTrend('前四')"
            >前四</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='后四'}"
              @click="changeMultiNumTrend('后四')"
            >后四</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='前三'}"
              @click="changeMultiNumTrend('前三')"
            >前三</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='中三'}"
              @click="changeMultiNumTrend('中三')"
            >中三</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='后三'}"
              @click="changeMultiNumTrend('后三')"
            >后三</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='前二'}"
              @click="changeMultiNumTrend('前二')"
            >前二</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='后二'}"
              @click="changeMultiNumTrend('后二')"
            >后二</button>
          </div>
        </div>

        <div v-if="lotteryType == 1" class="select-chunk">
          <p class="chunk-title">组三形态：</p>
          <div class="chunk-btns">
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='组三形态'}"
              @click="changeGroupThree('组三形态')"
            >组三形态</button>
          </div>
        </div>

        <div v-if="lotteryType == 1" class="select-chunk">
          <p class="chunk-title">龙 虎 和：</p>
          <div class="chunk-btns">
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='万千 | 万百'}"
              @click="changeLongHuHe('万千 | 万百')"
            >万千 | 万百</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='万十 | 万个'}"
              @click="changeLongHuHe('万十 | 万个')"
            >万十 | 万个</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='千百 | 千十'}"
              @click="changeLongHuHe('千百 | 千十')"
            >千百 | 千十</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='千个 | 百十'}"
              @click="changeLongHuHe('千个 | 百十')"
            >千个 | 百十</button>
            <button
              class="chunk-btn-item"
              :class="{active: activeTbs==='百个 | 十个'}"
              @click="changeLongHuHe('百个 | 十个')"
            >百个 | 十个</button>
          </div>
        </div>
      </div>
      <div style="width: 100%;padding: 20px;text-align: center;">
        <div
          style="padding:4px 16px;border:solid 1px #ccc;border-radius:4px;display:inline-block;"
          @click="cancelSift()"
        >取消</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "LotteryDetails",
  data() {
    return {
      title: "", // 页面名称
      lotteryId: "", // 彩票id
      lotteryType: 1, // 彩票类型（大的彩票类型，后端说：通过彩票id第一位数字判断）
      count: 50, // 期数（展示的期数，默认50期）
      codeList: [], // 号码数组(每个彩种可能出现的号码)
      openCodeList: [], // 开奖号码数组
      gridList: [], // 阵列数组
      numWidth: "num-width1", // 阵列单行宽度样式（只用于定位胆）
      showGrid: "basic", // 默认显示趋势grid
      tabs: [
        { id: 1, title: "最近50期", count: 50 },
        { id: 2, title: "最近30期", count: 30 },
        { id: 3, title: "最近10期", count: 10 }
      ],
      digitTabs: [
        { indexId: 0, title: "万" },
        { indexId: 1, title: "千" },
        { indexId: 2, title: "百" },
        { indexId: 3, title: "十" },
        { indexId: 4, title: "个" }
      ],
      // 顶部tabs
      tabsActive: 1,
      // 万千白十个
      digitActive: 0,
      showDigit: true, // 显示‘万千...’
      showGridTitle: "tab", // 显示'多号走势-五星'或'组三形态'等
      gridTitle: "", // 表格标题
      // 侧边弹框
      moreShow: false,
      // 侧边弹框tbs
      activeTbs: "定位胆",
      // 多号走势数组
      multiNumList: [],
      groupThreeList: [], // 组三表格数组
      // 龙虎和表头
      longHuHeHeader: [],
      // 龙虎和表格数组
      longHuHeList: [],
      // 龙虎和标志位数组
      longHuHeBingo: ["龙", "和", "虎"]
    };
  },
  mounted() {
    // console.log("路由参数：", this.$route.query);

    this.title = this.$route.query.name;
    this.lotteryId = this.$route.query.lotteryId;

    /**
     * 生成号码数组
     * 1 开头，时时彩。号码包含[]
     * 2 开头，11选5 */
    let firstWord = this.lotteryId.toString().substring(0, 1);
    if (firstWord == 1) {
      this.lotteryType = 1;
      this.numWidth = "num-width1";
      this.codeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    } else if (firstWord == 2) {
      this.lotteryType = 2;
      this.numWidth = "num-width2";
      this.codeList = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11"
      ];
    } else if (firstWord == 3) {
      this.lotteryType = 3;
      this.numWidth = "num-width3";
      this.codeList = [1, 2, 3, 4, 5, 6];
      this.digitTabs = [
        { indexId: 0, title: "百" },
        { indexId: 1, title: "十" },
        { indexId: 2, title: "个" }
      ];
    } else if (firstWord == 6) {
      this.lotteryType = 6;
      this.numWidth = "num-width1";
      this.codeList = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10"
      ];
      this.digitTabs = [
        { indexId: 0, title: "一" },
        { indexId: 1, title: "二" },
        { indexId: 2, title: "三" },
        { indexId: 3, title: "四" },
        { indexId: 4, title: "五" },
        { indexId: 5, title: "六" },
        { indexId: 6, title: "七" },
        { indexId: 7, title: "八" },
        { indexId: 8, title: "九" },
        { indexId: 9, title: "十" }
      ];
    }

    this.init();
  },
  methods: {
    init() {
      // 各项重置
      this.activeTbs = "定位胆";
      this.showGrid = "basic";
      // 表格标题处
      this.showGridTitle = "tab";

      // 获取开奖走势
      this.getLotteryOpenCode();

      setTimeout(() => {
        // 绘图方式(必须放在openCodeList赋值之后)
        this.drawLine();
      }, 500);
    },
    // 生成普通阵列
    createNormalGrid() {
      this.gridList = [];
      for (let i = 0; i < this.count; i++) {
        let rowArr = [];
        for (let j = 0; j < this.codeList.length; j++) {
          rowArr.push(this.codeList[j].toString());
        }
        this.gridList.push(rowArr);
      }
      // console.log("定位胆阵列数组：", this.gridList);
    },
    // 顶部- tabs
    changeTabas(item) {
      console.log("改变TAB", item);
      this.tabsActive = item.id;
      this.count = item.count;

      this.init();
    },
    /** 重置页面
     * @param ignoreTab  忽略tab，若false，tab条件也将重置
     */
    resetPage(ignoreTab) {
      if (!ignoreTab) {
        this.tabsActive = 1;
        this.count = 50;
      }

      // 重置位数
      this.digitActive = 0;

      this.init();
    },
    // 清除表格和画布
    clearGrid() {},
    // 万千百十个
    changeDigitTabas(item) {
      this.digitActive = item.indexId;

      // 重绘走势线
      setTimeout(() => {
        // 绘图方式(必须放在openCodeList赋值之后)
        this.drawLine();
      }, 300);
    },
    closeRightPanel() {
      this.moreShow = false;
    },
    /** 取消筛选 */
    cancelSift() {
      this.closeRightPanel();
    },
    // 获取开奖走势图
    getLotteryOpenCode() {
      let params = {
        lotteryId: this.lotteryId,
        count: this.count
      };

      this.fetchget("/api/getLotteryOpenCode", params).then(res => {
        if (res.code == 200) {
          this.openCodeList = [];
          this.openCodeList = res.data.map(item => {
            item.digitCodeList = item.code.split(",");
            item.expectSubstr = item.expect.substring(4);
            return item;
          });
          // 更新记录数
          this.count = res.data.length;

          // 根据号码数组生成grid阵列
          this.createNormalGrid();
          console.log("开奖号码组：", this.openCodeList);
        }
      });
    },
    // 绘制中奖号码连线
    drawLine() {
      let gridBody = this.$refs.bodySize;
      let canvas = this.$refs.chart;
      let ctx = canvas.getContext("2d");
      ctx.canvas.width = gridBody.clientWidth;
      ctx.canvas.height = gridBody.clientHeight;
      // 页面缩放比（以iphone6 375*677为基准）
      let rate = document.body.clientWidth / 375;
      // 期数 侧宽
      let noteWidth = this.$refs.periods.clientWidth;
      // 格子宽度
      let gridWidth =
        (document.body.clientWidth - noteWidth) / this.codeList.length;
      // 格子高度
      let gridHeight = 30 * rate;
      console.log("缩放比", rate);
      console.log("格子高度", gridHeight);
      // // 基宽
      // let baseWidth = (ctx.canvas.width - noteWidth) / 10;
      // // 基高
      // let baseHeight = ctx.canvas.height / 20;
      //新建一条path
      ctx.beginPath();
      // 求出画线的路径
      let arr1 = [];

      this.openCodeList.forEach(item => {
        arr1.push(item.digitCodeList[this.digitActive]);
      });
      // console.log("阵列行", this.gridList[0]);
      arr1.forEach((item, index) => {
        var openCodeRowIndex = this.gridList[index].indexOf(item);
        // console.log("号码所在阵列行索引", openCodeRowIndex);
        if (index == 0) {
          ctx.moveTo(
            noteWidth + (openCodeRowIndex + 1) * gridWidth - gridWidth / 2,
            gridHeight - gridHeight / 2
          );
        } else {
          ctx.lineTo(
            noteWidth + (openCodeRowIndex + 1) * gridWidth - gridWidth / 2,
            (index + 1) * gridHeight - gridHeight / 2
          );
        }
      });

      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.stroke();
    },
    /** 清除连线 */
    clearLine() {
      let gridBody = this.$refs.bodySize;
      let canvas = this.$refs.chart;
      let ctx = canvas.getContext("2d");

      let gridWidth = gridBody.clientWidth;
      let gridHeight = gridBody.clientHeight;
      ctx.canvas.width = gridWidth;
      ctx.canvas.height = gridHeight;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, gridWidth, gridHeight);
    },
    /** 右侧面板筛选-trendGrid */
    changeTrendGrid(item) {
      this.activeTbs = item;
      this.showGrid = "trendGrid";

      // 关闭筛选面板
      this.closeRightPanel();
    },
    /** 右侧面板筛选-定位胆 */
    changePositionGall(name) {
      this.activeTbs = name;
      this.showGrid = "basic";
      // 表格标题处
      this.showGridTitle = "tab";

      setTimeout(() => {
        // 绘制趋势线
        this.drawLine();
      }, 300);

      // 关闭筛选面板
      this.closeRightPanel();
    },
    /** 右侧面板筛选-多号走势 */
    changeMultiNumTrend(item) {
      this.activeTbs = item;
      this.showGrid = "multiNumTrend";
      // 表格标题处
      this.showGridTitle = "title";
      this.gridTitle = `多号走势_${item}`;

      this.buildMultiNumTrend(item);

      // 关闭筛选面板
      this.closeRightPanel();
    },
    /** 右侧面板筛选-组三 */
    changeGroupThree(item) {
      this.activeTbs = item;
      this.showGrid = "groupThree";
      // 表格标题处
      this.showGridTitle = "title";
      this.gridTitle = `组三形态`;

      this.buildGroupThree();

      // 关闭筛选面板
      this.closeRightPanel();
    },
    /** 右侧面板筛选-龙虎和 */
    changeLongHuHe(item) {
      this.activeTbs = item;
      this.showGrid = "LongHuHe";
      // 表格标题处
      this.showGridTitle = "title";
      this.gridTitle = `龙虎走势_${item}`;

      // 设置表头
      var arr = item.split("|");

      this.longHuHeHeader[0] = arr[0].charAt(0);
      this.longHuHeHeader[1] = arr[0].charAt(1);
      this.longHuHeHeader[2] = arr[1].trim().charAt(0);
      this.longHuHeHeader[3] = arr[1].trim().charAt(1);

      this.buildLongHuHe(this.longHuHeHeader);

      // 关闭筛选面板
      this.closeRightPanel();
    },
    /** 生成组三数组 */
    buildGroupThree() {
      this.groupThreeList = [];
      for (let i = 0; i < this.openCodeList.length; i++) {
        var arr = this.openCodeList[i].digitCodeList;
        var midIndex = parseInt(arr.length / 2);

        // 前三
        let pre3 = arr.slice(0, 3);
        // 中三
        let mid3 = arr.slice(midIndex - 1, midIndex + 2);
        // 后三
        let lst3 = arr.slice(arr.length - 3, arr.length);
        let e1, e2, e3, e4, e5, e6;
        e1 = this.getGroup3Result(this.checkRepeat(pre3), "三");
        e2 = this.getGroup3Result(this.checkRepeat(pre3), "六");
        e3 = this.getGroup3Result(this.checkRepeat(mid3), "三");
        e4 = this.getGroup3Result(this.checkRepeat(mid3), "六");
        e5 = this.getGroup3Result(this.checkRepeat(lst3), "三");
        e6 = this.getGroup3Result(this.checkRepeat(lst3), "六");

        this.groupThreeList.push([e1, e2, e3, e4, e5, e6]);
      }
    },
    /** 验证数组中是否存在重复-用于组三，只需检测前2个元素即可 */
    checkRepeat(list) {
      let len1 = this.findSame(list[0], list);
      let len2 = this.findSame(list[1], list);
      // 返回较大一个
      return len1 > len2 ? len1 : len2;
    },
    /** 返回数组中与传入值相同的元素-用于组三 */
    findSame(value, list) {
      let result = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i] == value) {
          result.push(list[i]);
        }
      }
      // 返回结果数组长度，1表示只要一个，2表示相同的有2个，3表示3个相同
      return result.length;
    },
    /** 返回三、六或随机数；
     * @params target 传入想要返回的匹配目标。三 表示匹配组三；六 表示匹配组六
     */
    getGroup3Result(len, target) {
      let result = "";
      let randomNum = this.getRandom(this.codeList);
      if (target == "三") {
        result = len == 2 ? "三" : randomNum;
      }
      if (target == "六") {
        result = len == 1 ? "六" : randomNum;
      }

      return result;
    },
    /** 提供一个数组，返回一个随机子元素 */
    getRandom(arr) {
      let len = arr.length;
      let randomIndex = parseInt(Math.random() * (len - 0));

      return arr[randomIndex];
    },
    /** 生成龙虎和表格数据 */
    buildLongHuHe(headerList) {
      // console.log(headerList);  // 如["万", "千", "万", "百"]
      // 将万千百十个中文转成索引
      let headerIndex = [];
      headerList.forEach((value, index) => {
        switch (value) {
          case "万":
            headerIndex[index] = 0;
            break;
          case "千":
            headerIndex[index] = 1;
            break;
          case "百":
            headerIndex[index] = 2;
            break;
          case "十":
            headerIndex[index] = 3;
            break;
          case "个":
            headerIndex[index] = 4;
            break;
        }
      });
      // console.log(headerIndex);  // 如 '万千万百' 输出 [0,1,0,2]
      this.longHuHeList = [];
      let len = this.openCodeList.length;
      let longCount1 = 0;
      let heCount1 = 0;
      let huCount1 = 0;
      let longCount2 = 0;
      let heCount2 = 0;
      let huCount2 = 0;
      // 倒序遍历
      for (let i = len - 1; i >= 0; i--) {
        let arr = this.openCodeList[i].digitCodeList;
        let rowArr = [];

        rowArr[0] = arr[headerIndex[0]];
        rowArr[1] = arr[headerIndex[1]];
        /**
         * 计算前两位龙虎和
         * 计算规则：a>b，龙；a<b，虎；a=b，和 */
        if (rowArr[0] == rowArr[1]) {
          longCount1++;
          heCount1 = 0;
          huCount1++;

          rowArr[2] = longCount1;
          rowArr[3] = "和";
          rowArr[4] = huCount1;
        }
        if (rowArr[0] > rowArr[1]) {
          longCount1 = 0;
          heCount1++;
          huCount1++;

          rowArr[2] = "龙";
          rowArr[3] = heCount1;
          rowArr[4] = huCount1;
        } else if (rowArr[0] < rowArr[1]) {
          longCount1++;
          heCount1++;
          huCount1 = 0;

          rowArr[2] = longCount1;
          rowArr[3] = heCount1;
          rowArr[4] = "虎";
        }

        rowArr[5] = arr[headerIndex[2]];
        rowArr[6] = arr[headerIndex[3]];
        /**
         * 计算前两位龙虎和
         * 计算规则：a>b，龙；a<b，虎；a=b，和 */
        if (rowArr[5] == rowArr[6]) {
          longCount2++;
          heCount2 = 0;
          huCount2++;

          rowArr[7] = longCount2;
          rowArr[8] = "和";
          rowArr[9] = huCount2;
        }
        if (rowArr[5] > rowArr[6]) {
          longCount2 = 0;
          heCount2++;
          huCount2++;

          rowArr[7] = "龙";
          rowArr[8] = heCount2;
          rowArr[9] = huCount2;
        } else if (rowArr[5] < rowArr[6]) {
          longCount2++;
          heCount2++;
          huCount2 = 0;

          rowArr[7] = longCount2;
          rowArr[8] = heCount2;
          rowArr[9] = "虎";
        }

        this.longHuHeList.push(rowArr);
      }

      // console.log(this.longHuHeList);
    },
    /** 生成多号走势数组 */
    buildMultiNumTrend(data) {
      // 选项
      console.log("选项", data);
      // console.log("可能号码：", this.codeList);
      // console.log(data, this.openCodeList);
      // 生成前清空数组
      this.multiNumList = [];

      for (let i = 0; i < this.openCodeList.length; i++) {
        // 最终生成的每行元素数组
        let rowArr = [];
        // 要匹配的数组（在中奖号码中根据选项条件筛选）
        let targetRowArr = [];
        // 中奖号码，用于匹配每行，每格元素
        let openRowArr = this.openCodeList[i].digitCodeList;
        switch (data) {
          case "五星":
            targetRowArr = openRowArr;
            break;
          case "前四":
            targetRowArr = openRowArr.slice(0, 4);
            break;
          case "后四":
            targetRowArr = openRowArr.slice(
              openRowArr.length - 4,
              openRowArr.length
            );
            break;
          case "前三":
            targetRowArr = openRowArr.slice(0, 3);
            break;
          case "中三":
            // eslint-disable-next-line no-case-declarations
            let midIndex = parseInt(openRowArr.length / 2);
            targetRowArr = openRowArr.slice(midIndex - 1, midIndex + 2);
            break;
          case "后三":
            targetRowArr = openRowArr.slice(
              openRowArr.length - 3,
              openRowArr.length
            );
            break;
          case "前二":
            targetRowArr = openRowArr.slice(0, 2);
            break;
          case "后二":
            targetRowArr = openRowArr.slice(
              openRowArr.length - 2,
              openRowArr.length
            );
            break;
        }

        // console.log("匹配结果", this.checkSame(openRowArr, 0));
        for (let j = 0; j < this.codeList.length; j++) {
          // 匹配每行每格元素是否是中奖号码，且出现次数
          rowArr.push(this.checkSame(targetRowArr, this.codeList[j]));
        }
        this.multiNumList.push(rowArr);
      }

      // 结果数组
      // console.log(this.multiNumList);
    },
    /** 验重，返回对象 */
    checkSame(list, target) {
      let obj = {};
      obj[target] = 0;
      list.forEach(value => {
        if (target == value) {
          obj[target]++;
        }
      });
      return obj;
    }
  }
};
</script>

<style lang="scss">
.pale-yellow {
  color: #d88b13;
}

.LotteryDetails {
  .lot-head {
    .diy-tabs {
      display: flex;
      font-size: 12px;
      .diy-tabs-item {
        width: 33.3%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-bottom: 1px solid #e9e9e9;
        border-right: 1px solid #e9e9e9;
        &:last-child {
          border-right: none;
        }
        &.tabs-active {
          background: #0468a5;
          color: #ffffff;
        }
      }
    }
    .select-digit {
      height: 44px;
      text-align: center;
      position: relative;
      .digit-box {
        display: flex;
        height: 31px;
        width: 208px;
        font-size: 18px;
        margin: 6px auto;
        border-radius: 5px;
        overflow: hidden;
        box-sizing: border-box;
        border: 1px solid #0468a5;
        .digit {
          flex: 1;
          font-size: 14px;
          line-height: 31px;
          color: #0468a5;
          border: 1xp solid #ffffff;
          &.digit-active {
            color: #ffffff;
            background: #0468a5;
          }
        }
      }
      .icon-more {
        color: #0468a5;
        font-size: 22px;
        position: absolute;
        right: 20px;
        top: 5px;
      }
    }
  }
  .lot-sum {
    border-top: 1px solid #cccccc;
    .lot-line {
      display: flex;
      align-items: center;
      text-align: center;
      height: 30px;
      line-height: 30px;
      .l-title {
        width: 75px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
      }
      .num {
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        &.num-width1 {
          // 一行10个
          width: 30px;
        }
        &.num-width2 {
          // 一行11个
          width: 27px;
        }
        &.num-width3 {
          // 一行6个
          width: 50px;
        }
        &:last-child {
          border-right: none;
        }
        & > .colorBall {
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          background: $themeColor;
          color: #ffffff;
          border-radius: 50%;
          box-sizing: border-box;
        }
        .g3-title1 {
          width: 60px;
        }
      }
      &.lot-table-header {
        height: 45px;
        line-height: 45px;
        background: #f5f5f5;
      }
    }
    .lot-table-body {
      position: relative;
      .body-list {
        position: absolute;
        z-index: 1;
      }
      .body-chart {
        position: absolute;
        top: 0;
      }
    }
  }
  .popupModel {
    border-radius: 5px 0 0 5px;
    .popupBody {
      width: 250px;
      padding: 10px;
      .select-chunk {
        font-size: 14px;
        .chunk-title {
          line-height: 30px;
        }
        .chunk-btns {
          .chunk-btn-item {
            font-size: 12px;
            border: none;
            outline: none;
            width: 65px;
            border-radius: 5px;
            padding: 5px 0;
            margin: 10px 10px 0 0;
            background: #ffffff;
            border: 1px solid #dddddd;
            &.active {
              background: #0468a5;
              border-color: #0468a5;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}

.grid-title {
  font-size: 14px;
  line-height: 50px;
}
.grid-header-row {
  height: 44px;
}
.grid-body-row {
  height: 30px;
}
.grid-col {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-right: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
}
.grid-col:last-child {
  border-right: none;
}

.multi-num-bingo {
  position: relative;
  display: inline-block;
  color: #ffffff;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-image: linear-gradient(0deg, #005c95 25%, #627e8f 100%);
  border-radius: 50%;
  text-align: center;
}
.multi-num-bingo2 {
  position: absolute;
  top: -4px;
  right: -2px;
  width: 15px;
  height: 14px;
  background: #199cdc;
  color: #fff;
  font-style: italic;
  line-height: 14px;
  border-radius: 50%;
}

.group-three-bingo1 {
  display: inline-block;
  color: #ffffff;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-image: linear-gradient(0deg, #005c95 25%, #627e8f 100%);
  border-radius: 50%;
  text-align: center;
}
.group-three-bingo2 {
  display: inline-block;
  color: #ffffff;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-image: linear-gradient(0deg, #33d272 25%, #0bf187 100%);
  border-radius: 50%;
  text-align: center;
}
.lhh-bingo {
  display: inline-block;
  color: #ffffff;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-image: linear-gradient(0deg, #e40931, #e2686e);
  border-radius: 50%;
  text-align: center;
}
</style>