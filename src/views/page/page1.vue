<template>
	<div>
		<Loading v-if="loading" />
	</div>
</template>

<script>
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
		this.startLoading()
		setTimeout(() => {
			this.endLoading()
		}, 2000)
	},
}
</script>

<style scoped></style>
