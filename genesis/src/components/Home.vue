<template>
<div class="home">
  <div class="home__create">
    <DropMenu :items="items" />
    <button class="home__button" :disabled="false">Создать</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { IDropItem } from '../models/IDropItem'
import DropMenu from './DropMenu.vue'
import { useAmoApi } from '../stores/amo'
import { ref, onMounted } from 'vue'

const { created, createCompany, createContact, createDeal, getToken, token } = useAmoApi()

const selected = ref<string>('')

const items: IDropItem[] = [
  {
    title: 'Не выбрано',
    func: () => { selected.value = ''}
  },
  {
    title: 'Сделка',
    func: () => { selected.value = 'deal'}
  },
  {
    title: 'Контакт',
    func: () => { selected.value = 'contact' }
  },
  {
    title: 'Компания',
    func: () => { selected.value = 'company'}
  },
]

onMounted(() => {
  getToken()
})

</script>

<style lang="scss" scoped>
.home{
  display: flex;
  justify-content: center;

  &__create{
    display: flex;
    margin-top: 200px;
    height: fit-content;
  }

  &__button{
    height: min-content;
    margin-left: 30px;
    padding: 8px 16px;
    border-radius: 8px;
    color: $colorWhite;
    background-color: $colorBlue;
  }
}
</style>
