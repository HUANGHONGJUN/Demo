<template>
<span>{{ num }}</span>
<span>{{ arr2 }}</span>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    name:'demo',
    setup() {
        //定义类型的"接口"
        interface Test {
            name:string
            age: string | number
        }

        const test:Test = reactive({
            name:'得闲饮茶',
            age:12
        })

        //定义一个普通的双重类型
        const num = ref<number | string>(99)

        // 定义一个函数
        const TSfun = ():string => {
            return 'TS'
        }
        num.value = TSfun()

        const TSfun2 = (x:number,y:number):number => {
            return x + y;
        }
        num.value = TSfun2(1,2)

        const TSfun3 = (x:string,y?:string) => {
            console.log('得闲' + x);
            console.log('不得' + y); // 没赋值 y = undefined
        }
        TSfun3('饮茶')

    
        const arr = [1,2,3,4,5,6,7,8];

        const arrfun = (arr:any[], chunk:number) => {
            let list:any = [];
            for (let i:number = 0; i < arr.length; i += chunk) {
                list.push(arr.slice(i, i + chunk));
            }
            return list;
        }
        
        let arr2 = ref<any>([])
        arr2.value = arrfun(arr, 2)


        return { num, arr2 }
    }
})
</script>

<style>

</style>

