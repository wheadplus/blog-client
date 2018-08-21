<template>
  <div id="login">
    <div class="cell">
      <h4>用户名</h4>
      <input v-model="username" placeholder="用户名">
      <h4>密码</h4>
      <input v-model="password" type="password" placeholder="密码" @keyup.enter="onLogin" >
      <div class="btn"><el-button size="medium" @click="onLogin">立即登录  </el-button>  </div>
      <p class="notice">没有账号？<router-link to="/register"><span class="btn-lr">注册新账号</span> </router-link></p>
    </div>
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang="less"></style>
