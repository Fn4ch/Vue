<template>
    <div class="container">
        <div>
            <ListItem v-for="photo in photos" :photo="photo" :key="photo.id"/>
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

<style lang="css" scoped>
.container{
    display: grid;
    align-items: center;
    place-items: center;
    justify-content: center;
    gap: 12px;
}
    
</style>