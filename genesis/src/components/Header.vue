<template>
    <div class="header">
        <div class="header__title">
            Genesis
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.header{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    background-color: $colorBlue;
    display: flex;
    align-items: center;
    padding: 0px 32px;
    box-shadow: 5px 4px 30px $colorGrey;
    
    &__title{
        font-size: 32px;
       color: $colorWhite;
    }
}
</style>