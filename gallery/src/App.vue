<template>  
  <div id="app">
    <nav-bar/>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components:{
    NavBar
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
