<!--
 * @Description: 主页面
 * @FilePath: \newPro\src\views\Home.vue
 * @LastEditTime: 2020-06-25 12:59:06
--> 
<template>
    <div class="home">
        <transition
            style="animation-duration: 200ms"
            enter-active-class="animated lightSpeedIn"
            appear
        >
            <router-view ref="main" />
        </transition>
        <FootNav />
    </div>
</template>

<script>
import FootNav from "@com/FootNav";
export default {
    name: "Home",
    components: {
        FootNav
    },
    methods: {},
    mounted() {
        
    }
};
</script>
<style lang="scss">
</style>
