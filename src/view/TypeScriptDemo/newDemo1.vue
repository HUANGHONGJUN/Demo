<template>
<div>
    <span>{{ hello }}</span>
    <span>{{ count }}</span>
    <span>{{ isDone }}</span>
    <span>{{ any }}</span>
    <span>{{ tsArrString }}</span>
    <code>codeTag</code>
</div>  
</template>

<script setup lang="ts">
import { ref } from 'vue';

//基本数据类型 响应式
const count = ref<number>(0); // 数字类型
const count3 = ref<number | string>('99'); // 数字类型或字符串类型
const isDone = ref<boolean>(false); // 布尔类型
const hello = ref<string>('world'); // 字符串类型 
const any = ref<any>(2); // 任意类型
const tsArr = ref<Array<number>>([1,2,3]); // 数组类型  ref<nuber[]>([1,2,3])
const tsArrString = ref<Array<string>>(['1' ,'2', '3']); // 数组类型但字符串
const tesArrObj = ref<Array<object>>([{name:'张三',age:18},{name:'李四',age:20}]); // 数组类型但对象
const tsObj = ref<object>({name:'张三',age:18}); // 对象类型
const tsFun = ref<Function>(()=>{console.log('hello')}); // 函数类型
const tsVoid = ():void => { // void类型 用于标识方法返回值的类型，表示该方法没有返回值。
    console.log('void: 表示该方法没有返回值');
}   
const tsFun2 = ():number => { // 返回值是number类型
    return 123;
}
const tsNull = ref<null>(null); // null类型
const tsUndefined = ref<undefined>(undefined); // undefined类型
const tsNever = ref<never>(null); // never类型 表示永远不会有值的一种类型
const tsTuple = ref<[string,number]>(['1',2]); // tuple 元组类型 就是固定长度并且固定类型数组
const tsEnum = ref<{readonly id:number,name:string}>({id:1,name:'张三'}); // 枚举类型
//定义参数类型
const teFun = (x:number|string,y:string) => {
    console.log(typeof x,typeof y);
}
teFun(1,'2');

//基本数据类型 非响应式
const count1:number = 0;
const isDoen1:boolean = false;
const hell:string = 'world';
const any1:any = 2;
const tsArr1:Array<number> = [1,2,3]; // 或者 tsArr1:number[] = [1,2,3];
const tsArrObj:Array<object> = [{name:'张三',age:18},{name:'李四',age:20}];
const tsArrString1:Array<string> = ['1' ,'2', '3'];
const tsObj1:object = {name:'张三',age:18};
const tsFun1:Function = () =>{console.log('hello')};
const tsfun4:Function = (x:number|string,y:string) => { console.log(x,y) };
const teVoid = ():void => { console.log('void: 表示该方法没有返回值');}
const teTuple2:[string,number] = ['1',2];  


// 接口
interface testinterface {
    firstName: string | number,
    lastName: string
}
// 函数使用
const interfaceTest = ({firstName,lastName}:testinterface) =>{
    return firstName + lastName;
}
// 对象使用
const interfaceTest2:testinterface = {
    firstName: '得闲饮茶',
    lastName: '得闲饮茶2'
}
interface arrinterface {
    //[索引名称: index : 索引类型:number ]: 数组类型 string
    [index:number]:string
}
const arrinterfaceTest:arrinterface = ['1','2','3'];

// 泛型 T type类型 K key v 键 value 值

// 泛型 - 接口
interface Pair<T,K> {
    key:K,
    TypeValue:T
}
// 变量写法
let pair:Pair<number,string> = {
    key:'1',
    TypeValue:1
}
// 普通函数写法 格式: 函数名称<标识符>(接口变量:标识符):接口名称<标识符>{}
function getPair<T,K>(TypeValue:T, key:K):Pair<T,K>{
    return {
        key,
        TypeValue
    }
}
let PairValue = getPair<number,string>(1, '1');
// 箭头函数写法
const getPair2 = <T,K>(TypeValue:T, key:K):Pair<T,K> =>{  
    return {
        key,
        TypeValue
    }
}

// 泛型 - 函数
// 格式: 函数名称 = <标识符>(参数名: 标识符) => { 返回值 };
const getPair3 = <T>(arr: T[]) =>{
    return arr;
}

getPair3<number>([1,2,3,4, 5]);
// 格式: function 函数名称<标识符>(变量: 标识符){ 返回值 }
function getPair4<T>(arr: T[]){
    return arr;
}

// 函数默认值 默认给T赋值string类型, 但是TypeScirpt会根据参数推断出T的类型所以不会报错
const getPair5 = <T = string>(arr: T[]) => {
    return arr;
}
// 下面两个都不会报错
getPair5<number>([1,2,3,4,5]);
getPair5([1,2,3,4]);

// 只读数组 ReadonlyArray 表示不能修改这个数组
function doStuff(values: ReadonlyArray<string>) {
  values.push("hello!"); // 报错
}


// 断言
// 格式: 变量名称 as 类型
let myVariable: any = "这是一个字符串";
let myStringLength: number = (myVariable as string).length;


// 因为函数里面判断了除了Date类型的返回值还有string类型的返回值，dealDate只需要string类型，所以需要通过as type去断言
function dateFormatter(d: Date | string, f?: string) {
    const date = new Date(d);
    if (f) {
        return `${date.getFullYear()}${f}${date.getMonth() + 1}${f}${date.getDate()}`
    } else {
        return new Date(d);
    }
}
function dealDate(d: string) {
    return new Date(d).getTime();
}
const date = dealDate(dateFormatter('2020-7-28', '/') as string);

console.log(date);

// 交叉类型
// 交叉类型是将多个类型合并为一个类型, 合并后的类型包含了所有类型的特性(大部分情况下用于合并接口)
type Type1 = { name: string };
type Type2 = { age: number };
type Type3 = Type1 & Type2;
const obj: Type3 = {
    name: '123',  
    age: 123
}

interface a1<T> {
    aaa:T
}
interface a2<T> {
    bbb:T
}
type a3 = a1<string> & a2<number>;
const obj2: a3 = {
    aaa:'123',
    bbb: 123
}
console.log('obj2', obj2);


</script>


<style>

</style>