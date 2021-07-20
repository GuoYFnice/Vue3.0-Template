<template>
	<div class="box">
		<div class="loading">
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

<style scoped lang="scss">
.box {
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
	position: absolute;
	background: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
	opacity: 0.6;
	filter: alpha(opacity=60);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.loading {
	width: 80px;
	height: 40px;
	margin: 0 auto;
	margin-top: 100px;
}
.loading span {
	display: inline-block;
	width: 8px;
	height: 100%;
	border-radius: 4px;
	background: #333;
	-webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
	0%,
	100% {
		height: 40px;
		background: #333;
	}
	50% {
		height: 70px;
		margin: -15px 0;
		background: #000;
	}
}
.loading span:nth-child(2) {
	-webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
	-webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
	-webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
	-webkit-animation-delay: 0.8s;
}
</style>
