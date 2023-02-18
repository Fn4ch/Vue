import { createStore, Store } from "vuex"
import { InjectionKey } from 'vue'

export interface State{
  isLoading: boolean;  
  searchQuery: string;
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    isLoading: true,
    searchQuery: ''
  },
  getters: {

  },
  mutations: {
    setSearchQuery(state, searchQuery: string){
      state.searchQuery = searchQuery
    }
  },
  actions: {
    
  },
  modules: {

  },
});
