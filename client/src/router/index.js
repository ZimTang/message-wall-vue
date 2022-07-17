import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/message-wall-page.vue'),
  },
  {
    path: '/message',
    redirect: '/',
  },
  {
    path: '/picture',
    component: () => import('../pages/picture-wall-page.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
