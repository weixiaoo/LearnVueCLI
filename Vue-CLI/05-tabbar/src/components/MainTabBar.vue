<template>
  <tab-bar>
      <tab-bar-item link="/home">
      <!-- 可以在bulid/webpack.base.conf.js文件中alias对象添加别名 -->
      <!-- 起别名后用 '~ + 别名' 可以直接找到路径 -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/cotegory">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="item-icon" src="../assets/img/tabbar/shop-cart.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/shop-cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
    // 可以在bulid/webpack.base.conf.js文件中alias对象添加别名
    import TabBar from 'components/tabbar/TabBar'
    import TabBarItem from 'components/tabbar/TabBarItem'

    export default {
        name:'MainTabBar',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style>

</style>