<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=3 placeholder="" v-model="content"></el-input>
    <p class="msg">限200个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=20 v-model="description"></el-input>
    <p class="msg">限10000个字</p>
    <el-button @click="onEdit" class="btn">提交</el-button> 
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang='less'></style>
