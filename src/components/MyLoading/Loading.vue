<template>
	<div :class="$style.box">
		<div :class="$style.loading">
			<span v-for="item in [1, 2, 3, 4, 5]" :key="item"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Loading',
	setup() {},
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
