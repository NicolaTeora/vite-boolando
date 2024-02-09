<script>
export default{
  data(){
    return{
      links: [
        { url: '#', name: 'Uomo' },
        { url: '#', name: 'Donna' },
        { url: '#', name: 'Bambino' },
      ],

      options: [
      { url: '#', name: 'fa-solid fa-user' },
      { url: '#', name: 'fa-regular fa-heart' },
      { url: '#', name: 'fa-solid fa-bag-shopping' },
      ]
    }
  }
}
</script>

<template>
    <header>
        <nav class="container">
            <ul>
                <li v-for="link of links"><a :href="link.url">{{ link.name }}</a></li>
            </ul>

            <img src="../assets/img/boolean-logo.png" alt="">

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
