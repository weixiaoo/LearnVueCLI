<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :class="{active:isActive}">
            <slot name="item-text"></slot>
        </div>        
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
    </div>   
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        link:String
    },
    data() {
        return {
            // isActive:true
        }
    },
    computed: {
        isActive() {
            // console.log(this.$route);
            return this.$route.path.indexOf(this.link) !== -1
        }
    },
    methods: {
        itemClick() {
            // console.log('aaa');
            this.$router.push(this.link)
        }
    }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active {
      color: rgb(236, 167, 167);
  }

</style>