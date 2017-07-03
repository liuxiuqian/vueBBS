import Vue from 'vue'
import Router from 'vue-router'
import detail from '../view/Detail'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['../view/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/detail',
    component: detail
  }
]


export default new Router({
  routes
})
