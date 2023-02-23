import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../views/Shopping.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'productlist',
        component: () => import('../views/ProductList.vue')
      }
    ]
  },
  {
    path: '/BuyingItemPage',
    name: 'BuyingItemPage',
    component: () => import('../views/BuyingItemPage.vue')
  },
  {
    path: '/ShopCart',
    name: 'ShopCart',
    component: () => import('../views/ShopCart.vue')
  },
  {
    path: '/StreetStyle',
    name: 'StreetStyle',
    component: () => import('../views/StreetStyle.vue')
  },
  {
    path: '/ShopCartConfirmPage',
    name: 'ShopCartConfirmPage',
    component: () => import('../views/ShopCartConfirmPage.vue')
  },
  {
    path: '/ShopCartFinalPage',
    name: 'ShopCartFinalPage',
    component: () => import('../views/ShopCartFinalPage.vue')
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/StreetStyleInnerPage',
    name: 'StreetStyleInnerPage',
    component: () => import('../views/StreetStyleInnerPage.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
