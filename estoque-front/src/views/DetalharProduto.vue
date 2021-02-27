<template>
  <div>
    <b-container class="form-margin-prod">
      <DetalhaProduto :prod="prod" />
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import DetalhaProduto from '@/components/DetalhaProduto.vue';
// const API_URL = process.env.API_URL || 'http://localhost:3000';
export default {
  name: 'detalhaProduto',
  components: {
    DetalhaProduto,
  },
  data() {
    return {
      prod: {}
    }
  },
  async created() {
    const id = this.$route.params && this.$route.params.id;
    // const result = await fetch(API_URL + '/produtos?id=' + id, {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // });
    // const resultJSON = await result.json();
    // if (resultJSON[0] && resultJSON[0]._id) {
    //   this.prod = resultJSON[0];
    // }
    // else {
    //   this.prod = {
    //     erro: true,
    //   };
    // }
    if (id != 2) {
      this.prod = {
        _id: id,
        nome: 'Cenoura',
        distribuidor: 'Mercado Municipal',
        preco: '30.50',
        qtd: 100,
        descricao: 'Cenoura vendida por quilo',
        perecivel: false,
      }
    } else {
      this.prod = {
        erro: true
      }
    }
  }
};
</script>

<style>
.form-margin-prod {
  margin-top: 20px;
}
</style>