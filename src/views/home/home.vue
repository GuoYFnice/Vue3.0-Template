<template>
<a-layout class="main">
  <a-layout-header class="header">
    <div>123</div>
  </a-layout-header>
  <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu mode="inline" v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" :style="{ height: '100%', borderRight: 0 }">
        <a-sub-menu key="sub1">
          <template v-slot:title>
            <span>subnav 1</span>
          </template>
          <a-menu-item key="1">option1</a-menu-item>
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</a-layout>
</template>

<script>
import menuList from '../../config/menuList'
export default {
  // ref：它用于声明简单的基础类型变量，如单个数字、boolean、字符串等等。
  // reactive：它用于对象引用类型的复杂变量。
  components: {},
  data() {
    return {
      selectedKeys1: ['2'],
      selectedKeys2: ['1'],
      collapsed: false,
      openKeys: ['sub1'],
    };
  },
};
</script>

<style>
.main {
  height: 100vh;
}
</style>
