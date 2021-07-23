<template>
	<div>
		<a-tabs @change="callback">
			<a-tab-pane v-for="item in data.list" :key="item.id" :tab="item.text" />
		</a-tabs>
	</div>
</template>
<script>
import { reactive } from 'vue'
import { Tabs } from 'ant-design-vue'
import handleDocumentEvent from '/@/composables/handleDocumentEvent'

export default {
	name: 'CssPage',
	components: {
		'a-tabs': Tabs,
		'a-tab-pane': Tabs.TabPane,
	},
	setup() {
		const data = reactive({
			list: [
				{
					id: 1,
					text: '抖動',
				},
			],
		})
		const callback = data => {
			console.log(123, data)
		}
		return {
			data,
			callback,
		}
	},
	mounted() {
		handleDocumentEvent('click', () => this.handleEventChange('点击了'), true)
		setTimeout(
			handleDocumentEvent(
				'click',
				() => this.handleEventChange('111点击了'),
				true
			),
			100000
		)
	},
	methods: {
		handleEventChange(event) {
			console.log(event)
		},
	},
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
