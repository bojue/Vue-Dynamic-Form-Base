import { createRouter, createWebHistory } from 'vue-router'
import FormBaseView from '../views/FormBase.vue'
import FormView from '../views/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: FormBaseView,
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
    }
  ],
})

export default router
