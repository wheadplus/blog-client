<template>
  <div id="register">
    <div class="cell">
      <h4>用户名</h4>
      <input v-model="username" placeholder="用户名">
      <h4>密码</h4>
      <input v-model="password" type="password" placeholder="密码" @keyup.enter="onRegister" >
      <div class="btn"><el-button size="medium" @click="onRegister">立即注册</el-button>  </div>
      <p class="notice">已有账号？<router-link to="/login"><span class="btn-lr">立即登录</span> </router-link></p>
    </div>
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang="less"></style>
