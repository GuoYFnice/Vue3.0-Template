import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'

// 虚假的登录检测
router.beforeEach((to, from, next) => {
    if(to.path !== '/login'){
      if(!localStorage.getItem('userInfo')){
        router.replace('/login')
      }
    }
    next()
});

// vue3.0使用createApp创建建VUE实例
// 链式调用
createApp(App).use(router).use(store).use(Antd).mount('#app')
