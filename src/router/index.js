import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import map from '@/components/GHMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/map',
      name: 'map',
      component: map
    }
  ]
})
