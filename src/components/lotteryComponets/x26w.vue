<!--
 * @Author: your name
 * @Date: 2020-08-01 16:54:34
 * @LastEditTime: 2020-10-11 11:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\components\lotteryComponets\lotteryComponets.vue
--> 
<template>
  <div class="lotteryType-box">
    <!-- <div class="title" v-if="data.">万位</div> -->
    <div class="content-box">
      <div class="left-box">
        <div class="left-content">
          <div class="item" v-for="item in arrList" :key="item.id">
            <span class="num" id="1"  :class="selectId.indexOf(item.id) > -1 ? 'selectItem' : ''"  @click="activeItem(item.id)">{{item.label}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lotteryType',
  props: ['data', 'clear'],
  data() {
    return {
      message: '',
      arrList: [
        {
          id: 1,
          label: 1
        }, {
          id: 2,
          label: 2
        }, {
          id: 3,
          label: 3
        }, {
          id: 4,
          label: 4
        }, {
          id: 5,
          label: 5
        }, {
          id: 6,
          label: 6
        }, {
          id: 7,
          label: 7
        }, {
          id: 8,
          label: 8
        }, {
          id: 9,
          label: 9
        }, {
          id: 10,
          label: 10
        }, {
          id: 11,
          label: 11
        }, {
          id: 12,
          label: 12
        }, {
          id: 13,
          label: 13
        }, {
          id: 14,
          label: 14
        }, {
          id: 15,
          label: 15
        }, {
          id: 16,
          label: 16
        }, {
          id: 17,
          label: 17
        }, {
          id: 18,
          label: 18
        }, {
          id: 19,
          label: 19
        }, {
          id: 20,
          label: 20
        }, {
          id: 21,
          label: 21
        }, {
          id: 22,
          label: 23
        }, {
          id: 24,
          label: 24
        }, {
          id: 25,
          label: 25
        }, {
          id: 26,
          label: 26
        }
      ],
      selectId: []
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
  methods: {
    activeItem(id) {
      let onOf = true;
      let arr = JSON.parse(JSON.stringify(this.selectId));
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] == id) {
          arr.splice(i, 1)
          console.log(arr)
          onOf = false;
          break;
        }
      }
      if(onOf) {
        this.selectId.push(id)
      }else {
        this.selectId = arr;
      }
      this.backData()
    },
    allClick() {
      this.selectId = [0,1,2,3,4,5,6,7,8,9];
      this.backData()
    },
    bigClick() {
      this.selectId = [5,6,7,8,9];
      this.backData()
    },
    smallClick() {
      this.selectId = [0,1,2,3,4];
      this.backData()
    },
    danClick() {
      this.selectId = [1,3,5,7,9];
      this.backData()
    },
    suangClick() {
      this.selectId = [0,2,4,6,8];
      this.backData()
    },
    clearClick() {
      this.selectId = [];
      this.backData()
    },
    backData() {
      this.$emit('backData', {
        type: this.dataObj,
        data: this.selectId
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.lotteryType-box {
  width: 100%;
  box-shadow: 0 0 5px 2px #EBEBEB;
  .title {
    font-size: 12px;
    color: #0468a5;
    text-align: left;
    border-bottom: 2px solid #0468a5;
    box-sizing: border-box;
    padding: 5px;
  }
  .content-box {
    width: 100%;
    height: auto;
    .left-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .left-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .item {
        width: 20%;
        text-align: center;
        padding: 8px 0;
        .num {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #c8c7cc;
          box-sizing: content-box;
          text-align: center;
          line-height: 25px;
        }
        .selectItem {
          border-color: red;
        }
      }
      
    }
    .right-box {
      width: 70px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      float: right;
      .item {
        width: 28px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 10px;
        border: 1px solid #eee;
        margin-bottom: 2px;
      }
    }
  }
}

</style>