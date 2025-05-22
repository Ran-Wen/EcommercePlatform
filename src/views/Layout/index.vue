<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFooter />
  <router-view />

</template>

<script setup>
  import LayoutHeader from './components/LayoutHeader.vue'
  import LayoutFooter from './components/LayoutFooter.vue'
  import LayoutNav from './components/LayoutNav.vue'
</script>

<style></style>