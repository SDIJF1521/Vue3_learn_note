<template>
    <h4>App Titile</h4>
    <hello-vue></hello-vue>
</template>
<script>
    import HelloVue from './Hello_vue.vue'
    export default {
        components: {
            HelloVue
        }
    }
</script>
<style scoped>
    h4 {
        text-decoration: underline;
    }
</style>