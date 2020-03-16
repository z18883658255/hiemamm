// 导入vue
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//导入login组件
import Login from '../views/login/index.vue'
//导入useElement
import UseElement from '../views/useElement/index.vue'

//使用vue-router
Vue.use(VueRouter)
//创建一个新的vue对象
var router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', redirect: "/login" },
    { path: '/useElement', component: UseElement}
  ]
})

//将新的对象暴露出去
export default router