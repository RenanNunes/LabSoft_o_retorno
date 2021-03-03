<template>
  <div>
    <b-container class="form-margin-login">
      <Login />
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';
export default {
  name: 'login',
  components: {
    Login,
  },
};
</script>

<style>
.form-margin-login {
  margin-top: 20px;
}
</style>