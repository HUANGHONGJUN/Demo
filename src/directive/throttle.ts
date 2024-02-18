import type { DirectiveBinding } from 'vue';

/**  
 @DirectiveBinding vue.js中的一个对象，用户直接绑定指令的数据流，类型允许你在 TypeScript 代码中定义和使用直接绑定指令
***/

function throttlefun(app: any) {
    app.directive('throttle', {
        mounted(el: any, binding: DirectiveBinding) {
            console.log('throttle', el, binding);
            let { throttleTime } = binding.value;
            if (!throttleTime) {
                throttleTime = 1000
            }
            let timer: any;
            let disable = false;
            el.addEventListener('click', (event: any) => {
                if (timer) {
                    clearTimeout(timer)
                }
                if (!disable) {
                    disable = true
                } else {
                    event && event.stopPropagation(); // 阻止事件冒泡
                }

                timer = setTimeout(() => {
                    timer = null;
                    disable = false;
                }, throttleTime)
            }, true)
        },
    })
}

export default throttlefun;