<template>
	<a-menu :mode="type" :class="$style.menus">
		<a-sub-menu v-for="item in menus" :key="item.name">
			<template #title>
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
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import menuList from '/@/config/menuList'
import { Menu } from 'ant-design-vue'

const { Item, SubMenu } = Menu

export default defineComponent({
	name: 'LayoutMenus',
	components: {
		'a-menu': Menu,
		'a-menu-item': Item,
		'a-sub-menu': SubMenu,
	},
	props: {
		type: {
			type: String,
			default: 'inline',
		},
	},
	setup() {
		const menus = reactive({ ...menuList })
		const router = useRouter()
		const handleMenuChange = item => {
			router.push({
				path: item.path,
			})
		}
		return {
			menus,
			handleMenuChange,
		}
	},
})
</script>
<style lang="scss" src="../index.module.scss" module></style>
