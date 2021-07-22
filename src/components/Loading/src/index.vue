<template>
	<section class="full-loading" :class="{ absolute }" v-show="loading">
		<Spin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading" />
	</section>
</template>
<script>
import { defineComponent } from 'vue'
import { Spin } from 'ant-design-vue'

export default defineComponent({
	name: 'Loading',
	components: { Spin },
	props: {
		tip: {
			type: String,
			default: '',
		},
		size: {
			type: String,
			default: 'large',
			validator: v => {
				return ['default', 'small', 'large'].includes(v)
			},
		},
		absolute: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
})
</script>
<style lang="scss">
.full-loading {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 200;
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: rgba(240, 242, 245, 0.4);

	&.absolute {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 300;
	}
}
</style>
