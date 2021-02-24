<template>
  <div>
    <b-container class="form-margin-prod">
      <Inicio />
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue';
export default {
  name: 'inicio',
  components: {
    Inicio,
  },
};
</script>

<style>
.form-margin-prod {
  margin-top: 20px;
}
</style>