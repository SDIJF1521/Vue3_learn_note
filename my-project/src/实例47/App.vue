<template>
    <div id = 'app'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import Main from './Main.vue'
    export default {
        components: {
            Header,
            Footer,
            Main
        }
    }
</script>
<style>
    .header, .main, .footer{
        border: 1px solid #999;
        margin-bottom: 4px
    }
</style>