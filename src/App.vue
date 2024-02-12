<script>
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'
import appFooter from './components/appFooter.vue'

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
  },

  components:{ appHeader, appMain, appFooter }
}

</script>

<template>

  <app-header :links="links" :options="options"></app-header>
  <app-main></app-main>
  <app-footer></app-footer>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
