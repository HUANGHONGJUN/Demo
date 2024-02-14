import { onMounted } from 'vue'
const directives = (app) => {
    app.directive('el-select-loadmore', {
        bind(el, binding) {
            console.log('asd', el, binding);
            // 获取element-ui定义好的scroll盒子
            const SELECTWRAP_DOM = el.querySelector(".el-select-dropdown")
            console.log('asd', SELECTWRAP_DOM);
            SELECTWRAP_DOM.addEventListener("scroll", function () {
                /*   scrollHeight 获取元素内容高度(只读)
                     scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
                    clientHeight 读取元素的可见高度(只读)
                      */
                const condition = this.scrollHeight - this.scrollTop <= this.clientHeight
                // 判断滚动到底部  (condition:如果元素滚动到底, 下面等式返回true, 没有则返回false)
                if (condition) {
                    // binding.value 为自定义指令绑定的值，因为绑定的是个方法，所以这里是方法调用，触发指令后执行加载数据
                    binding.value()
                }
            })
        }
    })

}

export default directives