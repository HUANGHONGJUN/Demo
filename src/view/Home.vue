<template>
<div >
    <!-- <Test @TestButton="TestButton"></Test> -->
</div>  
</template>

<script>
// import Test from "../components/Test.vue"
export default ({
    name:"Home",
    // components:{Test},
    setup(props) {
        // function TestButton(val) {
        //     console.log('asdasd', val);
        // }
        // return {TestButton}
    }
})
</script>

<style>
.Testfigcaption {
    width: 100px;
    height: 100px;
    border-radius: 14px;
    border: 1px solid beige;
}
.Testfigcaption img {
    transition: opacity .3s ease;
}
.Testfigcaption img:hover {
    opacity: 1;
}
.Testfigcaption figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}


</style>