<script>
import appCard from './appCard.vue';
import {store} from '../store';

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
        openDetailsProduct(numId){
            const productId = this.products[numId]
            store.modal.name = productId.name
            store.modal.brand = productId.brand
            store.modal.frontImage = this.FrontImage(productId.frontImage)
            store.modal.backImage = this.HoverImage(productId.backImage)
            store.modal.price = productId.price


            console.log(productId.price)


            store.modal.show= true;
            
        }
    }
}
</script>

<template>
    <main class="container">
        <app-card         
        v-for="(product, id) of products"
        @open-details="openDetailsProduct"
        :id="id"
        :frontImage="FrontImage(product.frontImage)"
        :backImage="HoverImage(product.backImage)"
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
    justify-content: space-between;
    gap: 5px;   
}
</style>