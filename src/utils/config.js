/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/*
 * @Author: your name
 * @Date: 2020-07-22 21:11:38
 * @LastEditTime: 2020-11-04 20:59:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\utils\config.js
 */
import { Dialog, Toast } from "vant";
export default {
  IconCfg: {
    'ssc': 'icon-10053',  // 时时彩
    'ffc': 'icon-10018',  // 分分彩
    '5fc': 'icon-10033',  // 5分彩
    'sfc': 'icon-10040',  // 十分彩
    '2fc': 'icon-10025',  // 2分彩
    '1d5fc': 'icon-10017',  // 1.5分彩
    '3fc': 'icon-10006',  // 三分彩
    '3d5fc': 'icon-10017',  // 3.5分彩
    '11x5': 'icon-20002',  // 11选5
    'pk10': 'icon-80007',  // PK拾
    'k3': 'icon-70002',  // 快3
    '3d': 'icon-30001',  // 3D
    'xyft': 'icon-80002',  // 幸运飞艇
  },
  'q1': ['sixzhixfsh'],
  'q2': ['sxzhixfsh'],
  'q3': ['exzhixfsh'],
  'h1': ['sixzhixfsq'],
  'h2': ['sxzhixfsq', 'sanmzhixfsq', 'ermzhixfsq', 'dwd'],
  'h3': ['exzhixfsq'],
  'b21': ['sxzhixfsz'],
  getSysConfig: {
    '1': '时时彩',
    '2': '11选5',
    '3': 'PK10',
    '4': '快3',
    '5': '幸运28',
    '6': '低频彩种'
  },
  /**
   * 求投注金额
   * zhuNum: 注数
   * multiple: 倍数
   * moneyType: 投注类型 元 角 分 厘
   */
  getMoney:(zhuNum, multiple, moneyType) => {
    let types = {
      'yuan': 1,
      'jiao': 10,
      'fen': 100,
      'li': 1000,
    }
    return ((zhuNum * multiple) / types[moneyType]) * 2;
  },
  /**
   * 盈利
   * fd: 返点
   * money: 玩法奖金
   * bettingMoney: 投注金额
   */
  getProfit: (fd, money, bettingMoney) => {
    let profit = (fd / money) * (1 / 2) * bettingMoney;
    return profit;
  },
  /**
   * 玩法
   */
  playType: [
    {
      type: 'wxzhixfs',
      text: "直选复式",
      type2: '5',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "wxzhixds",
      text: "直选单式",
      type2: 'srk',
      data: ['srk']
    }, {
      type: "wxzhixzh",
      text: "直选组合",
      type2: '5',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "wxzux120",
      text: "组选120",
      type2: "1",
      data: ["组选120"]
    }, {
      type: "wxzux60",
      text: "组选60",
      type2: "2",
      data: ["二重号", "单号"]
    }, {
      type: "wxzux30",
      text: "组选30",
      type2: "2",
      data: ["二重号", "单号"]
    }, {
      type: "wxzux20",
      text: "组选20",
      type2: "2",
      data: ["二重号", "单号"]
    }, {
      type: "wxzux10",
      text: "组选10",
      type2: "2",
      data: ["三重号", "二重号"]
    }, {
      type: "wxzux5",
      text: "组选5",
      type2: "2",
      data: ["四重号", "单号"]
    }, {
      type: "qwyffs",
      text: "一帆风顺",
      type2: "1",
      data: ["一帆风顺"]
    }, {
      type: "qwhscs",
      text: "好事成双",
      type2: "1",
      data: ["好事成双"]
    },
    {
      type: "sixzhixfsh",
      text: "直选复式",
      type2: '4',
      data: ['千', '百', '十', '个'],
      bw: 'q1'
    }, {
      type: "sixzhixdsh",
      text: "直选单式",
      type2: 'srk',
      data: ['q', 'b', 's', 'g']
    }, {
      type: "sixzux24h",
      text: "组选24",
      type2: "1",
      data: ["组选24"]
    }, {
      type: "sixzux12h",
      text: "组选12",
      type2: "2",
      data: ["二重号", "单号"]
    }, {
      type: "sixzux6h",
      text: "组选6",
      type2: "1",
      data: ["二重号"]
    }, {
      type: "sixzux4h",
      text: "组选4",
      type2: "2",
      data: ["三重号", "单号"]
    },
    { // 
      type: "sixzhixfsq",
      text: "直选复式",
      type2: '4',
      data: ['千', '百', '十', '个'],
      bw: 'h1'
    }, {
      type: "sixzhixdsq",
      text: "直选单式",
      type2: 'srk',
      data: ['srl']
    }, {
      type: "sixzhixzhq",
      text: "直选组合",
      type2: '4',
      data: ['千', '百', '十', '个']
    }, {
      type: "sixzux24q",
      text: "组选24",
      type2: "1",
      data: ["组选24"]
    }, {
      type: "sixzux12q",
      text: "组选12",
      type2: "2",
      data: ["二重号", "单号"]
    }, {
      type: "sixzux6q",
      text: "组选6",
      type2: "1",
      data: ["二重号"]
    }, {
      type: "sixzux4q",
      text: "组选4",
      type2: "2",
      data: ["三重号", "单号"]
    }, { // 后三
      type: "sxzhixfsh",
      text: "直选复式",
      type2: '3',
      data: ['百', '十', '个'],
      bw: 'q2'
    }, {
      type: "sxzhixdsh",
      text: "直选单式",
      type2: 'srk',
      data: ['srl']
    }, {
      type: "sxzhixhzh",
      text: "直选和值",
      type2: '27',
      data: []
    }, {
      type: "sxzuxzsh",
      text: "组三",
      type2: "1",
      data: ["组三"]
    }, {
      type: "sxzuxzlh",
      text: "组六",
      type2: "1",
      data: ["组六"]
    }, {
      type: "sxhhzxh",
      text: "混合组选",
      type2: "srk",
      data: []
    }, {
      type: "sxzuxhzh",
      text: "组选和值",
      type2: '26',
      data: []
    }, { // 中三
      type: "sxzhixfsz",
      text: "直选复式",
      type2: '4',
      data: ['千', '百', '十'],
      bw: 'b21'
    }, {
      type: "sxzhixdsz",
      text: "直选单式",
      type2: 'srk',
      data: ['srl']
    }, {
      type: "sxzhixhzz",
      text: "直选和值",
      type2: '27',
      data: []
    }, {
      type: "sxzuxzsz",
      text: "组三",
      type2: "1",
      data: ["组三"]
    }, {
      type: "sxzuxzlz",
      text: "组六",
      type2: "1",
      data: ["组六"]
    }, {
      type: "sxhhzxz",
      text: "混合组选",
      type2: "srk",
      data: []
    }, {
      type: "sxzuxhzz",
      text: "组选和值",
      type2: '26',
    }, { // 前三
      type: "sxzhixfsq",
      text: "直选复式",
      type2: '4',
      data: ['万', '千', '百'],
      bw: 'h2'
    }, {
      type: "sxzhixdsq",
      text: "直选单式",
      type2: 'srk',
      data: ['srl']
    }, {
      type: "sxzhixhzq",
      text: "直选和值",
      type2: "27",
      data: []
    }, {
      type: "sxzuxzsq",
      text: "组三",
      type2: "1",
      data: ["组三"]
    }, {
      type: "sxzuxzlq",
      text: "组六",
      type2: "1",
      data: ["组六"]
    }, {
      type: "sxhhzxq",
      text: "混合组选",
      type2: "srk",
      data: []
    }, {
      type: "sxzuxhzq",
      text: "组选和值",
      type2: 26,
    }, { // 后二
      type: "exzhixfsh",
      text: "直选复式",
      type2: '4',
      data: ['十', '个'],
      bw: 'q3'
    }, {
      type: "exzhixdsh",
      text: "直选单式",
      type2: 'srk',
      data: ['srl']
    }, {
      type: "dxdsh",
      text: "大小单双",
      type2: 'das',
      data: ['十位', '个位']
    }, {
      type: "exzuxfsh",
      text: "组选复式",
      type2: '1',
      data: ['组二']
    }, {
      type: "exzuxdsh",
      text: "组选单式",
      type2: 'srk',
      data: []
    },
    {
      type: "exzuxhzh",
      text: "组选和值",
      type2: "17",
      data: []
    }, { // 前二
      type: "exzhixfsq",
      text: "直选复式",
      type2: '4',
      data: ['万', '千'],
      bw: 'h3'
    }, {
      type: "exzhixdsq",
      text: "直选单式",
      type2: 'srk',
      data: ['srl']
    }, {
      type: "dxdsq",
      text: "大小单双",
      type2: 'das',
      data: ['十位', '个位']
    }, {
      type: "exzuxfsq",
      text: "组选复式",
      type2: '1',
      data: ['组二']
    }, {
      type: "exzuxdsq",
      text: "组选单式",
      type2: 'srk',
      data: []
    },
    {
      type: "exzhixhzq",
      text: "组选和值",
      type2: '17',
      data: []
    }, { // 定位但
      type: "dw",
      text: "定位胆",
      type2: '5',
      data: ['万', '千', '百', '十', '个']
    },
    { // 不定位
      type: "bdw1mh",
      text: "后三一码",
      type2: '1',
      data: ['不定位']
    },
    {
      type: "bdw2mh",
      text: "后三二码",
      type2: '1',
      data: ['不定位']
    },
    {
      type: "bdwsix1mq",
      text: "前四一码",
      type2: '1',
      data: ['不定位']
    },
    {
      type: "bdwsix2mh",
      text: "后四一码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdw1mz",
      text: "中三一码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdw2mz",
      text: "中三二码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdwsix2mq",
      text: "前四二码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdwwx2m",
      text: "五星二码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdw1mq",
      text: "前三一码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdw2mq",
      text: "前三二码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdwsix1mh",
      text: "后四一码",
      type2: '1',
      data: ['不定位']
    }, {
      type: "bdwwx3m",
      text: "五星三码",
      type2: '1',
      data: ['不定位']
    }, { // 任选
      type: "rx2fs",
      text: "任二直选复式",
      type2: '5',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "rx2ds",
      text: "任二直选单式",
      type2: 'srk',
      data: ['s', 'g']
    }, {
      type: "rx3z3",
      text: "任三组三",
      type2: '5-5-3',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "rx3hhzx",
      text: "任三混合组选",
      type2: '5-5-3',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "rx3fs",
      text: "任三直选复式",
      type2: '5',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "rx3ds",
      text: "任三直选单式",
      type2: '5-5-3',
      data: ['百', '十', '个']
    }, {
      type: "rx3z6",
      text: "任三组六",
      type2: '5-5-3',
      data: ['百', '十', '个']
    }, {
      type: "rx4fs",
      text: "任四直选复式",
      type2: '5',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "rx4ds",
      text: "任四直选单式",
      type2: '5-5-4',
      data: ['万', '千', '百', '十', '个']
    }, {
      type: "rx2zx",
      text: "任二组选",
      type2: '5-5-2',
      data: ['万', '千', '百', '十', '个']
    }, { // 龙虎
      type: "longhuhewq",
      text: "万千",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuhewb",
      text: "万百",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuhews",
      text: "万十",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuhewg",
      text: "万个",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuheqb",
      text: "千百",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuheqs",
      text: "千十",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuheqg",
      text: "千个",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuhebs",
      text: "百十",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuhebg",
      text: "百个",
      type2: 'longhu',
      data: []
    }, {
      type: "longhuhesg",
      text: "十个",
      type2: 'longhu',
      data: []
    }, { // 广东11选5 三码
      type: "sanmzhixfsq",
      text: "前三直选复式",
      type2: '3z11',
      data: ['一位', '二位', '三位'],
      bw: 'h2'
    }, { // 广东11选5 三码
      type: "sanmzhixdsq",
      text: "前三直选单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 三码
      type: "sanmzuxfsq",
      text: "前三组选复式",
      type2: '1z11',
      data: '组选'
    }, { // 广东11选5 三码
      type: "sanmzuxdsq",
      text: "前三组选单式",
      type2: 'srk',
      data: [],
      title: "提示：每组号码用英文逗号隔开如：01 02 03,04 05 06，选号与开奖号码的对应3位一致（顺序不限）即中奖。选号：01 02 03,04 05 06<br>开奖：指定位开01 02 03<br>中奖：322.74"
    }, { // 广东11选5 二码
      type: "ermzhixfsq",
      text: "前二直选复式",
      type2: '3z11',
      data: ['一位', '二位'],
      bw: 'h2'
    }, { // 广东11选5 二码
      type: "ermzhixdsq",
      text: "前二直选单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 二码
      type: "ermzuxfsq",
      text: "前二组选复式",
      type2: '1z11',
      data: '组选'
    }, { // 广东11选5 二码
      type: "ermzuxdsq",
      text: "前二组选单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 不定位
      type: "bdw",
      text: "前三位",
      type2: '1z11',
      data: '前三位'
    }, { // 广东11选5 定位但
      type: "dwd",
      text: "定位但",
      type2: '3z11',
      data: ['一位', '二位', '三位'],
      bw: 'h2'
    }, { // 广东11选5 "趣味"
      type: "dds",
      text: "定单双",
      type2: '3z11',
      data: ['一位', '二位', '三位']
    }, { // 广东11选5 "趣味"
      type: "czw",
      text: "猜中位",
      type2: '3z11',
      data: ['一位', '二位', '三位']
    }, { // 广东11选5 "任选"
      type: "rx1fs",
      text: "一中一复式",
      type2: '1z11',
      data: '任选'
    }, { // 广东11选5 "任选"
      type: "rx1ds",
      text: "一中一单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 "任选"
      type: "rx2fs",
      text: "二中二复式",
      type2: '1z11',
      data: '任选'
    }, { // 广东11选5 "任选"
      type: "rx2ds",
      text: "二中二单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 "任选"
      type: "rx3fs",
      text: "三中三复式",
      type2: '1z11',
      data: ['任选']
    }, { // 广东11选5 "任选"
      type: "rx3ds",
      text: "三中三单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 "任选"
      type: "rx4fs",
      text: "四中四复式",
      type2: '1z11',
      data: ['任选']
    }, { // 广东11选5 "任选"
      type: "rx4ds",
      text: "四中四单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 "任选"
      type: "rx5fs",
      text: "五中五复式",
      type2: '1z11',
      data: ['任选']
    }, { // 广东11选5 "任选"
      type: "rx5ds",
      text: "五中五单式",
      type2: 'srk',
      data: ''
    }, { // 广东11选5 "任选"
      type: "rx6fs",
      text: "六中五复式",
      type2: '1z11',
      data: ['任选']
    }, { // 广东11选5 "任选"
      type: "rx6ds",
      text: "六中五单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 "任选"
      type: "rx7fs",
      text: "七中五复式",
      type2: '1z11',
      data: ['任选']
    }, { // 广东11选5 "任选"
      type: "rx7ds",
      text: "七中五单式",
      type2: 'srk',
      data: []
    }, { // 广东11选5 "任选"
      type: "rx8fs",
      text: "八中五复式",
      type2: '1z11',
      data: ['任选']
    }, { // 广东11选5 "任选"
      type: "rx8ds",
      text: "八中五单式",
      type2: 'srk',
      data: []
    }, { // PK10 "二不同号"
      type: "ebthdx",
      text: "标准选号",
      type2: '1z6',
      data: ['二不同']
    }, { // PK10 "二不同号"
      type: "ebthds",
      text: "手动选号",
      type2: 'srk',
      data: []
    }, { // PK10 "二不同号"
      type: "ebthdt",
      text: "胆施选号",
      type2: '2z6',
      data: ['胆码', '拖码']
    }, { // PK10 "二同号"
      type: "ethdx",
      text: "标准选号",
      type2: 'srk',
      data: []
    }, { // PK10 "二同号"
      type: "ethds",
      text: "手动选号",
      type2: 'srk',
      data: []
    }, { // PK10 "二同号"
      type: "ethfx",
      text: "二同号复选",
      type2: '1z6k',
      data: []
    }, { // PK10 "三不同号"
      type: "sbthdx",
      text: "标准选号",
      type2: '1z6',
      data: ['三不同']
    }, { // PK10 "二不同号"
      type: "sbthds",
      text: "手动选号",
      type2: 'srk',
      data: []
    }, { // PK10 "三同号"
      type: "sthdx",
      text: "单选",
      type2: 'srk',
      data: []
    }, { // PK10 "三同号"
      type: "sthtx",
      text: "通选",
      type2: '3tx',
      data: []
    }, { // PK10 "三连号"
      type: "slhtx",
      text: "通选",
      type2: '3tx',
      data: []
    }, { // PK10 "和值"
      type: "hezhi",
      text: "和值",
      type2: '3-18',
      data: []
    }, { // 快3 "三码"
      type: "sanxzhixfs",
      text: "直选复式",
      type2: '3',
      data: ['百', '十', '个']
    }, { // 快3 "三码"
      type: "sanxzhixds",
      text: "直选单式",
      type2: 'srk',
      data: []
    }, { // 快3 "三码"
      type: "sanxzhixhz",
      text: "直选和值",
      type2: '27',
      data: []
    }, { // 快3 "三码"
      type: "sanxzs",
      text: "组三",
      type2: "1",
      data: ["组三"]
    }, { // 快3 "三码"
      type: "sanxzl",
      text: "组六",
      type2: "1",
      data: ["组六"]
    }, { // 快3 "三码"
      type: "sanxhhzx",
      text: "混合组选",
      type2: "srk",
      data: []
    },
    // { // 快3 "后二码"
    //   type: "exzhixfsh",
    //   text: "直选复式",
    //   type2: '4',
    //   data: ['千', '百', '十', '个']
    // }, 
    { // 快3 "后二码"
      type: "exzhixdsh",
      text: "直选单式",
      type2: "srk",
      data: []
    },
    // { // 快3 "后二码"
    //   type: "exzhixhzh",
    //   text: "直选和值",
    //   type2: '27',
    //   data: []
    // },
    // { // 快3 "后二码"
    //   type: "exzuxfsh",
    //   text: "组选复式",
    //   type2: '1',
    //   data: ['组二']
    // },
    // { // 快3 "后二码"
    //   type: "exzuxdsh",
    //   text: "组选单式",
    //   type2: "srk",
    //   data: []
    // }, 
    { // 快3 "前二码"
      type: "exzhixfsq",
      text: "直选复式",
      type2: '2',
      data: ['百', '十'],
      bw: 'h3'
    },
    // { // 快3 "前二码"
    //   type: "exzhixdsq",
    //   text: "直选单式",
    //   type2: "srk",
    //   data: []
    // }, { // 快3 "前二码"
    //   type: "exzhixhzq",
    //   text: "直选和值",
    //   type2: '27',
    //   data: []
    // }, { // 快3 "前二码"
    //   type: "exzuxfsq",
    //   text: "组选复式",
    //   type2: '1',
    //   data: ['组二']
    // }, { // 快3 "前二码"
    //   type: "exzuxdsq",
    //   text: "组选单式",
    //   type2: "srk",
    //   data: []
    // }, 
    // { // 快3 "定位胆"
    //   type: "dwd",
    //   text: "定位胆",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, 
    { // 快3 "不定位" // 未定义完
      type: "yimabdw",
      text: "一码不定位",
      type2: '1',
      data: ['不定位']
    }, { // 北京PK10 "前一"
      type: "qianyi",
      text: "前一",
      type2: '1',
      data: ['第一']
    }, { // 北京PK10 "前二"
      type: "qianerzxfs",
      text: "前二复式",
      type2: '2',
      data: ['第一', '第二']
    }, { // 北京PK10 "前二"
      type: "qianerzxds",
      text: "前二单式",
      type2: 'srk',
      data: []
    }, { // 北京PK10 "前三"
      type: "qiansanzxfs",
      text: "前三复式",
      type2: '1',
      data: ['冠军', '亚军', '季军']
    }, { // 北京PK10 "前三"
      type: "qiansanzxds",
      text: "前三单式",
      type2: 'srk',
      data: []
    }, { // 北京PK10 "前四"
      type: "qiansizxfs",
      text: "前四复式",
      type2: '4',
      data: ['第一', '第二', '第三', '第四']
    }, { // 北京PK10 "前四"
      type: "qiansizxds",
      text: "前四单式",
      type2: 'srk',
      data: []
    }, { // 北京PK10 "前五"
      type: "qianwuzxfs",
      text: "前五复式",
      type2: '5',
      data: ['第一', '第二', '第三', '第四', '第五']
    }, { // 北京PK10 "前五"
      type: "qianwuzxds",
      text: "前五单式",
      type2: 'srk',
      data: []
    }, { // 北京PK10 "定位胆"
      type: "qwdingweidan",
      text: "前五定位胆",
      type2: '5',
      data: ['第1名', '第2名', '第3名', '第4名', '第5名']
    }, { // 北京PK10 "定位胆"
      type: "hwdingweidan",
      text: "后五定位胆",
      type2: '5',
      data: ['第6名', '第7名', '第8名', '第9名', '第10名']
    }, 
    // { // 北京PK10 "和值"
    //   type: "pk10_hzgyhz",
    //   text: "冠亚和值",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // },
    // { // 北京PK10 "和值
    //   type: "pk10_hzqshz",
    //   text: "前三和值",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "龙虎
    //   type: "01VS10",
    //   text: "01VS10",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "龙虎
    //   type: "02VS09",
    //   text: "02VS09",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "龙虎
    //   type: "03VS08",
    //   text: "03VS08",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "龙虎
    //   type: "04VS07",
    //   text: "04VS07",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "龙虎
    //   type: "05VS06",
    //   text: "05VS06",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // },
    // { // 北京PK10 "大小单双"
    //   type: "dw1dxds",
    //   text: "第一位",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "大小单双"
    //   type: "dw2dxds",
    //   text: "第二位",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "大小单双"
    //   type: "dw3dxds",
    //   text: "第三位",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "大小单双"
    //   type: "dw4dxds",
    //   text: "第四位",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // }, { // 北京PK10 "大小单双"
    //   type: "dw5dxds",
    //   text: "第五位",
    //   type2: '3',
    //   data: ['百', '十', '个']
    // },
    //{ // 北京快乐8 "趣味"
    //   type: "hezhids",
    //   text: "和值单双",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "趣味"
    //   type: "hezhidx",
    //   text: "和值大小",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "趣味"
    //   type: "jopan",
    //   text: "奇偶盘",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "趣味"
    //   type: "sxpan",
    //   text: "上下盘",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "趣味"
    //   type: "hzdxds",
    //   text: "和值大小盘",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "任选"
    //   type: "rx1",
    //   text: "任选1",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "任选"
    //   type: "rx21",
    //   text: "任选2",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "任选"
    //   type: "rx3",
    //   text: "任选3",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "任选"
    //   type: "rx4",
    //   text: "任选4",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "任选"
    //   type: "rx5",
    //   text: "任选5",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "任选"
    //   type: "rx6",
    //   text: "任选6",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "任选"
    //   type: "rx7",
    //   text: "任选7",
    //   type2: '1',
    //   data: ['不定位']
    // }, { // 北京快乐8 "五行"
    //   type: "hezhiwx",
    //   text: "五行",
    //   type2: '1',
    //   data: ['不定位']
    // }
    // { // 广东11选5 "任选"
    //   type: "rxtd2",
    //   text: "二中二拖胆",
    //   type2: '3z11',
    //   data: ['一位', '二位', '三位']
    // }, { // 广东11选5 "任选"
    //   type: "rxtd3",
    //   text: "三中三拖胆",
    //   type2: '3z11',
    //   data: ['一位', '二位', '三位']
    // }, { // 广东11选5 "任选"
    //   type: "rxtd4",
    //   text: "四中四拖胆",
    //   type2: '3z11',
    //   data: ['一位', '二位', '三位']
    // }, { // 广东11选5 "任选"
    //   type: "rxtd5",
    //   text: "五中五拖胆",
    //   type2: '3z11',
    //   data: ['一位', '二位', '三位']
    // }, { // 广东11选5 "任选"
    //   type: "rxtd6",
    //   text: "六中五拖胆",
    //   type2: '3z11',
    //   data: ['一位', '二位', '三位']
    // }, { // 广东11选5 "任选"
    //   type: "rxtd7",
    //   text: "七中五拖胆",
    //   type2: '3z11',
    //   data: ['一位', '二位', '三位']
    // }, { // 广东11选5 "任选"
    //   type: "rxtd8",
    //   text: "八中五拖胆",
    //   type2: '3z11',
    //   data: ['一位', '二位', '三位']
    // }
  ],
  /**
   * 计算不同玩法的投注数
   */
  groupConfig: (type, data, name, typeName) => {
    let zhuNum = '';
    let multiple = '';
    switch (type) {
      case "wxzhixfs":
        // eslint-disable-next-line no-case-declarations
        let length1 = data.nums1.length;
        let length2 = data.nums2.length;
        let length3 = data.nums3.length;
        let length4 = data.nums4.length;
        let length5 = data.nums5.length;
        zhuNum = length1 * length2 * length3 * length4 * length5; // 投注数
        break;
      case "wxzhixzh":
        let lengthNum1 = data.nums1.length;
        let lengthNum2 = data.nums2.length;
        let lengthNum3 = data.nums3.length;
        let lengthNum4 = data.nums4.length;
        let lengthNum5 = data.nums5.length;
        zhuNum = lengthNum1 * lengthNum2 * lengthNum3 * lengthNum4 * lengthNum5 * 5; // 投注数
        break;
      case "wxzhixds":
        if (data.data) {
          data.data = data.data.replace(/ +|，/g, ",");
          let arr = data.data.split(",");
          let num = 0;
          arr.map(item => {
            if (item.length === 5) {
              num = num + 1;
            }
          })
          zhuNum = num;
        }
        break;
      case "wxzux120":
        let numLength = data.nums1.length;
        if (numLength > 4) {
          let arr = [];
          let productNum = 1;
          for (let i = 0; i < 5; i++) {
            arr.push(numLength - i)
          }
          arr.map(item => {
            productNum = productNum * item;
          })
          zhuNum = productNum / 120;
          console.log(zhuNum)
        } else {
          zhuNum = 0;
        }
        console.log(data)
        console.log(zhuNum)
        break;
      case "wxzux60": // 五星
        if (type === "wxzux60" && data.nums2.length > 3) {
          let nums1 = data.nums1;
          let nums2 = data.nums2;
          let zhus = 0;
          for (let i = 0; i < nums1.length; i++) {
            let showNum = true;
            for (let j = 0; j < nums2.length; j++) {
              if (nums1[i] === nums2[j]) {
                showNum = false;
              }
            }
            if (showNum) {
              let sum = 1;
              for (let j = 0; j < 3; j++) {
                sum = (sum * (nums2.length - j));
              }
              console.log(sum)
              zhus += (sum / 6);
            } else {
              let sum = 1;
              for (let j = 1; j < 4; j++) {
                sum = (sum * (nums2.length - j));
              }
              console.log(sum)
              zhus += (sum / 6);
            }
          }
          zhuNum = zhus;
        }
        break;
      case "wxzux30": // 暂无算法 需修改
        let wxzux30Nums1 = data.nums1;
        let wxzux30jNums2 = data.nums2;
        let wxzux30arrs = [];
        for (let i = 0; i < wxzux30Nums1.length; i++) {
          for (let j = 0; j < wxzux30jNums2.length; j++) {
            if (wxzux30Nums1[i] !== wxzux30jNums2[j]) {
              wxzux30arrs.push([wxzux30Nums1[i], wxzux30jNums2[j]])
            }
          }
        }
        zhuNum = wxzux30arrs.length * 4;
        break;
      case "wxzux20": // 暂无算法
        zhuNum = 0
        // Toast("暂不支持该玩法！");
        break;
      case "wxzux10": // 暂无算法
        zhuNum = 0
        // Toast("暂不支持该玩法！");
        break;
      case "wxzux5": // 暂无算法
        zhuNum = 0
        // Toast("暂不支持该玩法！");
        break;
      case "qwyffs": // 暂无算法
        let zhuNumLength = data.nums1.length;
        zhuNum = zhuNumLength;
        break;
      case "qwhscs": // 暂无算法
        let zhuNumLength2 = data.nums1.length;
        zhuNum = zhuNumLength2;
        break;
      case "sixzhixfsh": // 后四
        if (type === 'sixzhixfsh') {
          let sxzuxzshLength1 = data.nums2.length;
          let sxzuxzshLength2 = data.nums3.length;
          let sxzuxzshLength3 = data.nums4.length;
          let sxzuxzshLength4 = data.nums5.length;
          zhuNum = sxzuxzshLength1 * sxzuxzshLength2 * sxzuxzshLength3 * sxzuxzshLength4;
        }
        // Toast("暂不支持该玩法！");
        break;
      case "sixzhixdsh": // 后四
        let sixzhixdshdata = data.nums1;
        zhuNum = sixzhixdshdata.length;
        break;
      case "sixzux24h": // 后四
        let sixzux24hdata = data.nums1.length;
        if (sixzux24hdata > 3) {
          let arr = [];
          let productNum = 1;
          for (let i = 0; i < 4; i++) {
            arr.push(sixzux24hdata - i)
          }
          arr.map(item => {
            productNum = productNum * item;
          })
          zhuNum = productNum / 24;
          console.log(zhuNum)
        } else {
          zhuNum = 0;
        }
        break;
      case "sixzux12h": // 后四 待修改
        let sixzux12hNums1 = data.nums1;
        let sixzux12hjNums2 = data.nums2;
        let sixzux12harrs = [];
        for (let i = 0; i < sixzux12hNums1.length; i++) {
          for (let j = 0; j < sixzux12hjNums2.length; j++) {
            if (sixzux12hNums1[i] !== sixzux12hjNums2[j]) {
              sixzux12harrs.push([sixzux12hNums1[i], sixzux12hjNums2[j]])
            }
          }
        }
        zhuNum = sixzux12harrs.length * 4;
        break;
      case "sixzux6h": // 后四
        let sixzux6hLength = data.nums1.length - 1;
        let sixzux6Num = 0;
        for (let i = 0; i < sixzux6hLength; i++) {
          sixzux6Num = sixzux6Num + (sixzux6hLength - i)
        }
        zhuNum = sixzux6Num;
        break;
      case "sixzux4h": // 后四
        let sixzux4hNums1 = data.nums1;
        let sixzux4hjNums2 = data.nums2;
        let sixzux4harrs = [];
        for (let i = 0; i < sixzux4hNums1.length; i++) {
          for (let j = 0; j < sixzux4hjNums2.length; j++) {
            if (sixzux4hNums1[i] !== sixzux4hjNums2[j]) {
              sixzux4harrs.push([sixzux4hNums1[i], sixzux4hjNums2[j]])
            }
          }
        }
        zhuNum = sixzux4harrs.length;
        break;
      case "sixzhixfsq": // 前四
        // eslint-disable-next-line no-case-declarations
        let sixzhixfshlength1 = data.nums2.length;
        let sixzhixfshlength2 = data.nums3.length;
        let sixzhixfshlength3 = data.nums4.length;
        let sixzhixfshlength4 = data.nums5.length;
        zhuNum = sixzhixfshlength1 * sixzhixfshlength2 * sixzhixfshlength3 * sixzhixfshlength4; // 投注数
        break;
      case "sixzhixdsq":
        if (type === 'sixzhixdsq') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",");
            let num = 0;
            arr.map(item => {
              if (item.length === 4) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }

        break;
      case "sixzhixzhq":
        let sixzhixzhqlength1 = data.nums2.length;
        let sixzhixzhqlength2 = data.nums3.length;
        let sixzhixzhqlength3 = data.nums4.length;
        let sixzhixzhqlength4 = data.nums5.length;
        zhuNum = sixzhixzhqlength1 * sixzhixzhqlength2 * sixzhixzhqlength3 * sixzhixzhqlength4 * 4; // 投注数
        break;
      case "sixzux24q":
        let sixzux24hLength = data.nums1.length;
        if (sixzux24hLength > 3) {
          let arr = [];
          let productNum = 1;
          for (let i = 0; i < 4; i++) {
            arr.push(sixzux24hLength - i)
          }
          arr.map(item => {
            productNum = productNum * item;
          })
          zhuNum = productNum / 24;
          console.log(zhuNum)
        } else {
          zhuNum = 0;
        }
        break;
      case "sixzux12q": // 待修改
        let sixzux12Nums1 = data.nums1;
        let sixzux12jNums2 = data.nums2;
        let arrs = [];
        for (let i = 0; i < sixzux12Nums1.length; i++) {
          for (let j = 0; j < sixzux12jNums2.length; j++) {
            if (sixzux12Nums1[i] !== sixzux12jNums2[j]) {
              arrs.push([sixzux12Nums1[i], sixzux12jNums2[j]])
            }
          }
        }
        zhuNum = arrs.length * 4;
        break;
      case "sixzux6q":
        let sixzux6qLength = data.nums1.length - 1;
        let sixzux6qNum = 0;
        for (let i = 0; i < sixzux6qLength; i++) {
          sixzux6qNum = sixzux6qNum + (sixzux6qLength - i)
        }
        zhuNum = sixzux6qNum;
        break;
      case "sixzux4q":
        let sixzux4qNums1 = data.nums1;
        let sixzux4qjNums2 = data.nums2;
        let sixzux4qarrs = [];
        for (let i = 0; i < sixzux4qNums1.length; i++) {
          for (let j = 0; j < sixzux4qjNums2.length; j++) {
            if (sixzux4qNums1[i] !== sixzux4qjNums2[j]) {
              sixzux4qarrs.push([sixzux4qNums1[i], sixzux4qjNums2[j]])
            }
          }
        }
        zhuNum = sixzux4qarrs.length;
        break;
      case "sxzhixfsh": // 后三
        console.log(data)
        let sxzhixfshNums1 = data.nums3.length;
        let sxzhixfshNums2 = data.nums4.length;
        let sxzhixfshNums3 = data.nums5.length;
        zhuNum = sxzhixfshNums1 * sxzhixfshNums2 * sxzhixfshNums3;
        break;
      case "sxzhixdsh": // 后三
        let sxzhixdshNums1 = data.nums1;
        let sxzhixdshzhuNum = 0;
        sxzhixdshNums1.map(item => {
          if (item.length === 3) {
            sxzhixdshzhuNum = sxzhixdshzhuNum + 1;
          }
        })
        zhuNum = sxzhixdshzhuNum;
        break;
      case "sxzhixhzh": // 后三
        let sxzhixhzhObj = {
          '0': 1,
          '1': 3,
          '2': 6,
          '3': 10,
          '4': 15,
          '5': 21,
          '6': 28,
          '7': 36,
          '8': 45,
          '9': 55,
          '10': 63,
          '11': 69,
          '12': 73,
          '13': 75,
          '14': 75,
          '15': 73,
          '16': 69,
          '17': 63,
          '18': 55,
          '19': 45,
          '20': 36,
          '21': 28,
          '22': 21,
          '23': 15,
          '24': 10,
          '25': 6,
          '26': 3,
          '27': 1,
        };
        let sxzhixhzhNums1 = data.nums1
        let sxzhixhzhZs = 0;
        sxzhixhzhNums1.map(item => {
          sxzhixhzhZs = sxzhixhzhZs + sxzhixhzhObj[item + '']
        })
        zhuNum = sxzhixhzhZs;
        break;
      case "sxzuxzsh": // 后三 组三
        let sxzuxzshLength = data.nums1.length;
        if (sxzuxzshLength > 1) {
          zhuNum = sxzuxzshLength * (sxzuxzshLength - 1);
          console.log(zhuNum)
        } else {
          zhuNum = 0;
        }
        break;
      case "sxzuxzlh": // 后三 组六
        let sxzuxzlhLength = data.nums1.length;
        if (sxzuxzlhLength > 2) {
          let arr = [];
          let productNum = 1;
          for (let i = 0; i < 3; i++) {
            arr.push(sxzuxzlhLength - i)
          }
          arr.map(item => {
            productNum = productNum * item;
          })
          zhuNum = productNum / 6;
        } else {
          zhuNum = 0;
        }
        break;
      case "sxhhzxh": // 后三 混合组选
        if (data.data) {
          data.data = data.data.replace(/ +|，/g, ",");
          let arr = data.data.split(",")
          let num = 0
          arr.map(item => {
            if (item.length === 3) {
              num = num + 1;
            }
          })
          zhuNum = num;
        }
        break;
      case "sxzuxhzh": // 后三 组选和值
        if (type === "sxzuxhzh") {
          let obj = {
            '1': 1,
            '2': 2,
            '3': 2,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 8,
            '8': 10,
            '9': 11,
            '10': 13,
            '11': 14,
            '12': 14,
            '13': 15,
            '14': 15,
            '15': 14,
            '16': 14,
            '17': 13,
            '18': 11,
            '19': 10,
            '20': 8,
            '21': 6,
            '22': 5,
            '23': 4,
            '24': 2,
            '25': 2,
            '26': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + obj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break
      case "sxzhixfsz": // 中三
        if (type === 'sxzhixfsz') {
          let nums1 = data.nums2.length;
          let nums2 = data.nums3.length;
          let nums3 = data.nums4.length;
          zhuNum = nums1 * nums2 * nums3;
        }
        break;
      case "sxzhixdsz":
        if (type === 'sxzhixdsz') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        break;
      case "sxzhixhzz":
        if (type === 'sxzhixhzz') {
          let sxzhixhzhObj = {
            '0': 1,
            '1': 3,
            '2': 6,
            '3': 10,
            '4': 15,
            '5': 21,
            '6': 28,
            '7': 36,
            '8': 45,
            '9': 55,
            '10': 63,
            '11': 69,
            '12': 73,
            '13': 75,
            '14': 75,
            '15': 73,
            '16': 69,
            '17': 63,
            '18': 55,
            '19': 45,
            '20': 36,
            '21': 28,
            '22': 21,
            '23': 15,
            '24': 10,
            '25': 6,
            '26': 3,
            '27': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + sxzhixhzhObj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case 'sxzuxzsz':
        if (type === 'sxzuxzsz') {
          let sxzuxzshLength = data.nums1.length;
          if (sxzuxzshLength > 1) {
            zhuNum = sxzuxzshLength * (sxzuxzshLength - 1);
          } else {
            zhuNum = 0;
          }
        }
        break;
      case 'sxzuxzlz':
        if (type === 'sxzuxzlz') {
          let sxzuxzshLength = data.nums1.length;
          if (sxzuxzshLength > 1) {
            zhuNum = sxzuxzshLength * (sxzuxzshLength - 1);
          } else {
            zhuNum = 0;
          }
        }
        break;
      case 'sxhhzxz':
        if (type === 'sxhhzxz') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        break;
      case 'sxzuxhzz':
        if (type === 'sxzuxhzz') {
          let obj = {
            '1': 1,
            '2': 2,
            '3': 2,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 8,
            '8': 10,
            '9': 11,
            '10': 13,
            '11': 14,
            '12': 14,
            '13': 15,
            '14': 15,
            '15': 14,
            '16': 14,
            '17': 13,
            '18': 11,
            '19': 10,
            '20': 8,
            '21': 6,
            '22': 5,
            '23': 4,
            '24': 2,
            '25': 2,
            '26': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + obj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case "sxzhixfsq": // 前三
        if (type === 'sxzhixfsq') {
          let nums1 = data.nums1.length;
          let nums2 = data.nums2.length;
          let nums3 = data.nums3.length;
          zhuNum = nums1 * nums2 * nums3;
        }
        break;
      case "sxzhixdsq":
        if (type === 'sxzhixdsq') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        break;
      case "sxzhixhzq":
        if (type === 'sxzhixhzq') {
          let sxzhixhzhObj = {
            '0': 1,
            '1': 3,
            '2': 6,
            '3': 10,
            '4': 15,
            '5': 21,
            '6': 28,
            '7': 36,
            '8': 45,
            '9': 55,
            '10': 63,
            '11': 69,
            '12': 73,
            '13': 75,
            '14': 75,
            '15': 73,
            '16': 69,
            '17': 63,
            '18': 55,
            '19': 45,
            '20': 36,
            '21': 28,
            '22': 21,
            '23': 15,
            '24': 10,
            '25': 6,
            '26': 3,
            '27': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + sxzhixhzhObj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case 'sxzuxzsq':
        if (type === 'sxzuxzsq') {
          let sxzuxzshLength = data.nums1.length;
          if (sxzuxzshLength > 1) {
            zhuNum = sxzuxzshLength * (sxzuxzshLength - 1);
          } else {
            zhuNum = 0;
          }
        }
        break;
      case 'sxzuxzlq':
        if (type === 'sxzuxzlq') {
          let sxzuxzshLength = data.nums1.length;
          if (sxzuxzshLength > 1) {
            zhuNum = sxzuxzshLength * (sxzuxzshLength - 1);
          } else {
            zhuNum = 0;
          }
        }
        break;
      case 'sxhhzxq':
        if (type === 'sxhhzxq') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        break;
      case 'sxzuxhzq':
        if (type === 'sxzuxhzq') {
          let obj = {
            '1': 1,
            '2': 2,
            '3': 2,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 8,
            '8': 10,
            '9': 11,
            '10': 13,
            '11': 14,
            '12': 14,
            '13': 15,
            '14': 15,
            '15': 14,
            '16': 14,
            '17': 13,
            '18': 11,
            '19': 10,
            '20': 8,
            '21': 6,
            '22': 5,
            '23': 4,
            '24': 2,
            '25': 2,
            '26': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + obj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case "exzhixfsh": // 后二
        if (type === 'exzhixfsh') {
          let nums1 = data.nums4.length;
          let nums2 = data.nums5.length;
          zhuNum = nums1 * nums2;
        }

        break;
      case "exzhixdsh":
        if (type === 'exzhixdsh' && typeName === '后二') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 2) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        break;
      case "exzhixhzh":
        if (type === 'exzhixhzh' && typeName === '后二') {
          let obj = {
            '0': 1,
            '1': 2,
            '2': 3,
            '3': 4,
            '4': 5,
            '5': 6,
            '6': 7,
            '7': 8,
            '8': 9,
            '9': 10,
            '10': 9,
            '11': 8,
            '12': 7,
            '13': 6,
            '14': 5,
            '15': 4,
            '16': 3,
            '17': 2,
            '18': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + obj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case "exzuxfsh":
        if (type === 'exzuxfsh') {
          let sxzuxzshLength = data.nums1.length;
          if (sxzuxzshLength > 1) {
            zhuNum = (sxzuxzshLength * (sxzuxzshLength - 1)) / 2;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "exzuxdsh":
        if (type === 'exzuxdsh') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 2) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        break;
      case "exzuxhzh":
        if (type === 'exzuxhzh') {
          let obj = {
            '1': 1,
            '2': 1,
            '3': 2,
            '4': 2,
            '5': 3,
            '6': 3,
            '7': 4,
            '8': 4,
            '9': 5,
            '10': 4,
            '11': 4,
            '12': 3,
            '13': 3,
            '14': 2,
            '15': 2,
            '16': 1,
            '17': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + obj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case "exzhixfsq": // 前二
        if (type === 'exzhixfsq' && typeName === '前二') {
          let nums1 = data.nums1.length;
          let nums2 = data.nums2.length;
          zhuNum = nums1 * nums2;
        }
        console.log(typeName)
        if (type === 'exzhixfsq' && typeName === "前二码") {
          let nums1 = data.nums3.length;
          let nums2 = data.nums4.length;
          zhuNum = nums1 * nums2;
        }
        break;
      case "exzhixdsq":
        if (type === 'exzhixdsq') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 2) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            if (data.data.length === 2) {
              zhuNum = 1
            }
          }
        }
        break;
      case "exzuxdsq":
        if (type === 'exzuxdsq') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",");
            let num = 0;
            arr.map(item => {
              if (item.length === 2) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            if (data.data.length === 2) {
              zhuNum = 1
            }
          }
        }
        break;
      case "exzuxhzq":
        if (type === 'exzuxhzq') {
          let obj = {
            '1': 1,
            '2': 1,
            '3': 2,
            '4': 2,
            '5': 3,
            '6': 3,
            '7': 4,
            '8': 4,
            '9': 5,
            '10': 4,
            '11': 4,
            '12': 3,
            '13': 3,
            '14': 2,
            '15': 2,
            '16': 1,
            '17': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + obj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case "dw":
        if (type === 'dw') {
          let dwNum1 = data.nums1.length;
          let dwNum2 = data.nums2.length;
          let dwNum3 = data.nums3.length;
          let dwNum4 = data.nums4.length;
          let dwNum5 = data.nums5.length;
          zhuNum = (dwNum1 + dwNum2 + dwNum3 + dwNum4 + dwNum5);
        }
        break;
      case "bdw1mh":// 不定位
        if (type === 'bdw1mh') {
          let dwNum1 = data.nums1.length;
          zhuNum = (dwNum1);
        }
        break;
      case "bdw2mh":// 不定位
        if (type === 'bdw2mh') {
          let numsLength = data.nums1.length;
          if (numsLength > 1) {
            zhuNum = (numsLength * (numsLength - 1)) / 2;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "bdwsix1mq":// 不定位 需修改
        if (type === 'bdwsix1mq') {
          zhuNum = 0;
        }
        break;
      case "bdwsix2mh":// 不定位 需修改
        if (type === 'bdwsix2mh') {
          zhuNum = 0;
        }
        break;
      case "bdw1mz":// 不定位 需修改
        if (type === 'bdw1mz') {
          zhuNum = 0;
        }
        break;
      case "bdw2mz":// 不定位 需修改
        if (type === 'bdw2mz') {
          zhuNum = 0;
        }
        break;
      case "bdwsix2mq":// 不定位 需修改
        if (type === 'bdwsix2mq') {
          zhuNum = 0;
        }
        break;
      case "bdwwx2m":// 不定位
        if (type === 'bdwwx2m') {
          let numsLength = data.nums1.length;
          if (numsLength > 1) {
            zhuNum = (numsLength * (numsLength - 1)) / 2;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "bdw1mq":// 不定位
        if (type === 'bdw1mq') {
          let numsLength = data.nums1.length;
          zhuNum = numsLength;
        }
        break;
      case "bdw2mq":// 不定位
        if (type === 'bdw2mq') {
          let numsLength = data.nums1.length;
          if (numsLength > 1) {
            zhuNum = (numsLength * (numsLength - 1)) / 2;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "bdwsix1mh":// 不定位
        if (type === 'bdwsix1mh') {
          zhuNum = 0;
        }
        break;
      case "bdwwx3m":// 不定位
        if (type === 'bdwwx3m') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 2) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 3; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 6;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx2fs":// 任选
        if (type === 'rx2fs' && name === '任二直选复式') {
          let numsLength1 = data.nums1.length;
          let numsLength2 = data.nums2.length;
          let numsLength3 = data.nums3.length;
          let numsLength4 = data.nums4.length;
          let numsLength5 = data.nums5.length;
          let x1 = (numsLength1 * numsLength2) + (numsLength1 * numsLength3) + (numsLength1 * numsLength4) + (numsLength1 * numsLength5);
          let x2 = (numsLength2 * numsLength3) + (numsLength2 * numsLength4) + (numsLength2 * numsLength5);
          let x3 = (numsLength3 * numsLength4) + (numsLength3 * numsLength5);
          let x4 = (numsLength4 * numsLength5);
          console.log(x1, x2, x3, x4)
          zhuNum = x1 + x2 + x3 + x4;
        }
        if (name === '二中二复式') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 1) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 2; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 2;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx2ds":// 任选
        if (type === 'rx2ds' && name === '任二直选单式') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 2) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        if (type === 'rx2ds' && name === '二中二单式') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              if (item.length === 5) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            if (data.data.length === 5) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "rx3z3":
        if (type === "rx3z3" && name === '任三组三') {
          zhuNum = 0;
        }
        break;
      case "rx3hhzx":
        if (type === "rx3hhzx") {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        break;
      case "rx3fs":// 任选 任三直选复式
        if (type === 'rx3fs' && name === '任三直选复式') {
          let nums1 = data.nums1;
          let nums2 = data.nums2;
          let nums3 = data.nums3;
          let nums4 = data.nums4;
          let nums5 = data.nums5;
          let numsArrs = nums1.concat(nums2).concat(nums3).concat(nums4).concat(nums5);
          let numsLength = numsArrs.length;
          let arrs = [nums1, nums2, nums3, nums4, nums5];
          let showArr = [];
          let arrL = 0;
          arrs.map(item => {
            if (item.length > 0) {
              arrL = arrL + 1;
              showArr.push(item)
            }
          })

          if (numsLength > 2 && arrL > 2) {
            if (arrL === 3) {
              let num = 1;
              showArr.map(item => {
                num = num * item.length;
              })
              zhuNum = num;
            }
            if (arrL === 4) {
              let zhuNum1 = 1;
              for (let i = 0; i < 3; i++) {
                zhuNum1 = zhuNum1 * showArr[i].length
              }
              let zhuNum2 = showArr[0].length * showArr[1].length * showArr[3].length;
              let zhuNum3 = showArr[0].length * showArr[2].length * showArr[3].length;
              let zhuNum4 = showArr[1].length * showArr[2].length * showArr[3].length;
              console.log(zhuNum1, zhuNum2, zhuNum3, zhuNum4)
              console.log(showArr)
              zhuNum = zhuNum1 + zhuNum2 + zhuNum3 + zhuNum4;
            }
            if (arrL === 5) {
              let zhuNum1 = 1;
              for (let i = 0; i < 3; i++) {
                zhuNum1 = zhuNum1 * showArr[i].length
              }

              let zhuNum2 = showArr[0].length * showArr[1].length * showArr[3].length;
              let zhuNum3 = showArr[0].length * showArr[1].length * showArr[4].length;
              let zhuNum4 = showArr[0].length * showArr[2].length * showArr[3].length;
              let zhuNum5 = showArr[0].length * showArr[2].length * showArr[4].length;
              let zhuNum6 = showArr[0].length * showArr[3].length * showArr[4].length;

              let zhuNum7 = showArr[1].length * showArr[2].length * showArr[3].length;
              let zhuNum8 = showArr[1].length * showArr[2].length * showArr[4].length;
              let zhuNum9 = showArr[1].length * showArr[3].length * showArr[4].length;
              let zhuNum10 = showArr[2].length * showArr[3].length * showArr[4].length;
              zhuNum = zhuNum1 + zhuNum2 + zhuNum3 + zhuNum4 + zhuNum5 + zhuNum6 + zhuNum7 + zhuNum8 + zhuNum9 + zhuNum10;
            }
          } else {
            zhuNum = 0;
          }
        }
        if (type === 'rx3fs' && name === '三中三复式') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 2) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 3; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 6;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx3ds":
        if (type === "rx3ds" && name === '任三直选单式') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        if (type === "rx3ds" && name === '任三直选单式') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itemStr = item.replace(" ", '')
              if (itemStr.length === 6) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            if (data.data.length === 6) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "rx3z6":// 不定位
        if (type === 'rx3z6') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 2) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 3; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 6;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx4fs":// 任选 任四直选复式  // 需要修改
        if (type === 'rx4fs' && name === '任四直选复式') {
          let nums1 = data.nums1;
          let nums2 = data.nums2;
          let nums3 = data.nums3;
          let nums4 = data.nums4;
          let nums5 = data.nums5;
          let numsArrs = nums1.concat(nums2).concat(nums3).concat(nums4).concat(nums5);
          let numsLength = numsArrs.length;
          let arrs = [nums1, nums2, nums3, nums4, nums5];
          let showArr = [];
          let arrL = 0;
          arrs.map(item => {
            if (item.length > 0) {
              arrL = arrL + 1;
              showArr.push(item)
            }
          })

          if (numsLength > 3 && arrL > 3) {
            if (arrL === 4) {
              let num = 1;
              showArr.map(item => {
                num = num * item.length;
              })
              zhuNum = num;
            }
            if (arrL === 5) {
              let zhuNum1 = 1;
              for (let i = 0; i < 4; i++) {
                zhuNum1 = zhuNum1 * showArr[i].length
              }
              let zhuNum2 = showArr[0].length * showArr[1].length * showArr[3].length;
              let zhuNum3 = showArr[0].length * showArr[1].length * showArr[4].length;
              let zhuNum4 = showArr[0].length * showArr[2].length * showArr[3].length;
              let zhuNum5 = showArr[0].length * showArr[2].length * showArr[4].length;
              let zhuNum6 = showArr[0].length * showArr[3].length * showArr[4].length;

              let zhuNum7 = showArr[1].length * showArr[2].length * showArr[3].length;
              let zhuNum8 = showArr[1].length * showArr[2].length * showArr[4].length;
              let zhuNum9 = showArr[1].length * showArr[3].length * showArr[4].length;
              let zhuNum10 = showArr[2].length * showArr[3].length * showArr[4].length;
              zhuNum = zhuNum1 + zhuNum2 + zhuNum3 + zhuNum4 + zhuNum5 + zhuNum6 + zhuNum7 + zhuNum8 + zhuNum9 + zhuNum10;
            }
          } else {
            zhuNum = 0;
          }
        }
        if (type === 'rx4fs' && name === '任四直选复式') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 2) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 3; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 24;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx4ds":
        if (type === "rx4ds" && name === '任四直选单���') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0
            arr.map(item => {
              if (item.length === 4) {
                num = num + 1;
              }
            })
            zhuNum = num;
          }
        }
        if (type === "rx4ds" && name === '四中四单式') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itemStr = item.replace(" ", '')
              if (itemStr.length === 8) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            data.data = data.data.replace(" ", '');
            if (data.data.length === 8) {
              zhuNum = 1;
            }
          }
        }
        break
      case "rx2zx": // 任二组选 暂无算法
        zhuNum = 0;
        break;
      case "longhuhewq": // 龙虎
      case "longhuhewb": // 龙虎
      case "longhuhews": // 龙虎
      case "longhuhewg": // 龙虎
      case "longhuheqb": // 龙虎
      case "longhuheqs": // 龙虎
      case "longhuheqg": // 龙虎
      case "longhuhebs": // 龙虎
      case "longhuhebg": // 龙虎
      case "longhuhesg": // 龙虎
        if (type.indexOf('longhu') > -1) {
          let nums1 = data.nums1;
          let nums2 = data.nums2;
          zhuNum = nums1.length + nums2.length;
        }
        break;
      case "sanmzhixfsq": // 广东11选5 三码
        if (type === 'sanmzhixfsq') {
          let nums1 = data.nums1;
          let nums2 = data.nums2;
          let nums3 = data.nums3;
          let arrs = [];
          for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
              if (nums1[i] !== nums2[j]) {
                for (let o = 0; o < nums3.length; o++) {
                  if (nums2[j] !== nums3[o] && nums1[i] !== nums3[o]) {
                    arrs.push([nums1[i], nums2[j], nums3[o]])
                  }
                }
              }
            }
          }
          zhuNum = arrs.length;
        }
        break;
      case "sanmzhixdsq": // 广东11选5 前三直选单式
        if (type === "sanmzhixdsq") {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              if (item.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            data.data = data.data.replace(" ", '');
            if (data.data.length === 3) {
              zhuNum = 1;
            }
          }
        }
        break
      case "sanmzuxfsq": // 后三 组六
        if (type === 'sanmzuxfsq') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 2) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 3; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 6;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "sanmzuxdsq": // 广东11选5 前三直选单式
        if (type === "sanmzuxdsq") {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              if (item.length === 6) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            if (data.data.length === 6) {
              zhuNum = 1;
            }
          }
        }
        break
      case "ermzhixfsq": // 广东11选5 二码
        if (type === 'ermzhixfsq') {
          let nums1 = data.nums1;
          let nums2 = data.nums2;
          let arrs = [];
          for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
              if (nums1[i] !== nums2[j]) {
                arrs.push([nums1[i], nums2[j]])
              }
            }
          }
          zhuNum = arrs.length;
        }
        break;
      case "ermzhixdsq": // 广东11选5 前三直选单式
        if (type === "ermzhixdsq") {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itemStr = item.replace(" ", '')
              if (item.length === 4) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            data.data = data.data.replace(" ", '');
            if (data.data.length === 4) {
              zhuNum = 1;
            }
          }
        }
        break
      case "ermzuxfsq": // 广东11选5 二码
        if (type === 'ermzuxfsq') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 1) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 2; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 2;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "ermzuxdsq": // 广东11选5 二码
        if (type === 'ermzuxdsq') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itemStr = item.replace(" ", '')
              if (item.length === 4) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            data.data = data.data.replace(" ", '');
            if (data.data.length === 4) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "bdw": // 不定位
        if (type === 'bdw') {
          let sxzuxzlhLength = data.nums1.length;
          zhuNum = sxzuxzlhLength;
        }
        break;
      case "dwd":
        if (type === 'dwd') {
          let dwNum1 = data.nums1.length;
          let dwNum2 = data.nums2.length;
          let dwNum3 = data.nums3.length;
          zhuNum = (dwNum1 + dwNum2 + dwNum3);
        }
        break;
      case 'dds':
      case 'czw':
        zhuNum = 0;
        break;
      case 'rx1fs':
        if (type === 'rx1fs') {
          let sxzuxzlhLength = data.nums1.length;
          zhuNum = sxzuxzlhLength;
        }
        break;
      case "rx1ds": // 广东11选5 二码
        if (type === 'rx1ds') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              if (item.length === 1) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            if (data.data.length === 1) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "rx5fs": // 广东11选5 任选
        if (type === 'rx5fs') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 4) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 5; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 120;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx5ds": // 广东11选5 任选
        if (type === 'rx5ds') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(' ', '')
              if (itenStr.length === 10) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(' ', '')
            if (itenStr.length === 10) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "rx6fs": // 广东11选5 任选
        if (type === 'rx6fs') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 5) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 6; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 720;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx6ds": // 广东11选5 任选
        if (type === 'rx6ds') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(' ', '')
              if (itenStr.length === 12) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(' ', '')
            if (itenStr.length === 12) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "rx7fs": // 广东11选5 任选
        if (type === 'rx7fs') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 6) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 6; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 720;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx7ds": // 广东11选5 任选
        if (type === 'rx7ds') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(' ', '')
              if (itenStr.length === 14) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(' ', '')
            if (itenStr.length === 14) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "rx8fs": // 广东11选5 任选
        if (type === 'rx8fs') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 7) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 7; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 5040;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case "rx8ds": // 广东11选5 任选
        if (type === 'rx8ds') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(' ', '')
              if (itenStr.length === 16) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(' ', '')
            if (itenStr.length === 16) {
              zhuNum = 1;
            }
          }
        }
        break;
      case 'ebthdx':
        if (type === 'ebthdx') {
          zhuNum = 0;
        }
        break;
      case 'ebthds':
        if (type === 'ebthds') {
          zhuNum = 0;
        }
        break;
      case 'ebthdt':
        if (type === 'ebthdt') {
          zhuNum = 0;
        }
        break;
      case 'ethdx':
        if (type === 'ethdx') {
          zhuNum = 0;
        }
        break;
      case 'ethds':
        if (type === 'ethds') {
          zhuNum = 0;
        }
        break;
      case 'ethfx':
        if (type === 'ethfx') {
          zhuNum = 0;
        }
        break;
      case 'sbthdx':
        if (type === 'sbthdx') {
          zhuNum = 0;
        }
        break;
      case 'sbthds':
        if (type === 'sbthds') {
          zhuNum = 0;
        }
        break;
      case 'sthdx':
        if (type === 'sthdx') {
          zhuNum = 0;
        }
        break;
      case 'sthtx':
        if (type === 'sthtx') {
          zhuNum = 0;
        }
        break;
      case 'slhtx':
        if (type === 'slhtx') {
          zhuNum = 0;
        }
        break;
      case 'hezhi':
        if (type === 'hezhi') {
          zhuNum = 0;
        }
        break;
      case 'sanxzhixfs': // 快3
        if (type === 'sanxzhixfs' && typeName === "三码") {
          let nums1Length = data.nums3.length;
          let nums2Length = data.nums4.length;
          let nums3Length = data.nums5.length;
          zhuNum = nums1Length * nums2Length * nums3Length;
        }
        break;
      case 'sanxzhixds': // 快3
        if (type === 'sanxzhixds') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(' ', '')
              if (itenStr.length === 3) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data;
            if (itenStr.length === 3) {
              zhuNum = 1;
            }
          }
        }
        break;
      case "sanxzhixhz": // 快3
        if (type === 'sanxzhixhz') {
          let sxzhixhzhObj = {
            '0': 1,
            '1': 3,
            '2': 6,
            '3': 10,
            '4': 15,
            '5': 21,
            '6': 28,
            '7': 36,
            '8': 45,
            '9': 55,
            '10': 63,
            '11': 69,
            '12': 73,
            '13': 75,
            '14': 75,
            '15': 73,
            '16': 69,
            '17': 63,
            '18': 55,
            '19': 45,
            '20': 36,
            '21': 28,
            '22': 21,
            '23': 15,
            '24': 10,
            '25': 6,
            '26': 3,
            '27': 1,
          };
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + sxzhixhzhObj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case "sanxzs": // 快3 组六
        if (type === 'sanxzs') {
          if (type === 'sanxzl') {
            let sxzuxzlhLength = data.nums1.length;
            zhuNum = sxzuxzlhLength * (sxzuxzlhLength - 1);
          }
        }
        break;
      case "sanxzl": // 快3 组六
        if (type === 'sanxzl') {
          let sxzuxzlhLength = data.nums1.length;
          if (sxzuxzlhLength > 2) {
            let arr = [];
            let productNum = 1;
            for (let i = 0; i < 3; i++) {
              arr.push(sxzuxzlhLength - i)
            }
            arr.map(item => {
              productNum = productNum * item;
            })
            zhuNum = productNum / 6;
          } else {
            zhuNum = 0;
          }
        }
        break;
      case 'sanxhhzx': // 快3
        if (type === 'sanxhhzx') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(' ', '')
              if (itenStr.length === 3) {
                if (item[0] == item[1] && item[1] === item[2]) {
                  num = num + 0;
                } else {
                  num = num + 1;
                }

              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data;
            if (itenStr.length === 3) {
              zhuNum = 1;
            }
          }
        }
        break;
      case 'exzhixdsh': // 快3
        if (type === 'exzhixdsh' && typeName === '后二码') {
          if (data.data) {
            data.data = data.data.replace(/ +|，/g, ",");
            let arr = data.data.split(",")
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(' ', '')
              if (itenStr.length === 2) {
                num = num + 1;
              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data;
            if (itenStr.length === 2) {
              zhuNum = 1;
            }
          }
        }
        break;
      case 'exzhixhzh': // 快3
        if (type === 'exzhixhzh' && typeName === '后二码') {
          let obj = {
            '0': 1,
            '1': 2,
            '2': 3,
            '3': 4,
            '4': 5,
            '5': 6,
            '6': 7,
            '7': 8,
            '8': 9,
            '9': 10,
            '10': 9,
            '11': 8,
            '12': 7,
            '13': 6,
            '14': 5,
            '15': 4,
            '16': 3,
            '17': 2,
            '18': 1,
          }; if (type === 'exzhixfsh') {
            let nums1 = data.nums4.length;
            let nums2 = data.nums5.length;
            zhuNum = nums1 * nums2;
          }
          let sxzhixhzhNums1 = data.nums1
          let sxzhixhzhZs = 0;
          sxzhixhzhNums1.map(item => {
            sxzhixhzhZs = sxzhixhzhZs + obj[item + '']
          })
          zhuNum = sxzhixhzhZs;
        }
        break;
      case 'qianyi':
        if (type === 'qianyi') {
          let nums1 = data.nums1.length;
          zhuNum = nums1;
        }
        break;
      case 'qianerzxfs':
        if (type === 'qianerzxfs') {
          if (name === '前二复式') {
            let nums1 = data.nums1;
            let nums2 = data.nums2;
            let arr = [];
            for (let i = 0; i < nums1.length; i++) {
              for (let n = 0; n < nums2.length; n++) {
                if (nums1[i] !== nums2[n]) {
                  arr.push(i)
                }
              }
            }
            zhuNum = arr.length;
          }
        }
        break;
      case 'qianerzxds':
        if (type === 'qianerzxds') {
          if (data.data) {
            data.data = data.data.replace(/，/g, ",");
            console.log(data.data)
            let arr = data.data;
            if (data.data.indexOf(',') > -1) {
              arr = data.data.split(",")
            } else {
              arr = [data.data]
            }
            let num = 0;
            console.log(num)
            arr.map(item => {
              let itenStr = item.replace(/ +/g, ',');
              let str = itenStr.split(",")
              console.log(str)
              if (str.length === 2) {
                let show = true;
                str.map(item => {
                  if (!item) {
                    show = false;
                  }
                })
                if (str[0] !== str[1] && show) {
                  num = num + 1;
                }

              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(/ +/g, ',');
            let str = itenStr.split(",")
            if (str.length === 2 && str[0] !== str[1]) {
              zhuNum = 1;
            }
          }
        }
        break;
      case 'qiansanzxfs':
        if (type === 'qiansanzxfs') {
          console.log(data)
          let dataNums = data.nums1;
          let dataNums2 = data.nums2;
          let dataNums3 = data.nums3;
          let arr = [];
          for (let i = 0; i < dataNums.length; i++) {
            for (let n = 0; n < dataNums2.length; n++) {
              if (dataNums[i] !== dataNums2[n]) {
                for (let o = 0; o < dataNums3.length; o++) {
                  if (dataNums3[o] !== dataNums2[n] && dataNums3[o] !== dataNums[i]) {
                    arr.push(i)
                  }
                }
              }
            }
          }
          zhuNum = arr.length;
        }
        break;
      case 'qiansanzxds':
        if (type === 'qiansanzxds') {
          if (data.data.indexOf(",") > -1 || data.data.indexOf("，") > 1) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data;
            if (data.data.indexOf(',') > -1) {
              arr = data.data.split(",")
            } else {
              arr = [data.data]
            }
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(/ +/g, ',');
              let str = itenStr.split(",")
              if (str.length === 3) {
                let show = true;
                str.map(item => {
                  if (!item || item.length !== 2 || item - 0 == 0 || item - 0 > 10) {
                    show = false;
                  }
                })
                if (str[0] !== str[1] && str[0] !== str[2] && str[1] !== str[2] && show) {
                  num = num + 1;
                }

              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(/ +/g, ',');
            let str = itenStr.split(",");
            let onshow = true;
            console.log(str)
            str.map(item => {
              if (item.length !== 2 || item - 0 > 10 || item - 0 == 0) {
                onshow = false;
              }
            })
            if (str.length === 3 && str[0] !== str[1] && onshow) {
              zhuNum = 1;
            }
          }
        }
        break;
      case 'qiansizxfs':
        if (type === 'qiansizxfs') {
          console.log(data)
          let dataNums = data.nums1;
          let dataNums2 = data.nums2;
          let dataNums3 = data.nums3;
          let dataNums4 = data.nums4;
          let arr = [];
          for (let i = 0; i < dataNums.length; i++) {
            for (let n = 0; n < dataNums2.length; n++) {
              if (dataNums[i] !== dataNums2[n]) {
                for (let o = 0; o < dataNums3.length; o++) {
                  if (dataNums3[o] !== dataNums2[n] && dataNums3[o] !== dataNums[i]) {
                    for (let q = 0; q < dataNums4.length; q++) {
                      if (dataNums3[o] !== dataNums4[q] && dataNums4[q] !== dataNums[i] && dataNums4[q] !== dataNums2[n]) {
                        arr.push(i)
                      }
                    }

                  }
                }
              }
            }
          }
          zhuNum = arr.length;
        }
        break;
      case 'qiansizxds':
        if (type === 'qiansizxds') {
          if (data.data.indexOf(",") > -1 || data.data.indexOf("，") > 1) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data;
            if (data.data.indexOf(',') > -1) {
              arr = data.data.split(",")
            } else {
              arr = [data.data]
            }
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(/ +/g, ',');
              let str = itenStr.split(",")
              if (str.length === 4) {
                let show = true;
                str.map(item => {
                  if (!item || item.length !== 2 || item - 0 == 0 || item - 0 > 10) {
                    show = false;
                  }
                })
                if (str[0] !== str[1] && str[0] !== str[2] && str[1] !== str[2] && show) {
                  num = num + 1;
                }

              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(/ +/g, ',');
            let str = itenStr.split(",");
            let onshow = true;
            str.map(item => {
              if (item.length !== 2 || item - 0 > 10 || item - 0 == 0) {
                onshow = false;
              }
            })
            if (str.length === 4 && str[0] !== str[1] && onshow) {
              zhuNum = 1;
            }
          }
        }
        break;
      case 'qianwuzxfs':
        if (type === 'qianwuzxfs') {
          console.log(data)
          let dataNums = data.nums1;
          let dataNums2 = data.nums2;
          let dataNums3 = data.nums3;
          let dataNums4 = data.nums4;
          let dataNums5 = data.nums5;
          let arr = [];
          for (let i = 0; i < dataNums.length; i++) {
            for (let n = 0; n < dataNums2.length; n++) {
              if (dataNums[i] !== dataNums2[n]) {
                for (let o = 0; o < dataNums3.length; o++) {
                  if (dataNums3[o] !== dataNums2[n] && dataNums3[o] !== dataNums[i]) {
                    for (let q = 0; q < dataNums4.length; q++) {
                      if (dataNums3[o] !== dataNums4[q] && dataNums4[q] !== dataNums[i] && dataNums4[q] !== dataNums2[n]) {
                        for (let r = 0; r < dataNums5.length; r++) {
                          if (dataNums3[o] !== dataNums4[r] && dataNums4[r] !== dataNums[i] && dataNums4[r] !== dataNums2[n] && dataNums4[r] !== dataNums2[q]) {
                            arr.push(i)
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          zhuNum = arr.length;
        }
        break;
      case 'qianwuzxds':
        if (type === 'qianwuzxds') {
          if (data.data.indexOf(",") > -1 || data.data.indexOf("，") > 1) {
            data.data = data.data.replace(/，/g, ",");
            let arr = data.data;
            if (data.data.indexOf(',') > -1) {
              arr = data.data.split(",")
            } else {
              arr = [data.data]
            }
            let num = 0;
            arr.map(item => {
              let itenStr = item.replace(/ +/g, ',');
              let str = itenStr.split(",")
              if (str.length === 5) {
                let show = true;
                str.map(item => {
                  if (!item || item.length !== 2 || item - 0 == 0 || item - 0 > 10) {
                    show = false;
                  }
                })
                if (str[0] !== str[1] && str[0] !== str[2] && str[1] !== str[2] && show) {
                  num = num + 1;
                }

              }
            })
            zhuNum = num;
          } else {
            let itenStr = data.data.replace(/ +/g, ',');
            let str = itenStr.split(",");
            let onshow = true;
            str.map(item => {
              if (item.length !== 2 || item - 0 > 10 || item - 0 == 0) {
                onshow = false;
              }
            })
            if (str.length === 5 && str[0] !== str[1] && onshow) {
              zhuNum = 1;
            }
          }
        }
        break;
      case 'qwdingweidan':
        if(type === 'qwdingweidan') {
          let dataNums = data.nums1;
          let dataNums2 = data.nums2;
          let dataNums3 = data.nums3;
          let dataNums4 = data.nums4;
          let dataNums5 = data.nums5;
          zhuNum = dataNums.length + dataNums2.length + dataNums3.length + dataNums4.length + dataNums5.length;
        }
        break;
      case 'hwdingweidan':
        if(type === 'hwdingweidan') {
          let dataNums = data.nums1;
          let dataNums2 = data.nums2;
          let dataNums3 = data.nums3;
          let dataNums4 = data.nums4;
          let dataNums5 = data.nums5;
          zhuNum = dataNums.length + dataNums2.length + dataNums3.length + dataNums4.length + dataNums5.length;
        }
        break;
      default:
        break;
    }
    return {
      zhuNum,
      multiple,
    }
  }
}

