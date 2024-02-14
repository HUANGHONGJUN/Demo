import { createRouter, createWebHistory } from 'vue-router'
 
const AutoAddRouters = () => {
    const routerlist = import.meta.glob('../view/**/**.vue'); //搜索view目录下的所有带vue的文件
    let list = []
    list = Object.keys(routerlist).map((path) => {
        const name = path.match(/\.\.\/view\/(.*)\.vue$/)[1].toLowerCase();
        const routePath = `/${name}`;
        // console.log('path', routerlist[path]);
        return {
            path:routePath,
            name:name,
            component:routerlist[path]
        }
    })

    return list
}
let list = AutoAddRouters();

list.unshift({
    path:'/',
    redirect: {name: 'home'}
})


const router = createRouter({
    history: createWebHistory(),
    routes: list
})



export default router

