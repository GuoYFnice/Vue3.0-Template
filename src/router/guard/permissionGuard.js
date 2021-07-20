import { useUserStoreWidthOut } from '/@/store/modules/UserStore'

export function createPermissionGuard(router) {
	const userStore = useUserStoreWidthOut()
	router.beforeEach(async (to, from, next) => {
		// 白名单
		// if (whitePathList.includes(to.path)) {
		//   next()
		//   return
		// }
		const token = userStore.getToken
		if (!token) {
			// 可以在这里设置无需登录就可以访问的路由地址（在路由meta中的ignoreAuth设置为true）
			if (to.meta.ignoreAuth) {
				next()
				return
			}
			if (to.path !== '/login') {
				const loginPath = { path: '/login', replace: true }
				next(loginPath)
				return
			}
		}
		// if (permissionStore.getIsDynamicAddedRoute) {
		//   next()
		//   return
		// }
		// const routes = await permissionStore.buildRoutesAction()

		// routes.forEach((route) => {
		//   router.addRoute(route)
		// })
		next()
	})
}
