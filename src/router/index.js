import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
      path: '/seller',
      name: 'seller',
      meta: {
        title: '商家-首页'
      },
      component: () => import(/* webpackChunkName: "Seller" */ '../views/seller/Seller.vue')
    },
    {
      path: '/seller/:enuu',
      name: 'sellerDetail',
      meta: {
        title: '商家详情-商家-首页'
      },
      component: () => import(/* webpackChunkName: "SellerDetail" */ '../views/seller/SellerDetail.vue')
    },
    {
      path: '/product',
      name: 'productList',
      meta: {
        title: '产品-首页'
      },
      component: () => import(/* webpackChunkName: "ProductList" */ '../views/product/ProductList.vue')
    },
    {
      path: '/product/:code',
      name: 'productDetail',
      meta: {
        title: '产品详情-产品-首页'
      },
      component: () => import(/* webpackChunkName: "ProductDetail" */ '../views/product/ProductDetail.vue')
    },
    {
      path: '/applyPurchase',
      name: 'applyPurchase',
      meta: {
        title: '求购-首页'
      },
      component: () => import(/* webpackChunkName: "ApplyPurchase" */ '../views/applyPurchase/ApplyPurchase.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "User" */ '../views/user/LeftNav.vue'),
      children: [
        {
          path: 'home',
          meta: {
            title: '首页-买家中心'
          },
          component: () => import(/* webpackChunkName: "User" */ '../views/user/Home.vue')
        },
        {
          path: 'demand',
          meta: {
            title: '我的需求-买家中心'
          },
          component: () => import(/* webpackChunkName: "User" */ '../views/user/Demand.vue')
        },
        {
          path: 'collect',
          meta: {
            title: '我的收藏-买家中心'
          },
          component: () => import(/* webpackChunkName: "User" */ '../views/user/Collect.vue')
        },
        {
          path: 'cart',
          meta: {
            title: '购物车-买家中心'
          },
          component: () => import(/* webpackChunkName: "User" */ '../views/user/Cart.vue')
        }
      ]
    },
    {
      path: '/pay/:code',
      meta: {
        title: '结算页'
      },
      component: () => import(/* webpackChunkName: "User" */ '../views/user/Pay.vue')
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: () => import(/* webpackChunkName: "Vendor" */ '../views/vendor/LeftNav.vue'),
      children: [
        {
          path: 'home',
          meta: {
            title: '首页-卖家中心'
          },
          component: () => import(/* webpackChunkName: "Vendor" */ '../views/vendor/Home.vue')
        },
        {
          path: 'product',
          meta: {
            title: '产品管理-卖家中心'
          },
          component: () => import(/* webpackChunkName: "Vendor" */ '../views/vendor/Product.vue')
        }
      ]
    }
  ]
})

route.beforeEach((to, from, next) => {
  // 登陆守卫
  if (to.meta.title) {
    document.title = to.meta.title
  }
  store.dispatch('options/setRouterLoading', true)
  next()
})

route.afterEach((to, from) => {
  store.dispatch('options/setRouterLoading', false)
  if (!store.state.auth.user.getAuthed) {
    store.dispatch('auth/getAuth')
  }
})

export default route
