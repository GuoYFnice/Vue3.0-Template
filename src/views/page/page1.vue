<template>
  <div>
    <loading v-if="loading"/>
    <a @click="startLoading">123</a>
  </div>
</template>

<script>
import { ref, reactive, toRefs} from "vue";
import Loading from "../../components/Loading.vue"
import handleLoading from "../../composables/handleLoading.js"
export default {
  components: {
    Loading
  },
  setup() {
    const {loading, startLoading, endLoading} = handleLoading()
    return {
      ...toRefs(loading),
      startLoading,
      endLoading
    }
  },
};
</script>

<style scoped>
</style>