<template>
    <div class = 'explame'>
        <h4 class = 'red'>Red</h4>
        <h4 class = 'green'>Grenn</h4>
        <h4 class = 'yellow'>yellow</h4>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                color1:'red',
                color2:'green'
            }
        },
        computed:{
            color3(){
                return 'yellow'
            }
        }
    }
</script>
<style>
    .red {
        color: v-bind(color1);
    }
    .green{
        color: v-bind(color2);
    }
    .yellow{
        color: v-bind(color3);
    }
</style>