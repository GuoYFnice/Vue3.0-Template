import { ref  } from 'vue'
export default function handleLoading(){
  const loading = ref(false)
  const startLoading = () => {
    loading.value = true
    console.log(123,loading)
  }
  const endLoading = () => {
    loading.value = false
    console.log(123,loading)
  }
  return {
    loading,
    startLoading,
    endLoading
  }
}