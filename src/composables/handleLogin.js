import { ref, watch  } from 'vue'
export default function handleLogin(form){
  console.log(123,form.username)
  const result = ref(false)
  const login = () => {
    if(form.username == 'admin' && form.password == '123456'){
      result.value = true
      localStorage.setItem('userInfo',JSON.stringify(form))
    }else {
      result.value = false
    }
  }
  watch(form,login)
  return {
    result
  }
}