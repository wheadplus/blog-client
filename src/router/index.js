import Vue from 'vue'
import Router from 'vue-router'

// import create from '@/page/create/template.vue'
// import detail from '@/page/detail/template.vue'
// import edit from '@/page/edit/template.vue'
// import login from '@/page/login/template.vue'
// import index from '@/page/index/template.vue'
// import my from '@/page/my/template.vue'
// import register from '@/page/register/template.vue'
// import user from '@/page/user/template.vue'

import store from '../store'
//测试
window.store = store
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/page/index/template.vue')
    },
    {
      path: '/login',
      component: () => import('@/page/login/template.vue')
    },
    {
      path: '/register',
      component: () => import('@/page/register/template.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('@/page/detail/template.vue')
    },
    {
      path: '/create',
      component: () => import('@/page/create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/page/edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/my',
      component: () => import('@/page/my/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: () => import('@/page/user/template.vue')
    },
  

  ]
})
//在全局导航守卫中检查meta(元字段)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router