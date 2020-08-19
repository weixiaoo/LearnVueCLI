import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cotegory = () => import('../views/cotegory/Cotegory')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes = [
  {
    path:'',
    redirect:'./home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cotegory',
    component:Cotegory
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  // 清除url的#符号(运行后网址中显示地#符号)
  mode:"history"
})

// 3.导出router
export default router