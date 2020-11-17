import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ left: 0, top: 0 }), 1);
    });
  },
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/:catchAll(.*)',
          component: () => import('@/views/404.vue'),
        },
      ]
    },
  ],
})
