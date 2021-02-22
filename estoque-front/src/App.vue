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
          <b-nav-item href="#">Login/Log out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style>
</style>
