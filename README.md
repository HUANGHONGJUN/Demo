# 动态路由

index.js
import { createRouter, createWebHistory } from 'vue-router'


// const Home = () => import('../components/Home.vue')

const AutoAddRouters = () => {
    const routerlist = import.meta.glob('../components/*.vue');
    let list = [];
    list =  Object.keys(routerlist).map((path) => {
        const name = path.match(/\.\.\/components\/(.*)\.vue$/)[1].toLowerCase();
        const routePath = `/${name}`;
        console.log('path', routerlist[path]);
        if(routePath === '/Home') {
          return {
            path:"/",
            name:name,
            component:routerlist[path]
          }
        }
        return {
            path:routePath,
            name:name,
            component:routerlist[path]
        }
    })

    return list
}
const list = AutoAddRouters();
console.log('得闲饮茶', list);

const router = createRouter({
    history: createWebHistory(),
    routes: list
})

console.log('AllRouter', router.getRoutes());


export default router

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

