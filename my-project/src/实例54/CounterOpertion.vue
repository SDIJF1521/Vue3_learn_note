<template>
    <div>
        <button @click = 'incremet'>+1</button>
        <button @click = 'decremet'>-1</button>
    </div>
</template>
<script>
    export default {
        emits: ["add","sub"],
        methods:{
            incremet(){
                this.$emit('add')
            },
            decremet(){
                this.$emit('sub')
            }
        }
    }
</script>