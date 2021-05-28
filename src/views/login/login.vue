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
import handleLogin from '../../composables/handleLogin.js'
import { message } from 'ant-design-vue'
export default {
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

<style scoped lang="scss">
.loginBox {
  width: 300px;

  margin: auto;
  text-align: center;
  border: 1px solid #ccc;
  padding: 30px;
  input {
    width: 100%;
    border: 1px solid #ccc;
    border-left: 5px solid #ccc;
    padding: 0 20px;
    outline: none;
    transition: all 300ms;
    // 作用于输入合法的表单节点
    &:valid {
      border-color: #3c9;
    }
    // 作用于输入非法的表单节点
    &:invalid {
      border-color: #f66;
    }
    &:active {
      border: none;
    }
  }
  .loginBitton {
    width: 100%;
    background: #3c9;
    color: #fff;
  }
}
</style>
