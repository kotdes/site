import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Koute',
      component: () => import('../views/Koute.vue')
    },
    {
      path: '/panel',
      name: 'Panel',
      component: () => import('../views/Panel.vue')
    },
    {
      path: '/cmd',
      name: 'Commander',
      component: () => import('../views/Cmd.vue')
    },
    {
      path: '/lucide',
      name: 'Lucide',
      component: () => import('../views/Lucide.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name + " | KoteraDesign";
  next();
});

export default router
