import { reactive } from "vue"

export default function localStorage(type, key, value){
  const value = ref({})
  const storageMap = reactive({
    'query':()=>{
      value.value = JSON.parse(localStorage.getItem(key))
    },
    'delete':()=>{
      localStorage.removeItem(key)
    },
    'add':()=>{
      localStorage.setItem(key,JSON.stringify(value))
    }
  })
  storageMap[type]
  return{
    value
  }
}