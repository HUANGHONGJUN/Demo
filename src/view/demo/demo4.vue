<template>
<el-button @click="setloc">按钮</el-button>
</template>

<script>
export default {
    name:"demo4",
    setup(){
        const setloc = () => {
            localStorage.setItem('Test','');
        }

        return {setloc}
    }
}
</script>

<style>

</style>