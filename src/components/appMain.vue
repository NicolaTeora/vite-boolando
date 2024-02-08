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
            ]
        }
    },

    methods: {
        FrontImage(imgName){
            return new URL('../assets/img/' + imgName, import.meta.url).href;
        },
        HoverImage(imgName){
            return new URL('../assets/img/' + imgName, import.meta.url).href;
        },

        LookNextImg(){
            console.log('mouse passato')
        }
    }
}
</script>

<template>
    <main>
        <div v-for="image of images">
            <img class="frist-img" :src="FrontImage(image.image)" @mouseover="LookNextImg()" alt="" >
            <!-- <img class="hover-img" :src="HoverImage(image.imageHover)" alt="" > -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    div{
        margin: 20px auto;
        width: calc(100% / 3);
        text-align: center;

        img{
            width: 200px;
        }
    }
}
</style>