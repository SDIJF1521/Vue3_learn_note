<template>
    <div class='show-msg'>
        <h4>{{title}}</h4>
        <div>{{content}}</div>
    </div>
</template>
<script>
    export default {
        props:{
            title:String,
            content:{
                type:String,
                required:true,
                default:'默认值'
            }
        }
    }
</script>