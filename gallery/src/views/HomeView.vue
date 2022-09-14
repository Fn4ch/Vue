<template>
  <div class="home">
  <input class="input" type="text" placeholder=" Enter the name" :value="searchQuery" @input="updateSearchQuery" />
    <ListOfPhotos :photos="searchedPhotos"/>
    <LoadMoreBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import ListOfPhotos from '@/components/ListOfPhotos.vue';
import LoadMoreBtn from '@/components/LoadMoreBtn.vue';

export default defineComponent({
  name: 'Photos',
  components: {
    ListOfPhotos,
    LoadMoreBtn
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
    },
    nextPage(){
      this.$store.commit('setPage', this.page + 1)
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
    text-align: center;
    height: 40px;
    font-size: large;    
    width: 400px;
    min-width: 200px;
    background-color: transparent;
    border-radius: 6px;
    margin: auto;
  }
</style>
