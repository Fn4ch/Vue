import { Store } from 'vuex'
import { IPhoto } from './IPhoto'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    isLoading: boolean
    Photos: IPhoto[]
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}