<script>
export default{
    data(){
        return{}
    },

    props:{
        linksSite: Array,
        links: Array,
    }
}
</script>

<template>
    <footer>

        <div class="container">

            <div v-for="link of linksSite">
                <h4>{{ link.title }}</h4>
                <ul>
                    <li v-for="option of link.links">
                        <a :href="option.url">{{option.name}}</a>
                    </li>
                </ul>
            </div>
            
        </div>

    </footer>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss' as *;

    footer{
        .container{
            padding: 5px;
            display: flex;
            justify-content: space-between;
            
            ul{
                font-size: smaller;
            }
        }
    }
</style>