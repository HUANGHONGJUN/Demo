import { defineStore } from "pinia";

export const useStore = defineStore('main',{
    state: () => {
        return {
            count:0,
            name:'得闲饮茶'
        }
    },
    actions: {
        // 修改数据
        changeCount(count){
            this.count = count;
        }
    }
})