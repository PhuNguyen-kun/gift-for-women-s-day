import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cac-anh-trai-Markat-sieu-dep-zai',
      name: 'welcome',
      component: () => import('@/views/welcome.vue'),
    },
    {
      path: `/chuc-mung-20/10-cac-chi-em-Markat`,
      name: 'main',
      component: () => import('@/views/Main.vue'),
    },
  ],
})

export default router
