import { createRouter, createWebHistory } from 'vue-router'

import Layout from "@/views/Layout.vue";
import P404 from "@/views/404.vue";
import Home from "@/views/Home.vue";
import Board from "./views/Board.vue";

const router = createRouter({

  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ left: 0, top: 0 }), 1);
    });
  },
  routes: [
      // basic
      {
        path: '/', component: Layout,
        children: [
          { path: '/', component: Home },
          { path: '/board', component: Board },
          { path: '/:path(.*)', component: P404, meta: { title: '404' } },
        ]
      },
  ],
});

export default router;
