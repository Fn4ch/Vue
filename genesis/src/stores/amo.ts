import axios, { AxiosResponse } from "axios"
import { defineStore } from "pinia"
import { reactive, ref } from 'vue'



export interface Self {
    href: string;
}

export interface Links {
    self: Self;
}

export interface IResponseProps {
    id: number;
    is_deleted: boolean;
    is_unsorted: boolean;
    request_id: string;
    _links: Links;
}



export const useAmoApi = defineStore('amoApi', () => {
    const created = ref<string>('')

    const createDeal = async (): Promise<void> => {
        await axios.post<IResponseProps[]>('http://localhost:3000/api/createDeal').then(r => {
            created.value += `Сделка id:${r.data[0].id}, `
            console.log(r.data[0].id)
            console.log(created.value)
        })
    }

    const createContact = async (): Promise<void> => {
        await axios.post<IResponseProps[]>('http://localhost:3000/api/createContact').then(r => created.value += `Контнакт id:${r.data[0].id}, `)
    }

    const createCompany = async (): Promise<void> => {
        await axios.post<IResponseProps[]>('http://localhost:3000/api/createCompany').then(r => created.value += `Компания id:${r.data[0].id}, `)
    }

    return {
        createCompany, createDeal, createContact, created
    }
})