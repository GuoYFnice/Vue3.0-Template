// 对DocumentEvent进行处理
import { ref, onMounted,onUnmounted, toRefs, watch, toRef  } from 'vue'
export default function handleDocumentEvent(
  eventName,
  // 事件名称
  func,
  // 事件回调函数
  option
  // 布尔值，指定事件是否在捕获或冒泡阶段执行
){
  const ToAddEventListener = () =>{
    document.addEventListener(eventName, func, option);
  }
  onMounted(()=>{
    ToAddEventListener()
    toRefs(eventName)
    toRefs(func)
    toRefs(option)
  })
  watch(eventName,ToAddEventListener)
  watch(func,ToAddEventListener)
  watch(option,ToAddEventListener)
  onUnmounted(()=>{
    document.removeEventListener(eventName, func, option);
  })
}