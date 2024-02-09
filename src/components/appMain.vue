<script>
export default{
    data(){
        return{
            logo: '',
            images: [
                {
                    image: '1.webp',
                    imageHover: '1b.webp'
                },
                {
                    image: '2.webp',
                    imageHover: '2b.webp'
                },
                {
                    image: '3.webp',
                    imageHover: '3b.webp'
                },
                {
                    image: '4.webp',
                    imageHover: '4b.webp'
                },
                {
                    image: '5.webp',
                    imageHover: '5b.webp'
                },
                {
                    image: '6.webp',
                    imageHover: '6b.webp'
                },
            ],

            //display: true,
            activeElement: 0,
        }
    },

    methods: {
        FrontImage(imgName){
            return new URL('../assets/img/' + imgName, import.meta.url).href;
        },
        HoverImage(imgName){
            return new URL('../assets/img/' + imgName, import.meta.url).href;
        },

        LookNextImg(i){
            console.log('mouseOver', i, );
        }
    }
}
</script>

<template>
    <main class="container">
        <div v-for="(image, index) of images"  @mouseover="LookNextImg(index)">
            <img class="frist-img" :src="FrontImage(image.image)" alt="" >
            <img class="hover-img" :src="HoverImage(image.imageHover)" v-show="false" alt="" >
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    
    div{
        margin: 10px 0;
        width: calc(100% / 3 - 20px);
        text-align: center;

        img{
            width: 100%;
        }
    }    
}
</style>