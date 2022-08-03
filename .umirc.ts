import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {//配置antd组件库
    dark: false,
    compact: true,
  },
  routes: [
    { path: '/', component: '@/pages/start/index' },
    { path: '/start', component: '@/pages/start/index' },
    { path: '/test', component: '@/pages/test/index' },
  ],
  fastRefresh: {},
});
