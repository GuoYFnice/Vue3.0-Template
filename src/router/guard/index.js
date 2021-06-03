// 路由的守卫
import router from '/@/router'

import { createPermissionGuard } from './permissionGuard'
import { createScrollGuard } from './scrollGuard'

export function setupRouterGuard() {
  createPermissionGuard(router)
  createScrollGuard(router)
}
