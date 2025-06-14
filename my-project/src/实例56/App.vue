<template>
    <div>
        <h4>当前计数：{{counter}}</h4>
        <counter-opertion @add='addOn' @sub='subOn' @addN='addNum'/>
    </div>
</template>
<script>
    import CounterOpertion from './CounterOpertion.vue'
    export default {
        components: {
            CounterOpertion
        },
        data(){
            return {
                counter:0
            }
        },
        methods:{
            addOn(){
                this.counter++;
            },
            subOn(){
                this.counter--;
            },
            addNum(num,name,age){
                console.log(name,age);
                this.counter+=num;
            }
        }
    }
</script>