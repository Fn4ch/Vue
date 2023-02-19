import axios from "axios"
import { defineStore } from "pinia"
import { ref } from 'vue'

export const useAmoApi = defineStore('amoApi', () => {
    const created = ref<any>([])

    const createDeal = () => {
        axios.post('http://localhost:3000/api/createDeal').then(r => created.push(r))
    }

    const createContact = () => {
        axios.post('http://localhost:3000/api/createContact').then(r => created.push(r))
    }

    const createCompany = () => {
        axios.post('http://localhost:3000/api/createCompany').then(r => created.push(r))
    }

    return {
        createCompany, createDeal, createContact
    }
})