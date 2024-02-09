<script>
export default{
    data(){
        return{
            linksSite: [
                {
                    title: 'Boolando s.r.l.',
                    links: [ 
                        { 
                        name: 'Informazioni Legali', 
                        url: '#', 
                        },
                        {
                            name: 'Informativa sulla pricacy',
                            url: '#',
                        },
                        {
                            name: 'Diritto di recesso',
                            url: '#'
                        }
                    ]
                },
                {
                    title: 'Trovaci anche su:',
                    // TODO: passare le icone fontawesome 
                    links: [
                        {
                            name: 'X',
                            url: '#'
                        },
                        {
                            name: 'F',
                            url: '#'
                        },
                        {
                            name: 'I',
                            url: '#'
                        },
                        {
                            name: 'P',
                            url: '#'
                        },
                        {
                            name: 'Y',
                            url: '#'
                        }
                    ]
                }

            ],
                
        }
    }
}
</script>

<template>
    <footer>

        <div class="container">

            <div v-for="link of linksSite">
                <h4>{{ link.title }}</h4>
                <ul>
                    <li v-for="option of link.links"><a :href="option.url">{{option.name}}</a></li>
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