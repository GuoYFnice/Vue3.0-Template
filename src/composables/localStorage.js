import { ref } from 'vue'
export default function localStorage(type, key, value){
  const count = ref({})
  const storageMap = {
    'query':()=>{
      count = JSON.parse(localStorage.getItem(key))?.null
    },
    'delete':()=>{
      localStorage.removeItem(key)
    },
    'add':()=>{
      localStorage.setItem(key,JSON.stringify(value))
    }
  }
  storageMap[type]
  return{
    value,
    storageMap
  }
}