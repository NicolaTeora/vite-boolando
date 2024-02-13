<script>
import {store} from '../store';
export default{
    data(){
        return {store}
    },
    props:{
        products: Array,
    },

    methods:{
        closeModal(){
            store.modal.show = false;

        }
    }

}
</script>

<template>
    <div class="overlay">
        <div class="card-details">
    
            <img :src="store.modal.frontImage" alt="">
            <img :src="store.modal.backImage" alt="">

            <div class="product-details">
                <h3>{{ store.modal.brand }}</h3>
                <ul>
                    <li>{{store.modal.name}}</li>
                    <li>{{store.modal.price}}</li>
                    <li></li>
                    <li></li>
                </ul>
                
                <button @click="closeModal()">Close</button>
            
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *; 
@use '../styles/partials/variables' as *;
    .overlay{
        
        position: fixed;
        width: 100%; 
        height: 100%; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: rgba(0,0,0,0.5);
        z-index: 2;
        color: black;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        .card-details{
            width: 70%;            
            padding: 20px;
            display: flex;
            gap: 10px;
            background-color: whitesmoke;
            
            img{
                width: 35%;
            }
            .product-details{
                position: relative;

                ul{
                    display: block;
                }
                button{
                    background-color: $background-footer;
                    color: $color-header-footer;
                    position: absolute;
                    bottom: 0;
                    padding: 5px 8px;
                }
            }
        } 
    }
    
</style>