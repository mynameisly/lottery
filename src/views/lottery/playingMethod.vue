<!--
 * @Author: your name
 * @Date: 2020-08-01 20:28:33
 * @LastEditTime: 2020-09-29 21:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\views\lottery\playingMethod.vue
--> 
<template>
  <div class="playingMethod">
    <div class="playingMethod-h">
      <div class="go_back" @click="onClickLeft">
        <van-icon style="font-weight: bold" color="#ffffff" size="24" name="arrow-left" />
      </div>
      <div class="text">玩法选择</div>
    </div>
    <div class="content-box">
      <div class="content-item">
        <div class="content-h">历史记录</div>
        <div class="content">
          <van-row gutter="20" v-if="history">
            <van-col span="8" style="margin: 5px 0" v-for="item in history" :key="item.groupId" >
              <div class="item">{{item.name}}</div>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="content-item">
        <div class="content-h">玩法分类</div>
        <div class="content">
          <van-row gutter="20" v-if="this.dataObj.length > 0">
            <van-col span="8" style="margin: 5px 0" v-for="(item, i) in this.dataObj" :key="item.groupId" @click="selectParent(i)">
              <div class="item" :class="selectId === i ? 'selectItem': ''">{{item.name}}</div>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="content-item">
        <div class="content-h">玩法</div>
        <div class="content">
          <van-row gutter="20" v-if="this.dataObj.length > 0">
            <van-col span="8" style="margin: 5px 0" v-for="item in this.dataObj[selectId].childrenData" :key="item.ruleId" @click.stop="closePlayingMethodFun(item)">
              <div class="item" :class="childrenId === item.ruleId ? 'selectItem': ''">{{item.name}}</div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'playingMethod', // 玩法
  props: ['history', 'dataObj'],
  data() {
    return {
      selectId: 0,
      childrenId: ''
    }
  },
  created() {
    console.log(this.dataObj)
  },
  methods: {
    selectParent(i) {
      this.selectId = i
    },
    closePlayingMethodFun(item) {
      let data = item;
      this.childrenId = item.ruleId;
      this.$emit('closePlayingMethodFun', data)
    },
    onClickLeft() {
      this.$emit('closePlayingMethodFun', null)
    },
  }
}
</script>
<style lang="scss" scoped>
.playingMethod {
  width: 100%;
  .playingMethod-h {
    width: 100%;
    background: #0468a5;
    display: flex;
    justify-content: space-between;
    padding: 6px 4px;
    position: relative;
    .go_back {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .text {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      color: #ffffff;
    }
  }
  .content-box {
    width: 100%;
    .content-item {
      width: 100%;
      .content-h {
        width: 100%;
        font-size: 12px;
        color: #000000;
        box-sizing: border-box;
        padding: 5px 10px;
        background: #f1f1f1;
      }
      .content {
        width: 100%;
        text-align: center;
        .item {
          display: inline-block;
          width: 100px;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 12px;
        }
        .selectItem {
          color: #0468a5;
          border-color: #0468a5;
        }
      }
    }
  }
}

</style>