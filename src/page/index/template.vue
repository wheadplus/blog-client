<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item" v-for="blog in blogs">
        <figure class="avatar">
          <router-link :to="`/user/${blog.user.id}`"><img :src="blog.user.avatar" :alt="blog.title"></router-link>
          
          <figcaption>{{blog.user.username}}</figcaption> 
        </figure>
        <router-link :to="`/detail/${blog.id}`">
          <h3>{{blog.title}} <span class="update">{{friendlyDate(blog.updatedAt)}}</span></h3> 
          <p>{{blog.description}}</p>
        </router-link>
        
      </div>
     
    </section>
    <section class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handlePage" 
        :total="total">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style  src="./template.less" lang ='less' scoped></style>
