<template>
   <div>
        <h2>{{$store.state.counter}}</h2>
        <h2>{{$store.getters.powerCounter}}</h2>
        <h2>{{$store.getters.more20stu}}</h2>
        <h2>{{$store.getters.more20stuLength}}</h2>
        <h2>---------HelloVuex内容 info对象的内容是否是响应式--------------</h2>
        <h2>{{$store.state.info}}</h2>
   </div>
</template>

<script>
export default {
    name:'HelloVuex',
    props:{
        counter:Number
    }
}
</script>

<style>

</style>