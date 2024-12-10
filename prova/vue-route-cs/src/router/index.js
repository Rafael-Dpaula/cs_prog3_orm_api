import Vue from 'vue'
import Router from 'vue-router'

import login from  '@/components/Login'
import home from  '@/components/Home'
import listJogadores from  '@/components/jogador/List'
import editJogador   from  '@/components/jogador/Edit'
import novoJogador   from  '@/components/jogador/Add'

import listPatentes from  '@/components/patente/List'
import novoPatente from  '@/components/patente/Add'
import editPatente from  '@/components/patente/Edit'

import listLocais from  '@/components/local/List'
import novoLocal from  '@/components/local/Add'
import editLocal from  '@/components/local/Edit'

import listParametros from  '@/components/parametro/List'
import novoParametro from  '@/components/parametro/Add'
import editParametro from  '@/components/parametro/Edit'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/jogadores',
      name: 'jogadores-list',
      component: listJogadores    
    },
    {
      path: '/jogador/:nickname',
      name: "jogador-edit",
      component: editJogador
    },
    {
      path: '/addjogador',
      name: "jogador-add",
      component: novoJogador
    },
    {
      path: '/patentes',
      name: 'patentes-list',
      component: listPatentes    
    },
    {
      path: '/addpatente',
      name: "patente-add",
      component: novoPatente
    },
    {
      path: '/patente/:id',
      name: "patente-edit",
      component: editPatente
    },
    {
      path: '/locais',
      name: 'locais-list',
      component: listLocais    
    },
    {
      path: '/addlocal',
      name: "local-add",
      component: novoLocal
    },
    {
      path: '/local/:id',
      name: "local-edit",
      component: editLocal
    },
    {
      path: '/parametros',
      name: 'parametros-list',
      component: listParametros  
    },
    {
      path: '/addparametro',
      name: "parametro-add",
      component: novoParametro
    },
    {
      path: '/parametro/:codigo',
      name: "parametro-edit",
      component: editParametro
    }
  ]
})

router.beforeEach((to, from, next) => {
    
  if (to.name !== 'login' && !localStorage.getItem('authUser')){
     next({name: 'login'})
  } else {
     next()
  }
  
})

export default router;