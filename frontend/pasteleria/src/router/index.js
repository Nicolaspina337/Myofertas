import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Valoralizaciones from '@/components/Valoralizaciones'

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
    }
  ]
})
