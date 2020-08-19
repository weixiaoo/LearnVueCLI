<template>
  <div>
      <h2>我是关于</h2>
      <p>我是关于内容，嘻嘻嘻</p>
  </div>
</template>

<script>
export default {
    name: "About",
    // 创建
    created() {
        console.log('about created');
    },
    // 销毁
    destroyed() {
        console.log('about destroyed');
    },
}
</script>

<style>

</style>