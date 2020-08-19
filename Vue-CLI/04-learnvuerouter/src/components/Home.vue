<template>
  <div>
      <h2>我是首页</h2>
      <p>我是首页内容，哈哈哈</p>
      <router-link to="/home/homenews">新闻</router-link>
      <router-link to="/home/homemessage">消息</router-link>
      <router-view></router-view>
      <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
    name: "Home",
     data() {
        return {
            message:'hello vue',
            path:'/home/homenews',
        }
    },
    // 创建
    created() {
        console.log('home created');
    },
    // 销毁
    destroyed() {
        console.log('home destroyed');
    },
    // 这两个函数，只有该组件被保持了状态使用了keep-alive时，才有效
    activated() {
      this.$router.push(this.path)
      // console.log('activated');
    },
    // deactivated() {
    //    console.log('deactivated');
    // },
    beforeRouteLeave(to,from,next) {
      // console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
}
</script>

<style>
    
</style>