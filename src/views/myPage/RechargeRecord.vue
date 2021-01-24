<template>
  <div id="account-change-record">
    <van-nav-bar fixed title="充值记录" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <van-row class="filter">
          <van-col :span="8">
            <i ios="ios-stats-outline" class="icon icon-ios ion-ios-stats-outline"></i>&nbsp;奖金
          </van-col>
          <van-col :span="8">
            <i name="ios-time-outline" class="icon icon-ios ion-ios-time-outline"></i>&nbsp;期号
          </van-col>
          <van-col :span="8" class="selected" @click="clickSelect">
            <i name="ios-funnel-outline" class="icon icon-ios ion-ios-funnel-outline"></i>&nbsp;筛选
          </van-col>
        </van-row>

        <div v-if="rechargeRecordList.length>0">
          <div class="recharge-wrapper" v-for="(item,index) in rechargeRecordList" :key="index">
            <van-row class="row">
              <van-col :span="18" :offset="1" class="recharge-title">
                订单状态：
                <span>{{ item.status }}</span>
              </van-col>
              <van-col :span="2" class="money-wrapper">
                <span>{{ '+' + item.money }}</span>
              </van-col>
              <van-col :span="1" class="right-wrapper">
                <van-icon name="arrow" class="right"/>
              </van-col>
            </van-row>
            <van-row class="row">
              <van-col :span="21" :offset="1" class="recharge-title">
                充值时间：
                <span>{{ item.rechargeTime }}</span>
              </van-col>
            </van-row>
          </div>
        </div>

        <!-- 无数据组件 -->
        <no-data v-else :noDataText="noDataText"></no-data>
      </div>
    </div>

    <aside-selectTime ref="asideSelectTime" @getRechargeData="getRechargeData"></aside-selectTime>
  </div>
</template>

<script>
import AsideSelectTime from "../../components/myPageComponents/AsideSelectTime.vue";
import NoData from "../../components/NoData.vue";

export default {
  components: {
    AsideSelectTime,
    NoData
  },
  data() {
    return {
      noDataText: "目前没有数据，在右上角改变一下条件试试~",
      rechargeRecordList: [
        {
          status: '未处理',
          rechargeTime: '2020-04-08 11:22:55',
          money: '300'
        }
      ]
    };
  },
  created() {

  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    clickSelect() {
      this.$refs.asideSelectTime.showPage();
    },
    getRechargeData(time) {
      // console.log('time',time);
      // 暂无接口
      this.fetchget('/api/rechargeRecord',time).then(res => {
        if(res.code === 500) {
          this.$toast(res.msg)
        } else if(res.code === 200) {
          
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  .tab-content {
    width: 100%;
    padding-top: 50px;
    .filter {
      text-align: center;
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #e0e0e0;
      .selected {
        color: #0468a5;
      }
    }

    .recharge-wrapper{
      background: #fff;
      padding: 10px;
      border-bottom: 0.55px solid #c8c7cc;
      .recharge-title{
        color: #959595;
        span{
          color: #000;
        }
      }
      .money-wrapper{
        color: #CB1F1F;
        margin-right: 20px;
        span{
          display: inline-block;
          padding-top: 15px;
          font-size: 18px;
        }
      }
      .right-wrapper{
        height: 30px;
        .right{
          padding-top: 15px;
          font-size: 26px;
          color: #959595;
        }
      }
    }
  }
}
</style>
