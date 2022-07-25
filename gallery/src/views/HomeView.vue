<template>
  <div class="home">
  <input class="input" type="text" placeholder="Введите название" :value="searchQuery" @input="updateSearchQuery" />
    <ListOfPhotos :photos="searchedPhotos"/>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import ListOfPhotos from '@/components/ListOfPhotos.vue';
import { State } from '@/store';

export default defineComponent({
  name: 'Photos',
  components: {
    ListOfPhotos
  },
  methods:{       
    ...mapMutations({
      setPage: 'setPage',
      setSearchQuery: 'setSearchQuery'
    }),
    ...mapActions({
      fetchPhotos: 'fetchPhotos',
      loadMorePhotos: 'loadMorePhotos'
    }),
    updateSearchQuery(e: any){
      this.$store.commit('setSearchQuery', e.target.value)
    }
  },
  computed:{
    ...mapState({
      isLoading: 'isLoading',
      photos: 'photos',
      page: 'page',
      limit: 'limit',
      totalPages: 'totalPages',
      searchQuery: 'searchQuery'

    }), 
    ...mapGetters({
      searchedPhotos: 'searchedPhotos'
    })
  },
  mounted(){
    this.fetchPhotos()
    console.log(this.photos)
  }

})
</script>

<style>
  .home{    
    margin-top: 60px;
  }
  input{
    width: 80%;
    max-width: 500px;
    height: 30px;
    background-color: transparent;
    border-radius: 6px;
  }
</style>
