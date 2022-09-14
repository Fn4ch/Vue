import { IPhoto } from '@/types/IPhoto'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import axios from 'axios'

export interface State{
  isLoading: boolean
  photos: IPhoto[]
  page: number
  limit: number
  totalPages: number
  searchQuery: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: () => ({
    isLoading: false,
    photos: [],
    page: 1,
    limit: 50,
    totalPages: 0,
    searchQuery: ''
  }),
  getters:{
    searchedPhotos(state){
     return state.photos.filter(photo => photo.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    } 
  },
  mutations:{
    setLoading(state, bool: boolean){
      state.isLoading = bool
    },
    setPhotos(state, photos: IPhoto[]){
      state.photos = photos
    },
    setPage(state, page: number){
      state.page = page
    },
    setTotalPages(state, TotalPages: any){
      state.totalPages = TotalPages
    },
    setSearchQuery(state, searchQuery: string){
      state.searchQuery = searchQuery
    }
  },
  actions:{
    async fetchPhotos({state, commit}){
      try{
        commit('setLoading', true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', { 
          params:{
            _page: state.limit,
            _limit: state.limit
          }}
        )
        commit('setTotalPages', 5000 / state.limit)
        commit('setPhotos', response.data)
      }
      catch (e){
        alert(e)
      }
      finally{
        commit('setLoading', false)
      }
    },
    async loadMorePhotos({state, commit}){
      try{
        commit('setPage', state.page + 1)
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', { 
          params:{
            _page: state.page,
            _limit: state.limit
          }}        
        )      
      commit('setTotalPages', 5000 / state.limit)
      commit('setPhotos', [...state.photos , ...response.data] )
    }
    catch (e){
      console.log(e)
    }

  }
}
})

export function useStore () {
  return baseUseStore(key)
}