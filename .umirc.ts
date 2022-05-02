import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { type: 'index', path: '/', component: '@/pages/login' },
    {
      type: 'user',
      path: '/user',
      component: 'user',
      wrappers: ['@/wrappers/auth'],
    },
    { type: 'login', path: '/login', component: 'login' },
    // exact 表示是否严格匹配
    // { path: '/test', component: '@/pages/test' },
  ],
  fastRefresh: {},
  antd: {
    mobile: false,
  },
});
