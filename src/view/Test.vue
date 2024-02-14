<template>
<div class="content">
    <div v-for="(item, index) in color" :key="index" :style="{background:item}" class="colordiv" >
        <img  alt="" style="width:200px;height: 200px;" v-lazy="bar">
    </div>
</div>
</template>

<script>
import bar from '../../public/bar.png'
import { reactive, ref } from 'vue'
export default {
    name:"Test",
    setup(props) {
        // const vite = ref(vite);
        const color = reactive(['pink','red','blue','black','purple','Orange'])
        return {color,bar}
    }
}
</script>

<style>
.content {
    width: 100%;
    height: 100%;
}
.colordiv {
    width: 900px;
    height: 400px;
    margin: 10px;
    border-radius: 14px;
}
</style>