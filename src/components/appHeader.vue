<script>
import {store} from '../store/index'
export default{
  data(){
    return{
        store,
    }
    },
    
    props:{
        links: Array,
        options: Array,
    }
}
</script>

<template>
    <header>
        <nav class="container">
            <ul>
                <li v-for="link of links"><a :href="link.url">{{ link.name }}</a></li>
            </ul>

            <img src="../../public/img/boolean-logo.png" alt="">

            <ul>
                <li v-for="option of options"><a :href="option.url"><i :class="option.name"></i></a></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss' as *;

    nav{
        display: flex;
        justify-content: space-between;
        padding: 5px;
        
        img{
            width: 120px;
        }

        ul{
            a{
                font-weight: bold;
            }             
        }
    }

</style>
