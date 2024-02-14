import vite from '../../public/vite.svg'
const definedirective = (app) => {
    app.directive('lazy', {
        mounted(el, binding) {
            const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                if (isIntersecting) {
                    console.log('得闲饮茶');
                    observer.unobserve(el);
                    setTimeout(() => {
                        el.src = binding.value;
                        // el.src = vite;
                    },1000)
                } else {
                    el.src = vite
                }
            }, {
                threshold: 0.01
            })
            observer.observe(el);
        }
    })
}

export default definedirective