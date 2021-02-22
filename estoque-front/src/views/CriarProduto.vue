<template>
  <div>
    <b-container class="form-margin-prod">
      <FormProduto />
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import FormProduto from '@/components/FormProduto.vue';
export default {
  name: 'novoProduto',
  components: {
    FormProduto,
  },
};
</script>

<style>
.form-margin-prod {
  margin-top: 20px;
}
</style>