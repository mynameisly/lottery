<!--
 * @Description: 走势详情列表
 * @FilePath: \wb_litoob\src\views\trend\TrendList.vue
 * @LastEditTime: 2020-07-14 22:22:26
--> 
<template>
  <div class="LotteryBody TrendList">
    <van-nav-bar fixed title="开奖走势" />
    <div class="TrendBody">
      <div
        class="list-item"
        v-for="item in lotteryList"
        :key="item.lotteryId"
        @click="gotoChartsInfo(item)"
      >
        <div class="item-left">
          <p class="icon iconfont" :class="[item.iconName, item.bgColor]"></p>
          <div class="left-info">
            <p class="lot-name">{{item.showName}}</p>
            <p class="lot-qi">第{{item.openCode.expect}}期</p>
          </div>
        </div>
        <div class="item-right">
          <span v-for="(it,i) in item.openCode.code.split(',')" :key="i" class="lot-ball">{{it}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Config from "@/utils/config.js";
export default {
  name: "TrendList",
  data() {
    return {
      lotteryList: []
    };
  },
  methods: {
    gotoChartsInfo(item) {
      console.log("跳转：", item);
      this.$router.push({
        path: "/lotteryDetails",
        query: {
          name: item.showName,
          lotteryId: item.lotteryId
        }
      });
    },
    getLotteryList() {
      this.fetchget("/api/getLotteryOpenLatest", true).then(res => {
        this.lotteryList = res.data.map(item => {
          let random = parseInt(Math.random() * 10);
          let IconCfg = Config.IconCfg;
          // 增加背景颜色列
          item.bgColor = `bg-color${random}`;
          // 增加图标列 - 默认使用ssc图标
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

        console.log(this.lotteryList);
      });
    }
  },
  mounted() {
    this.getLotteryList();
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  font-size: 40px;
  color: #ffffff;
}
.bg-color0 {
  background-color: #da4321;
}
.bg-color1 {
  background-color: #fe9021;
}
.bg-color2 {
  background-color: #ef4b57;
}
.bg-color3 {
  background-color: #3396fa;
}
.bg-color4 {
  background-color: #3ca256;
}
.bg-color5 {
  background-color: #bf36f6;
}
.bg-color6 {
  background-color: #ffac22;
}
.bg-color7 {
  background-color: #ff7a3f;
}
.bg-color8 {
  background-color: #ff0000;
}
.bg-color9 {
  background-color: #9cb667;
}
.bg-color10 {
  background-color: #da4321;
}

.TrendList {
  height: 100vh;
  padding-top: 45px;
  box-sizing: border-box;
  .TrendBody {
    height: calc(100vh - 100px);
    overflow-y: scroll;
    /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
    -ms-overflow-style: none;
    /*火狐下隐藏滚动条*/
    scrollbar-width: none;
    /*谷歌下隐藏滚动条*/
    &::-webkit-scrollbar {
        display: none;
    }
    .list-item {
      margin: 8px;
      padding: 5px 0;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      .item-left {
        display: flex;
        align-items: center;
        padding: 10px;
        flex: 4;
        .kind-icon {
          height: 42px;
          width: 42px;
          border-radius: 50%;
          margin: 0 8px;
        }
        .left-info {
          padding-left: 10px;
          .lot-name {
            font-size: 15px;
            color: #333333;
          }
          .lot-qi {
            font-size: 12px;
            color: #8e9093;
          }
        }
      }
      .item-right {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex: 3;
        .lot-ball {
          height: 18px;
          width: 18px;
          font-size: 14px;
          color: #0468a5;
          text-align: center;
          line-height: 18px;
          border-radius: 50%;
          border: 1px solid #0468a5;
          margin: 0 5px 5px 0;
        }
      }
    }
  }
}
</style>