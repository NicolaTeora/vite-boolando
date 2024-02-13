import { reactive } from "vue";

export const store = reactive({
  //salvo come variabile globale l'Endpoint di riferimento per la chiamata delle API
  apiUri: "http://localhost:3000",
});

//step 2 importarlo in un componente
