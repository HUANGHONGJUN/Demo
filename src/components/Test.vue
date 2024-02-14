<template>
<div>
    <span>得闲饮茶</span><el-button type="primary" @click="TestButton">测试</el-button>
</div>  
</template>

<script setup>
const emit = defineEmits(['TestButton']);
function TestButton() {
    emit('TestButton', '的弦音擦汗')
}
</script>

<style>

</style>