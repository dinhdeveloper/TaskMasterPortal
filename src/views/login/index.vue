<template>
  <div class="custom-container">
    <div>
      <h1 class="text-center">Sign In</h1>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item label="Username" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 50%">
          <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import {ElMessage} from 'element-plus'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: 'Please enter your username', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' }
        ]
      },
      loginError: false
    }
  },
  methods: {
    login() {
      this.loginError = false;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store
              .dispatch('auth/LoginByUsername', this.loginForm)
        } else {
          ElMessage.error('Chưa nhập đủ thông tin')
          return
        }
      });
    }
  }
}
</script>

<style lang="scss">
.custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.el-form-item__label {
  color: yellow;
}
</style>
