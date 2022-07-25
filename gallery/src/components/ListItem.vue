<template>
    <div class="grid-item"> 
        <div class="item-title">{{photo.title}}</div>
        <img :src="photo.url"/>
    </div>
</template>
<script lang="ts">
import { IPhoto } from "../types/IPhoto"
import { defineComponent, PropType } from "vue"

export default defineComponent({
    props:{
        photo: {
         type: Object as PropType<IPhoto>,
         required: true
        }
    },
    data(){
        return{
            photoList: this.photo
        }
    },
    methods:{
        itemCLick(){
            console.log('Клик сработал')
        }
    },
    onMounted(){
        console.log(this.photo)
    }
    
    
})
</script>

<style lang="css">
.grid-item{
    align-items: center;
    justify-items: center;
    width: 300px;
    height: 300px;
    padding: 20px;
}
img{
    max-width: 260px;
    max-height: 260px;    
}
</style>