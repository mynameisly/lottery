<template>
  <div class="no-data">
    <img class="no-data-img" src="@/assets/images/nonext.png" alt="nonext" />
    <div class="no-data-text">{{noDataText}}</div>
  </div>
</template>

<script>
export default {
  props: {
    noDataText: {
      type: String,
      default() {
        return "目前暂无数据";
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.no-data {
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #fff;
  .no-data-img {
    margin: 0 auto;
    width: 30%;
    margin-top: 140px;
  }
  .no-data-text {
    color: #aba1a1;
    margin-top: 20px;
    font-size: 14px;
  }
}
</style>
