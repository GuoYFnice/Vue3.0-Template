<template>
  <div
    :class="$style.RightMenuDom"
    :style="{
      display: rightMenuStatus,
      top: rightMenuTop,
      left: rightMenuLeft,
    }"
  >
    <ul>
      <li v-for="item in rightMenuList" :key="item.id" @click="item.handle">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, reactive, computed, toRefs } from 'vue'
// import { useStore } from 'vuex'
import { useRightMenuStoreWidthOut } from '/@/store/modules/RightMenuStore'
export default {
  name: 'RightMenuDom',
  setup() {
    // const store = useStore()
    const RightMenuStore = useRightMenuStoreWidthOut()
    const rightMenuStatus = computed(() => RightMenuStore.status)
    const rightMenuTop = computed(() => RightMenuStore.top)
    const rightMenuLeft = computed(() => RightMenuStore.left)
    const rightMenuList = computed(() => RightMenuStore.list)
    // const rightMenuStatus = computed(() => store.state.rightMenu.status)
    // const rightMenuTop = computed(() => store.state.rightMenu.top)
    // const rightMenuLeft = computed(() => store.state.rightMenu.left)
    // const rightMenuList = computed(() => store.state.rightMenu.list)
    return {
      rightMenuStatus,
      rightMenuTop,
      rightMenuLeft,
      rightMenuList,
    }
  },
}
</script>
<style lang="scss" src="./style.scss" module />
