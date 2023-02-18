import axios from "axios"
import { defineStore } from "pinia"
import { ref } from 'vue'

export const useAmoApi = defineStore('amoApi', () => {
    const created = ref<any>([])
    const token = ref<string>()

    const getToken = () => {
        axios.get<string>('https://test.gnzs.ru/oauth/get-token.php', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Client-Id': '30878566'
            }
        }).then(r => token.value = r.toString())
    }

    const createDeal = () => {
        axios.post('https://www.amocrm.ru/api/v4/contacts').then(r => created.push(r))
    }

    const createContact = () => {
        axios.post('https://www.amocrm.ru/api/v4/contacts').then(r => created.push(r))
    }

    const createCompany = () => {
        axios.post('https://www.amocrm.ru/api/v4/contacts').then(r => created.push(r))
    }

    return {
        created, token, createCompany, createDeal, createContact, getToken
    }
})