<template>
    <div class="load-more">
        <button @click="loadMorePhotos" class="load-more-btn" >Load more photos</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex';


export default defineComponent({
    props:{
        page: {type: Number, required: true}
    },
    methods:{
        ...mapActions({
            loadMorePhotos: 'loadMorePhotos',
        })
    },
})
</script>


<style>
    .load-more{
        margin-top: 32px;
        margin-bottom: 32px;
        display: flex;
        justify-content: center;
        align-items: center;        
    }
    .load-more-btn{        
        border-radius: 5px;
        width: 300px;
        height: 40px;
        font-size: 20px;
        background-color: transparent;
        border-color: lightgray;
        box-shadow: 5px 5px 15px 5px rgb(238, 238, 238);
    }
</style>