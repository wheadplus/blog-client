# blog-client

> vue-blog 本项目实现一个博客分享网站。为用户提供查看，修改，新建博客的功能。

![项目介绍](https://i.loli.net/2018/08/09/5b6bfd88b03f7.gif)

由于github不支持http接口，后端接口都为http，所以请求数据失败。具体效果如上图项目介绍.gif

后面，我打算用阿里的rap2去模拟后端接口，再替换接口。

！[在线地址](https://wheadplus.github.io/vue-blog/dist/#/login)
# 难点
- 封装后端接口(user/blog)
- grid布局
- vuex的使用
- v-router的使用

# 参考文章
vue.js最好的参考还是他的[官网](https://cn.vuejs.org/v2/guide/)

- [v-router](https://router.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/guide/state.html)
- [grid参考](https://jirengu.github.io/css-you-should-know/zh-cn/a-complete-guide-css-grid-layout.html)

# 结语
这次最大的收获是，建立开发整个项目的流程sop
- 部署项目、分模块
- 封装后端接口
- 完成每个模块的静态页面
- 公用数据用vuex，根据vue项目结构添加store
- 添加路由、meta
- 添加js控制
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
