<template>
    <el-button v-throttle="3000" type="primary" @click="save">
        保存-节流
    </el-button>
</template>

<script setup lang="ts">
const save = () => {
    console.log('value');
    
}
</script>

<style></style>