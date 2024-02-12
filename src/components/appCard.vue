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
}

</script>

<template>
    <figure>
        <img :src="frontImage" :alt="brand" />
        <div class="heart">&hearts;</div>        
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

        .heart{
            width: 25px;
            height: 25px;
            position: absolute;
            font-size:larger;
            top: 0;
            right: 0;
            background-color: whitesmoke;
            text-align: center;
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