<template>
  <div>
    <b-container class="container-prod">
      <ListaProdutos :items="items" :estoque="false" />
  </b-container>
  </div>
</template>

<script>
import ListaProdutos from '@/components/ListaProdutos.vue';
const API_URL = process.env.API_URL || 'http://localhost:3000';
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
      console.log(API_URL)
      console.log(process.env)
      const result = await fetch(API_URL+'/produtos/listar', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      const resultJSON = await result.json();
      this.items = resultJSON;
    },
  }
};
</script>

<style>
.container-prod {
  margin-top: 20px;
}
</style>
