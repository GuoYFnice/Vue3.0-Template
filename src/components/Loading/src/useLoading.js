import { unref } from 'vue'
import { createLoading } from './createLoading'

export function useLoading(opt) {
	let props
	let target = document.body

	// 检查一个对象上是否含有特定的属性
	if (Reflect.has(opt, 'target') || Reflect.has(opt, 'props')) {
		const options = opt
		props = options.props || {}
		console.log(options.target, 99999)
		target = options.target || document.body
	} else {
		props = opt
	}

	const instance = createLoading(props, undefined, true)

	const open = () => {
		const t = unref(target)
		if (!t) return
		instance.open(t)
	}

	const close = () => {
		instance.close()
	}

	return [open, close]
}
