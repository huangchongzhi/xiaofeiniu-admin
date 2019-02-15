import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'
import CategoryList from './views/CategoryList.vue'
import CategoryAdd from './views/CategoryAdd.vue'
import CategoryDelete from './views/CategoryDelete.vue'
import CategoryUpdate from './views/CategoryUpdate.vue'
import DishList from './views/DishList.vue'
import DishAdd from './views/DishAdd.vue'
import DishDelete from './views/DishDelete.vue'
import DishUpdate from './views/DishUpdate.vue'
import OrderList from './views/OrderList.vue'
import Security from './views/Security.vue'

Vue.use(Router)
//整个项目的路由词典：访问路径 <=> 视图组件
export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/main', 
      component: Main,
      children: [
        {path:'',redirect:'/table/list'},                   // 首页
        {path:'/settings',component:GlobalSettings},        // 设置页面
        {path:'/table/list',component:TableList},           // 显示餐桌
        {path:'/table/add',component:TableAdd},             // 添加餐桌
        {path:'/table/delete',component:TableDelete},       // 删除餐桌
        {path:'/category/list',component:CategoryList},     // 显示类别
        {path:'/category/add',component:CategoryAdd},       // 添加类别
        {path:'/category/delete',component:CategoryDelete}, // 删除类别
        {path:'/category/update',component:CategoryUpdate}, // 修改类别
        {path:'/dish/list',component:DishList},             // 显示菜品
        {path:'/dish/add',component:DishAdd},               // 添加菜品
        {path:'/dish/delete',component:DishDelete},         // 删除菜品
        {path:'/dish/update',component:DishUpdate},         // 修改菜品
        {path:'/order/list',component:OrderList},           // 
        {path:'/security',component:Security},              // 
      ]
    },
    { path: '*', component: NotFound },
  ]
})
