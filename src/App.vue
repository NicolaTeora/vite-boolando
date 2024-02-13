<script>
import {store} from './store';
import axios from 'axios';

import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';
import appModal from './components/appModal.vue';

export default{
  data(){
    return{
      //data appHeader
      links: [
        { url: '#', name: 'Uomo' },
        { url: '#', name: 'Donna' },
        { url: '#', name: 'Bambino' },
      ],
      options: [
        { url: '#', name: 'fa-solid fa-user' },
        { url: '#', name: 'fa-regular fa-heart' },
        { url: '#', name: 'fa-solid fa-bag-shopping' },
      ],

      //data appMain
      products:[],

      //data appFooter
      linksSite: [
        {
          title: 'Boolando s.r.l.',
          links: [ 
            {name: 'Informazioni Legali', url: '#'},
            {name: 'Informativa sulla pricacy',url: '#'},
            {name: 'Diritto di recesso', url: '#'}
          ]
        },
        {
          title: 'Trovaci anche su:',
          // TODO: passare le icone fontawesome 
          links: [
            {name: 'X', url: '#'},
            {name: 'F', url: '#'},
            {name: 'I', url: '#'},
            {name: 'P', url: '#'},
            {name: 'Y', url: '#'}
          ]
        }

      ],

    }
  },

  components:{ appHeader, appMain, appFooter },

  created(){
    //passo tramite Global State l'endpoint
    axios.get( `${store.apiUri}/products`).then((res)=>{
      this.products = res.data
    })
  }
}

</script>

<template>

  <app-header :links="links" :options="options"></app-header>
  <app-main :products="products"></app-main>
  <app-footer :linksSite="linksSite"></app-footer>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
