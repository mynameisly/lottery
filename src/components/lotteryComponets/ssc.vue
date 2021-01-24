<!--
 * @Author: your name
 * @Date: 2020-08-23 12:53:49
 * @LastEditTime: 2020-08-23 20:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\components\lotteryComponets\ssc.vue
-->
<template>
  <div class="ssc-box">
    <div class="tabs-box-h">
      <van-tabs v-model="activeName" style="height: 40px;">
        <van-tab name="sm" title="双面" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="szp" title="数字盘" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="yzdw" title="一字定位" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="erzdw" title="二字定位盘" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="szdw" title="三字定位盘" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="yzzh" title="一字组合" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="erzzh" title="二字组合" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="zhs" title="组合三" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="zhl" title="组合六" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="kd" title="跨度" title-style="text-align: center; height: 40px"></van-tab>
        <van-tab name="lh" title="龙虎" title-style="text-align: center; height: 40px"></van-tab>
      </van-tabs>
    </div>
    <div class="content-box">
      <div class="tabs-box">
        <div class="img-box">
          <img class="img" src="../../static/img/icon-chip50.png" alt="" srcset="">
        </div>
        <div class="img-box">
          <img class="img" src="../../static/img/icon-chip100.png" alt="" srcset="">
        </div>
        <div class="img-box">
          <img class="img" src="../../static/img/icon-chip200.png" alt="" srcset="">
        </div>
        <div class="img-box">
          <img class="img" src="../../static/img/icon-chip1000.png" alt="" srcset="">
        </div>
        <div class="img-box">
          <img class="img" src="../../static/img/icon-chip5000.png" alt="" srcset="">
        </div>
        <div class="money-box">
          <span class="text">金额：</span>
          <div class="input-box"><input class="inpt" type="number" :value="1"></div>
        </div>
      </div>
      <div class="item-list-box">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'name',
  data() {
    return {
      activeName: '',
    }

  }
}
</script>
<style lang="scss" scoped>
.ssc-box {
  width: 100%;
  .tabs-box-h {
    width: 100%;
    background: #f2f2f2;
  }
  .content-box {
    width: 100%;
    .tabs-box {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      padding: 5px 10px;
      .img-box {
        width: 30px;
        height: 30px;
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .img {
          width: 30px;
          height: 30px;
        }
      }
      .money-box {
        width: 100px;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        border: 1px solid #eaeaea;
        box-sizing: border-box;
        padding: 4px;
        margin-left: 10px;
        .text {
          color: #0468a5;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .input-box {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .inpt {
            width: 50px;
            height: 100%;
            border: none;
          }
        }
      }
    }
  }

}

</style>
<style lang="scss">
.ssc-box {
  .van-tabs--line .van-tabs__wrap {
    height: 40px!important;
    .van-tabs__nav {
      background: #f2f2f2;
    }
  }
}
</style>