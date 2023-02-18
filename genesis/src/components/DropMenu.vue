<template>
    <div class="drop-menu">
        <div class="drop-menu__item-selected" @click="isDropOpen = true">{{ selected }}</div>
        <div class="drop-menu__list" v-if="isDropOpen">
            <div class="drop-menu__item" :key="i.title" v-for="i in items" @click="i.func(); selected = i.title; isDropOpen = false">
                <div class="drop-menu__item-title">
                    {{ i.title }}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { IDropItem } from '../models/IDropItem'
defineProps<{
    items: IDropItem[]
}>()

const selected = ref<string>('Не выбрано')
const isDropOpen = ref<boolean>(false)
</script>
<style lang="scss" scoped>
.drop-menu{
    display: flex;
    flex-direction: column;
    min-width: 240px;
    border-radius: 8px;
    padding: 8px 16px;
    min-height: 50px;
    border: 1px solid $colorGrey;
    

    &__list{
        display: flex;
        flex-direction: column;
    }
    &__item{
        display: flex;
        border-bottom: 1px solid $colorGrey;
        width: 100%;
        padding: 8px 0px;
    }
}
</style>