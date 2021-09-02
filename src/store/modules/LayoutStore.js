import { defineStore } from 'pinia'
import { store } from '/@/store'

export const useLayoutStore = defineStore({
	id: 'layout-store',
	state: () => ({
		layoutType: 1,
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
	},
})

// Need to be used outside the setup
export function useLayoutStoreWidthOut() {
	return useLayoutStore(store)
}
