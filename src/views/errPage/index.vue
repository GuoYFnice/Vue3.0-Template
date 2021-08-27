<template>
	<div :class="$style.errBox">
		<img src="../../assets/image/禁止访问.png" />
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	components: {},
	setup() {
		const errType = ref(1)
		return {
			errType,
		}
	},
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
