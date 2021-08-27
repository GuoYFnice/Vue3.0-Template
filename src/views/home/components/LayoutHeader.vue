<template>
	<a-layout-header :class="$style.header">
		<h2 :class="$style.headerTitle" v-show="layoutType !== 3"
			>Vue3.0-Template</h2
		>
		<slot :class="$style.headerMenus" name="menus"></slot>
		<div :class="$style.headerInfo">
			<span @click="logout">
				<a-badge :count="1"><a-avatar icon="user" /></a-badge>
			</span>
			<span @click="handleSeting">
				<i class="iconfont icon-setting-fill"></i>
			</span>
		</div>
	</a-layout-header>
</template>
<script>
import { Layout, Avatar, Badge } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useUserStoreWidthOut } from '/@/store/modules/UserStore'

const { Header } = Layout
export default defineComponent({
	name: 'LayoutHeader',
	components: {
		'a-layout-header': Header,
		'a-avatar': Avatar,
		'a-badge': Badge,
	},
	props: {
		layoutType: {
			type: Number,
			default: 1,
		},
	},
	setup(_, { emit }) {
		const UserStore = useUserStoreWidthOut()
		const logout = () => {
			UserStore.logout()
		}
		const handleSeting = () => {
			emit('handleDrawer', true)
		}
		return {
			logout,
			handleSeting,
		}
	},
})
</script>
<style lang="scss" src="../index.module.scss" module></style>
