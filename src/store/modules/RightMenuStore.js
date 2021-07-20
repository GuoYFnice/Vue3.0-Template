import { defineStore } from 'pinia'
import { store } from '/@/store'

export const useRightMenuStore = defineStore({
	id: 'ringht-menu',
	state: () => ({
		status: 'none',
		top: '0px',
		left: '0px',
		list: [],
	}),
	getters: {},
	actions: {
		updateRightMenuStatus(menuObj) {
			this.status = menuObj.status
			this.top = menuObj.top
			this.left = menuObj.left
			this.list = menuObj.list
		},
	},
})

// Need to be used outside the setup
export function useRightMenuStoreWidthOut() {
	return useRightMenuStore(store)
}

// export default RightMenuStore = {
//   state: {
//     rightMenu: {
//       status: 'none',
//       top: '0px',
//       left: '0px',
//       list: [],
//     },
//   },
//   mutations: {
//     updateRightMenuStatus(state, menuObj) {
//       state.rightMenu.status = menuObj.status
//       state.rightMenu.top = menuObj.top
//       state.rightMenu.left = menuObj.left
//       state.rightMenu.list = menuObj.list
//     },
//   },
// }
