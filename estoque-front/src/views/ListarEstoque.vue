<template>
  <div>
    <b-container class="container-prod">
      <ListaProdutos :items="items" :estoque="true" />
  </b-container>
  </div>
</template>

<script>
import ListaProdutos from '@/components/ListaProdutos.vue';
const API_URL = process.env.NODE_ENV  == 'development' ? 'http://localhost:3000' : 'https://estoque-back-renannunes.cloud.okteto.net';
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
      const result = await fetch(API_URL + '/produtos/estoque/' + this.$cookies.get("user_id"), {
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
