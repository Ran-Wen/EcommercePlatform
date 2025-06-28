import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Category from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Details from '@/views/Details/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/category/:id',
          name: 'category',
          component: Category
        },
        {
          path: '/category/sub/:id',
          name: 'subcategory',
          component: SubCategory
        },
        {
          path: '/details/:id',
          name: 'details',
          component: Details
        },
        {
          path: '/cartlist',
          name: 'cartlist',
          component: CartList
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: CheckOut
        },
        {
          path: '/pay',
          name: 'pay',
          component: Pay
        },
        {
          path: '/payback',
          name: 'payback',
          component: PayBack
        },
        {
          path: '/member',
          name: 'member',
          component: Member,
          children: [
            {
              path: '',
              name: 'user',
              component: UserInfo,
            }, {
              path: 'order',
              name: 'order',
              component: UserOrder,
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
