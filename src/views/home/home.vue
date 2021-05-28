<template>
  <a-layout class="main" v-right-click="rightMenuObj">
    <a-layout-header class="header">
      <h2 style="color: #000">vue3.0-taste</h2>
      <a-switch v-model:checked="checked" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200">
        <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu v-for="item in menus" :key="item.name">
            <template v-slot:title>
              <span>{{ item.name }}</span>
            </template>
            <a-menu-item
              v-for="(i, index) in item.children"
              :key="index"
              @click="() => handleMenuChange(i)"
              >{{ i.name }}</a-menu-item
            >
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px; background: #e4e9ed">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <right-menu-dom />
  </a-layout>
</template>

<script>
import menuList from '../../config/menuList'
import RightMenuDom from '../../components/RightMenuDom'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  // ref：它用于声明简单的基础类型变量，如单个数字、boolean、字符串等等。
  // reactive：它用于对象引用类型的复杂变量。
  // 使用解构的两个 property 的响应性都会丢失。
  // 示例
  // 如果直接使用let { author, title } = book

  // const book = reactive({
  //   author: 'Vue Team',
  //   year: '2020',
  //   title: 'Vue 3 Guide',
  //   description: 'You are reading this book right now ;)',
  //   price: 'free'
  // })

  // let { author, title } = toRefs(book)

  // title.value = 'Vue 3 Detailed Guide' // 我们需要使用 .value 作为标题，现在是 ref
  // console.log(book.title) // 'Vue 3 Detailed Guide'
  components: {
    RightMenuDom,
  },
  data() {
    return {
      menus: menuList,
      checked: true,
      rightMenuObj: {
        text: ['复制', '粘贴', '返回上一步'],
        handle: {
          handleCopy() {
            console.log('复制')
          },
          handlePaste() {
            console.log('粘贴')
          },
          handleReturn() {
            console.log('返回上一步')
          },
        },
      },
    }
  },
  mounted() {
    // 监听全局点击事件
    document.addEventListener('click', () => {
      // 隐藏右键菜单
      this.$store.commit('updateRightMenuStatus', {
        status: 'none',
        left: '0px',
        top: '0px',
      })
    })
  },
  methods: {
    handleMenuChange(item) {
      this.$router.push(item.path)
    },
  },
}
</script>

<style lang="scss">
.main {
  height: 100vh;
  .header {
    background: #bdc3c7;
  }
}
</style>
