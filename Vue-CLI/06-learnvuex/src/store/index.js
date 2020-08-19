import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state:{
        // 这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化，
        // 当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新
        counter:1000,
        students:[
            {id:110,name:'why',age:18},
            {id:111,name:'kobi',age:24},
            {id:112,name:'james',age:30},
            {id:113,name:'cully',age:10}
        ],
        info: {
            name:'kobe',
            age:40,
            height:188
        }
    },
    // mutations提交风格
    // 下面通过commit进行提交是一种普通的方式
    // Vue还提供了另外一种风格，他是包含type属性的对象
    mutations: {
        // 方法
        // 事件类型：increment为事件类型
        // 回调函数：
        //       (state){
        //     state.counter++
        // },
        // 为回调函数
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        // count stu参数称为mutation的载荷(Payload)
        // 传多个参数
        // 1.普通写法提交
        // incremenCount(state,count) {   
            // state.counter += count
        // },
        // 2.特殊写法提交
        incremenCount(state,payload) {   
            state.counter += payload.count
        },
        addstudent(state,stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            state.info.name ='code'
            // 添加地点 该方式做不到响应式
            // state.info['address'] = 'beijing'
            // Vue.set(state.info,'address','beijing')
            // 该方式做不到响应式
            // delete state.info.age
            // Vue.delete(state.info,'age')
        }
    },
    actions: {
        // context上下文
        aUpdateInfo(context,payload) {
            setTimeout(() => {
                context.commit('updateInfo')
                console.log(payload.message);
                payload.success();
            },1000)
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state,getters) {
            return getters.more20stu.length
        },
        moreAgeStu(state) {
            // return function(ages) {
            //     return state.students.filter(s => s.age > ages)
            // }
            return ages => {
                return state.students.filter(s => s.age > ages)
            }
        }
    },
    modules: {

    }
})

// 3.导出store独享
export default store