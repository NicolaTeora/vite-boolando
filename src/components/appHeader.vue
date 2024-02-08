<script>
export default{
  data(){
    return{
      title: 'header'
    }
  }
}
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><a href="#">Uomo</a></li>
                <li><a href="#">Donna</a></li>
                <li><a href="#">Bambino</a></li>
            </ul>

            <img src="../assets/img/boolean-logo.png" alt="">

            <ul>
                <li><a href="#"><i class="fa-solid fa-user"></i></a></li>
                <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
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
        box-shadow: 2px 1px 2px black;

        img{
            width: 120px;
        }

        ul{
            display: flex;
            
            li{
                margin: 5px;
                list-style: none;
                a{
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                }
            }
        }
    }

</style>
