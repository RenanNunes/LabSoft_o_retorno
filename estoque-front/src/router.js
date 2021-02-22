import Vue from 'vue';
import Router from 'vue-router';
import CriarProduto from './views/CriarProduto.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/produtos/criar',
      name: 'criarProduto',
      component: CriarProduto,
    },
    {
      path: '*',
      name: 'error404',
      component: HelloWorld,
    },
    ],
});
