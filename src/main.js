import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import Registro from "./components/Registro.vue"
import NuevoPost from "./components/NuevoPost.vue"
import Filtro from "./components/Filtro.vue"
import FiltroNombre from "./components/FiltroNombre.vue"
import EditarPost from "./components/EditarPost.vue"

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const router = new VueRouter({

  routes: [
    {
      path: '/',
      component: Home
    },
    {
    path:'/login',
    component: Login
    },
    {
      path: '/registro',
      component: Registro
    },
    {
      path: '/crearpost',
      component: NuevoPost
    },
    {
      path:'/filtro/:categoria',
      component: Filtro
    },
    {
      path:'/filtro/titulo/:titulo',
      component: FiltroNombre
    },
    {
      path: '/editarpost/:id',
      component: EditarPost
    }
  ],

});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
