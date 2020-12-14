<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane v-for="item in data.list" :key="item.id" :tab="item.text">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { ref, reactive,computed ,toRefs} from "vue";
export default {
  name: "cssPage",
  setup() {
    const data = reactive({
      list:[
        {
          id:1,
          text:'抖動'
        }
      ]
    })
    const callback = (data) => {
      console.log(123,data)
    }
    return {
      data,
      callback
    }
  },
};
</script>
<style lang="scss" src="./style.scss" module/>