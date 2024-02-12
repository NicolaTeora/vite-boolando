<script>
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'
import appFooter from './components/appFooter.vue'

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
      products: [
        {
        id: 1,
        frontImage: '1.webp',
        backImage: '1b.webp',
        brand: "Levi's",
        name: 'Relaxed Fit',
        price: 29.99,
        isInFavorites: true,
        badges: [
            {
              type: 'tag',
              value: 'Sostenibilità',
            },
            {
              type: 'discount',
              value: '-50%',
            },
          ],
        },
        {
        id: 2,
        frontImage: '2.webp',
        backImage: '2b.webp',
        brand: 'Guess',
        name: 'Roses Tee',
        price: 20.99,
        isInFavorites: true,
        badges: [
          {
            type: 'discount',
            value: '-30%',
          },
        ],
        },
        {
        id: 3,
        frontImage: '3.webp',
        backImage: '3b.webp',
        brand: 'Come Zucchero Filato',
        name: 'Voglia di colori pastello',
        price: 129.99,
        isInFavorites: false,
        badges: [
          {
            type: 'discount',
            value: '-30%',
          },
        ],
        },
        {
        id: 4,
        frontImage: '4.webp',
        backImage: '4b.webp',
        brand: "Levi's",
        name: 'Tee Unisex',
        price: 14.99,
        isInFavorites: false,
        badges: [
          {
            type: 'tag',
            value: 'Sostenibilità',
          },
          {
            type: 'discount',
            value: '-50%',
          },
        ],
        },
        {
        id: 5,
        frontImage: '5.webp',
        backImage: '5b.webp',
        brand: 'Maya Deluxe',
        name: 'Stripe Bodice',
        price: 99.99,
        isInFavorites: true,
        badges: [
          {
            type: 'tag',
            value: 'Sostenibilità',
          },
          {
            type: 'discount',
            value: '-50%',
          },
        ],
        },
        {
        id: 6,
        frontImage: '6.webp',
        backImage: '6b.webp',
        brand: 'Esprit',
        name: 'Maglione - Black',
        price: 29.99,
        isInFavorites: true,
        badges: [
          {
            type: 'tag',
            value: 'Sostenibilità',
          },
        ],
        },
      ],      
      
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

  components:{ appHeader, appMain, appFooter }
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
