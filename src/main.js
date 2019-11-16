import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' 
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'
import routes from './router/index';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')