<template>
	<div :class="$style.loginBox">
		<h1>LOGIN</h1>
		<a-form :model="form" @submit="login">
			<a-form-item>
				<input
					v-model="form.username"
					pattern="(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)"
					placeholder="Username"
				/>
			</a-form-item>
			<a-form-item>
				<input
					v-model="form.password"
					pattern="^\d{1,}$"
					type="password"
					placeholder="Password"
				/>
			</a-form-item>
			<a-form-item>
				<a-button
					type="primary"
					:class="$style.loginBitton"
					html-type="submit"
					:disabled="form.username === '' || form.password === ''"
				>
					Log in
				</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script>
import { ref, reactive } from 'vue'
import { message, Form, Button } from 'ant-design-vue'
import { useUserStoreWidthOut } from '/@/store/modules/UserStore'
const { Item } = Form
export default {
	components: {
		'a-form': Form,
		'a-form-item': Item,
		'a-button': Button,
	},
	setup() {
		const UserStore = useUserStoreWidthOut()
		const form = reactive({
			username: '',
			password: '',
		})
		const login = () => {
			UserStore.login({ ...form })
		}
		return {
			form,
			login,
		}
	},
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
