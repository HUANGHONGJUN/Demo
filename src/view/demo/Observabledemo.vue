<template>
    <div>
        <el-button @click="click">点击</el-button>

        <div :class="Textbox" contenteditable="true" @blur="onblur">
        </div>
            
    </div>
</template>

<script>
import Observable from "../../utils/Observable";
import { ref } from 'vue';
export default {
    name: "Observabledemo",
    setup() {
        // const observable = new Observable();

        const click = () => {
            // 将要通知的内容发送出去
            Observable.notify("User click")
        }

        let Textbox = ref('Textbox');
        const onblur = () => {  
            console.log('实缴');
            Textbox.value = 'Textbox2';
        }
        return { click, onblur, Textbox }
    }
}
</script>

<style scoped>
.Textbox {
    min-width: 200px;
    max-width: 200px;
    min-height: 100px;
    background: #eee;
    border-radius: 8px;
}
.Textbox2 {
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    background: #eee;
    border-radius: 8px;
    transition : 3s;
}

[contenteditable='true'] {
  caret-color: red;
}
</style>