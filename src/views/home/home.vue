<template>
	<a-layout
		v-if="layoutType === 1"
		:class="$style.main"
		v-right-click="rightMenuObj"
	>
		<layout-header @handleDrawer="handleDrawer" :layoutType="layoutType" />
		<a-layout>
			<a-layout-sider theme="light" width="200">
				<layout-menus />
			</a-layout-sider>
			<layout-content />
		</a-layout>
		<layout-footer />
		<right-menu-dom />
	</a-layout>

	<a-layout v-if="layoutType === 2" :class="$style.main">
		<layout-header @handleDrawer="handleDrawer" :layoutType="layoutType">
			<template #menus>
				<layout-menus type="horizontal" />
			</template>
		</layout-header>
		<layout-content />
		<layout-footer />
	</a-layout>

	<a-layout v-if="layoutType === 3" :class="$style.main">
		<a-layout-sider theme="light" v-model="collapsed" collapsible>
			<div :class="$style.titleBox">
				<h2>Template</h2>
			</div>
			<layout-menus />
		</a-layout-sider>
		<a-layout style="height: 100%">
			<layout-header @handleDrawer="handleDrawer" :layoutType="layoutType" />
			<layout-content />
			<layout-footer />
		</a-layout>
	</a-layout>
	<a-drawer
		title="设置"
		placement="right"
		:closable="false"
		:visible="visible"
		@close="handleDrawerClose"
	>
		<div>
			<a-radio-group v-model="layoutType" @change="handleRadioChange">
				<a-radio-button :value="1"> 左侧菜单模式 </a-radio-button>
				<a-radio-button :value="2"> 顶部菜单模式 </a-radio-button>
				<a-radio-button :value="3"> 顶部-菜单混合模式 </a-radio-button>
			</a-radio-group>
		</div>
	</a-drawer>
</template>

<script>
import RightMenuDom from '/@/components/RightMenuDom'
import { Layout, Drawer, Radio } from 'ant-design-vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutMenus from './components/LayoutMenus.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutContent from './components/LayoutContent.vue'
import { useRightMenuStoreWidthOut } from '/@/store/modules/RightMenuStore'
import { onMounted, reactive } from '@vue/runtime-core'
import { ref } from 'vue'

const { Sider } = Layout

export default {
	components: {
		'a-layout': Layout,
		'layout-header': LayoutHeader,
		'layout-menus': LayoutMenus,
		'layout-content': LayoutContent,
		'layout-footer': LayoutFooter,
		'a-drawer': Drawer,
		'a-layout-sider': Sider,
		'a-radio-group': Radio.Group,
		'a-radio-button': Radio.Button,
		RightMenuDom,
	},
	setup() {
		/**
		 * 1左侧菜单模式
		 * 2顶部菜单模式
		 * 3顶部-菜单混合模式
		 */
		const layoutType = ref(1)
		const collapsed = ref(false)
		const visible = ref(false)
		const rightMenuObj = reactive({
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
		})
		onMounted(() => {
			const RightMenuStore = useRightMenuStoreWidthOut()
			// 监听全局点击事件
			document.addEventListener('click', () => {
				// 隐藏右键菜单
				RightMenuStore.updateRightMenuStatus({
					status: 'none',
					left: '0px',
					top: '0px',
				})
			})
		})
		const handleDrawer = data => {
			visible.value = data
		}
		const handleDrawerClose = () => {
			visible.value = false
		}
		const handleRadioChange = e => {
			layoutType.value = e.target.value
		}
		return {
			layoutType,
			rightMenuObj,
			collapsed,
			visible,
			handleDrawer,
			handleDrawerClose,
			handleRadioChange,
		}
	},
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
