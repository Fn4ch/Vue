<template>
<div class="home">
  <textarea class="home__textarea" readonly>{{ created }}</textarea>
  <div class="home__create">
    <DropMenu :items="items" />
    <button :class="selected === '' ? 'home__button home__button_disabled' : 'home__button'" :disabled="selected === '' && false" @click="createEntity">Создать</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { IDropItem } from '../models/IDropItem'
import DropMenu from './DropMenu.vue'
import { useAmoApi } from '../stores/amo'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';

const { createCompany, createContact, createDeal } = useAmoApi()

const store = useAmoApi()

const { created } = storeToRefs(store)

const text = ref<string>()

const selected = ref<string>('')

const createEntity = () => {
  if (selected.value === 'deal') createDeal()
  if (selected.value === 'contact') createContact()
  if (selected.value === 'company') createCompany()
}


const items: IDropItem[] = [
  {
    title: 'Не выбрано',
    func: () => { selected.value = ''}
  },
  {
    title: 'Сделка',
    func: () => { selected.value = 'deal' }
  },
  {
    title: 'Контакт',
    func: () => { selected.value = 'contact' }
  },
  {
    title: 'Компания',
    func: () => { selected.value = 'company' }
  },
]

</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;

  &__create{
    display: flex;
    height: fit-content;
  }

  &__button{
    height: min-content;
    margin-left: 30px;
    padding: 8px 16px;
    border-radius: 8px;
    color: $colorWhite;
    background-color: $colorBlue;
    border: none;
    font-size: 16px;

    &_disabled{
      background-color: transparent;
      border: 1px solid black;
      color: black;
    }
  }
  &__textarea{
    padding: 16px;
    margin-top: 200px;
    resize: none;
    width: 40%;
    height: 240px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
}
</style>
