webpackJsonp([1],{"7zck":function(e,t){},Mmoa:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("Xrl+"),n("fLmE");var a=n("7+uW"),s=n("EOUi"),r=n.n(s),i=n("NYxO");a.default.use(i.a);var o=new i.a.Store({strict:!1,actions:{login:function(e){(0,e.commit)("loggedIn")},logout:function(e){(0,e.commit)("loggedOut")}},getters:{isLoggedIn:function(e){return e.isLoggedIn}},mutations:{loggedIn:function(e){e.isLoggedIn=!0},loggedOut:function(e){e.isLoggedIn=!1}},state:{isLoggedIn:!1}}),l=n("/ocq"),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",lg4:"",md5:""}},[n("v-card",{staticClass:"welcome-card"},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Welcome to Smart-Inn!!!")])]),e._v(" "),n("v-spacer")],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm8:"",lg4:"",md5:""}},[n("v-card",{staticClass:"login-card"},[n("a",{attrs:{href:"/login"}},[e._v("ログインはこちら")])])],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm8:"",lg4:"",md5:""}},[n("v-card",{staticClass:"signup-card"},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("サインアップ")])]),e._v(" "),n("a",{attrs:{href:"/signup_guest"}},[e._v("ゲストのサインアップ")]),n("br"),e._v(" "),n("a",{attrs:{href:"/signup_host"}},[e._v("ホストのサインアップ")])],1)],1)],1)],1)},staticRenderFns:[]},u=n("VU/8")({name:"Welcome",methods:{checkLoggedIn:function(){this.$router.push("/login")}}},c,!1,null,null,null).exports,d={name:"Login",data:function(){return{credentials:{},valid:!0,loading:!1,email:[function(e){return!!e||"ユーザー名は必須です"}],password:[function(e){return!!e||"パスワードは必須です"}]}},methods:{login:function(){var e=this;this.$request.auth.login(this.credentials.email,this.credentials.password).then(function(t){console.log(t.data),e.$request.defaults.headers.common.Authorization="JWT "+t.data.token,e.$router.push("guest/home/"),console.log(e.$request.defaults.headers.common.Authorization)},function(t){e.nonFieldErrors=t.response.data.nonFieldErrors,console.log(t)})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",lg4:"",md5:""}},[n("v-card",{staticClass:"login-card"},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Login to Smart-Inn")])]),e._v(" "),n("v-card-text",[e.loading?n("v-layout",{attrs:{row:"","fill-height":"","justify-center":"","align-center":""}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-text-field",{attrs:{counter:70,label:"Eメールアドレス",maxlength:"70",required:""},model:{value:e.credentials.email,callback:function(t){e.$set(e.credentials,"email",t)},expression:"credentials.email"}}),e._v(" "),n("v-text-field",{attrs:{type:"password",counter:20,label:"パスワード",maxlength:"20",required:""},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}})],1),e._v(" "),n("v-btn",{staticClass:"pink white--text",attrs:{disabled:!e.valid},on:{click:e.login}},[e._v("Login")])],1)],1)],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm8:"",md5:""}},[n("a",{attrs:{href:"/"}},[e._v("Homeにもどる")])])],1)],1)},staticRenderFns:[]},v=n("VU/8")(d,m,!1,null,null,null).exports,p=n("Xxa5"),f=n.n(p),h=n("exGp"),g=n.n(h),_={components:{QrcodeReader:n("AbOu").QrcodeReader},name:"Home",data:function(){return{paused:!1}},methods:{onInit:function(e){var t=this;return g()(f.a.mark(function n(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),"NotAllowedError"===t.t0.name||"NotFoundError"===t.t0.name||"NotSupportedError"===t.t0.name||"NotReadableError"===t.t0.name||t.t0.name;case 8:return t.prev=8,t.finish(8);case 10:case"end":return t.stop()}},n,t,[[0,5,8,10]])}))()},onDecode:function(e){this.paused=!0,alert(e)}}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-ons-page",[t("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Welcome home.\n  ")]),this._v(" "),t("div",{staticClass:"qrReader"},[t("qrcode-reader",{attrs:{paused:this.paused},on:{init:this.onInit,decode:this.onDecode}})],1)])},staticRenderFns:[]},b=n("VU/8")(_,x,!1,null,null,null).exports,w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-ons-page",[t("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Welcome map.\n  ")])])},staticRenderFns:[]},y=n("VU/8")({name:"Map",methods:{}},w,!1,null,null,null).exports,E={name:"HomeGuest",template:"#main",data:function(){return{activeIndex:0,tabs:[{icon:"ion-home",label:"Home",page:b},{icon:"ion-ios-bell",label:"Map",page:y}]}},components:{Home:b,Map:y},mounted:function(){this.checkLoggedIn()},methods:{md:function(){return this.$ons.platform.isAndroid()},checkLoggedIn:function(){this.$request.defaults.headers.common.Authorization||this.$router.push("/login")}},computed:{title:function(){return this.tabs[this.activeIndex].label}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("v-ons-tabbar",{attrs:{swipeable:"",position:"auto",tabs:e.tabs,visible:!0,index:e.activeIndex},on:{"update:index":function(t){e.activeIndex=t}}})],1)},staticRenderFns:[]},k=n("VU/8")(E,$,!1,null,null,null).exports,I={name:"SignupGuest",data:function(){return{credentials:{},valid:!0,loading:!1,email:[function(e){return!!e||"ユーザー名は必須です"}],password:[function(e){return!!e||"パスワードは必須です"}]}},methods:{submit:function(){var e=this;this.$request.auth.signup_guest(this.credentials.email,this.credentials.password).then(function(e){console.log(e)},function(t){e.nonFieldErrors=t.response.data.nonFieldErrors,console.log(t)})}}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",lg4:"",md5:""}},[n("v-card",{staticClass:"login-card"},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Signup to Smart-Inn (Guest)")])]),e._v(" "),n("v-card-text",[e.loading?n("v-layout",{attrs:{row:"","fill-height":"","justify-center":"","align-center":""}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-text-field",{attrs:{counter:70,label:"Eメールアドレス",maxlength:"70",required:""},model:{value:e.credentials.email,callback:function(t){e.$set(e.credentials,"email",t)},expression:"credentials.email"}}),e._v(" "),n("v-text-field",{attrs:{type:"password",counter:20,label:"パスワード",maxlength:"20",required:""},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}})],1),e._v(" "),n("v-btn",{staticClass:"pink white--text",attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("登録")])],1)],1)],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm8:"",md5:""}},[n("a",{attrs:{href:"/"}},[e._v("Homeにもどる")])])],1)],1)},staticRenderFns:[]},F=n("VU/8")(I,H,!1,null,null,null).exports,q={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  infoguest\n")])},staticRenderFns:[]},R=n("VU/8")({name:"InfoGuest",mounted:function(){},methods:{}},q,!1,null,null,null).exports,C={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  sample\n")])},staticRenderFns:[]},L=n("VU/8")({name:"HomeHost",mounted:function(){},methods:{}},C,!1,null,null,null).exports,S={name:"SignupHost",data:function(){return{credentials:{},valid:!0,loading:!1,email:[function(e){return!!e||"ユーザー名は必須です"}],password:[function(e){return!!e||"パスワードは必須です"}]}},methods:{submit:function(){var e=this;this.$request.auth.signup_host(this.credentials.email,this.credentials.password).then(function(e){console.log(e)},function(t){e.nonFieldErrors=t.response.data.nonFieldErrors,console.log(t)})}}},U={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",lg4:"",md5:""}},[n("v-card",{staticClass:"login-card"},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Signup to Smart-Inn (Host)")])]),e._v(" "),n("v-card-text",[e.loading?n("v-layout",{attrs:{row:"","fill-height":"","justify-center":"","align-center":""}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1):n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-text-field",{attrs:{counter:70,label:"Eメールアドレス",maxlength:"70",required:""},model:{value:e.credentials.email,callback:function(t){e.$set(e.credentials,"email",t)},expression:"credentials.email"}}),e._v(" "),n("v-text-field",{attrs:{type:"password",counter:20,label:"パスワード",maxlength:"20",required:""},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}})],1),e._v(" "),n("v-btn",{staticClass:"pink white--text",attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("登録")])],1)],1)],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm8:"",md5:""}},[n("a",{attrs:{href:"/"}},[e._v("Homeにもどる")])])],1)],1)},staticRenderFns:[]},V=n("VU/8")(S,U,!1,null,null,null).exports,z={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  infohost\n")])},staticRenderFns:[]},j=n("VU/8")({name:"InfoHost",mounted:function(){},methods:{}},z,!1,null,null,null).exports;a.default.use(l.a);var A=new l.a({mode:"history",routes:[{path:"/",name:"Welcome",component:u},{path:"/login",name:"Login",component:v},{path:"/guest/home",name:"HomeGuest",component:k},{path:"/guest/signup",name:"SignupGuest",component:F},{path:"/guest/info",name:"InfoGuest",component:R},{path:"/host/home",name:"HomeHost",component:L},{path:"/host/signup",name:"SignupHost",component:V},{path:"/host/info",name:"InfoHost",component:j}]}),G={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{id:"app"}},[t("v-content",[t("v-container",{attrs:{fluid:""}},[t("router-view")],1)],1)],1)},staticRenderFns:[]};var W,M=n("VU/8")({name:"App"},G,!1,function(e){n("Mmoa")},"data-v-30405dd1",null).exports,N=n("3EgV"),O=n.n(N),X=(n("7zck"),n("mtWM")),D=n.n(X).a.create({baseURL:"https://smart-in-ver1.lolipop.io/"});D.auth=(W=D,{login:function(e,t){var n={email:e,password:t};return W.post("auth/login/",n)},signup_guest:function(e,t){var n={email:e,password:t};return W.post("auth/register_guest/",n)},signup_host:function(e,t){var n={email:e,password:t};return W.post("auth/register_host/",n)},guest_info_post:function(e,t,n,a,s){var r={user:e,country:t,birthday:n,address:a,gender:s};return W.post("auth/guest_info_post",r)}}),D.install=function(e){Object.defineProperty(e.prototype,"$request",{get:function(){return D}})};var J=D;a.default.config.productionTip=!1,a.default.use(r.a),a.default.use(O.a),a.default.use(J),new a.default({el:"#app",store:o,router:A,vuetify:new O.a,template:"<App/>",components:{App:M}})},"Xrl+":function(e,t){},fLmE:function(e,t){},r1po:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d4f982b7fb4219762f4f.js.map