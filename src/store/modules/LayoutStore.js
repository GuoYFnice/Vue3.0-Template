import { defineStore } from 'pinia'
import { store } from '/@/store'

export const useLayoutStore = defineStore({
	id: 'layout-store',
	state: () => ({
		/**
		 * 1左侧菜单模式
		 * 2顶部菜单模式
		 * 3顶部-菜单混合模式
		 */
		layoutType: 1,
		/**
		 * 0黑暗
		 * 1白天
		 */
		themeType: 1,
		drawerVisible: false,
	}),
	getters: {
		getlayoutType() {
			return this.layoutType || 1
		},
	},
	actions: {
		setlayoutType(Type) {
			this.layoutType = Type
		},
		setdrawerVisible(Type) {
			this.drawerVisible = Type
		},
		setthemeType(Type) {
			this.themeType = Type
			const htmlRoot = document.getElementById('app')
			Type === 0
				? htmlRoot?.setAttribute('data-theme', 'dark')
				: htmlRoot?.setAttribute('data-theme', 'light')
		},
	},
})

// Need to be used outside the setup
export function useLayoutStoreWidthOut() {
	return useLayoutStore(store)
}
