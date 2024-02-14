<template>
<div>
    <span>PiniaDemo</span>
    <!-- <el-button @click="storereset">重置按钮按钮</el-button>
    <el-button @click="onChangestore">+</el-button> -->
    <el-button @click="setMessage">发送信息</el-button> 
    <!-- <p>{{ ipC }}</p> -->
</div>  
</template>

<script>
import {useStore} from '../pinia/index'

// import { ipcApiRoute, specialIpcRoute } from '../publicfun/EletronApis/main';
// import { ipc } from '../publicfun/EletronApis/ipcRenderer';

// import {getipc} from '../publicfun/EletronApis/ipc.js'
import {ref} from 'vue'

export default {
    name:"PiniaDemo",
    setup(){
        const store = useStore()
        
        const add = () => {
            store.count++;
        }

        const storereset = () => {
            store.$reset()
        }

        const onChangestore = () => {
            
            store.changeCount(100)
        }
        
        let ipC = ref(null);
        // const setMessage = () => {
        //     ipc.invoke(ipcApiRoute.messageShow, '').then(r => {
        //         console.log(r);
        //    })
        // }

       return {store, add, storereset, onChangestore, ipC}
    }
}
</script>

<style>

</style>