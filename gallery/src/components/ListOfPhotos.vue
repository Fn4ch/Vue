<template>
    <div class="container">
        <ListItem class="box" v-for="photo in photos" :photo="photo" :key="photo.id"/>
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

<style lang="css">
.container{
    display: grid;
    gap: 12px;

    /* ! */
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.box{
    display: grid;
    place-items: center;
}
    
</style>