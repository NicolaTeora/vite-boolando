<script>
import appHeader from './components/appHeader.vue'
import appMain from './components/appMain.vue'
import appFooter from './components/appFooter.vue'

export default{
  data(){
    return{
      title:'Boolando'
    }
  },

  components:{ appHeader, appMain, appFooter }
}

</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use './styles/general.scss' 
</style>
