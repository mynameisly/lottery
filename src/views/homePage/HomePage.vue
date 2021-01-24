<!--
 * @Description: 我的主页
 * @FilePath: \wb_litoob\src\views\homePage\HomePage.vue
 * @LastEditTime: 2020-07-05 12:53:23
--> 
<template>
  <div class="HomePage">
    <van-nav-bar
      title="百事娱乐"
      left-text
      right-text
      left-arrow
      fixed
      @click-left="onOnlineService"
      @click-right="onNews"
    >
      <template #left>
        <span>在线客服</span>
        <i class="headset icon-ios ion-ios-headset-outline"></i>
      </template>
      <template #right>
        <span>消息</span>
        <i class="conversation iconfont icon-conversation conversation-font"></i>
      </template>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="banners">
      <van-swipe class="imgWrapper" :autoplay="3000">
        <van-swipe-item v-for="(item, index) in imagesArr" :key="index">
          <a :href="item.homePicLinkUrl">
            <img :src="item.homePicUrl" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 选项组 -->
    <div class="home-menu">
      <van-grid :column-num="5">
        <van-grid-item @click="goLotteryCenter">
          <img src="../../assets/images/caidan2.png" alt />
          <p>彩票中心</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/chongzhi.png" alt />
          <p>充值</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/tixian.png" alt />
          <p>提现</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/zhuanzhang.png" alt />
          <p>转账</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/kefu.png" alt />
          <p>客服中心</p>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 我的彩种 -->
    <div class="mylottery">
      <div class="mylottery-title">
        <van-row>
          <van-col span="20" offset="1">我的彩种</van-col>
          <van-col @click="editMyLottery">编辑></van-col>
        </van-row>
      </div>
      <div class="mylottery-body">
        <div class="body-wrapper" v-for="(item,index) in myLotteries" :key="index">
          <div class="img-wrapper">
            <span class="icon iconfont" :class="item.iconName"></span>
          </div>
          <p>{{ item.showName }}</p>
        </div>
      </div>
    </div>
    <!-- 热门彩种 -->
    <div class="hotlottery">
      <div class="hotlottery-title">
        <van-row>
          <van-col span="20" offset="1">热门彩种</van-col>
          <van-col @click="getMoreHotLottery">更多></van-col>
        </van-row>
      </div>
      <div class="hotlottery-body">
        <div class="body-wrapper" v-for="(item,index) in hotlotteryList" :key="index">
          <div class="hotlottery-body-main">
            <div class="hotlottery-body-left">
              <div class="img-wrapper2">
                <span class="icon2 iconfont" :class="[item.iconName, 'icon-color'+index]"></span>
              </div>
            </div>
            <div class="hotlottery-body-right">
              <p class="bold">{{ item.showName }}</p>
              <p>{{ item.shortName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 真人&体育 -->
    <div class="third-game">
      <div class="third-game-title">
        <van-row>
          <van-col span="20" offset="1">真人&体育</van-col>
        </van-row>
      </div>
      <div class="third-game-body">
        <div class="body-wrapper" v-for="(item, index) in thirdGameList" :key="index">
          <img :src="item.imgUrl" alt="thirdgame" />
        </div>
      </div>
    </div>

    <!-- VR系列 -->
    <div class="lottery-vr">
      <div class="lottery-vr-title">
        <van-row>
          <van-col span="20" offset="1">VR系列</van-col>
        </van-row>
      </div>
      <div class="lottery-vr-body">
        <div class="body-wrapper" v-for="(item,index) in lotteryVrList" :key="index">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Config from "@/utils/config.js";
export default {
  name: "HomePage",
  data() {
    return {
      imagesArr: [],
      myLotteries: [],
      hotlotteryList: [],
      thirdGameList: [],
      allThird: [
        {
          name: "KY",
          text: "开元棋牌",
          imgUrl: "https://wap.008xj.net/assets/imgs/games/home/KY.png"
        },
        {
          name: "JM",
          text: "加玛棋牌",
          imgUrl: "https://wap.008xj.net/assets/imgs/games/home/GamMa.png"
        },
        {
          name: "AG",
          text: "AG真人",
          imgUrl: "https://wap.008xj.net/assets/imgs/games/home/AG.png"
        },
        {
          name: "BBIN",
          text: "EBET真人",
          imgUrl: "https://wap.008xj.net/assets/imgs/games/home/EBET.png"
        },
        {
          name: "IM",
          text: "IM电竞",
          imgUrl: "https://wap.008xj.net/assets/imgs/games/home/IM.png"
        },
        {
          name: "SB",
          text: "沙巴体育",
          imgUrl: "https://wap.008xj.net/assets/imgs/games/home/SB.png"
        }
      ],
      lotteryVrList: [
        {
          text: "VR金星1.5分彩"
        },
        {
          text: "VR赛车"
        },
        {
          text: "VR快艇"
        },
        {
          text: "VR彩票百家乐"
        },
        {
          text: "VR3分彩"
        },
        {
          text: "VR六合彩"
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getSysConfig();
      this.getHomePic();
    },
    /** 获取系统配置 */
    getSysConfig() {
      let params = {};
      this.fetchget("/api/getSysConfig", params).then(res => {
        if (res.code == 200) {
          let lotteries = res.data.lotteries;
          // 我的彩种
          this.myLotteries = [];
          for (let i = 0; i < 3; i++) {
            this.myLotteries.push(lotteries["1"][i]);
          }
          // 设置彩票图标
          this.setIcon(this.myLotteries);
          // 热门彩种
          this.hotlotteryList = lotteries[2];
          // 设置彩票图标
          this.setIcon(this.hotlotteryList);
          // 真人体育
          this.thirdGameList = [];
          res.data.platforms.forEach(element => {
            var tmp = this.allThird.filter(item => item.name == element.name);
            if (tmp.length > 0) {
              this.thirdGameList.push(tmp[0]);
            }
          });

          // 提交作为全局数据
          this.$store.commit("setValue", {
            lotteries: res.data.lotteries
          });

          console.log(this.$store);
        }
      });
    },
    getHomePic() {
      let params = {
        picType: 1
      };
      this.fetchget("/api/getHomePicApp", params).then(res => {
        if (res.code == 200) {
          this.imagesArr = res.data.homePics;
        }
      });
    },
    goLotteryCenter() {
      this.$router.push({
        name: "LotteryCentre",
        queryParams: { a: 1 }
      });
    },
    editMyLottery() {
      // 编辑我的彩种
      this.$router.push({
        name: "EditLottery",
        queryParams: { a: 1 }
      });
    },
    /** 热门彩种-更多 */
    getMoreHotLottery() {
      // 获取更多热门彩种
      this.goLotteryCenter();
    },
    onOnlineService() {
      // 点击在线客服
    },
    onNews() {
      // 点击消息
      this.$router.push({ name: "News" });
    },
    /** 设置图标 */
    setIcon(list) {
      let IconCfg = Config.IconCfg;
      list = list.map(item => {
        // 默认使用ssc图标
        item.iconName = IconCfg.ssc;
        if (/ssc/.test(item.shortName)) {
          item.iconName = IconCfg.ssc;
        }
        if (/ffc/.test(item.shortName)) {
          item.iconName = IconCfg.ffc;
        }
        if (/1d5fc/.test(item.shortName)) {
          item.iconName = IconCfg["1d5fc"];
        }
        if (/2fc/.test(item.shortName)) {
          item.iconName = IconCfg["2fc"];
        }
        if (/3d5fc/.test(item.shortName)) {
          item.iconName = IconCfg["3d5fc"];
        }
        if (/11x5/.test(item.shortName)) {
          item.iconName = IconCfg["11x5"];
        }
        if (/k3/.test(item.shortName)) {
          item.iconName = IconCfg["k3"];
        }
        if (/ft/.test(item.shortName)) {
          item.iconName = IconCfg["xyft"];
        }
        return item;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  font-size: 40px;
  color: #36aef7;
}
.icon2 {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 40px;
  color: #36aef7;
}
.icon-color0 {
  color: #ed725b;
}
.icon-color1 {
  color: #f0b376;
}
.icon-color2 {
  color: #539eed;
}
.icon-color3 {
  color: #947fef;
}
.icon-color4 {
  color: #5ae484;
}
.icon-color5 {
  color: #f36969;
}

.HomePage {
  padding-top: 1.2rem;
  box-sizing: border-box;
  height: 100vh;
  // padding-bottom: 50px;
  .headset,
  .conversation {
    font-size: 26px;
    margin-left: 5px;
  }
  .banners {
    // margin-top: 46px;
    .imgWrapper {
      .van-swipe-item {
        img {
          height: 128.5px;
        }
      }
    }
  }
  .home-menu {
    img {
      width: 42px;
      height: 42px;
    }
    p {
      margin-top: 6px;
      color: #333;
    }
  }
  .mylottery {
    .mylottery-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .mylottery-body {
      display: flex;
      justify-content: space-around;
      text-align: center;
      background: #fff;
      padding-bottom: 12px;
      .body-wrapper {
        width: 30%;
        padding: 8px 0;
        border-radius: 8px;
        background: #f5f5f5;
        .img-wrapper {
          background: #e6e8f3;
          border: 2px solid #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          margin: 0 auto;
          line-height: 60px;
          img {
            border-radius: 50%;
            width: 55px;
            height: 55px;
          }
        }
        p {
          margin-top: 7.2px;
        }
      }
    }
  }

  .hotlottery {
    .hotlottery-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .hotlottery-body {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      .body-wrapper {
        width: 50%;
        padding: 5px;
        .hotlottery-body-main {
          border-radius: 4px;
          padding: 10px 0;
          overflow: hidden;
          background: #f5f5f5;
          border: 1px solid #eee;
          display: flex;
          justify-content: flex-start;
        }
        .hotlottery-body-left {
          margin-left: 10px;
          background: #e6e8f3;
          border: 2px solid #fff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          line-height: 50px;
        }
        .hotlottery-body-right {
          color: #fafafa;
          margin-left: 10px;
          padding: 5px 0;
          .bold {
            font-size: 14px;
          }
        }
      }
      .body-wrapper:nth-child(1) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #f0b376, #ed725b);
        }
      }

      .body-wrapper:nth-child(2) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #ecd677, #ee9b48);
        }
      }

      .body-wrapper:nth-child(3) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #8aebee, #539eed);
        }
      }

      .body-wrapper:nth-child(4) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #c69af0, #947fef);
        }
      }

      .body-wrapper:nth-child(5) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #ade975, #5ae484);
        }
      }

      .body-wrapper:nth-child(6) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #eb8ccf, #f36969);
        }
      }
    }
  }

  .third-game {
    .third-game-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .third-game-body {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      .body-wrapper {
        width: 50%;
        padding: 5px;
      }
    }
  }

  .lottery-vr {
    margin-bottom: 55px;
    .lottery-vr-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .lottery-vr-body {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      .body-wrapper {
        width: 50%;
        padding: 5px;
        p {
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          border-radius: 4px;
          // border: 1px solid #d0021b;
          background: linear-gradient(135deg, #87e7ed, #58a4ed);
        }
      }
    }
  }
}
</style>