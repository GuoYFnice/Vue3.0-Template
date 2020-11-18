import { ref  } from 'vue'
export default function loading(){
  const loading = ref(false)
  const startLoading = () => {
    loading.value = true
  }
  const endLoading = () => {
    loading.value = true
  }
  return {
    loading,
    startLoading,
    endLoading
  }
}