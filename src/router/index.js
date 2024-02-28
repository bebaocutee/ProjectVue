import { createRouter, createWebHistory } from 'vue-router'
import RegisterFormVue from '@/components/RegisterForm.vue'
import LoginFormVue from '@/components/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dang-ky',
      name: 'register',
      component: RegisterFormVue
    },
    {
      path: '/dang-nhap',
      name: 'login',
      component: LoginFormVue
    }
  ]
})

export default router
