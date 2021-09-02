<template>
	<a-layout
		v-right-click="rightMenuObj"
		v-if="layoutType === 1"
		:class="$style.main"
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

	<a-layout
		v-right-click="rightMenuObj"
		v-if="layoutType === 2"
		:class="$style.main"
	>
		<layout-header @handleDrawer="handleDrawer" :layoutType="layoutType">
			<template #menus>
				<layout-menus type="horizontal" />
			</template>
		</layout-header>
		<layout-content />
		<layout-footer />
	</a-layout>

	<a-layout
		v-right-click="rightMenuObj"
		v-if="layoutType === 3"
		:class="$style.main"
	>
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
</template>
<script>
import { defineComponent, reactive, onMounted, ref, computed } from 'vue'
import LayoutHeader from './LayoutHeader.vue'
import RightMenuDom from '/@/components/RightMenuDom'
import { Layout } from 'ant-design-vue'
import { useRightMenuStoreWidthOut } from '/@/store/modules/RightMenuStore'
import LayoutMenus from './LayoutMenus.vue'
import LayoutFooter from './LayoutFooter.vue'
import LayoutContent from './LayoutContent.vue'
import { useLayoutStoreWidthOut } from '/@/store/modules/LayoutStore'

const { Sider } = Layout

export default defineComponent({
	name: 'Layout',
	components: {
		'a-layout': Layout,
		'layout-header': LayoutHeader,
		'layout-menus': LayoutMenus,
		'layout-content': LayoutContent,
		'layout-footer': LayoutFooter,
		'a-layout-sider': Sider,
		RightMenuDom,
	},
	setup() {
		const useLayoutStore = useLayoutStoreWidthOut()
		const layoutType = computed(() => useLayoutStore.layoutType)
		const collapsed = ref(false)
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
		const handleDrawer = data => {
			useLayoutStore.setdrawerVisible(data)
		}
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
		return {
			rightMenuObj,
			collapsed,
			layoutType,
			handleDrawer,
		}
	},
})
</script>
<style lang="scss" src="../index.module.scss" module></style>
