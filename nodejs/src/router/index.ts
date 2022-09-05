import { RouterRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Hoge from '../views/hoge/index.vue'
import Fuga from '../views/fuga/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'hoge',
    component: Hoge,
  },
  {
    path: '/fuga',
    name: 'fuga',
    component: Fuga,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
