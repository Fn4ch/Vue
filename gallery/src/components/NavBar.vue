<template>
    <header class="header">
        <nav class="toolbar">
            <router-link class="router-link" to="/">Home</router-link>
            <router-link class="router-link" to="/about">About</router-link>
        </nav>
        <router-view/>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'NavBar'
    
})
</script>

<style lang="css" scoped>
    .toolbar{
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        width: 100%;
        background-color: transparent;
        color: black;
        min-height: 60px;
        max-height: 60px;
        display: flex;
        margin: 0;
        padding: 0;  
        align-items: center;  
        backdrop-filter: blur(8px);        
    }
    .router-link{
        margin-left: 12px;
        text-decoration: none;
        font-size: 22px;
    }
    .router-link:first-child{
        margin-left: 24px;
    }
</style>