import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue')
const Admin = () => import(/* webpackChunkName: "admin" */ './views/Admin')
const AddProduct = () => import(/* webpackChunkName: "admin" */ './components/admin/AddProduct')
const Orders = () => import(/* webpackChunkName: "admin" */ './components/admin/Orders')
const About = () => import(/* webpackChunkName: "about" */ './views/About')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      redirect: '/admin/orders',
      children: [
        {
          path: 'orders',
          name: 'orders',
          component: Orders
        },
        {
          path: 'add',
          name: 'addProduct',
          component: AddProduct
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
