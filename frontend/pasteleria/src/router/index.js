import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Valoralizaciones from '@/components/Valoralizaciones'
import Escritorio from '@/components/Escritorio'
import Comunicaciones from '@/components/Comunicaciones'
import Estante from '@/components/Estante'
import Notificaciones from '@/components/Notificaciones'
import Administrador from '@/components/Administrador'
import Gestnotifi from '@/components/Gestnotifi'
import Gestcorreo from '@/components/Gestcorreo'

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
      component: Valoralizaciones
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
