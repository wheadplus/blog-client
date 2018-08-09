<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
      <h3>{{title}}</h3>
    <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link>发布于{{friendlyDate(createdAt)}}</p>
    </section>
    <p> </p>
    <section class="article" v-html="markdown">
      <!-- article下的markdown内容 -->
      
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang='less'></style>
