<template>
    <div class = 'app'>
        <show-msg title = '标题' content = '内容'></show-msg>
        <show-msg :title = 'title' :content='content'></show-msg>
        <show-msg :title = 'msg.title' :content='msg.content'></show-msg>
        <show-msg v-bind='msg'></show-msg>
    </div>
</template>
<script>
    import ShowMsg from './ShowMsg.vue'
    export default {
        components:{
            ShowMsg
        },
        data() {
            return{
                title:'标题 title',
                content:'内容 content',
                msg:{
                    title:'标题 msg.title',
                    content:'内容 content'
                }
            }
        }
    }
</script>