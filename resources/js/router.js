import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Burger from './components/pages/Burger.vue'
import Beverage from './components/pages/Beverage.vue'
import Combo from './components/pages/Combo.vue'
import Home from './components/pages/Home.vue'
import Insert from './components/insert.vue'


const routes = [
    {
        path: '/insert',
        name: 'insert',
        component: Insert

    },
     {
          path: '/',
          name: 'home',
          component: Home
  
      },
     {
         path: '/burger',
         name: 'burger',
         component: Burger
 
     },
     {
          path: '/combos',
          name: 'combos',
          component: Combo
  
      },
      {
          path: '/beverages',
          name: 'beverages',
          component: Beverage
  
      },
 ]
 export default new VueRouter({
     mode: 'history',
     routes,
 })
 