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
                <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-square-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-square-pinterest"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-square-youtube"></i></a></li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss' as *;

    footer{
        padding: 5px;
        ul{
            font-size: smaller;
        }
    }
</style>