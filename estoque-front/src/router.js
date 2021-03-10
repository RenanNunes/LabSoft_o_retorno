import Vue from 'vue';
import Router from 'vue-router';
import CriarProduto from './views/CriarProduto.vue';
import DetalharProduto from './views/DetalharProduto.vue';
import ListarProduto from './views/ListarProdutos.vue';
import ListarEstoque from './views/ListarEstoque.vue';
import PaginaInicial from './views/PaginaInicial.vue';
import PaginaLogin from './views/PaginaLogin.vue';
import PaginaErro404 from './views/PaginaErro404.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: PaginaInicial,
    },
    {
      path: '/login',
      name: 'login',
      component: PaginaLogin,
    },
    {
      path: '/produtos/criar',
      name: 'criarProduto',
      component: CriarProduto,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/produtos/detalhar/:id',
      name: 'detalharProduto',
      component: DetalharProduto,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/produtos/listar',
      name: 'listarProduto',
      component: ListarProduto,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/produtos/estoque',
      name: 'listarEstoque',
      component: ListarEstoque,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '*',
      name: 'error404',
      component: PaginaErro404,
    },
    ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!window.$cookies.get("user_id")) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
