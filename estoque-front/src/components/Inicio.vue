<template>
  <div class="form-error">
    <h2>Site do estoque</h2>
    <br />
    <p>Este site te como objetivo fazer com que o usuário possa gerenciar seu estoque de uma melhor formal, permitindo ele <router-link to="/produtos/criar">cadastrar produtos</router-link>, listar <router-link to="/produtos/listar">todos os produtos</router-link> cadastrados, listar os existentes no <router-link to="/produtos/estoque">estoque</router-link> e editar.</p>
  </div>
</template>

<script>
</script>

<style scoped>
.form-error {
  background-color: #fcfcfc;
  padding: 15px;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
</style>