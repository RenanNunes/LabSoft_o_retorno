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
      <b-form>
      <p>
        <b>Descrição: </b> <b-form-input id="descricao"
                      type="text"
                      v-model="prod.descricao"
                      required
                      placeholder="Exemplo: Cenoura"
                      :readonly=!edit>
        </b-form-input>
      </p>
      <p>
        <b>Preço:</b> <b-form-input id="preco"
                      type="number"
                      v-model="prod.preco"
                      required
                      placeholder="Qual o preço que o produto será vendido?"
                      min=0
                      step="0.01"
                      :readonly=!edit>
        </b-form-input>
      </p>
      <p>
        <b>Quantidade:</b> <b-form-input id="qtd"
                      type="number"
                      v-model="prod.qtd"
                      required
                      placeholder="Qual o preço que o produto será vendido?"
                      min=0
                      :readonly=!edit>
        </b-form-input>
      </p>
      <p>
        <b>Distribuidor:</b> <b-form-input id="distribuidor"
                      type="text"
                      v-model="prod.distribuidor"
                      required
                      placeholder="Nome do distribuidor do produto"
                      :readonly=!edit>
        </b-form-input>
      </p>
      <p>
        <b-form-checkbox
          id="perecivel"
          v-model="prod.perecivel"
          name="perecivel"
          value=true
          unchecked-value=false
          :disabled=!edit>
          Produto perecível
        </b-form-checkbox>
      </p>
      <hr />
      <b-alert :show="!!success" variant="success">Editado com sucesso!</b-alert>
      <b-alert :show="!!error" variant="warning">{{error}}</b-alert>

      <span v-if="!edit">
        <b-button @click="edit_inputs" variant="primary" class="botao-form">Permitir edição das informações</b-button>
      </span>
      <span v-else>
        <b-button @click="save_changes" variant="primary" class="botao-form">Salvar edição</b-button>
      </span>

      <b-button @click="showModal" variant="danger" class="botao-form">Apagar</b-button>
      <b-modal ref="myModalRef" hide-footer title="Apagar">
        <div class="d-block text-center">
          <h4>Tem certeza que deseja apagar o produto?</h4>
        </div>
        <b-btn class="mt-3" variant="outline-danger" block @click="apagar">Apagar</b-btn>
      </b-modal>

      </b-form>
    </div>
  </div>
</template>

<script>
const API_URL = process.env.NODE_ENV  == 'development' ? 'http://localhost:3000' : 'https://estoque-back-renannunes.cloud.okteto.net';
export default {
  data() {
    return {
      edit: false,
      error: '',
      success: '',
    }
  },
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
    edit_inputs() {
      this.edit = !this.edit
    },
    async save_changes() {
      const result = await fetch(API_URL+'/produtos/' + this.prod._id, {
        method: 'PUT',
        body: JSON.stringify(this.prod),
        headers: {
          'content-type': 'application/json',
        },
      });
      const resultJSON = await result.json();

      if (resultJSON.erro) {
        this.error = 'Falha';
        this.success = '';
      } else {
        this.error = '';
        this.edit = !this.edit;
        this.success = true;
      }
    },
    apagar() {
      const id = this.prod && this.prod._id;
      fetch(API_URL + '/produtos/' + id, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      }).then(() => this.$router.push({ path: '/produtos/listar' }));
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