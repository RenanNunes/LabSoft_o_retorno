<template>
  <div>
    <b-container class="form-margin-prod">
      <Erro404 />
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Erro404 from '@/components/Erro404.vue';
export default {
  name: 'erro404',
  components: {
    Erro404,
  },
};
</script>

<style>
.form-margin-prod {
  margin-top: 20px;
}
</style>