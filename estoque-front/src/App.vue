<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Estoque</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Produtos">
            <b-dropdown-item to="/produtos/criar">Adicionar produto</b-dropdown-item>
            <b-dropdown-item to="/produtos/listar">Listar produtos</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/produtos/estoque">Visualizar estoque</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if='!this.$cookies.get("user_id")'>Login</b-nav-item>
          <b-nav-item @click="logout" v-else>Log out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout () {
      this.$cookies.remove("user_id");
      this.$router.push({ path: '/login' })
    },
  }
}
</script>


<style>
</style>
