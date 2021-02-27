<template>
  <div class="form-prod">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h3>Informações do produto</h3>
      <br />
      <b-form-group id="nomeLabel"
                    label="Nome do produto: *"
                    label-for="nome">
        <b-form-input id="nome"
                      type="text"
                      v-model="prod.nome"
                      required
                      placeholder="Exemplo: Cenoura">
        </b-form-input>
      </b-form-group>
      <b-form-group id="distribuidorLabel"
                    label="Nome do distribuidor: *"
                    label-for="distribuidor">
        <b-form-input id="distribuidor"
                      type="text"
                      v-model="prod.distribuidor"
                      required
                      placeholder="Nome do distribuidor do produto">
        </b-form-input>
      </b-form-group>
      <b-form-group id="precoLabel"
                    label="Preço do produto: *"
                    label-for="preco">
        <b-form-input id="preco"
                      type="number"
                      v-model="prod.preco"
                      required
                      placeholder="Qual o preço que o produto será vendido?"
                      min=0
                      step="0.01">
        </b-form-input>
      </b-form-group>
      <b-form-group id="qtdLabel"
                    label="Quantidade inicial em estoque: *"
                    label-for="qtd">
        <b-form-input id="qtd"
                      type="number"
                      v-model="prod.qtd"
                      required
                      placeholder="Qual o preço que o produto será vendido?"
                      min=0>
        </b-form-input>
      </b-form-group>
      <b-form-group id="descricaoLabel"
                    label="Descrição do produto: *"
                    label-for="descricao">
        <b-form-textarea id="descricao"
                        v-model="prod.descricao"
                        placeholder="Descreva o produto"
                        required
                        :rows="3"
                        :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox
          id="perecivel"
          v-model="prod.perecivel"
          name="perecivel"
          value=true
          unchecked-value=false>
          Produto perecível
        </b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="primary" class="botao-form">Concluir</b-button>
      <b-button type="reset" variant="danger" class="botao-form">Limpar</b-button>
      <br />
      <br />
      <b-alert :show="!!success" variant="success">Produto cadastrado com sucesso ^^</b-alert>
      <b-alert :show="!!error" variant="warning">{{error}}</b-alert>
    </b-form>
  </div>
</template>

<script>
const API_URL = process.env.API_URL || 'http://localhost:3000';
export default {
  data() {
    return {
      prod: {
        nome: '',
        distribuidor: '',
        preco: '',
        qtd: '',
        descricao: '',
        perecivel: false,
      },
      error: '',
      success: '',
      show: true,
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.prod));
      const result = await fetch(API_URL+'/produtos/', {
        method: 'POST',
        body: JSON.stringify(this.prod),
        headers: {
          'content-type': 'application/json',
        },
      });
      const resultJSON = await result.json();
      if (resultJSON.erro) {
        this.error = resultJSON.mensagem;
        this.success = '';
      } else {
        this.prod.nome = '';
        this.prod.distribuidor = '';
        this.prod.preco = '';
        this.prod.qtd = '';
        this.prod.descricao = '';
        this.prod.perecivel = false;
        this.error = '';
        this.success = true;
      }
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our exp values */
      this.prod.nome = '';
      this.prod.distribuidor = '';
      this.prod.preco = '';
      this.prod.qtd = '';
      this.prod.descricao = '';
      this.prod.perecivel = false;
      this.error = '';
      this.success = '';
      /* Trick to reset/clear native browser exp validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
  },
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