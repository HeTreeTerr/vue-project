import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Hrinfo from '../views/Hrinfo.vue'

Vue.use(Router)

export default new Router({
  // 去掉url中的#/
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: false
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: false
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      hidden: false,
      mate: {
        requireAuth: true
      }
    },
    {
      path: '/hrinfo',
      name: 'Hrinfo',
      component: Hrinfo,
      hidden: false,
      mate: {
        requireAuth: true
      }
    }
  ]
})
