import Vue from 'vue'

import VTreeSelect from './src'

Vue.use(VTreeSelect)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
