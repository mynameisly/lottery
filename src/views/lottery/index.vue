<!--
 * @Author: your name
 * @Date: 2020-07-22 19:56:31
 * @LastEditTime: 2020-11-04 23:22:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\views\lottery\index.vue
--> 
<template>
  <div class="LotteryBetting-box">
    <div class="nav-box">
      <div class="go_back" @click="onClickLeft">
        <van-icon
          style="font-weight: bold"
          color="#ffffff"
          size="24"
          name="arrow-left"
        />
      </div>
      <div class="types-box" @click.stop="showTypeListFunc">
        <div class="type-text">
          <span>{{ title }}--{{ childText }}</span>
        </div>
        <div class="iconbox">
          <van-icon class="icon" name="play" color="#ffffff" size="16" />
        </div>
      </div>
      <div>
        <van-icon
          @click="openGameRecord"
          name="notes-o"
          size="24"
          color="#ffffff"
        />
      </div>
      <div class="type-list-box" v-show="showTypeList">
        <div class="content-box">
          <div class="type-title-h">彩种类型</div>
          <div class="type-list">
            <div class="type-li" v-for="item in data" :key="item.id">
              <div
                class="btn"
                :class="item.id == parentId ? 'selectBtn' : ''"
                @click.stop="activeBtn(item)"
              >
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="type-title-h">{{ title }}</div>
          <div class="type-list">
            <div class="type-li" v-for="item in childIdData" :key="item.id">
              <div
                class="btn"
                :class="item.id == childId ? 'selectBtn' : ''"
                @click.stop="activeBtn2(item)"
              >
                {{ item.text }}
              </div>
            </div>
            <div class="type-li"></div>
            <div class="type-li"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="LotteryPeriods-box">
      <div>
        第{{ lotteryCountdown.data.expect }}期 截止时间:
        {{ lotteryCountdown.countdown }}
      </div>
    </div>
    <div class="historyRecord-box">
      <div class="historyRecord-h">
        <div class="item-box">
          <div class="text-box">
            <div class="item">
              <span>
                第
                <span style="color: #0468a5">{{
                  historyNum.length > 0 ? historyNum[0].expect : lotteryCountdown.data.expect
                }}</span>
                期
              </span>
            </div>
            <span class="item">开奖号码</span>
            <span class="item">
              <van-icon name="question-o" color="#0468a5" size="20" />
            </span>
            <span class="item">
              <van-icon name="underway-o" color="#0468a5" size="20" />
            </span>
          </div>
        </div>
        <div class="item-box">
          <div class="switch-box">
            <span class="item-text" :class="checked ? 'colorText' : ''"
              >官方</span
            >
            <van-switch
              v-model="checked"
              active-color="#ffffff"
              inactive-color="#ffffff"
              size="24px"
              disabled
            />
            <span class="item-text" :class="!checked ? 'colorText' : ''"
              >信用</span
            >
          </div>
        </div>
      </div>
      <div class="historyRecord-list">
        <lotteryType5
          v-if="parentId == 1 || parentId == 2"
          :dataObj="historyNum"
        />
        <lotteryType3  v-if="parentId == 4" :dataObj="historyNum" />
        <lotteryType10 v-if="parentId == 3" :dataObj="historyNum" />
      </div>
      <div class="tab-box" v-if="checked">
        <van-tabs
          ref="PlayingMethod"
          v-if="thisItem.length > 0"
          v-model="activeTab"
          class="tabs-box"
          background="#F1F1F1"
          @change="activeTabFunc"
        >
          <van-tab
            v-for="item in thisItem"
            :key="item.ruleId"
            :name="item.ruleId"
            :title="item.groupName + '-' + item.name"
          ></van-tab>
        </van-tabs>
        <div v-else style="color: #999; padding: 5px 0">选择玩法</div>
        <div class="icon" @click.stop="showPlayingMethodFunc">
          <van-icon name="arrow" color="#0468a5" size="20" />
        </div>
      </div>
      <div class="content-box" v-if="checked">
        <div
          v-if="
            activeData && lotteryTypeType1.indexOf(activeData.config.type2) > -1
          "
        >
          <div
            class="content-item"
            v-for="(item, i) in activeData.config.data"
            :key="i"
          >
            <lotteryType
              :data="activeData.config.data[i]"
              :clear="clear"
              :indexNum="i"
              @backData="backData"
            />
          </div>
        </div>
        <div v-if="activeData && activeData.config.type2 === 'srk'">
          <div class="content-item">
            <x5 :data="activeData.config" @backData="backData" :clear="clear" />
          </div>
        </div>
        <div v-if="activeData && activeData.config.type2 === '27'">
          <div class="content-item">
            <x27w
              :data="activeData.config"
              @backData="backData"
              :clear="clear"
            />
          </div>
        </div>
        <div v-if="activeData && activeData.config.type2 === '26'">
          <div class="content-item">
            <x26w
              :data="activeData.config"
              @backData="backData"
              :clear="clear"
            />
          </div>
        </div>
        <div v-if="activeData && activeData.config.type2 === 'longhu'">
          <div class="content-item">
            <longhu
              :data="activeData.config"
              @backData="backData"
              :clear="clear"
            />
          </div>
          <div class="content-item">
            <longhu2
              :data="activeData.config"
              @backData="backData"
              :clear="clear"
            />
          </div>
        </div>
        <div v-if="activeData && activeData.config.type2 === '3z11'">
          <div
            class="content-item"
            v-for="(item, i) in activeData.config.data"
            :key="i"
          >
            <sz11w
              :data="activeData.config.data[i]"
              :indexNum="i"
              @backData="backData"
              :clear="clear"
            />
          </div>
        </div>
        <div v-if="activeData && activeData.config.type2 === '1z11'">
          <sz11w
            :data="activeData.config.data"
            @backData="backData"
            :clear="clear"
          />
        </div>
      </div>
      <!-- 信用 -->
      <div v-if="!checked">
        <ssc />
      </div>
    </div>
    <div class="footer-box">
      <div class="footer-h">
        <span>共{{ paramsData.num }}注;</span>
        <span>{{ paramsData.multiple }}倍;</span>
        <span>{{ moneyNum }}元;</span>
        <span>盈利{{ moneyNum2 }}元;</span>
        <span>余额：{{lotteryMoney}}</span>
        <span class="icont">
          <van-icon name="eye-o" color="#000000" />
        </span>
      </div>
      <div class="footer-btn">
        <div class="btn" @click="showUpdNum">
          <van-icon v-if="this.currentRatio.sync" name="arrow-up" />
          <van-icon v-if="!this.currentRatio.sync" name="arrow-down" />
        </div>
        <div class="btn" @click="openNumObj">
          <span>追号</span>
        </div>
        <div class="btn" @click="addCodeFunc">
          <span>添加投注</span>
        </div>
        <div class="btn" @click="openadditional">
          <span>购彩栏({{ addHurdlebj.values.length }})</span>
        </div>
        <div class="btn send-btn" @click="postBetting">
          <span>一键投注</span>
        </div>
      </div>
      <div class="updNum" v-if="currentRatio.sync">
        <div class="items">
          <div class="text">返点</div>
          <div class="slider">
            <van-slider
              v-model="currentRatio.fd"
              :max="currentRatio.maxNum"
              :min="currentRatio.minNum"
              @change="checkedSlider"
            />
          </div>
          <div class="text">{{ currentRatio.fd }}</div>
        </div>
        <div class="items2">
          <div class="text">模式：</div>
          <div
            class="item"
            :class="currentRatio.typeB === 'yuan' ? 'active-s' : ''"
            @click="activeTypeB('yuan')"
          >
            元
          </div>
          <div
            class="item"
            :class="currentRatio.typeB === 'jiao' ? 'active-s' : ''"
            @click="activeTypeB('jiao')"
          >
            角
          </div>
          <div
            class="item"
            :class="currentRatio.typeB === 'fen' ? 'active-s' : ''"
            @click="activeTypeB('fen')"
          >
            分
          </div>
          <div
            class="item"
            :class="currentRatio.typeB === 'li' ? 'active-s' : ''"
            @click="activeTypeB('li')"
          >
            厘
          </div>
        </div>
        <div class="items3">
          <div class="text">倍数：</div>
          <div class="item">
            <van-stepper
              v-model="currentRatio.multiple"
              @change="activeMultiple"
            />
          </div>
        </div>
        <div class="items2">
          <div class="item" @click="activeMultiple(50)">50</div>
          <div class="item" @click="activeMultiple(100)">100</div>
          <div class="item" @click="activeMultiple(200)">200</div>
          <div class="item" @click="activeMultiple(500)">500</div>
          <div class="item" @click="activeMultiple(1000)">1000</div>
          <div class="item" @click="activeMultiple(5000)">5000</div>
        </div>
      </div>
    </div>
    <!-- 玩法 -->
    <div class="playingMethod-tip" v-if="showPlayingMethod">
      <playingMethod
        v-if="showPlayingMethod"
        :history="playingMethodObj.history"
        :dataObj="playingMethodObj.dataObj"
        @closePlayingMethodFun="closePlayingMethodFun"
      />
    </div>
    <!-- 购物栏 -->
    <div class="tipAddBox" v-if="addHurdlebj.sync">
      <div class="header-box">
        <div class="go_back" @click="closeadditional">
          <van-icon
            style="font-weight: bold"
            color="#ffffff"
            size="24"
            name="arrow-left"
          />
        </div>
        <div class="text">购彩栏-{{ title }}</div>
      </div>
      <div class="LotteryPeriods-box">
        <div>
          第{{ lotteryCountdown.data.expect }}期 截止时间:
          {{ lotteryCountdown.countdown }}
        </div>
      </div>
      <div class="content-box">
        <div class="li-box" v-for="(item, i) in addHurdlebj.values" :key="i">
          <div class="li-h">
            <span>
              <span v-for="item in thisItem" :key="item.ruleId">
                <span v-if="item.ruleId === activeTab"
                  >{{ item.groupName }}-{{ item.name }}</span
                >
              </span>
            </span>
            <div class="go_back" @click="onClickLeft">
              <van-icon
                style="font-weight: bold"
                color="#eaeaea"
                size="12"
                name="cross"
              />
            </div>
          </div>
          <div class="content">{{ item.codes }}</div>
          <div class="footer">
            <div class="stepper">
              倍数：
              <van-stepper v-model="item.multiple" @change="watchFunc" />
            </div>
            <div>共{{ item.num }}注 共{{ item.num * 2 * item.multiple }}元</div>
          </div>
        </div>
      </div>
      <div class="footer-box">
        <div class="h-box">订单总数{{addHurdlebj.muns}}注，投注金额{{addHurdlebj.moneys}}元，余额：{{lotteryMoney}}</div>
        <div class="btns">
          <div class="btn btn1" @click="removeCartFunc">清空所有</div>
          <div class="btn btn2" @click="openNumObj">我要追号</div>
          <div class="btn btn3" @click="postCartBetting">确认投注</div>
        </div>
      </div>
    </div>
    <!-- 追加号 -->
    <div class="additional-box" v-if="addNumObj.sync">
      <div class="header-box">
        <div class="go_back" @click="closeNumObj">
          <van-icon
            style="font-weight: bold"
            color="#ffffff"
            size="24"
            name="arrow-left"
          />
        </div>
        <div class="text">追号-{{ title }}</div>
      </div>
      <div class="LotteryPeriods-box">
        <div>
          第{{ lotteryCountdown.data.expect }}期 截止时间:
          {{ lotteryCountdown.countdown }}
        </div>
      </div>
      <div class="tab-list">
        <div
          class="tab-li"
          @click="handelAddNums(1)"
          :class="addNumObj.type === 1 ? 'select_tab_li' : ''"
        >
          利润率追号
        </div>
        <div
          class="tab-li"
          @click="handelAddNums(2)"
          :class="addNumObj.type === 2 ? 'select_tab_li' : ''"
        >
          同倍追号
        </div>
        <div
          class="tab-li"
          @click="handelAddNums(3)"
          :class="addNumObj.type === 3 ? 'select_tab_li' : ''"
        >
          翻倍追号
        </div>
      </div>
      <div class="num-box">
        <div class="num-box" v-show="addNumObj.type === 1">
          <div class="num-li">
            <div class="text">追号期数</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="number"
                @input="addCodeNumFunc"
                v-model="addNumObj.form.q"
              />
            </div>
          </div>
          <div class="num-li">
            <div class="text">起始倍数</div>
            <div class="inpt-box">
              <input class="inpt" v-model="addNumObj.form.startB" />
            </div>
          </div>
          <div class="num-li">
            <div class="text">最大倍投</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="number"
                v-model="addNumObj.form.maxNum"
              />
            </div>
          </div>
          <div class="num-li">
            <div class="text">最低收益率(%)</div>
            <div class="inpt-box">
              <input class="inpt" type="number" v-model="addNumObj.form.minB" />
            </div>
          </div>
        </div>
        <div class="num-box" v-show="addNumObj.type === 2">
          <div class="num-li">
            <div class="text">追号期数</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="number"
                @input="addCodeNumFunc"
                v-model="addNumObj.form.q"
              />
            </div>
          </div>
          <div class="num-li">
            <div class="text">起始倍数</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="number"
                v-model="addNumObj.form.startB"
              />
            </div>
          </div>
        </div>
        <div class="num-box" v-show="addNumObj.type === 3">
          <div class="num-li">
            <div class="text">追号期数</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="number"
                @input="addCodeNumFunc"
                v-model="addNumObj.form.q"
              />
            </div>
          </div>
          <div class="num-li">
            <div class="text">起始倍数</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="number"
                v-model="addNumObj.form.startB"
              />
            </div>
          </div>
          <div class="num-li">
            <div class="text">相隔期数</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="number"
                v-model="addNumObj.form.partitionNum"
              />
            </div>
          </div>
          <div class="num-li">
            <div class="text">倍数模式</div>
            <div class="inpt-box">
              <div
                style="line-height: 30px; font-size: 16px; font-weight: bold"
              >
                *
              </div>
            </div>
          </div>
          <div class="num-li">
            <div class="text">倍数</div>
            <div class="inpt-box">
              <input
                class="inpt"
                type="text"
                v-model="addNumObj.form.multiple"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="generate-btn">
        <div class="btn" @click="addSendCodeFunc">生成追单号</div>
      </div>
      <div class="num-list">
        <div class="list-li" v-for="(item, i) in addNumObj.arr" :key="i">
          <div class="num-li">
            <div class="item-h">
              <div class="item">
                <div class="num" v-if="i > 8">序号：{{ i + 1 }}</div>
                <div class="num" v-if="i < 9">序号：0{{ i + 1 }}</div>
              </div>
              <div class="item">期数 {{item.expect}}</div>
              <div class="item">倍数：<input class="ipt" type="number" v-model="item.multiple" /></div>
            </div>
            <div class="item-content">
              <div class="item">
                <div>{{item.multiple * 2}}.00</div>
                <div class="text">金额(元)</div>
              </div>
              <div class="item">
                <div class="num">
                  {{item.multiple*(i+1)*2}}.00
                </div>
                <div class="text">累计金额(元)</div>
              </div>
              <div class="item">
                <div class="num" >{{item.getProfitMoney}}</div>
                <div class="text">盈利</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div>总追号金额 <span>{{(addNumObj.arr[addNumObj.arr.length - 1].multiple*((addNumObj.arr.length - 1)+1)*2)}}</span> 元</div>
        <div class="btn" @click="setCodeFunc">确认投注</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog, Toast } from "vant";
import { Notify } from "vant";
import lotteryType from "@/components/lotteryComponets/lotteryTypeContent"; // 选择投注
import lotteryType5 from "@/components/lotteryComponets/lotteryType5";
import lotteryType3 from "@/components/lotteryComponets/lotteryType3";
import lotteryType10 from "@/components/lotteryComponets/lotteryType10";
import x5 from "@/components/lotteryComponets/x5";
import x27w from "@/components/lotteryComponets/x27w";
import x26w from "@/components/lotteryComponets/x26w";
import longhu from "@/components/lotteryComponets/longhu";
import longhu2 from "@/components/lotteryComponets/longhu2";
import sz11w from "@/components/lotteryComponets/sz11w";
import playingMethod from "./playingMethod";
import config from "@/utils/config.js";
import ssc from "@/components/lotteryComponets/ssc";
export default {
  name: "LotteryBetting", // 彩票
  components: {
    lotteryType,
    lotteryType3,
    lotteryType5,
    lotteryType10,
    playingMethod,
    x5,
    x27w,
    x26w,
    longhu,
    longhu2,
    ssc,
    sz11w,
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      lotteryTypeType1: ["1", "2", "3", "4", "5", "6"],
      lotteryCountdown: {
        countdown: "",
        data: {
          expect: "暂无数据",
        },
      }, // 倒计时
      lotteryMoney: 0, // 用户余额
      show: true,
      lottery: {}, // 基本信息
      title: "",
      childText: "",
      parentId: "",
      childId: "",
      data: [],
      childIdData: [],
      showTypeList: false,
      checked: true,
      activeTab: "", // 类型
      activeData: null,
      showPlayingMethod: false,
      playingMethodObj: {
        history: [],
        dataObj: [],
      },
      thisItem: [], // 当前历史记录
      setTimeOut: "",
      historyNum: [], // 彩种历史记录
      paramsData: {
        lotteryId: "", // 彩票id
        codes: "", // 投注内容
        num: "", // 投注注数
        ruleId: "", // 玩法id
        ruleCode: "", // 玩法编码
        multiple: 1, // 倍数
        model: "yuan", // 模式
        code: 1920, // 返点
      },
      postDataNum: {
        nums1: [],
        nums2: [],
        nums3: [],
        nums4: [],
        nums5: [],
      },
      // 购物栏
      addHurdlebj: {
        sync: false,
        values: [],
        type: "",
        moneys: 0,
        muns: 0
      },
      /**
       * 追号
       */
      addNumObj: {
        sync: false,
        type: 1,
        form: {
          q: 10, // 期数
          startB: 1, // 起始倍数
          maxNum: 100, // 最大倍投
          minB: 30, // 最低收益率
          partitionNum: 1, // 相隔期数
          typeB: "yuan", // 倍数模式
          multiple: 1, // 倍数
        },
        moneys: 0,
        arr: [], // 追加数据
      },
      // 修改倍数
      currentRatio: {
        multiple: 1, // 倍数
        typeB: "yuan", // 模式
        fd: 1956, // 返点
        sync: false,
        maxNum: 1956,
        minNum: 1800,
      },
      moneyNum: 0,
      moneyNum2: 0,
      clear: false,
    };
  },
  watch: {
    activeData: {
      handler(val) {
        this.activeData = val;
      },
      deep: true,
    },
  },
  created() {
    let id =  this.$route.query.id;
    let childrenId =  this.$route.query.childrenId;
    if(id) {
      this.parentId = id;
      this.childId = childrenId;
    }
    this.getData();
    this.getplayMethodFunc();
    this.getOutTime();
    this.getHistoryFunc();
    this.getUserMoney()
  },
  mounted() {},
  destroyed() {
    if(this.setTimeOut) {
      window.clearInterval(this.setTimeOut);
    }
    
  },
  methods: {
    /**
     * 投注
     */
    postBetting() {// this.activeData
      let codes = this.paramsData.codes;
      if(codes[0] === ",") {
        codes = codes.substr(1)
      }
      if(this.activeData.config.bw) {
        if(this.activeData.config.bw === 'q1') {
          codes = `-,${codes}`
        }
        if(this.activeData.config.bw === 'q2') {
          codes = `-,-,${codes}`
        }
        if(this.activeData.config.bw === 'q3') {
          codes = `-,-,-,${codes}`
        }
        if(this.activeData.config.bw === 'h1') {
          codes = `${codes},-`
        }
        if(this.activeData.config.bw === 'h2') {
          codes = `${codes},-,-`
        }
        if(this.activeData.config.bw === 'h3') {
          codes = `${codes},-,-,-`
        }
        if(this.activeData.config.bw === 'b21') {
          codes = `-,${codes},-`
        }
      }
      this.paramsData.code = this.currentRatio.fd;
      this.paramsData.codes = codes;
      let params = [this.paramsData];
      let formdata = new FormData();
      formdata.append("blist", JSON.stringify(params));
      this.fetchpost("/api/userBetsGeneral", formdata).then((res) => {
        console.log(res);
        if (res.code == 200) {
          Toast("操作成功！");
        }
      });
    },
    setIntervalFunc() {
      this.setTimeOut = setInterval(() => {
        if (this.lotteryCountdown.countdown) {
          var nowtime = new Date(), //获取当前时间
            endtime = new Date(this.lotteryCountdown.data.stopTime); //定义结束时间
          var lefttime = endtime.getTime() - nowtime.getTime();
          if (lefttime < 1000) {
            window.clearInterval(this.setTimeOut);
            this.lotteryCountdown.countdown = "";
            this.getOutTime();
            return;
          }
          this.lotteryCountdown.countdown = this.showtime(
            this.lotteryCountdown.data.stopTime
          );
        }
      }, 1000);
    },
    getUserMoney() {
      this.fetchget("/api/getUserMoney").then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.lotteryMoney = res.data.lotteryMoney;
        }
      });
    },
    switchFunc(val) {
      if (val) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    /**
     * 切换类型
     */
    showTypeListFunc() {
      this.showTypeList = !this.showTypeList;
    },
    /**
     * 类型点击
     */
    activeBtn(item) {
      this.parentId = item.id;
      this.childIdData = item.children;
      this.hadlelClear();
    },
    /**
     * 类型点击
     */
    activeBtn2(item) {
      if (item.type === 5) {
        Notify({ type: "warning", message: "暂无玩法，敬请等待" });
        return;
      }
      this.data.map((col) => {
        if (col.id == this.parentId) {
          this.title = col.text;
        }
      });
      this.childId = item.id;
      this.childText = item.text;
      this.showTypeList = false;
      this.historyNum = [];
      this.thisItem = [];
      if(this.setTimeOut) {
        window.clearInterval(this.setTimeOut);
      }
      this.getplayMethodFunc();
      this.getOutTime();
      this.getHistoryFunc();
      this.hadlelClear();
    },
    /**
     * 切换玩法
     */
    activeTabFunc(item) {
      this.thisItem.map((item2) => {
        if (item2.ruleId == item) {
          this.activeData = item2;
          this.clear = true;
          setTimeout(() => {
            this.clear = false;
          }, 500);
          this.paramsData = {
            lotteryId: "", // 彩票id
            codes: "", // 投注内容
            num: "", // 投注注数
            ruleId: "", // 玩法id
            ruleCode: "", // 玩法编码
            multiple: 1, // 倍数
            model: "yuan", // 模式
            code: "", // 返点
          };
        }
      });
    },
    /**
     * 获取下一次期数
     */
    getOutTime() {
      this.fetchget("/api/getLotteryOpenTime", {
        lotteryId: this.childId,
      }).then((res) => {
        console.log(res);
        if (res.code == 200 && res.data) {
          this.lotteryCountdown.data = res.data.opentime || {};
          if (res.data.opentime) {
            this.lotteryCountdown.countdown = this.showtime(
              res.data.opentime.stopTime
            );
            this.setIntervalFunc();
          }
        }
      });
    },
    /**
     * 获取列表
     */
    getData() {
      let data = localStorage.getItem("treeData");
      if (data) {
        this.data = JSON.parse(data);
        if(this.parentId) {
          this.data.map(item => {
            if(item.id === this.parentId) {
              if(this.childId) {
                item.children.map(col => {
                  if(col.id == this.childId) {
                    this.childId = col.id;
                    this.childText = col.text;
                  }
                })
              }else {
                this.childId = item.children[0].id;
                this.childText = item.children[0].text;
              }
              this.parentId = item.id;
              this.title = item.text;
              this.childIdData = item.children;
            }
          })
          return;
        }
        this.parentId = this.data[0].id;
        this.title = this.data[0].text;
        this.childId = this.data[0].children[0].id;
        this.childText = this.data[0].children[0].text;
        this.childIdData = this.data[0].children;
      }
    },
    /**
     * 获取历史记录
     */
    getHistoryFunc() {
      this.fetchget("/api/getLotteryOpenCode", {
        lotteryId: this.childId,
        count: 50,
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.historyNum = res.data ? res.data : [];
        }
      });
    },
    /**
     * 获取玩法列表
     */
    getplayMethodFunc() {
      this.fetchget("/api/getLottery", { lotteryId: this.childId }).then(
        (res) => {
          if (res.code == 200) {
            let data = res.data.groups;
            let data2 = res.data.rules;
            let dataArr = [];
            for (let i in data) {
              let childrenData = [];
              for (let n in data2) {
                if (data2[n].groupId == data[i].groupId) {
                  config.playType.map((item) => {
                    if (
                      item.type === data2[n].code &&
                      item.text == data2[n].name
                    ) {
                      data2[n].config = item;
                    }
                  });
                  childrenData.push(data2[n]);
                }
              }
              data[i].childrenData = childrenData;
              dataArr.push(data[i]);
            }
            this.lottery = res.data.lottery;
            this.playingMethodObj.dataObj = dataArr;
            this.thisItem.push(dataArr[0].childrenData[0]);
            this.activeData = dataArr[0].childrenData[0];
            console.log(this.activeData, 1111111111);
            // this.showPlayingMethodFunc()
          }
        }
      );
    },
    showPlayingMethodFunc() {
      this.showPlayingMethod = true;
    },
    /**
     * 玩法组件返回数据
     */
    closePlayingMethodFun(data) {
      if (data) {
        this.activeData = null;
        let onOf = true;
        this.thisItem.map((item) => {
          if (item.ruleId === data.ruleId) {
            onOf = false;
          }
        });
        if (onOf) {
          config.playType.map((item) => {
            if (item.type === data.code && item.text == data.name) {
              data.config = item;
            }
          });
          if (!data.config) {
            Toast("暂未开放玩法！");
            return;
          }
          this.thisItem.push(data);
        }
        if (this.thisItem.length > 1) {
          this.$nextTick(() => {
            this.activeTab = data.ruleId;
            this.$refs.PlayingMethod.resize();
          });
        }
        this.activeData = data;
        this.showPlayingMethod = false;
      } else {
        this.showPlayingMethod = false;
      }
    },
    /**返回所选数及类型 */
    backData(data) {
      let codes = "";
      if (
        ["1", "2", "3", "4", "5", "6"].indexOf(this.activeData.config.type2) >
        -1
      ) {
        let types = ["万", "千", "百", "十", "个"];
        let typs2 = [
          "冠军",
          "亚军",
          "季军",
          "第一",
          "第二",
          "第三",
          "第四",
          "第五",
          "第1名",
          "第2名",
          "第3名",
          "第4名",
          "第5名",
          "第6名",
          "第7名",
          "第8名",
          "第9名",
          "第10名",
        ];
        if (types.indexOf(data.type) > -1 || typs2.indexOf(data.type) > -1) {
          if (
            data.type == "万" ||
            data.type == "冠军" ||
            data.type == "第一" ||
            data.type == "第1名" ||
            data.type == "第6名"
          ) {
            this.postDataNum.nums1 = data.data;
            console.log(1);
          }
          if (
            data.type == "千" ||
            data.type == "亚军" ||
            data.type == "第二" ||
            data.type == "第2名" ||
            data.type == "第7名"
          ) {
            this.postDataNum.nums2 = data.data;
          }
          if (
            data.type == "百" ||
            data.type == "季军" ||
            data.type == "第三" ||
            data.type == "第3名" ||
            data.type == "第8名"
          ) {
            this.postDataNum.nums3 = data.data;
          }
          if (
            data.type == "十" ||
            data.type == "第四" ||
            data.type == "第4名" ||
            data.type == "第9名"
          ) {
            console.log(4);
            this.postDataNum.nums4 = data.data;
          }
          if (
            data.type == "个" ||
            data.type == "第五" ||
            data.type == "第5名" ||
            data.type == "第10名"
          ) {
            this.postDataNum.nums5 = data.data;
          }
        }

        if (
          this.activeData.config.data.length === 1 &&
          types.indexOf(data.type) < 0
        ) {
          this.postDataNum.nums1 = data.data;
          codes = data.data.join(",");
        }
        if (
          this.activeData.config.data.length === 2 &&
          types.indexOf(data.type) < 0
        ) {
          this.postDataNum["nums" + (data.typeIndex - 0 + 1)] = data.data;
          codes = data.data.join(",");
        }
        if (["万", "千", "百", "十", "个"].indexOf(data.type) > -1) {
          let numobj1 = this.postDataNum.nums1.join("") || null;
          let numobj2 = this.postDataNum.nums2.join("") || null;
          let numobj3 = this.postDataNum.nums3.join("") || null;
          let numobj4 = this.postDataNum.nums4.join("") || null;
          let numobj5 = this.postDataNum.nums5.join("") || null;
          let paramsData = `${
            numobj1 ? numobj1 : ""
          },${numobj2},${numobj3},${numobj4},${numobj5}`;
          let arr = paramsData.split(",");
          let arr2 = [];
          arr.map((item) => {
            if (item !== "null") {
              arr2.push(item);
            }
          });
          codes = arr.join(",");
        }

        let num = config.groupConfig(
          this.activeData.config.type,
          this.postDataNum,
          this.activeData.name,
          this.activeData.groupName
        ).zhuNum;
        this.paramsData.codes = codes;
        this.paramsData.num = num;
        this.paramsData.ruleCode = this.activeData.config.type;
        this.paramsData.lotteryId = this.childId;
        this.paramsData.ruleId = this.activeData.ruleId;
        this.getPutIntoMoney();
      }
      if (this.activeData.config.type2 === "3z11") {
        if (data.type == "一位") {
          this.postDataNum.nums1 = data.data;
        }
        if (data.type == "二位") {
          this.postDataNum.nums2 = data.data;
        }
        if (data.type == "三位") {
          this.postDataNum.nums3 = data.data;
        }
        let num = config.groupConfig(
          this.activeData.config.type,
          this.postDataNum,
          this.activeData.name,
          this.activeData.groupName
        ).zhuNum;
        let codes = this.postDataNum.nums1
          .concat(this.postDataNum.nums2)
          .concat(this.postDataNum.nums3)
          .join(",");
        this.paramsData.codes = codes;
        this.paramsData.num = num;
        this.paramsData.ruleCode = this.activeData.config.type;
        this.paramsData.lotteryId = this.childId;
        this.paramsData.ruleId = this.activeData.ruleId;
        this.getPutIntoMoney();
      }
      if (this.activeData.config.type2 === "1z11") {
        this.postDataNum.nums1 = data.data;
        let num = config.groupConfig(
          this.activeData.config.type,
          this.postDataNum,
          this.activeData.name,
          this.activeData.groupName
        ).zhuNum;
        let codes = this.postDataNum.nums1.join(",");
        
        this.paramsData.codes = codes;
        this.paramsData.num = num;
        this.paramsData.ruleCode = this.activeData.config.type;
        this.paramsData.lotteryId = this.childId;
        this.paramsData.ruleId = this.activeData.ruleId;
        this.getPutIntoMoney();
      }
      if (data.type.type2 === "srk") {
        let num = config.groupConfig(
          this.activeData.config.type,
          data,
          this.activeData.name,
          this.activeData.groupName
        ).zhuNum;
        let codes = data.data;
          
        this.paramsData.codes = codes;
        this.paramsData.num = num;
        this.paramsData.ruleCode = this.activeData.config.type;
        this.paramsData.lotteryId = this.childId;
        this.paramsData.ruleId = this.activeData.ruleId;
        this.getPutIntoMoney();
      }
      
    },
    showtime(date) {
      var nowtime = new Date(), //获取当前时间
        endtime = new Date(date); //定义结束时间
      var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
        // leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24), //计算小时数
        leftm = Math.floor((lefttime / (1000 * 60)) % 60), //计算分钟数
        lefts = Math.floor((lefttime / 1000) % 60); //计算秒数
      return (
        (lefth > 9 ? lefth : "0" + lefth) +
        ":" +
        (leftm > 9 ? leftm : "0" + leftm) +
        ":" +
        (lefts > 9 ? lefts : "0" + lefts)
      ); //返回倒计时的字符串
    },
    openGameRecord() {
      this.$router.push({
        path: "/GameRecord2",
      });
    },
    onClickLeft() {
      this.$router.back();
    },
    // 修改返点、模式
    showUpdNum() {
      this.currentRatio.sync = !this.currentRatio.sync;
    },
    activeTypeB(type) {
      this.currentRatio.typeB = type;
      this.paramsData.model = type;
      this.getPutIntoMoney();
    },
    activeMultiple(num) {
      this.currentRatio.multiple = num;
      this.paramsData.multiple = num;
      this.getPutIntoMoney();
    },
    checkedSlider() {
      this.getPutIntoMoney();
    },
    /**
     * 返回投注金额
     */
    getPutIntoMoney() {
      console.log(this.paramsData)
      console.log(this.currentRatio)
      let money = config.getMoney(
        this.paramsData.num,
        this.currentRatio.multiple,
        this.paramsData.model
      );
      let money2 = config.getProfit(
        this.currentRatio.fd,
        this.activeData.prize,
        money
      );
      this.moneyNum = money.toFixed(0);
      this.moneyNum2 = money2.toFixed(0);
    },
    /*********** 追号 ************/
    handelAddNums(type) {
      this.addNumObj.type = type;
    },
    openNumObj() {
      // Dialog.alert({
      //   title: '提示',
      //   message: '暂不支持',
      // })
      // return;
      if (this.addHurdlebj.values.length > 1 || this.addHurdlebj.values.length < 1) {
        Notify({ type: "warning", message: "多单或未添加不可追号" });
      } else {
        let lotteryId = '';
        let codes = '';
        let ruleId = '';
        let ruleCode = '';
        let num = '';
        if(this.addHurdlebj.values.length > 0) {
          lotteryId = this.addHurdlebj.values[0].lotteryId;
          codes = this.addHurdlebj.values[0].codes;
          ruleId = this.addHurdlebj.values[0].ruleId;
          ruleCode = this.addHurdlebj.values[0].ruleCode;
          num = this.addHurdlebj.values[0].num;
        }else {
          lotteryId = this.paramsData.lotteryId;
          codes = this.paramsData.codes;
          ruleId = this.paramsData.ruleId;
          ruleCode = this.paramsData.ruleCode;
          num = this.paramsData.num;
        }
        let arr = [];
        for(let i = 0; i< this.addNumObj.form.q; i++) {
          arr.push({
            lotteryId: lotteryId, // 彩票id
            codes: codes, // 投注内容
            num: num, // 投注注数
            ruleId: ruleId, // 玩法id
            ruleCode: ruleCode, // 玩法编码
            multiple: 1, // 倍数
            model: this.paramsData.model, // 模式
            code: 1920, // 返点
          })
        }
        let arrs = [];
        if(arr.length > 0) {
          arr.map((item, i) => {
            item.getProfitMoney = this.returnMoney(item);
            item.expect = this.formaNums(this.lotteryCountdown.data.expect, i)
            arrs.push(item)
          })
        }
        this.addNumObj.arr = arrs;
        this.addNumObj.sync = true;
      }
    },
    addSendCodeFunc() {
      let nums = this.addNumObj.form.q;
      let arr = [];
      let lotteryId = this.paramsData.lotteryId;
      let codes = this.paramsData.codes;
      let ruleId = this.paramsData.ruleId;
      let ruleCode = this.paramsData.ruleCode;
      let num = this.paramsData.num;
      let multiple = this.addNumObj.form.startB;
      if(this.addHurdlebj.values.length > 0) {
        lotteryId = this.addHurdlebj.values[0].lotteryId;
        codes = this.addHurdlebj.values[0].codes;
        ruleId = this.addHurdlebj.values[0].ruleId;
        ruleCode = this.addHurdlebj.values[0].ruleCode;
        num = this.addHurdlebj.values[0].num;
      }else {
        lotteryId = this.paramsData.lotteryId;
        codes = this.paramsData.codes;
        ruleId = this.paramsData.ruleId;
        ruleCode = this.paramsData.ruleCode;
        num = this.paramsData.num;
      }
      for(let i = 0; i < nums; i++) {
        let multiple2 = multiple;
        if(arr.length > 0) {
          if(this.addNumObj.type === 3 && this.addNumObj.form.partitionNum > 1) {
            if(i%this.addNumObj.form.partitionNum === 0) {
              multiple2 = arr[i - 1].multiple * this.addNumObj.form.multiple;
            }else {
              multiple2 = arr[i - 1].multiple;
            }
            
          }else {
            multiple2 = arr[i -1].multiple * this.addNumObj.form.multiple;
          }
        }
        arr.push({
          lotteryId: lotteryId, // 彩票id
          codes: codes, // 投注内容
          num: num, // 投注注数
          ruleId: ruleId, // 玩法id
          ruleCode: ruleCode, // 玩法编码
          multiple: multiple2, // 倍数
          model: this.paramsData.model, // 模式
          code: 1920, // 返点
        })
      }
      let arrs = [];
      if(arr.length > 0) {
        arr.map((item, i) => {
          console.log(item)
          console.log(this.returnMoney(item))
          item.getProfitMoney = this.returnMoney(item);
          item.expect = this.formaNums(this.lotteryCountdown.data.expect, i)
          arrs.push(item)
        })
      }
      this.addNumObj.arr = arrs;
    },
    closeNumObj() {
      this.addNumObj.sync = false;
      this.addNumObj.arr = [];
      this.addNumObj.form = {
        q: 10, // 期数
        startB: 1, // 起始倍数
        maxNum: 100, // 最大倍投
        minB: 30, // 最低收益率
        partitionNum: 1, // 相隔期数
        typeB: "yuan", // 倍数模式
        multiple: 1, // 倍数
      };
    },
    addCodeNumFunc() {
      this.addNumObj.form.q = this.addNumObj.form.q - 0;
    },
    setCodeFunc() {
      let codes = this.addNumObj.arr[0].codes;
      let code = this.addNumObj.arr[0].code;
      if(codes[0] === ",") {
        codes = codes.substr(1)
      }
      if(config.q1.indexOf(code) > -1) {
        codes = `-,${codes}`
      }
      if(config.q2.indexOf(code) > -1) {
        codes = `-,-,${codes}`
      }
      if(config.q3.indexOf(code) > -1) {
        codes = `-,-,-,${codes}`
      }
      if(config.h1.indexOf(code) > -1) {
        codes = `${codes},-`
      }
      if(config.h2.indexOf(code) > -1) {
        codes = `${codes},-,-`
      }
      if(config.h3.indexOf(code) > -1) {
        codes = `${codes},-,-,-`
      }
      if(config.b21.indexOf(code) > -1) {
        codes = `-,${codes},-`
      }
      let formObj = {
        lotteryId: this.addNumObj.arr[0].lotteryId,
        blist: [{
          lotteryId: this.addNumObj.arr[0].lotteryId,
          codes: codes,
          num: this.addNumObj.arr[0].num,
          ruleId: this.addNumObj.arr[0].ruleId,
          ruleCode: this.addNumObj.arr[0].ruleCode,
          multiple: this.addNumObj.arr[0].multiple,
          model: this.addNumObj.arr[0].model,
          code: this.addNumObj.arr[0].code
        }],
        clist: [],
        isStop: false,
      };
      this.addNumObj.arr.map(item => {
        formObj.clist.push({
          expect: item.expect,
          multiple: item.multiple
        })
      })
      let formdata = new FormData();
      formdata.append('lotteryId', JSON.stringify(formObj.lotteryId));
      formdata.append('blist', JSON.stringify(formObj.blist));
      formdata.append('clist', JSON.stringify(formObj.clist));
      formdata.append('isStop', JSON.stringify(formObj.isStop));
      this.fetchpost("/api/UserBetsChase", formObj).then((res) => {
        console.log(res);
        if (res.code == 200) {
          Toast("操作成功！");
          this.closeNumObj();
        }else {
          Toast(res.message);
        }
      });
    },
    returnMoney(item) {
      return ((this.currentRatio.fd / this.activeData.prize) * (1 / 2) * config.getMoney(item.num, item.multiple, item.model)).toFixed(2)
    },
    /**
     * 添加投注
     */
    addCodeFunc() {
      if (this.paramsData.codes && this.paramsData.num) {
        let strObj = JSON.parse(JSON.stringify(this.paramsData));
        this.addHurdlebj.values.push(strObj);
        let moneys = 0;
        let muns = 0;
        this.addHurdlebj.values.map(item => {
          moneys = moneys + (item.num * 2 * item.multiple);
          muns = muns + item.num;
        })
        this.addHurdlebj.moneys = moneys;
        this.addHurdlebj.muns = muns;
        this.$set(this.$data, "clear", true);
        setTimeout(() => {
          this.$set(this.$data, "clear", false);
        }, 500);
      } else {
        Notify({ type: "warning", message: "请选择投注" });
      }
    },
    watchFunc() {
      let moneys = 0;
      let muns = 0;
      this.addHurdlebj.values.map(item => {
        moneys = moneys + (item.num * 2 * item.multiple);
        muns = muns + item.num;
      })
      this.addHurdlebj.moneys = moneys;
      this.addHurdlebj.muns = muns;
    },
    // 购彩栏
    openadditional() {
      // Dialog.alert({
      //   title: '提示',
      //   message: '暂不支持',
      // })
      // return;
      if (this.addHurdlebj.values.length) {
        this.addHurdlebj.sync = true;
      } else {
        Notify({ type: "warning", message: "未添加投注号码" });
      }
    },
    closeadditional() {
      this.addHurdlebj.sync = false;
    },
    // 清除购物车
    removeCartFunc() {
      this.addHurdlebj.values = [];
      this.$set(this.$data, "clear", true);
      setTimeout(() => {
        this.$set(this.$data, "clear", false);
      }, 500);
    },
    /**
     * 投注(购物车)
     */
    postCartBetting() {
      this.paramsData.code = this.currentRatio.fd;
      let params = this.addHurdlebj.values;
      params.map(item => {
        let codes = item.codes;
        if(codes[0] === ",") {
          codes = codes.substr(1)
        }
        if(config.q1.indexOf(item.code) > -1) {
          codes = `-,${codes}`
        }
        if(config.q2.indexOf(item.code) > -1) {
          codes = `-,-,${codes}`
        }
        if(config.q3.indexOf(item.code) > -1) {
          codes = `-,-,-,${codes}`
        }
        if(config.h1.indexOf(item.code) > -1) {
          codes = `${codes},-`
        }
        if(config.h2.indexOf(item.code) > -1) {
          codes = `${codes},-,-`
        }
        if(config.h3.indexOf(item.code) > -1) {
          codes = `${codes},-,-,-`
        }
        if(config.b21.indexOf(item.code) > -1) {
          codes = `-,${codes},-`
        }
        item.codes = codes;
      })
      let formdata = new FormData();
      formdata.append("blist", JSON.stringify(params));
      this.fetchpost("/api/userBetsGeneral", formdata).then((res) => {
        console.log(res);
        if (res.code == 200) {
          Toast("操作成功！");
          this.removeCartFunc();
          this.onClickLeft();
        }else {
          Toast(res.message);
        }
      });
    },
    // 格式化期数
    formaNums(val, i) {
      let nums = "";
      if (val) {
        let code = val.split("-");
        nums = code[0] + "-" + ((code[1] - 0 + i + 1) > 99 ? (code[1] - 0 + i + 1) : '0' + (code[1] - 0 + i + 1));
      }
      return nums;
    },
    hadlelClear() {
      this.clear = true;
      setTimeout(() => {
        this.clear = false;
      }, 2000);
    },
  },
};
</script>
<style lang="scss" scoped>
.LotteryBetting-box {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  .nav-box {
    width: 100%;
    background: #0468a5;
    display: flex;
    justify-content: space-between;
    padding: 6px 4px;
    position: relative;
    z-index: 44;
    .go_back {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .types-box {
      display: flex;
      justify-content: center;
      border: 1px solid #ffffff;
      padding: 0 10px;
      border-radius: 5px;
      .type-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffffff;
        font-size: 12px;
      }
      .iconbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 5px;
        .icon {
          transform: rotate(-90deg);
          margin-top: 2px;
        }
      }
    }
    .type-list-box {
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.2);
      position: fixed;
      left: 0;
      top: 40px;
      .content-box {
        background: #ffffff;
        padding-bottom: 10px;
        .type-title-h {
          width: 100%;
          box-sizing: border-box;
          font-size: 0.4rem;
          font-weight: 500;
          padding: 6px 10px;
          border-bottom: 1px solid #e0e0e0;
        }
        .type-list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .type-li {
            width: 33.33%;
            margin-top: 10px;
            text-align: center;
            .btn {
              display: inline-block;
              font-size: 0.3rem;
              min-width: 100px;
              height: 0.8rem;
              line-height: 0.8rem;
              text-align: center;
              border: 1px solid #0468a5;
              background: #fff !important;
              color: #0468a5;
              border-radius: 4px;
            }
            .selectBtn {
              color: #ffffff !important;
              background: #0468a5 !important;
            }
          }
        }
      }
    }
  }
  .LotteryPeriods-box {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 10px;
    padding-bottom: 10px;
    font-size: 14px;
    background: #f2f2f2;
    text-align: center;
    font-weight: bold;
    color: #767676;
  }
  .historyRecord-box {
    width: 100%;
    background: #ffffff;
    .historyRecord-h {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      .item-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .switch-box {
          font-size: 0.32rem;
          display: flex;
          justify-content: center;
          .item-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 5px;
          }
          .colorText {
            color: #0468a5;
          }
        }
      }
      .text-box {
        display: flex;
        justify-content: flex-start;
        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 12px;
          margin-right: 5px;
        }
      }
      .historyRecord-list {
        width: 100%;
      }
    }
  }
  .tab-box {
    background: #f1f1f1;
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    padding: 0 10px;
    .tabs-box {
      width: calc(100% - 30px);
    }
    .icon {
      width: 20px;
      height: 100%;
      position: absolute;
      right: 5px;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .content-box {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    padding-bottom: 80px;
    .content-item {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .playingMethod-tip {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    background: #ffffff;
  }
  .footer-box {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ffffff;
    .footer-h {
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 12px;
      padding: 10px 0;
      .icont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;
      }
    }
    .footer-btn {
      display: flex;
      justify-content: space-between;
      .btn {
        flex: 1;
        height: 35px;
        background: #f1f1f1;
        text-align: center;
        border-right: 1px solid #fff;
        color: #0468a5;
        line-height: 35px;
      }
      .send-btn {
        background: #0468a5;
        color: #ffffff;
      }
    }
    .updNum {
      width: 100%;
      height: 160px;
      position: absolute;
      top: -160px;
      background: #fff;
      padding: 8px 0;
      border-bottom: 2px solid #eaeaea;
      border-top: 1px solid #eaeaea;
      .items {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 8px 10px;
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .slider {
          width: 260px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          padding: 0 8px;
        }
      }
      .items2 {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 8px 10px;
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .item {
          width: 70px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #eaeaea;
          border-radius: 3px;
          margin-right: 8px;
        }
        .item:active {
          border-color: red;
        }
        .active-s {
          background: #0468a5;
          color: #fff;
        }
      }
      .items3 {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 8px 10px;
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.LotteryBetting-box {
  .historyRecord-box {
    .historyRecord-h {
      .item-box {
        .van-switch {
          border-color: #0468a5;
        }
        .van-switch__node {
          font-size: 24px !important;
          background: #0468a5;
          top: -1px;
        }
      }
    }
  }
  .van-tabs--line .van-tabs__wrap {
    height: 30px;
    .van-tab__text--ellipsis {
      min-width: 100px;
      font-size: 12px;
    }
  }
  // 购彩栏
  .tipAddBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 111;
    background: #f1f1f1;
    .header-box {
      background: #0468a5;
      position: relative;
      .go_back {
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
      }
      .text {
        font-size: 24px;
        color: #fff;
        text-align: center;
      }
    }
    .LotteryPeriods-box {
      background: #0468a5;
      color: #fff;
    }
    .content-box {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      .li-box {
        width: 100%;
        height: 125px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
        margin-bottom: 10px;
        .li-h {
          width: 100%;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 10px;
          border-bottom: 1px solid #eaeaea;
        }
        .content {
          width: 100%;
          height: calc(100% - 80px);
          font-size: 14px;
          color: #0468a5;
          box-sizing: border-box;
          padding: 5px 10px;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 10px;
          .stepper {
            display: flex;
            justify-content: flex-start;
            line-height: 20px;
            button {
              width: 20px;
              height: 20px;
              color: #000000;
            }
            input {
              height: 20px;
            }
          }
        }
      }
    }
    .footer-box {
      width: 100%;
      .h-box {
        width: 100%;
        font-size: 12px;
        background: #dfdfdf;
        text-align: center;
      }
      .btns {
        display: flex;
        justify-content: center;
        .btn {
          flex: 1;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 12px;
          color: #ffffff;
        }
        .btn1 {
          background: #aea397;
        }
        .btn2 {
          background: #ff9600;
        }
        .btn3 {
          background: #ef4f34;
        }
      }
    }
  }
  .additional-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 111;
    background: #ffffff;
    box-sizing: border-box;
    padding-bottom: 40px;
    .header-box {
      background: #0468a5;
      position: relative;
      .go_back {
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
      }
      .text {
        font-size: 24px;
        color: #fff;
        text-align: center;
      }
    }
    .LotteryPeriods-box {
      background: #dadada;
      color: #000;
      padding: 4px 0;
      font-weight: 500;
      font-size: 12px;
    }
    .tab-list {
      width: 100%;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #a5a5a5;
      background: #fff;
      .tab-li {
        flex: 1;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #767676;
        font-size: 12px;
      }
      .select_tab_li {
        border-bottom: 2px solid #0468a5;
      }
    }
    .num-box {
      width: 100%;
      background: #fff;
      margin-top: 10px;
      .num-box {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .num-li {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .text {
            color: #767676;
            font-size: 12px;
            text-align: center;
          }
          .inpt-box {
            text-align: center;
            margin-top: 5px;
            .inpt {
              display: inline-block;
              width: 40px;
              height: 27px;
              font-size: 20px;
              color: #0468a5;
              text-align: center;
              border: none;
              border-bottom: 1px solid #aea397;
            }
          }
        }
      }
    }
    .generate-btn {
      width: 100%;
      padding: 10px 0;
      text-align: center;
      .btn {
        display: inline-block;
        width: 80%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: #33a6ee;
        font-size: 14px;
        color: #fff;
        border-radius: 5px;
      }
    }
    .num-list {
      width: 100%;
      height: calc(100% - 200px);
      overflow-y: auto;
      box-sizing: border-box;
      padding: 10px;
      .list-li {
        width: 100%;
        border: 1px solid #eeeeee;
      }
      .num-li {
        width: 100%;
        .item-h {
          display: flex;
          justify-content: space-between;
          background: #eaeaea;
          box-sizing: border-box;
          padding: 2px 10px;
          .item {
            font-size: 12px;
            .ipt {
              width: 45px;
              height: 20px;
            }
          }
        }
        .table_box {
          width: 100%;
          height: calc(100% - 40px);
          overflow-y: auto;
        }
        .item-content {
          display: flex;
          justify-content: space-between;
          background: #ffffff;
          box-sizing: border-box;
          padding: 2px 10px;
          font-size: 12px;
          .text {
            color: #9c9c9c;
            margin-top: 2px;
          }
        }
      }
    }
    .footer {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0;
      z-index: 11;
      padding-top: 8px;
      background: #ffffff;
      .btn {
        width: 100%;
        padding: 8px 0;
        background: #0468a5;
        color: #fff;
        text-align: center;
        margin-top: 8px;
      }
    }
  }
}
</style>