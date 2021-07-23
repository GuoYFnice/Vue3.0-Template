<template>
	<a-layout-header :class="$style.header">
		<h2 :class="$style.title">Vue3.0-Template</h2>
		<span @click="logout">logout</span>
	</a-layout-header>
</template>
<script>
import { Layout } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useUserStoreWidthOut } from '/@/store/modules/UserStore'

const { Header } = Layout
export default defineComponent({
	name: 'LayoutHeader',
	components: {
		'a-layout-header': Header,
	},
	setup() {
		const UserStore = useUserStoreWidthOut()
		const logout = () => {
			UserStore.logout()
		}
		return {
			logout,
		}
	},
})
</script>
<style lang="scss" src="../index.module.scss" module></style>
