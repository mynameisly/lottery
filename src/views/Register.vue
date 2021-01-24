<!--
 * @Description: 注册页面
 * @FilePath: \wb_litoob\src\views\Register.vue
 * @LastEditTime: 2020-06-27 19:39:52
--> 
<template>
    <div class="Register">注册页面</div>
</template>
<script>
// const reg = /1\d{10}/;
// import { getQueryVariable } from "@uit/comtool";
export default {
    name: "Register",
    data() {
        return {};
    },
    methods: {
        // 验证码DOM 操作
        countDwon(el, count) {
            el.innerHTML = count + "已发送";
            el.style.pointerEvents = "none";
            el.style.color = "#dddddd";
            let timer = setInterval(() => {
                count--;
                el.innerHTML = count + " 已发送";
                if (count === 0) {
                    el.innerHTML = "重新发送";
                    el.style.pointerEvents = "auto";
                    el.style.color = "#2558bc";
                    clearInterval(timer);
                }
            }, 1000);
        }
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>

</style>
