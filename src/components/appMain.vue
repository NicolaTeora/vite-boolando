<script>
import appCard from './appCard.vue';

export default{

    props:{ products: Array },
    
    components: { appCard },
    
    methods: {
        FrontImage(imgName){
            //return new URL('./img/' + imgName, import.meta.url).href;
            return './img/' + imgName;
        },
        HoverImage(imgName){
            //return new URL('../assets/img/' + imgName, import.meta.url).href;
            return './img/' + imgName;
        },
    }
}
</script>

<template>
    <main class="container">
        <app-card         
        v-for="product of products"
        :frontImage="FrontImage(product.frontImage)"
        :brand="product.brand"
        :name="product.name"
        :price="product.price"
        />
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;   
}
</style>