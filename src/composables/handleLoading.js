import { ref  } from 'vue'
export default function handleLoading(){
  const loading = ref(false)
  const startLoading = () => {
    loading.value = true
    console.log('start')
  }
  const endLoading = () => {
    loading.value = false
    console.log('end')
  }
  return {
    loading,
    startLoading,
    endLoading
  }
}