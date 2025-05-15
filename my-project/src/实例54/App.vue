<template>
    <div>
        <h4>当前计数：{{counter}}</h4>
        <counter-opertion @add='addOn' @sub='subOn'/>
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
                this.counter++
            },
            subOn(){
                this.counter--
            }
        }
    }
</script>