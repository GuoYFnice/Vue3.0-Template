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
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
