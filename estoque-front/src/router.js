import Vue from 'vue';
import Router from 'vue-router';
import CriarProduto from './views/CriarProduto.vue';
import DetalharProduto from './views/DetalharProduto.vue';
import ListarProduto from './views/ListarProdutos.vue';
import ListarEstoque from './views/ListarEstoque.vue';
import PaginaInicial from './views/PaginaInicial.vue';
import PaginaErro404 from './views/PaginaErro404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PaginaInicial,
    },
    {
      path: '/produtos/criar',
      name: 'criarProduto',
      component: CriarProduto,
    },
    {
      path: '/produtos/detalhar/:id',
      name: 'detalharProduto',
      component: DetalharProduto,
    },
    {
      path: '/produtos/listar',
      name: 'listarProduto',
      component: ListarProduto,
    },
    {
      path: '/produtos/estoque',
      name: 'listarEstoque',
      component: ListarEstoque,
    },
    {
      path: '*',
      name: 'error404',
      component: PaginaErro404,
    },
    ],
});
