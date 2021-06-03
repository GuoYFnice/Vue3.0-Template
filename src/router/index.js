import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  // 通过 createRouter 创建路由实例，history 属性作为控制路由模式的参数
  // createWebHashHistory 方法返回的是 hash 模式
  // createWebHistory 返回的是 history 模式，本项目采用 hash 模式
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('../views/login/login.vue'),
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('../views/home/home.vue'),
      children: [
        {
          path: '/home/page1',
          component: () => import('../views/page/page1.vue'),
          meta: {
            ignoreAuth: true,
          },
        },
        {
          path: '/home/page2',
          component: () => import('../views/page/page2.vue'),
        },
        {
          path: '/home/cssPage',
          component: () => import('../views/page/cssPage/index'),
        },
      ],
    },
  ],
})
