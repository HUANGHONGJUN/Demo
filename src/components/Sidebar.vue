<template>
<div class="sidebal-layout" v-m>
    <div v-for="item in pathlist" class="path-button">
        <el-button @click="Pushroute(item)">{{ item }}</el-button>
    </div>
</div>  
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
export default {
    name:'Sidebar',
    setup(){
        const router = useRouter();
        const route = useRoute();
        const { options:{ routes } } = router;
        let pathlist = ref([]);
        pathlist.value = routes.map(item=>item.name).filter(item => item != null);

        // 跳转路由
        const Pushroute = (path) => {
            router.push(`/${path}`);
        }

        return { pathlist, Pushroute }
    }
}
</script>

<style  scoped>
.sidebal-layout {
    border: 1px solid #000;
    border-radius: 6px;
    padding: 10px;
}
.path-button {
    margin: 4px 0;
}
</style>