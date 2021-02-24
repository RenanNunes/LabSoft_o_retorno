<template>
  <div class="form-prod" v-if="prod">
    <h3 v-if="prod.nome">{{prod.nome}}</h3>
    <h3 v-else-if="prod.erro">Ocorreu um erro ao buscar o produto</h3>
    <h3 v-else>Buscando...</h3>
    <hr />
    <div v-if="prod.erro">
      <router-link to="/produtos/listar">Voltar para a lista</router-link>
    </div>
    <div v-else>
      <p>
        <b>Descrição: </b> {{prod.descricao}}
      </p>
      <p>
        <b>Preço:</b> {{prod.preco}}
      </p>
      <p>
        <b>Quantidade:</b> {{prod.qtd}}
      </p>
      <p>
        <b>Distribuidor:</b> {{prod.distribuidor}}
      </p>
      <p>
        <b>Perecível:</b> {{prod.perecivel ? 'Sim' : 'Não'}}
      </p>
      <hr />
      <b-button @click="showModal" variant="danger" class="botao-form">Apagar</b-button>
      <b-modal ref="myModalRef" hide-footer title="Apagar">
        <div class="d-block text-center">
          <h4>Tem certeza que deseja apagar o produto?</h4>
        </div>
        <b-btn class="mt-3" variant="outline-danger" block @click="apagar">Apagar</b-btn>
      </b-modal>
    </div>
  </div>
</template>

<script>
// const API_URL = process.env.API_URL || 'http://localhost:3000';
export default {
  props: {
      prod: {
        type: Object,
        required: true,
      }
  },
  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    apagar() {
      // const id = this.prod && this.prod._id;
      // fetch(API_URL + '/produtos?_id=' + id, {
      //   method: 'DELETE',
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      // }).then(() => this.$router.push({ path: '/produtos/listar' }));
    },
  }
}
</script>

<style scoped>
.botao-form {
  margin: 4px;
}
.form-prod {
  background-color: #fcfcfc;
  padding: 15px;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
</style>