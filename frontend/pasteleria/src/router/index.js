import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/views/Menu'
import Valoralizaciones from '@/views/Valoralizaciones'
import Escritorio from '@/views/Escritorio'
import Comunicaciones from '@/views/Comunicaciones'
import Estante from '@/views/Estante'
import Notificaciones from '@/views/Notificaciones'
import Administrador from '@/views/Administrador'
import Gestnotifi from '@/views/Gestnotifi'
import Gestcorreo from '@/views/Gestcorreo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/menu'
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/valoralizaciones',
      name: 'valoralizaciones',
      component: Valoralizaciones, 
    },
    {
      path: '/escritorio',
      name: 'escritorio',
      component: Escritorio
    },
    {
      path: '/comunicaciones',
      name: 'comunicaciones',
      component: Comunicaciones
    },
    {
      path: '/estante',
      name: 'estante',
      component: Estante
    },
    {
      path: '/notificaciones',
      name: 'notificaciones',
      component: Notificaciones
    },
    {
      path: '/administrador',
      name: 'administrador',
      component: Administrador
    },
    {
      path: '/gestnotifi',
      name: 'gestnotifi',
      component: Gestnotifi
    },
    {
      path: '/gestcorreo',
      name: 'gestcorreo',
      component: Gestcorreo
    }
  ]
})
