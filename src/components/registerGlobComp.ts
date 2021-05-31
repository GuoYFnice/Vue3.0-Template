import {
  // Need 需要全局注册的组件可以在这里声明
  Button,
} from 'ant-design-vue'

const compList = [Button]

export function registerGlobComp(app) {
  compList.forEach((comp) => {
    app.component(comp.name || comp.displayName, comp)
  })
}
