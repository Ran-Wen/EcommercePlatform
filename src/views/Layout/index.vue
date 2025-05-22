<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav />
  
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
  

</template>

<script setup>
  import LayoutFixed from './components/LayoutFixed.vue'
  import LayoutHeader from './components/LayoutHeader.vue'
  import LayoutFooter from './components/LayoutFooter.vue'
  import LayoutNav from './components/LayoutNav.vue'
</script>

<style></style>