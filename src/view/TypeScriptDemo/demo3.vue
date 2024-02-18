<template>
    <!-- <el-select v-model="Value" placeholder="Select" style="width: 240px">
        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: var(--el-text-color-secondary);font-size: 13px;">{{ item.value }}</span>
        </el-option>
    </el-select> -->
    <el-input v-model="Value" :suffix-icon="ArrowUp" @blur="blurInput" @focus="focusInput" style="width: 250px;position: relative;"></el-input>
    <transition name="el-zoom-in-top">
    <div class="Select-box" v-if="unfold">
    <div class="Select-List">
        <ul>
            <li v-for="item in cities" :key="item.value" @click="selectcity(item.label, item.value)"><span :class="{ action: actionValue === item.value }">{{ item.label }}</span></li>
        </ul>
    </div>
    <div class="Select-List2" v-show="isShow">
        <ul>
            <li v-for="item in cityType" :key="item.value" @click="selecttype(item.label, item.value)"><span :class="{ action: actiontypeValue === item.label }">{{ item.label }}</span></li>
        </ul>
    </div>
    </div>
    </transition>
</template>

<script setup lang="ts">
import { Calendar, Search, ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { ref } from 'vue';

let Value = ref('');
const cities: Array<{ label: string; value: string }> = [
    { label: 'Shanghai', value: 'shanghai' },
    { label: 'Beijing', value: 'beijing' },
    { label: 'Chengdu', value: 'chengdu' },
    { label: 'Shenzhen', value: 'shenzhen' },
    { label: 'Guangzhou', value: 'guangzhou' },]
const cityType: Array<{ label: string; value: number }> = [
    {label: '大城市', value: 1},
    {label: '二线城市', value: 2},
];
let isShow = ref(false);
const unfold = ref(false);
const actiontypeValue = ref<string>(''); // 右侧选择
const actionValue = ref(''); // 高亮显示
const cityValue = ref('');

const focusInput = () => {
    console.log('聚焦');
    unfold.value = true;
}

const blurInput = () => {
    // unfold.value = false;
    console.log("失焦");
}

const selectcity = (value: string, key: string) => {
    cityValue.value = value; // 保存cityValue的值
    actionValue.value = key;
    isShow.value = true; // 显示右侧选择框
    actiontypeValue.value = (Value.value.split('-')[0] == value ? Value.value.split('-')[1] : "") as string;
}

const selecttype = (value: string, key: number) => {
    Value.value = cityValue.value + '-' + value; // 更新输入框的值
    actiontypeValue.value = value;
}


</script>

<style>
.Select-box {
    display: flex;
    position: absolute;
    z-index: 1000;
}
.Select-List {
    max-width: 250px;
    min-width: 250px;
    border-radius: 14px;
    border: 1px solid #dcdfe6;
    padding: 10px 0;
    box-shadow: 0px 05px 10px rgba(0, 0, 0, 0.5);
}
.Select-List ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.Select-List ul li {
    padding: 10px;
}
.Select-List ul li:hover {
    background: #f5f7fa;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    cursor: pointer;
}

.Select-List2 {
    max-width: 250px;
    min-width: 250px;
    border-radius: 14px;
    border: 1px solid #dcdfe6;
    padding: 10px 0;
    margin: 0 0 0 4px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}
.Select-List2 ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.Select-List2 ul li {
    padding: 10px;
}
.Select-List2 ul li:hover {
    background: #f5f7fa;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    cursor: pointer;
}


.action {
    color: #409eff;
}


</style>