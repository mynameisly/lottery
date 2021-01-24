<!--
 * @Author: your name
 * @Date: 2020-08-13 21:38:51
 * @LastEditTime: 2020-11-04 21:00:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\components\x5.vue
-->
<template>
  <div class="x5-box" v-if="dataObj">
    <div style="padding-bottom: 10px">位置</div>
    <div class="x5-h" v-if="dataObj.data.length > 0 && dataObj.data[0] !== 'srk'">
      <div class="item" :class="activeItemData.indexOf('w') > -1 ? 'select_item' : ''" @click="activeItem('w')">万位</div>
      <div class="item" :class="activeItemData.indexOf('q') > -1 ? 'select_item' : ''" @click="activeItem('q')">千位</div>
      <div class="item" :class="activeItemData.indexOf('b') > -1 ? 'select_item' : ''" @click="activeItem('b')">百位</div>
      <div class="item" :class="activeItemData.indexOf('s') > -1 ? 'select_item' : ''" @click="activeItem('s')">十位</div>
      <div class="item" :class="activeItemData.indexOf('g') > -1 ? 'select_item' : ''" @click="activeItem('g')">个位</div>
    </div>
    <div class="content-box">
      <div class="text"><span>每注号码之间请用一个空格或英文逗号或英文分号隔开（输入的号码会自动排序并去除不合格号码）。</span></div>
      <div class="textArea-box">
        <van-field
          v-model="message"
          rows="8"
          :autosize="{
            maxHeight: 100,
            minHeight: 50
          }"
          label=""
          type="textarea"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'name',
  props: ['data', 'clear'],
  data() {
    return {
      message: '',
      activeItemData: [],
      dataObj: ''
    }
  },
  watch: {
    message: {
      handler(val) {
        this.message = val;
        this.backData()
      },
      deep: true
    },
    clear: {
      handler(val) {
        if(val) {
          this.activeItemData = [];
          this.backData()
        }
      },
      deep: true
    }
  },
  created() {
    if(this.data) {
      console.log(this.data)
      this.dataObj = this.data;
      if(this.dataObj.data.length > 0) {
        this.activeItemData = this.dataObj.data
      }
    }
  },
  methods: {
    activeItem(item) {
      let onOf = true;
      this.activeItemData.map((col, i) => {
        if(item == col) {
          this.activeItemData.splice(i, 1)
          onOf = false;
        }
      })
      if(onOf) {
        this.activeItemData.push(item)
      }
      this.backData()
    },
    backData() {
      this.$emit('backData', {
        type: this.dataObj,
        data: this.message,
        activeItem: this.activeItemData,
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.x5-box {
  width: 100%;
  .x5-h {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .item {
      flex: 1;
      height: 24px;
      font-size: 12px;
      line-height: 24px;
      color: #333;
      border: 1px solid #eee !important;
      background: #fafafa;
      text-align: center;
      position: relative;
      margin: 0 2px;
    }
    .select_item {
      border-color: #0468a5 !important;
      color: #0468a5;
    }
    .select_item::before {
      display: inline-block;
      content: '';
      width: 15px;
      height: 15px;
      background: url(../../static/img/icon_s.png)no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .content-box {
    width: 100%;
    margin-top: 10px;
    .text {
      font-size: 12px;
      color: #999;
    }
    .textArea-box {
      margin-top: 10px;
      font-size: 12px;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
    }
  }
}

</style>