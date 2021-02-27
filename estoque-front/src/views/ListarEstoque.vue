<template>
  <div>
    <b-container class="container-prod">
      <ListaProdutos :items="items" :estoque="true" />
  </b-container>
  </div>
</template>

<script>
import ListaProdutos from '@/components/ListaProdutos.vue';
// const API_URL = process.env.API_URL || 'http://localhost:3000';
export default {
  name: 'listarProduto',
  components: {
    ListaProdutos,
  },
  data() {
    return {
      items: [],
    }
  },
  created: function () {
    this.onStart();
  },
  methods:{
    async onStart() {
      // const result = await fetch(API_URL+'/produtos/estoque', {
      //   method: 'GET',
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      // });
      // const resultJSON = await result.json();
      // this.items = resultJSON;
      this.items = [
      {
        idProduto: 1,
        nome: 'Cenoura',
        distribuidor: 'Mercado Municipal',
        preco: '30.50',
        qtd: 100,
        descricao: 'Cenoura vendida por quilo',
        perecivel: false,
      },
      {
        idProduto: 2,
        nome: 'Tomate',
        distribuidor: 'Mercado Municipal',
        preco: '10.50',
        qtd: 80,
        descricao: 'Tomate vendido por quilo',
        perecivel: true,
      },
      {
        idProduto: 3,
        nome: 'Banana',
        distribuidor: 'Mercado Municipal',
        preco: '11',
        qtd: 12,
        descricao: 'Banana vendida por dúzia',
        perecivel: true,
      },]
    },
  }
};
</script>

<style>
.container-prod {
  margin-top: 20px;
}
</style>
