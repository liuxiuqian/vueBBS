import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['../view/home'],resolve),
    meta: {
      title:'home'
    }
  }
]


export default new Router({
  routes
})
