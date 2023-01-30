import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import DetailView from '../views/DetailView.vue'
import haveAuthGuard from './auth-guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    beforeEnter: [haveAuthGuard],
    component: ProductsView,
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: [haveAuthGuard],
    component: ProfileView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/products/:id',
    name: 'detail',
    beforeEnter: [haveAuthGuard],
    component: DetailView,
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: null } : { id }
    }
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
