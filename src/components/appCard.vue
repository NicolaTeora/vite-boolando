<script>
export default{
    
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

    methods:{
        FrontImage(imgName){
            return new URL('../assets/img/' + imgName, import.meta.url).href;
        },
    }
}

</script>

<template>
    <figure>
        <img :src="FrontImage(frontImage)" :alt="brand">        
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

        img{
        width: 100%;
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
        
    } 
</style>