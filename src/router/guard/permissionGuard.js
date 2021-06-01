export function createPermissionGuard(router) {
  router.beforeEach(async (to, from, next) => {
    const routes = await permissionStore.buildRoutesAction()
    routes.forEach((route) => {
      router.addRoute(route)
    })
  })
}
