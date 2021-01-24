<template>
  <div id="SecuritySettings">
    <van-nav-bar fixed title="密保设置" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="tab-content">
        <p>设置密保后可以通过密保修改资金密码等。密保一旦设置将无法修改</p>

        <!-- 问题一 -->
        <van-cell-group>
          <van-field label="问题一：" v-model="params.question1" right-icon="arrow" @click="showAnswer1()" />
          <van-field v-model="params.answer1" label="密保答案" placeholder="请输入答案" />
        </van-cell-group>

        <!-- 问题二 -->
        <van-cell-group>
          <van-field label="问题二：" v-model="params.question2" right-icon="arrow" @click="showAnswer2()" />
          <van-field v-model="params.answer2" label="密保答案" placeholder="请输入答案" />
        </van-cell-group>

        <!-- 问题三 -->
        <van-cell-group>
          <van-field label="问题三：" v-model="params.question3" right-icon="arrow" @click="showAnswer3()" />
          <van-field v-model="params.answer3" label="密保答案" placeholder="请输入答案" />
        </van-cell-group>
      </div>
      <!-- 确定 -->
      <div class="rebate-box">
        <div class="button-inner" @click="confirmModify()">确&nbsp;&nbsp;&nbsp;&nbsp;认</div>
      </div>
    </div>

    <!-- 问题一弹框 -->
    <van-dialog width="70%" v-model="showAnswer1Dialog" title="问题一:" show-cancel-button>
      <ul>
        <li
          class="type-item"
          @click="changeAnswer1(item, index)"
          :class="{'focus':aswer1Index==index}"
          v-for="(item, index) in answer1List"
          :key="index"
        >
          <span class="item-txt">{{ item }}</span>
          <span v-if="aswer1Index == index" class="item-icon">
            <van-icon name="success" />
          </span>
        </li>
      </ul>
    </van-dialog>

    <!-- 问题二弹框 -->
    <van-dialog width="70%" v-model="showAnswer2Dialog" title="问题二:" show-cancel-button>
      <ul>
        <li
          class="type-item"
          @click="changeAnswer2(item, index)"
          :class="{'focus':aswer2Index==index}"
          v-for="(item, index) in answer2List"
          :key="index"
        >
          <span class="item-txt">{{ item }}</span>
          <span v-if="aswer2Index == index" class="item-icon">
            <van-icon name="success" />
          </span>
        </li>
      </ul>
    </van-dialog>

    <!-- 问题三弹框 -->
    <van-dialog width="70%" v-model="showAnswer3Dialog" title="问题三:" show-cancel-button>
      <ul>
        <li
          class="type-item"
          @click="changeAnswer3(item, index)"
          :class="{'focus':aswer3Index==index}"
          v-for="(item, index) in answer3List"
          :key="index"
        >
          <span class="item-txt">{{ item }}</span>
          <span v-if="aswer3Index == index" class="item-icon">
            <van-icon name="success" />
          </span>
        </li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        question1: "", 
        question2: "",
        question3: "",
        answer1: "", // 密保答案
        answer2: "",
        answer3: "",
      },
      rightAnswer1: "",
      rightAnswer2: "",
      rightAnswer3: "",
      aswer1Index: 0,
      aswer2Index: 0,
      aswer3Index: 0,
      showAnswer1Dialog: false,
      showAnswer2Dialog: false,
      showAnswer3Dialog: false,
      isSecurityQaNull: false,
      answer1List: [
        "我最爱看哪部美剧？",
        "我最喜欢吃的美食是？",
        "我最喜欢的球队是？",
        "我最爱看哪部美剧？",
        "我最喜欢吃的美食是？",
        "我最喜欢的球队是？"
      ],
      answer2List: [
        "我的座右铭是？",
        "我的辛运数字是？",
        "我父亲的姓名是？",
        "我的座右铭是？",
        "我的辛运数字是？",
        "我父亲的姓名是？"
      ],
      answer3List: [
        "我的出生地是？",
        "我毕业的学校是？",
        "我母亲的生日是？",
        "我父亲的生日是？",
        "我配偶的生日是？"
      ]
    };
  },
  mounted() {
    this.question1 = this.answer1List[0];
    this.question2 = this.answer2List[0];
    this.question3 = this.answer3List[0];
    this.getUserMobileCenterInfo();
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    confirmModify() {
      // 确认修改
      if(this.params.question1 && this.params.question2 && this.params.question3 && 
      this.params.answer1 && this.params.answer2 && this.params.answer3) {
        let formData = this.formDataObject(this.params);
        this.fetchpost('/api/bindUserSecurity',formData).then(res => {
          console.log('res', res)
          if(res.code === 500) {
            this.$toast(res.msg)
          } else if(res.code === 200) {
            this.$toast(res.msg)
          }
        })
      } else {
        this.$toast('必须同时填写三个密保问题')
      }
    },
    getUserMobileCenterInfo() {
      this.fetchget('/api/userMobileCenterInfo').then(res => {
        this.isSecurityQaNull = res.data.isSecurityQaNull;// true表示没有设置密保问题
        // console.log('this.isSecurityQaNull', this.isSecurityQaNull)
        if(res.data.isSecurityQaNull) {
          this.$toast('您暂未设置密保问题')
        }
      })
    },
    showAnswer1() {
      if(this.isSecurityQaNull === false) { // 有密保问题就随机获取一个
        this.showAnswer1Dialog = true;
        this.fetchget('/api/getUserSecurity').then(res => {
          this.answer1List = [];
          this.answer1List.push(res.data.key) // 密保问题
          this.rightAnswer1 = res.data.value; // 密保答案
        })
      } else { // 没有密保问题就前端自己新增一个
        this.showAnswer1Dialog = true;
      }
    },
    showAnswer2() {
      if(this.isSecurityQaNull === false) {
        this.showAnswer2Dialog = true;
        this.fetchget('/api/getUserSecurity').then(res => {
          console.log('res',res.msg)
          this.answer2List = [];
          this.answer2List.push(res.data.key) // 密保问题
          this.rightAnswer2 = res.data.value; // 密保答案
        })
      } else {
        this.showAnswer2Dialog = true;
      }
    },
    showAnswer3() {
      if(this.isSecurityQaNull === false) {
        this.showAnswer3Dialog = true;
        this.fetchget('/api/getUserSecurity').then(res => {
          this.answer3List = [];
          this.answer3List.push(res.data.key) // 密保问题
          this.rightAnswer3 = res.data.value; // 密保答案
        })
      } else {
        this.showAnswer3Dialog = true;
      }
    },
    changeAnswer1(item, index) {
      this.params.question1 = item;
      this.aswer1Index = index;
    },
    changeAnswer2(item, index) {
      this.params.question2 = item;
      this.aswer2Index = index;
    },
    changeAnswer3(item, index) {
      this.params.question3 = item;
      this.aswer3Index = index;
    }
  }
};
</script>

<style scoped lang="scss">
#SecuritySettings {
  .content {
    .tab-content {
      width: 100%;
      padding-top: 50px;
      p {
        color: red;
        font-size: 16px;
        margin: 10px;
        font-weight: bold;
      }
    }

    .rebate-box {
      .button-inner {
        width: 90%;
        height: 40px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: #E10807;
        border-radius: 4px;
        box-shadow: 0 10px 10px 3px #cccccc;
      }
    }
  }
  .type-item {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    padding: 0 20px;
    &.focus {
      color: $themeColor;
    }
    .item-txt {
      display: inline-block;
      width: 90%;
    }
  }
}
</style>
