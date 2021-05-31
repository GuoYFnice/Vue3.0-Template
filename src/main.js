import { createApp } from 'vue'
// import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupGlobDirectives } from './directive'
import { registerGlobComp } from '/@/components/registerGlobComp'
import 'ant-design-vue/dist/antd.css'
;(async () => {
  // 虚假的登录检测
  router.beforeEach((to, from, next) => {
    if (to.path !== '/login') {
      if (!localStorage.getItem('userInfo')) {
        router.replace('/login')
      }
    }
    next()
  })
  const app = createApp(App)
  registerGlobComp(app)
  setupGlobDirectives(app)
  app.use(router).use(store).mount('#app', true)
})()
