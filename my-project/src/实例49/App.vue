<template>
    <h4>App Title</h4>
    <hello-vue></hello-vue>
</template>
<script>
import HelloVue from './Hello_Vue.vue'
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
:deep(.hello) {
  color: rgb(16, 213, 52) !important; /* 需要 !important 覆盖子组件 scoped 样式 */
  text-decoration: underline;
}
</style>