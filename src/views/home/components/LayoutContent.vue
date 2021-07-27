<template>
	<a-layout :class="$style.contentBox">
		<a-breadcrumb :class="$style.breadcrumb">
			<a-breadcrumb-item>Home</a-breadcrumb-item>
		</a-breadcrumb>
		<a-layout-content :class="$style.content">
			<router-view />
		</a-layout-content>
	</a-layout>
</template>
<script>
import { defineComponent } from 'vue'
import { Layout, Breadcrumb } from 'ant-design-vue'

const { Content } = Layout

export default defineComponent({
	name: 'LayoutMenus',
	components: {
		'a-layout-content': Content,
		'a-breadcrumb': Breadcrumb,
		'a-breadcrumb-item': Breadcrumb.Item,
	},
	props: {
		type: {
			type: String,
			default: '',
		},
	},
	setup() {},
})
</script>
<style lang="scss" src="../index.module.scss" module></style>
