webpackJsonp([10],{"/aPb":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("p+dL"),i="/auth/register",u="/auth/login",c="/auth/logout",l="/auth",d=function(t){var e=t.username,n=t.password;return Object(s.a)(i,"POST",{username:e,password:n})},f=function(t){var e=t.username,n=t.password;return Object(s.a)(u,"POST",{username:e,password:n})},p=function(){return Object(s.a)(c)},h=function(){return Object(s.a)(l)},m=n("NYxO"),g={name:"",data:function(){return{}},computed:o()({},Object(m.c)(["user","isLogin"])),methods:o()({},Object(m.b)(["checkLogin","logout"]),{onLogout:function(){this.logout(),this.$router.push({path:"/"})}}),created:function(){this.checkLogin()}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{login:t.isLogin,"no-login":!t.isLogin},attrs:{id:"top"}},[t.isLogin?t._e():[n("router-link",{attrs:{to:"/"}},[n("h1",[t._v("LET'S SHARE")])]),t._v(" "),n("p",[t._v("精品博客汇聚")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[t._v("注册账号")])],1)],1)],t._v(" "),t.isLogin?[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[t._v("LET'S SHARE")])],1),t._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-edit"})]),t._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:":user.username"}}),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[t._v("我的")])],1),t._v(" "),n("li",[n("a",{on:{click:t.onLogout}},[t._v("注销")])])])])]:t._e()],2)},staticRenderFns:[]};var b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"foot"}},[e("a",{attrs:{href:"https://github.com/wheadplus"}},[this._v("github@ headplus 2018")])])}]};var L={name:"App",components:{top:n("VU/8")(g,v,!1,function(t){n("lX6C")},null,null).exports,foot:n("VU/8")({name:"",data:function(){return{}}},b,!1,function(t){n("cY6e")},null,null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("top",{attrs:{id:"top"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("foot",{attrs:{id:"foot"}})],1)},staticRenderFns:[]};var _=n("VU/8")(L,w,!1,function(t){n("/aPb")},null,null).exports,k=n("/ocq"),x=n("Xxa5"),P=n.n(x),O=n("exGp"),A=n.n(O),C={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return f({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,o=e.password;return A()(P.a.mark(function t(){var e;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d({username:a,password:o});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return A()(P.a.mark(function t(){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return A()(P.a.mark(function t(){var a;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,h();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),r.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}},E={state:{},getters:{},mutations:{},actions:{}};r.default.use(m.a);var q=new m.a.Store({modules:{auth:C,blog:E}});window.store=q,r.default.use(k.a);var R=new k.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"6GR1"))}},{path:"/login",component:function(){return n.e(3).then(n.bind(null,"Ms6z"))}},{path:"/register",component:function(){return n.e(8).then(n.bind(null,"6SFq"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"0Jgw"))}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"fOBi"))},meta:{requiresAuth:!0}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"AKh8"))},meta:{requiresAuth:!0}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"N+hh"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"56v/"))}}]});R.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?q.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var U=R,j=n("zL8q"),y=n.n(j),M=(n("tvR6"),n("pFYg")),S=n.n(M);function T(t){var e=("object"===(void 0===t?"undefined":S()(t))?t:new Date(t)).getTime(),n=Date.now()-e,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var F={install:function(t,e){t.prototype.friendlyDate=T}};r.default.use(y.a),r.default.use(F),r.default.config.productionTip=!1,new r.default({el:"#app",router:U,store:q,components:{App:_},template:"<App/>"})},cY6e:function(t,e){},lX6C:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:t,method:e};"get"===e.toLowerCase()?o.params=n:o.data=n,s()(o).then(function(t){"ok"===t.data.status?r(t.data):(i.Message.error(t.data.msg),a(t.data))}).catch(function(t){i.Message.error("网络异常"),a({msg:"网络异常"})})})};var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="https://blog-server.hunger-valley.com",s.a.defaults.withCredentials=!0},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4839676f700be6738201.js.map