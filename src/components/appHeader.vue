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
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/general.scss' as *;

    nav{
        width: fit-content;
        padding: 5px;
        ul{
            display: flex;
            gap: 5px;
            li{
                list-style: none;
                a{
                    text-decoration: none;
                }
            }
        }
    }

</style>
