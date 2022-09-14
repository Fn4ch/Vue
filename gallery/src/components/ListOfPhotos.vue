<template>
    <div class="list-block">
        <div class="container">
            <ListItem class="box" v-for="photo in photos" :photo="photo" :key="photo.id"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IPhoto } from "../types/IPhoto";
import ListItem from "./ListItem.vue";


export default defineComponent({
    props:{
        photos: {
            type: Object as PropType<IPhoto[]>
        }
    },
    components:{
    ListItem
    },
    data() {
        return {
            photos: this.photos
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.photos, 'List')
    }
})
</script>

<style>
.list-block{
    margin-top: 24px;
}
.container{
    display: flex;    
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
}
.box{
    display: grid;
    place-items: center;
}
    
</style>