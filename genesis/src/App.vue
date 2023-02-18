<script setup lang="ts">
import Home from './components/Home.vue'
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <Home />
</template>

<style>
*,html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  min-width: 100vw;
  min-height: 100vh;
  font-size: 16px;
  font-family: Inter;
}
</style>
