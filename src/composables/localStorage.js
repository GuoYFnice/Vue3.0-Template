/* eslint-disable */
import { ref } from 'vue'
// 有很大的问题，不知道自己想干嘛
export default function localStorage(type, key, value) {
	let count = ref({})
	const storageMap = {
		query: () => {
			count = JSON.parse(localStorage.getItem(key)) || null
		},
		delete: () => {
			localStorage.removeItem(key)
		},
		add: () => {
			localStorage.setItem(key, JSON.stringify(value))
		},
	}
	storageMap[type]
	return {
		value,
		storageMap,
	}
}
