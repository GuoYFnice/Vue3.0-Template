<template>
	<div>
		<h2>Loading</h2>
		<a-button @click="openCompFullLoading"> 全屏 Loading （组件方法）</a-button>
		<Loading :loading="loading" :absolute="absolute" :tip="tip" />
		<a-button @click="openFnFullLoading"> 全屏 Loading(指令方法) </a-button>
		<a-button @click="openFnWrapLoading"> 局部 Loading(指令方法)</a-button>
		<div ref="wrapEl" class="box"> 这是局部 </div>
	</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { Loading, useLoading } from '/@/components/Loading'
import { Button } from 'ant-design-vue'

export default {
	components: {
		Loading,
		'a-button': Button,
	},
	setup() {
		const wrapEl = ref(null)
		const compState = reactive({
			absolute: false,
			loading: false,
			tip: '加载中...',
		})
		const [openFullLoading, closeFullLoading] = useLoading({
			tip: '加载中...',
		})

		const [openWrapLoading, closeWrapLoading] = useLoading({
			target: wrapEl,
			props: {
				tip: '加载中...',
				absolute: true,
			},
		})
		function openLoading(absolute) {
			compState.absolute = absolute
			compState.loading = true
			setTimeout(() => {
				compState.loading = false
			}, 2000)
		}

		function openCompFullLoading() {
			openLoading(false)
		}
		function openFnFullLoading() {
			openFullLoading()

			setTimeout(() => {
				closeFullLoading()
			}, 2000)
		}

		function openFnWrapLoading() {
			openWrapLoading()

			setTimeout(() => {
				closeWrapLoading()
			}, 2000)
		}
		return {
			wrapEl,
			openCompFullLoading,
			openFnFullLoading,
			openFnWrapLoading,
			...toRefs(compState),
		}
	},
}
</script>

<style scoped>
.box {
	width: 500px;
	height: 500px;
	border: 1px solid #000;
	position: relative;
}
</style>
