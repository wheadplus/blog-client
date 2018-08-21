<template>
  <div id="top" :class="{login: isLogin,'no-login': !isLogin}">
      
        <template v-if="!isLogin">
          <router-link to="/"><h1>LET'S SHARE</h1></router-link>
          <p>精品博客汇聚</p> 
          <div class="btns">
            <router-link to="/login"><el-button>立即登录</el-button></router-link>
            <router-link to='/register'><el-button>注册账号</el-button></router-link>
          </div>
        </template>
    
        <template v-if="isLogin">
          <div class="logo"><router-link to="/">LET'S SHARE</router-link></div>
          <router-link to="/create"><i class="edit el-icon-edit"></i></router-link>
          
          <div class="user">
            <img class="avatar" :src="user.avatar" alt=":user.username">
            <ul>
              <li><router-link to="/my">我的</router-link></li>
              <li><a @click="onLogout">注销</a></li>
            </ul>
          </div>      
        </template>
  </div>
</template>

<script>
import auth from '@/api/auth'
//window.auth = auth

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "",
  data() {
    return {
     
    };
  },

  computed: {
    ...mapGetters([
      'user','isLogin'
    ])
  },

  methods: {
    
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout(){
      this.logout()
      this.$router.push({path: `/`})
    }
  },

  created(){
    this.checkLogin()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../assets/base.less";
#top.no-login {
  background-color: @bgColor;
  display: grid;
  justify-items: center;
  padding: 0 12% 30px 12%;
  text-align: center;
  
  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }
  
  p {
    color: #fff;
    margin-top: 15px;
    
  }
  .btns {
    margin-top: 20px;
  }
  .el-button {
    margin: 20px ;
  }
}
#top.login {
  display: flex;
  align-items: center;
  background: @bgColor;

  .logo {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }
  a {
    color: #fff;
  }
  .edit {
    color: #fff;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user {
    position: relative;

   ul {
     display: none;
     position: absolute;
     right: -2px;
     
     border: 1px solid #eaeaea;
     background-color: #fff;

     a {
       text-decoration: none;
       color: #333;
       font-size: 12px;
       display: block;
       padding: 5px 10px;

       &:hover {
         background-color: #eaeaea;
       }
     }

   }

   &:hover ul {
     display: block;
   }
  }
}

</style>
