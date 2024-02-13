<script>
import {store} from '../store'
export default{
    data(){
        return {store}
    },
    props:{  },

    methods:{
        closeModal(){
            store.modal.show = false
        }
    }

}
</script>

<template>
    <div class="overlay">
        <div class="card-details">
            <img src="../../public/img/1.webp" alt="">
            <img src="../../public/img/1b.webp" alt="">

            <div class="product-details">
                <h3>brand</h3>
                <ul>
                    <li>nome</li>
                    <li>prezzo</li>
                    <li>sostenibilità</li>
                    <li>discount</li>
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