<template>
	<a-drawer
		title="设置"
		placement="right"
		:closable="false"
		:visible="visible"
		@close="handleDrawerClose"
	>
		<div :class="$style.drawerBox">
			<span :class="$style.left">布局</span>
			<a-radio-group
				:class="$style.right"
				v-model="layoutType"
				@change="handleLayoutChange"
			>
				<a-radio-button :value="1"> 左侧菜单模式 </a-radio-button>
				<a-radio-button :value="2"> 顶部菜单模式 </a-radio-button>
				<a-radio-button :value="3"> 顶部-菜单混合模式 </a-radio-button>
			</a-radio-group>
		</div>
		<div :class="$style.drawerBox">
			<span :class="$style.left">主题</span>
			<a-radio-group
				:class="$style.right"
				v-model="themeType"
				@change="handleThemeTypeChange"
			>
				<a-radio-button :value="0"> 黑暗模式 </a-radio-button>
				<a-radio-button :value="1"> 白天模式 </a-radio-button>
			</a-radio-group>
		</div>
	</a-drawer>
</template>
<script>
import { Drawer, Radio } from 'ant-design-vue'
import { defineComponent, computed } from 'vue'
import { useLayoutStoreWidthOut } from '/@/store/modules/LayoutStore'

export default defineComponent({
	name: 'LayDrawer',
	components: {
		'a-drawer': Drawer,
		'a-radio-group': Radio.Group,
		'a-radio-button': Radio.Button,
	},
	setup() {
		/**
		 * 1左侧菜单模式
		 * 2顶部菜单模式
		 * 3顶部-菜单混合模式
		 */
		const useLayoutStore = useLayoutStoreWidthOut()
		const layoutType = computed(() => useLayoutStore.layoutType)
		const themeType = computed(() => useLayoutStore.themeType)
		const visible = computed(() => useLayoutStore.drawerVisible)
		const handleDrawerClose = () => {
			useLayoutStore.setdrawerVisible(false)
		}
		const handleLayoutChange = e => {
			useLayoutStore.setlayoutType(e.target.value)
		}
		const handleThemeTypeChange = e => {
			useLayoutStore.setthemeType(e.target.value)
		}
		return {
			layoutType,
			themeType,
			visible,
			handleDrawerClose,
			handleLayoutChange,
			handleThemeTypeChange,
		}
	},
})
</script>
<style lang="scss" src="../index.module.scss" module></style>
