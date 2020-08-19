<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- tag='button' 渲染button标签 -->

    <!-- 一。使用的方式： 1.<router-link></router-link>方式 -->
    <!-- <router-link to="/home" tag='button' replace>首页</router-link>
    <router-link to="/about" tag='button' replace>关于</router-link> -->

    <!-- replace active-class='active'替换类名为 active -->
    <!-- <router-link to="/home" tag='button' replace active-class='active'>首页</router-link>
    <router-link to="/about" tag='button' replace active-class='active'>关于</router-link> -->

    <router-link to="/home" tag='button' replace>首页</router-link>
    <router-link to="/about" tag='button' replace>关于</router-link>

    <!-- 二。第一种传递参数写法代码 -->
    <!-- <router-link v-bind:to="'/user/'+userId" tag='button' replace>用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:'188'}}" tag='button' replace>档案</router-link> -->
    <!-- 
      query的类型：
      。配置路由格式：/router,也就是普通配置
      。传递的方式：对象中使用query的key作为传递方式
      。传递后形成的路径：/router?id=123,/router/?id=abc
    -->
    
    <!-- 一。使用的方式： 2.JavaScript代码方式 -->
    <!-- 二。第二种传递参数写法代码 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

   <!-- <keep-alive></keep-alive>使用keep-alive包裹动态组件时，会缓存不活动的组件实例，
   而不是销毁它们(在切换时会缓存homenews和profile组件) -->
   <keep-alive exclude="User,Profile">
      <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      userId:'zhangsan',
    }
  },  
  // 第二种传递参数写法代码
  methods:{
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push=>pushState
      this.$router.push('./home')
      // this.$router.replace('./home')
    },
    aboutClick() {
      this.$router.push('./about')
      // this.$router.replace('./about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path:'/profile',
        query: {
          name:'Amsi',
          age:18,
          height:166
        }
      })
    }
  }
}
</script>

<style>
  /* .router-link-active {
    color:red
  } */

  .active {
    color:red
  }
</style>
