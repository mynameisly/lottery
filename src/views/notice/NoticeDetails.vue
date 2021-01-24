<template>
    <div id="NoticeDetails">
        <van-nav-bar title="公告详情" left-arrow fixed @click-left="goBack"/>
        <div class="details-content">
            {{ noticeContent }}
        </div>
    </div>
</template>

<script>
export default {
    name: "NoticeDetails",
    data() {
        return {
            noticeId: '',  // 公告id
            noticeContent: '',  // 公告内容
        };
    },
    mounted() {
        this.noticeId = this.$route.params.noticeId;
        this.getNoticeDetail();
    },
    methods: {
        getNoticeDetail() {
            this.fetchget("/api/getAnnounceDetail", {id: this.noticeId}).then(res => {
                if(res.code == 200) {
                    this.noticeContent = res.data.content;
                }
            });
        },
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
#NoticeDetails{
    padding-top: 1.2rem;
    box-sizing: border-box;
    height: 100vh;
    .details-content{
        width: 100%;
        height: 100%;
        padding: 10px;
        font-size: 16px;
    }
}
</style>