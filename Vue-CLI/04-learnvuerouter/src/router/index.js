// 配置路由相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载的使用
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1. 通过Vue.use(传入插件),安装插件
Vue.use(VueRouter);

// 2. 创建VueRouter对象 
const routes = [   
    {
        path:'',
        // redirect 重定向(默认路径)
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home,
        meta:{
            title:'首页'
        },
        children:[
            // {
            //     path:'',
            //     redirect:'homenews'
            // },
            {
                path:'homenews',
                component:HomeNews
            },
            {
                path:'homemessage',
                component:HomeMessage
            }
        ]
    },
    {
        path:'/about',
        component: About,
        meta:{
            title:'关于'
        },
    },
    {
        path:'/user/:abc',
        component: User,
        meta:{
            title:'用户'
        },
    },
    {
        path:'/profile',
        component:Profile,
        // 全局导航守卫(动态修改标题)
        meta:{
            title:'档案'
        },
    }
]
const router = new VueRouter({
    // 配置路由和组件之间的对应关系
    routes,
    // 清除url的#符号(运行后网址中显示地#符号)
    mode:'history',
    linkActiveClass:'active'
})

// 前置守卫(guard)
// 全局导航守卫(动态修改标题)
router.beforeEach((to,from,next) => {   
    // 从from跳转到to
    document.title = to.matched[0].meta.title
    // console.log(to);
    next()
})

// 后置钩子(hood)
router.afterEach((to,from) => {

})

// 3.将router对象传入到Vue实例中
export default router