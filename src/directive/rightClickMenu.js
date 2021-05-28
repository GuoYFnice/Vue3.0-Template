import store from '../store'
const rightClickMenu = (el, binding) => {
  el.oncontextmenu = function (e) {
    const textArray = binding.value.text
    const handlerObj = binding.value.handle
    // 事件处理数组
    const handlerArray = []
    // 处理好的右键菜单
    const menuList = []
    // 将事件处理函数放入数组中
    for (const key in handlerObj) {
      handlerArray.push(handlerObj[key])
    }
    // 追加右键菜单数据
    for (let i = 0; i < textArray.length; i++) {
      // 右键菜单对象, 添加名称
      const menuObj = {
        text: textArray[i],
        handle: handlerArray[i],
        id: i + 1,
      }
      menuList.push(menuObj)
    }
    // 鼠标点的坐标
    const oX = e.clientX
    const oY = e.clientY
    // 右键菜单出现后的位置
    store.commit('updateRightMenuStatus', {
      status: 'block',
      left: oX + 'px',
      top: oY + 'px',
      list: menuList,
    })
    return false
  }
}
export function setuprightClickMenu(app) {
  app.directive('rightClick', rightClickMenu)
}

export default rightClickMenu
