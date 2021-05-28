<template>
  <div>
    <Loading v-if="loading" />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import Loading from '../../components/Loading.vue'
import handleLoading from '../../composables/handleLoading.js'
export default {
  components: {
    Loading,
  },
  setup() {
    const { loading, startLoading, endLoading } = handleLoading()
    return {
      loading,
      startLoading,
      endLoading,
    }
  },
  mounted() {
    let _this = this
    this.startLoading()
    setTimeout(() => {
      _this.endLoading()
    }, 2000)
  },
}
</script>

<style scoped></style>
