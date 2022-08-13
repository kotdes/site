import { createRouter, createWebHistory } from 'vue-router'
import Koute from '../views/Koute.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Koute',
      component: Koute
    },
    {
      path: '/panel',
      name: 'Panel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Panel.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name + " | KoteraHQ";
  next();
});

export default router
