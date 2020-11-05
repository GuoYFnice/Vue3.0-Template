export default function localStorage(key, value){
  if(value){
    localStorage.setItem(key,JSON.stringify(value))
  }else{
    localStorage.removeItem(key)
  }
}