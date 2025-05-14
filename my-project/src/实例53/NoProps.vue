<template>
    <div class = 'no-props'>
        <h4 :class="$attrs.class">{{$attrs.class}}-{{$attrs.name}}</h4>
    </div>
</template>
<script>
    export default {
        inheritAttrs:false
    }
</script>