<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key, 破坏复用机制，强制销毁重建，解决路由缓存问题 -->
   <!-- 这个解决方式过于粗暴，就算两个页面由相同的东西，也会全部替换，重新发送所以普请求 -->
  <!-- <router-view :key="$route.fullPath"/> -->
  <router-view/>
  <LayoutFooter />
  

</template>

<script setup>
  import {useCategoryStore} from '@/stores/categoryStore'
  import LayoutFixed from './components/LayoutFixed.vue'
  import LayoutHeader from './components/LayoutHeader.vue'
  import LayoutFooter from './components/LayoutFooter.vue'
  import LayoutNav from './components/LayoutNav.vue'
  import { onMounted } from 'vue'

  //触发获取导航类别的action
  const categoryStore=useCategoryStore()
  //使用categoryStore实例对象调用getCategory方法
  onMounted(()=>categoryStore.getCategory())
</script>

<style></style>