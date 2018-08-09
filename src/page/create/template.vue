<template>
  <div id="create">
    
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" v-model="content"></el-input>
    <p class="msg">限200个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 20}" v-model="description"></el-input>
    <p class="msg">限10000个字</p>
    <div class="index">是否展示在首页<el-switch
      v-model="atIndex"
      active-color="#13ce66"
      inactive-color="#ff4949" class="atIndex">
    </el-switch></div>
    <el-button @click="onCreate" class="btn">确定</el-button> 
    
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang='less'></style>
