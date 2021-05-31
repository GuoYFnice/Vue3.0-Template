<template>
  <div class="loginBox">
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
          class="loginBitton"
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
import handleLogin from '/@/composables/handleLogin.js'
import { message, Form, Button } from 'ant-design-vue'
const { Item } = Form
export default {
  components: {
    'a-form': Form,
    'a-form-item': Item,
    'a-button': Button,
  },
  setup() {
    const form = reactive({
      username: '',
      password: '',
    })
    const { result } = handleLogin(form)
    return {
      form,
      result,
    }
  },
  methods: {
    login() {
      if (this.result) {
        message.success('login successful')
        this.$router.push('/home')
      } else {
        message.warning('Incorrect username or password')
      }
    },
  },
}
</script>

<style src='./index.module.scss'>
</style>
