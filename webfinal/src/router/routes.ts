import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'comp1', component: () => import('components/ThePage1.1.vue') },
      { path: 'comp2', component: () => import('components/ThePage2.2.vue') },
      { path: 'comp3', component: () => import('components/ThePage3.3.vue') },
      { path: 'comp4', component: () => import('components/ThePage4.4.vue') },
      { path: 'comp5', component: () => import('components/ThePage5.5.vue') },
      { path: 'comp6', component: () => import('components/ThePage1.vue') },
      { path: 'comp7', component: () => import('components/ThePage2.vue') },
      { path: 'comp8', component: () => import('components/ThePage3.vue') },
      { path: 'comp9', component: () => import('components/ThePage4.vue') },
      { path: 'comp10', component: () => import('components/ThePage5.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
