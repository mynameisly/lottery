<!--
 * @Description: tabBar -- tempalte
 * @FilePath: \wb_litoob\src\components\FootNav.vue
 * @LastEditTime: 2020-06-28 21:03:17
--> 
<template>
    <van-tabbar route class="footNav" v-model="footNav" active-color="#2f6ce6">
        <van-tabbar-item name="HomePage" icon="wap-home" to="/index/homePage">首页</van-tabbar-item>
        <van-tabbar-item name="Trend" icon="map-marked" to="/index/trendList">走势</van-tabbar-item>
        <van-tabbar-item name="Affiche" icon="volume" to="/index/noticeList">公告</van-tabbar-item>
        <van-tabbar-item name="MyPage" icon="friends" to="/index/myPage">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
    name: "footNav",
    data() {
        return {
            footNav: "HomePage"
        };
    }
};
</script>
<style lang="scss">
.footNav {
    .van-tabbar-item__icon {
        font-size: 22px;
    }
}
</style>