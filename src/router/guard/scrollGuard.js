const isHash = href => {
	return /^#/.test(href)
}

export function createScrollGuard(router) {
	const { body } = document

	router.afterEach(async to => {
		// 路由跳转后滚动到头部
		isHash(to.href) && body.scrollTo(0, 0)
		return true
	})
}
