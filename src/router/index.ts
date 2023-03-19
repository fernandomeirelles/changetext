import { createRouter, createWebHistory } from 'vue-router'
import Transform from '../views/TransformView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'transform',
      component: Transform
    },
  ]
})

export default router
