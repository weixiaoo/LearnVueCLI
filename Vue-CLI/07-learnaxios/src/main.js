import Vue from 'vue'
import App from './App'
import Axios from 'axios'
// import { request } from 'http'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// // 1.axios的基本使用
// Axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// Axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   // 专门针对get请求的参数拼接
//   params: {
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })

// 2.axios发送并发请求
// Axios.all([Axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),Axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   type:'sell',
//   page:5
// })]).then(results => {
//   console.log(results);
// })
// Axios.all([Axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),Axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   type:'sell',
//   page:5
// })]).then(Axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 3.axios 全局配置信息相关
// Axios.defaults.baseURL = 'http://123.207.32.32:8000'
// Axios.defaults.timeout = 5000
// Axios.all([Axios({
//   url:'/home/multidata'
// }),Axios({
//   url:'/home/multidata',
//   type:'sell',
//   page:5
// })]).then(Axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 4.创建对应的axios的实例
// const instance1 = Axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = Axios.create({
//   baseURL:'http://333.111.33.33:8000',
//   timeout:10000,
//   // headers:{}
// })

// 5.封装request模块
import {request} from './network/request'

// request({
//   url:"/home/multidata",
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// request({
//   baseConfig: {
//
//   },
//   success:function(res) {
//
//   },
//   failure:function(err) {
//
//   }
// })

request ({
  url:"/home/multidata",
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})