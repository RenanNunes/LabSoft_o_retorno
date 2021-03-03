<template>
  <div class="form-login">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h3>Login</h3>
      <br />
      <b-form-group id="userLabel"
                    label="Email cadastrado:"
                    label-for="user">
        <b-form-input id="user"
                      type="text"
                      v-model="login.user"
                      required
                      placeholder="Email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="senhaLabel"
                    label="Senha:"
                    label-for="senha">
        <b-form-input id="senha"
                      type="password"
                      v-model="login.senha"
                      required
                      placeholder="Senha do sistema">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="botao-form">Concluir</b-button>
      <b-button type="reset" variant="danger" class="botao-form">Limpar</b-button>
      <br />
      <br />
      <b-alert :show="!!success" variant="success">Login realizado com sucesso</b-alert>
      <b-alert :show="!!error" variant="warning">{{error}}</b-alert>
    </b-form>
  </div>
</template>

<script>
const API_URL = process.env.NODE_ENV  == 'development' ? 'http://localhost:3000' : 'https://estoque-back-renannunes.cloud.okteto.net';
export default {
  data() {
    return {
      login: {
        user: '',
        senha: '',
      },
      error: '',
      success: '',
      show: true,
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const result = await fetch(API_URL+'/login/', {
        method: 'POST',
        body: JSON.stringify(this.login),
        headers: {
          'content-type': 'application/json',
        },
      });
      const resultJSON = await result.json();
      if (resultJSON.erro) {
        this.error = resultJSON.mensagem;
        this.success = '';
      } else {
        this.login.user = '';
        this.login.senha = '';
        this.error = '';
        this.success = true;
      }
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our exp values */
      this.login.user = '';
      this.login.senha = '';
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
.form-login {
  background-color: #fcfcfc;
  padding: 15px;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
</style>