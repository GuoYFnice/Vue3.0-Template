import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'

// 虚假的登录检测
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!localStorage.getItem('userInfo')) {
      router.replace('/login')
    }
  }
  next()
});




// vue3.0使用createApp创建建VUE实例
// 链式调用
createApp(App).use(router).use(store).use(Antd).directive("rightClick", (el, binding) => {
  el.oncontextmenu = function (e) {
    const textArray = binding.value.text;
    const handlerObj = binding.value.handler;
    // 事件处理数组
    const handlerArray = [];
    // 处理好的右键菜单
    const menuList = [];
    // 将事件处理函数放入数组中
    for (const key in handlerObj) {
      handlerArray.push(handlerObj[key]);
    }
    // 追加右键菜单数据
    for (let i = 0; i < textArray.length; i++) {
      // 右键菜单对象, 添加名称
      const menuObj = {
        text: textArray[i],
        handler: handlerArray[i],
        id: i + 1
      };
      menuList.push(menuObj);
    }
    // 鼠标点的坐标
    const oX = e.clientX;
    const oY = e.clientY;
    // 右键菜单出现后的位置
    store.commit("updateRightMenuStatus", {
      status: "block",
      left: oX + "px",
      top: oY + "px",
      list: menuList
    });
    return false;
  };
}).mount('#app')