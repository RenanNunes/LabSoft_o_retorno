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
const API_URL = process.env.NODE_ENV  == 'development' ? 'http://localhost:3000' : 'https://estoque-back-renannunes.cloud.okteto.net';
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
    const result = await fetch(API_URL + '/produtos/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const resultJSON = await result.json();
    if (resultJSON && resultJSON._id) {
      this.prod = resultJSON;
    }
    else {
      this.prod = {
        erro: true,
      };
    }
  }
};
</script>

<style>
.form-margin-prod {
  margin-top: 20px;
}
</style>