<script>
export default{

    data(){
        return{ 
            upHere: false
        }
        },
    
    props:{
        id: Number,
        frontImage: String,
        backImage: String,
        brand: String,
        name: String,
        price: Number,
        isInFavorites: Boolean,
        badges: Array,

    },

    emits:['open-details'],

    methods:{
        priceDiscount(){

        }
    }

}

</script>

<template>
    <figure @click="$emit('open-details', this.id)" >
        <img class="frist-img" :src="frontImage" :alt="brand" />
        <!-- <img class="second-img" :src="backImage" :alt="brand"  > -->
        <div class="heart">&hearts;</div>
        <div class="sostenibilita">
            
        </div>
        <figcaption>
            <span class="brand">{{brand}}</span>
            <span class="name">{{name}}</span>
            <div>
                <span class="price">{{ price }}</span>
                <span class="price-discount">{{ price }}</span>
            </div>
        </figcaption>
    </figure>
</template>

<style lang="scss" scoped>
    figure{
        margin: 10px 0;
        width: calc(100% / 3 - 20px);
        text-align: center;
        position: relative;

        img{
        width: 100%;
        }
        
    } 

        .heart{
            width: 30px;
            height: 30px;

            position: absolute;
            font-size:larger;
            top: 20px;
            right: 0;
            background-color: whitesmoke;
            text-align: center;
        }
        .sostenibilita{
            padding: 5px;
            position: absolute;
            background-color: rgb(25, 199, 77);
            left: 0;
            bottom: 25%;
        }

        figcaption{
            display: flex;
            flex-direction: column;
            align-items: start;
            
            .brand{
                color: gray;
                font-size: small;
                font-weight: bold;
                font-family: sans-serif;
            }
            .name{
                font-size: medium;
                font-weight: bold;
                font-family: sans-serif;
            }
            .price{
                color: red;
                font-size: small;
                font-weight: bold;
            }

            .price-discount{
                margin-left: 5px;
                text-decoration: line-through;
                font-size: small;
            }
        }
        
 
</style>