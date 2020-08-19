import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes = [
  
]
const router = new VueRouter({
  routes,
  mode:'history'
})

// 导出router
export default router