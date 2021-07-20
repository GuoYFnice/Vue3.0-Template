<template>
	<a-layout :class="$style.main" v-right-click="rightMenuObj">
		<a-layout-header :class="$style.header">
			<h2 :class="$style.title">vue3.0-taste</h2>
			<span>logout</span>
		</a-layout-header>
		<a-layout>
			<a-layout-sider width="200">
				<a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">
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
					<router-view />
				</a-layout-content>
			</a-layout>
		</a-layout>
		<right-menu-dom />
	</a-layout>
</template>

<script>
import menuList from '/@/config/menuList'
import RightMenuDom from '/@/components/RightMenuDom'
import { Layout, Menu, Breadcrumb } from 'ant-design-vue'
import { useRightMenuStoreWidthOut } from '/@/store/modules/RightMenuStore'
import { useUserStoreWidthOut } from '/@/store/modules/UserStore'

const { Header, Sider, Content } = Layout
const { Item, SubMenu } = Menu
export default {
	components: {
		'a-layout': Layout,
		'a-layout-header': Header,
		'a-layout-sider': Sider,
		'a-layout-content': Content,
		'a-menu': Menu,
		'a-menu-item': Item,
		'a-sub-menu': SubMenu,
		'a-breadcrumb': Breadcrumb,
		'a-breadcrumb-item': Breadcrumb.Item,
		RightMenuDom,
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
		const RightMenuStore = useRightMenuStoreWidthOut()
		// 监听全局点击事件
		document.addEventListener('click', () => {
			// 隐藏右键菜单
			RightMenuStore.updateRightMenuStatus({
				status: 'none',
				left: '0px',
				top: '0px',
			})
			// this.$store.commit('updateRightMenuStatus', {
			//   status: 'none',
			//   left: '0px',
			//   top: '0px',
			// })
		})
	},
	methods: {
		handleMenuChange(item) {
			this.$router.push(item.path)
		},
	},
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
