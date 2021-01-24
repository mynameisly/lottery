<template>
  <div id="SelectRecipients">
    <van-nav-bar title="选择收信人" left-arrow fixed :right-text="isSelectAll" @click-left="goBack" @click-right="selectAll"/>
    <div class="SelectRecipients-content">
      <div class="search">
        <div class="search-wrapper">
          <input
            class="text-input"
            type="text"
            placeholder="搜索"
            tappable
            autocomplete="off"
            autocorrect="off"
          />
          <i
            id="search-icon"
            ios="ios-search"
            item-left
            role="img"
            class="icon icon-ios ion-ios-search"
          ></i>
        </div>
      </div>
      <div class="item" v-for="(item,index) in personList" :key="index" @click="handleSelect(index)">
        <van-checkbox v-model="item.id" />
        <div class="person">{{ item.person }}</div>
      </div>
    </div>
    <div class="SelectRecipients-footer">
      <van-button type="default" block @click="goMassMessage()">下一步({{selectCount}})</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectRecipients",
  data() {
    return {
      checked: true,
      selectCount: 0, // 选中的数量
      isSelectAll: "全选", // 全选或全不选
      personList: [
        {
          id: 1,
          person: "我的上级"
        },
        {
          id: 2,
          person: "aad32432"
        },
        {
          id: 3,
          person: "xxa331212"
        }
      ]
    };
  },
  mounted() {
    this.getSelectRecipients();
  },
  methods: {
    getSelectRecipients() {},
    goBack() {
      this.$router.go(-1);
    },
    selectAll() { // 全选或全不选
      if(this.isSelectAll == "全选") {
        this.checked = true;
        this.isSelectAll = "全不选"
      } else {
        this.checked = false;
        this.isSelectAll = "全选"
      }
    },
    handleSelect(index) { // 点击某一项,index从0开始
      console.log('index',index);
    },
    goMassMessage() {
      this.$router.push({
        name: 'MassMessage'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#SelectRecipients {
  padding-top: 1.2rem;
  height: 100vh;
  .SelectRecipients-content {
    .search {
      min-height: 30px;
      margin: 10px 0;
      .search-wrapper {
        width: 96%;
        margin: 0 auto;
        background: #fff;
        border-radius: 6px;
        input {
          margin: 11px 8px 11px 0;
          padding: 0;
          width: calc(100% - 8px);
          border: none;
          padding-left: 48%;
        }
        .icon {
          position: absolute;
          top: 1.6rem;
          left: 43%;
          color: #ccc;
          font-size: 23px;
        }
      }
    }
    .item {
      display: flex;
      justify-content: space-start;
      background-color: #fff;
      line-height: 50px;
      padding-left: 10px;
      div:nth-child(1){
        margin-left: 8px;
        margin-right: 8px;
      }
      .person{
        padding-left: 5px;
        border-bottom: 1px solid gainsboro;
        width: 85%;
      }
    }
  }
  .SelectRecipients-footer{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    button{
      color: #33BB27;
    }
  }
}
</style>