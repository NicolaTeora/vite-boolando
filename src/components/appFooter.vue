<script>
export default{
    data(){
        return{
            title:'footer'
        }
    }
}
</script>

<template>
    <footer>

        <div class="container">

            <div>
                <h4>Boolando s.r.l</h4>
                <ul>
                    <li><a href="#">Informazioni legali</a></li>
                    <li><a href="#">Informativa sulla privacy</a></li>
                    <li><a href="#">Diritto di recesso</a></li>
                </ul>
            </div>
            <div>
                <p>Trovaci anche su</p>
                <ul>
                    <li><a href="#"><i class="fa-brands fa-square-twitter fa-2xl"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-square-facebook fa-2xl"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-square-instagram fa-2xl"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-square-pinterest fa-2xl"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-square-youtube fa-2xl"></i></a></li>
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