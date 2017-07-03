// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'

Vue.use(VueResource)


new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router
})
