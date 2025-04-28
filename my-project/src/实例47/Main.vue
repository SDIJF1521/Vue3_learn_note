<template>
    <div class = 'main'>
        <main-banner></main-banner>
        <main-product></main-product>
    </div>
</template>
<script>
    // 1. 引入子组件
    import MainBanner from './MainBanner.vue'
    import MainProduct from './MainPorductList.vue'
    // 2. 注册子组件
    export default {
        components: {
            MainBanner,
            MainProduct
        }
    }
</script>