<template>
  <div id="app">
    <h2>-------APP内容---------</h2>
    <h2>{{message}}</h2>
    <button @click="addition">+</button>
    <span>{{$store.state.counter}}</span>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button  @click="addStudent">添加学生</button>

    <h2>---------APP内容 getters相关信息--------------</h2>
    <h2>counter的平方：{{$store.getters.powerCounter}}</h2>
    <h2>超过20岁：{{$store.getters.more20stu}}</h2>
    <h2>超过20岁个数：{{$store.getters.more20stuLength}}</h2>
    <h2>超过8岁：{{$store.getters.moreAgeStu(8)}}</h2>

    <h2>---------APP内容 info对象的内容是否是响应式--------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-------Hello Vuex内容----------------</h2>
    <hello-vuex></hello-vuex>
    <!-- <hello-vuex :counter='counter'></hello-vuex> -->
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
       message:'hello vuex',
    }
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('increment')
    },
    addCount(count) {
      // payload:负载
      // 通过commit调用
      // 1.commit进行提交是一种普通的方式
      // this.$store.commit('incremenCount',count)

      // 2.特殊的提交封装
      this.$store.commit({
        type:'incremenCount',
        count
      })
    },
    addStudent() {
      const stu = {id:114,name:'alan',age:55}
      this.$store.commit('addstudent',stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      this.$store.dispatch('aUpdateInfo', {
        message:'我是携带的信息',
        success:() => {
         console.log('里面已经完成了');
        }
      })
    }
  }
}
</script>

<style>

</style>
