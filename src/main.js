import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'

// vue3.0使用createApp创建建VUE实例
// 链式调用
createApp(App).use(router).use(store).use(Antd).mount('#app')
