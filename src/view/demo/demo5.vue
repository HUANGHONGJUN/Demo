<template>
    <div>
        <span>{{ aaa.b }}</span>
        <h1>{{ bbb }}</h1>
        <button @click="change">asd</button>
    </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';
export default {
    name: "demo5",
    setup() {
        const aaa = reactive({
            b:1
        })
        const bbb = toRef(aaa,'b');
        const ccc = toRefs(aaa);
        const  change = () => {
            // bbb.value++
            ccc.b.value++;
        }
        return { aaa, bbb, change }
    }
}
</script>

<style></style>