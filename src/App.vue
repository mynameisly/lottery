<!--
 * @Description: APP
 * @FilePath: \wb_litoob\src\App.vue
 * @LastEditTime: 2020-07-06 11:04:40
--> 
<template>
    <div id="app">
        <transition
            style="animation-duration: 200ms"
            enter-active-class="animated lightSpeedIn"
            appear
        >
            <router-view />
        </transition>
    </div>
</template>
<script>
export default {
    name: "APP",
    data() {
        return {};
    },
    methods: {},
    created() {
       
    }
};
</script>
<style lang="scss">
* {
    font-size: 12px;
    box-sizing: border-box;
}
</style>
