import { defineStore } from 'pinia'
import { store } from '/@/store'
import { message } from 'ant-design-vue'

import router from '/@/router'

export const useUserStore = defineStore({
	id: 'app-user',
	state: () => ({
		userInfo: null,
		token: undefined,
	}),
	getters: {
		getUserInfo() {
			return this.userInfo || JSON.parse(localStorage.getItem('userInfo'))
		},
		getToken() {
			return this.token || JSON.parse(localStorage.getItem('token'))
		},
		getRoleList() {
			return this.roleList.length > 0
				? this.roleList
				: JSON.parse(localStorage.getItem('roleList'))
		},
	},
	actions: {
		setToken(info) {
			this.token = info
			localStorage.setItem('token', info)
		},
		setRoleList(roleList) {
			this.roleList = roleList
			localStorage.setItem('roleList', roleList)
		},
		setUserInfo(info) {
			this.userInfo = info
			localStorage.setItem('userInfo', info)
		},
		resetState() {
			this.userInfo = null
			this.token = ''
			this.roleList = []
			localStorage.removeItem('token')
			localStorage.removeItem('roleList')
			localStorage.removeItem('userInfo')
		},
		/**
		 * @description: login
		 */
		async login(params) {
			try {
				// 在这里可以进行登录接口的调用以及人员信息接口的调用
				// 这边先写一个假的
				if (params.username === 'admin' && params.password === '123456') {
					const userInfo = {
						id: 'admin',
						username: 'admin',
						password: '123456',
					}
					this.setToken('11111111')
					this.setRoleList('token')
					this.setUserInfo(JSON.stringify(userInfo))
					router.push('/home')
				} else if (params.username === 'test' && params.password === '123456') {
					const userInfo = {
						id: 'test',
						username: 'test',
						password: '123456',
					}
					this.setToken('22222222')
					this.setRoleList('token')
					this.setUserInfo(JSON.stringify(userInfo))
					router.push('/home')
				} else {
					message.warning('Incorrect username or password')
				}
				return
			} catch (error) {
				return Promise.reject(error)
			}
		},
		/**
		 * @description: logout
		 */
		logout() {
			this.resetState()
			router.push('/login')
		},
	},
})

// Need to be used outside the setup
export function useUserStoreWidthOut() {
	return useUserStore(store)
}
