<template>
	<Layout :layoutType="layoutType" />
	<LayDrawer />
</template>

<script>
import Layout from './components/Layout.vue'
import LayDrawer from './components/LayDrawer.vue'

export default {
	components: {
		Layout,
		LayDrawer,
	},
	setup() {
		/**
		 * 1左侧菜单模式
		 * 2顶部菜单模式
		 * 3顶部-菜单混合模式
		 */
	},
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
