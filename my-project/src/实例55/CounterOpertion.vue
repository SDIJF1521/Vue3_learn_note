<template>
    <div>
        <button @click = 'incremet'>+1</button>
        <button @click = 'decremet'>-1</button>
        <input typr = 'text' v-model.number='num'>
        <button @click = 'incremetN'>+n</button>
    </div>
</template>
<script>
    export default {
        emits: ["add","sub","addN"],
        data(){
            return {
                num:0
            }
        },
        methods:{
            incremet(){
                this.$emit('add')
            },
            decremet(){
                this.$emit('sub')
            },
            incremetN(){
                this.$emit('addN',this.num,'why',18);
            }
        }
    }
</script>