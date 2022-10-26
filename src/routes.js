import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Login from "./components/Login.vue"
import Registro from "./components/Registro.vue"

export default [

    {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path:'/login',
        component: Login
      },
      {
        path: '/registro',
        component: Registro
      }

    ];