<template>
  <!-- 彩票中心 -->
  <div id="LotteryCentre">
    <van-nav-bar title="彩票中心" left-arrow @click-left="onClickLeft"/>
    <van-tree-select
      height="100vh"
      :active-id="activeId"
      :items="items"
      :main-active-index.sync="active"
      @click-nav="clickNav"
    >
      <template #content>
        <div class="lottery-wrapper" v-for="(item,index) in lotteryList" :key="index" @click="clickLotteryItem">
          <div class="brick-img">
            <!-- <img src="https://wap.008xj.net/assets/imgs/games/home/caidan2.png" alt /> -->
            <i class="icon iconfont lottery-icon" :class="returnIconfig(item.shortName)"></i>
          </div>
          <div class="brick-name" @click="openLotteryBetting(item)">
            <p class="bold">{{ item.showName }}</p>
            <p class="color">{{ item.shortName }}</p>
          </div>
          <van-icon name="arrow" color="#8e9093" size="0.5rem" style="line-height: 48px;margin-right: -12px"/>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mapState} from 'vuex';
export default {
  data() {
    return {
      active: 0,
      activeId: "", // 右侧选中项id
      items: [],
      dataObj: {},
      lotteryList: []
    };
  },
  
  mounted() {
    this.init();
  },
  // computed: mapState({
  //   lotteries: state => state.lotteries
  // }),
  methods: {
    init() {
      // this.lotteryList = this.lotteries[1];
      // this.getLottery();
      this.getTreeData()
      console.log(1111)
    },
    onClickLeft() { // 点击左侧返回按钮
      this.$router.back();
    },
    clickNav(index) { // 点击左侧项目，根据activeId发请求，渲染到lotteryList
    // eslint-disable-next-line no-unused-vars
    let currentActiveId = this.items[index].id;
    this.activeId = this.items[index].id;
    this.lotteryList = this.items[index].children;

    // console.log('currentActiveId',currentActiveId);
    },
    clickLotteryItem() { // 点击右侧分类项
      // console.log('1111')
    },
    async getLottery() {
      let params = {
        lotteryId: ''
      };
      // eslint-disable-next-line no-unused-vars
      let res = await this.fetchget('/api/getLottery', params);
    },
    /**
     * 获取彩种类型
     */
    getTreeData() {
      this.fetchget('/api/getSysConfig').then(res => {
        console.log(res)
        if(res.code === 200) {
          // this.dataObj = res.data;
          let treeData = [];
          for(let key in res.data.lotteries) {
            
            let obj = {
              text: this.$config.getSysConfig[key],
              id: key,
              children: []
            };
            for(let i = 0; i < res.data.lotteries[key].length; i++ ) {
              let item = res.data.lotteries[key][i];
              item.text = res.data.lotteries[key][i].showName;
              item.id = res.data.lotteries[key][i].id;
              obj.children.push(item)
            }
            treeData.push(obj)
            
          }
          localStorage.setItem('treeData', JSON.stringify(treeData))
          this.items = treeData;
          this.activeId = treeData[0].id;
          this.lotteryList = treeData[0].children;
          console.log(treeData)
        }
      })
    },
    openLotteryBetting(item) {
      this.$router.push(
        {
          path: '/LotteryBetting',
          query: {
            id: this.activeId,
            childrenId: item.id
          }
        }
      )
    },
    returnIconfig(shortName) {
      for(let key in this.$config.IconCfg) {
        if(shortName.indexOf(key) > -1) {
          return this.$config.IconCfg[key]
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.lottery-icon {
  font-size: 40px;
  color: #0468a5;
}

#LotteryCentre {
  height: 100vh;
  .lottery-wrapper {
    display: flex;
    margin: 11px 8px 11px 10px;
    .brick-img {
      width: 48px;
      height: 48px;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .brick-name {
      width: 75%;
      line-height: 24px;
      margin-left: 10px;
      .bold {
        font-size: 14px;
      }
      .color {
        color: #8e9093;
      }
    }
  }
}
</style>