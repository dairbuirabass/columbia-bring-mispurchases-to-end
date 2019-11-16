import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
}).$mount('#app')