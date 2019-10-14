import Vue from 'vue'
import Router from 'vue-router'
import Dogs from '@/modules/dogs/Dogs'
import Bulldog from '@/modules/dogs/pages/Bulldog'
import notFoundTemplate from '@/modules/dogs/components/notFoundTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: notFoundTemplate
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component: Dogs,
      children: [
        {
          path: 'bulldog',
          component: Bulldog
        },
        {
          path: '*',
          component: notFoundTemplate
        }
      ]
    },
    {
      path: '*',
      component: notFoundTemplate
    }
  ]
})
