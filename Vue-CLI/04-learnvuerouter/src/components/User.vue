<template>
  <div>
      <h2>我是用户</h2>
      <p>我是用户界面，嘿嘿嘿</p>
      <!-- 第一种方式代码 -->
      <h2>{{userId}}</h2>
      <!-- 第二种方式代码(一行) -->
      <h2>{{$route.params.abc}}</h2>
      
      <!-- 
        params的类型：
        。配置路由格式：/router/:id
        。传递的方式：在path后面跟上对应的值
        。传递后形成的路径：/router/123,/router/abc
      -->
  </div>
</template>

<script>
export default {
  name: "User",
  // 创建
  created() {
      console.log('user created');
  },
  // 销毁
  destroyed() {
      console.log('user destroyed');
  },

  // 第一种方式代码
  computed: {
    userId() {
      return this.$route.params.abc;
      // 所有的组件都继承自Vue类的原型
      // 区分$route和$router 
      // console.log(this.$router);
      // console.log(this.$route);
   }
  }
}
</script>

<style>

</style>