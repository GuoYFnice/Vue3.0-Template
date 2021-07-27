<template>
	<a-layout-footer style="text-align: center">
		Vue3.0-Template ©2021 Created by GuoYFnice
	</a-layout-footer>
</template>
<script>
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'

const { Footer } = Layout

export default defineComponent({
	name: 'LayoutFooter',
	components: {
		'a-layout-footer': Footer,
	},
})
</script>
<style lang="scss" src="../index.module.scss" module></style>
