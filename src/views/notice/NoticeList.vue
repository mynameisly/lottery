<!--
 * @Description: 公告列表
 * @FilePath: \wb_litoob\src\views\notice\NoticeList.vue
 * @LastEditTime: 2020-07-07 22:18:03
--> 
<template>
    <div id="NoticeList">
        <van-nav-bar title="公告中心" fixed/>
        <div class="scroll-content">
            <ul v-for="(notice,index) in noticeList" :key="index" @click="goNoticeDetails(notice.id)">
                <li class="notice-wrapper">
                    <span class="notice-title">{{ notice.title }}</span><br />
                    <span class="notice-time">{{ notice.addTime }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "NoticeList",
    data() {
        return {
            noticeList: []
        };
    },
    mounted() {
        this.getNoticeList();
    },
    methods: {
        getNoticeList() {
            this.fetchget("/api/getAnnounceList").then(res => {
                this.noticeList = res.data;
            });
        },
        goNoticeDetails(noticeId) {
            this.$router.push({name: "NoticeDetails",params: { noticeId: noticeId }});
        }
    }
};
</script>

<style lang="scss" scoped>
#NoticeList{
        padding-top: 1.2rem;
    box-sizing: border-box;
    height: 100vh;
    .scroll-content{
        margin-bottom: 55px;
        .notice-wrapper{
            padding: 15px 0;
            line-height: 10px;
            background: #fff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            .notice-title{
                padding: 0 0 0 10px;
                display: block;
                color: #ff0d0d;
                font-size: 10px;
            }
            .notice-time{
                padding: 0 0 0 10px;
                color: #aaa;
                font-size: 10px;
            }
        }
    }
}
</style>