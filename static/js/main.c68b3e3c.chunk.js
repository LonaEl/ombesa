(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(123),c=a.n(s),o=a(25),i=a(28),l=a(132),u=a(71),d=a(14),p=a(18),j="CREATE",b="UPDATE",m="DELETE",O="FETCH_ALL",h="FETCH_BY_SEARCH",f="FETCH_POST",x="LIKE",g="END_LOADING",v="START_LOADING",y="FETCH_BY_CREATOR",w="AUTH",N="LOGOUT",S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:t.data,loading:!1,errors:null});case N:return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},C=Object(i.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case"END_LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});case O:return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case h:case y:return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data});case f:return Object(p.a)(Object(p.a)({},e),{},{post:t.payload.post});case x:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case j:return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[t.payload])});case b:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case m:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:S}),k=a(273),_=a(22),I=a(16),T=a(6),E=a(278),D=a(279),L=a(280),P=a(274),F=a(275),A=a(125),R=a(3),B=a(264),q=a(36),J=Object(q.makeStyles)()((function(e){return{appBar:Object(R.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(R.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(R.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(B.a[500]),backgroundColor:B.a[500]}}})),U=a(1),H=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(T.a)(e,2),a=t[0],r=t[1],s=Object(o.b)(),c=Object(I.k)(),i=Object(I.n)(),l=J().classes,u=function(){s({type:N}),i("/login"),r(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(A.a)(e).exp<(new Date).getTime()&&u());r(JSON.parse(localStorage.getItem("profile")))}),[c]),Object(U.jsxs)(E.a,{className:l.appBar,position:"static",color:"inherit",children:[Object(U.jsx)(_.b,{to:"/",className:l.brandContainer,children:Object(U.jsx)(D.a,{variant:"h2",children:"Seal The Deal"})}),Object(U.jsx)(L.a,{className:l.toolbar,children:null!==a&&void 0!==a&&a.result?Object(U.jsxs)("div",{className:l.profile,children:[Object(U.jsx)(P.a,{className:l.purple,alt:null===a||void 0===a?void 0:a.result.username,src:null===a||void 0===a?void 0:a.result.imageUrl,children:null===a||void 0===a?void 0:a.result.username.charAt(0)}),Object(U.jsx)(D.a,{className:l.userName,variant:"h6",children:null===a||void 0===a?void 0:a.result.username}),Object(U.jsx)(F.a,{variant:"contained",className:l.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(U.jsx)(F.a,{component:_.b,to:"/login",variant:"contained",color:"primary",children:"Login or sign in "})})]})},W=a(268),z=a(276),G=a(269),M=a(133),Q=(a(202),a(15)),K=a(19),Y=a(41),V=a.n(Y),X=V.a.create({baseURL:"https://ombesa.herokuapp.com/"});X.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var Z=function(e){return X.get("/posts?page=".concat(e))},$=function(e){return X.get("/posts/creator?name=".concat(e))},ee=function(e){return X.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},te=function(e,t){return X.patch("/posts/".concat(e),t)},ae=function(e){return X.delete("/posts/".concat(e))},ne=function(e){return function(){var t=Object(K.a)(Object(Q.a)().mark((function t(a){var n,r;return Object(Q.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:v}),t.next=4,ee(e);case 4:n=t.sent,r=n.data.data,a({type:h,payload:{data:r}}),a({type:g}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},re=function(e,t){return function(){var a=Object(K.a)(Object(Q.a)().mark((function a(n){var r,s;return Object(Q.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:v}),a.next=4,c=e,X.post("/posts",c);case 4:r=a.sent,s=r.data,n({type:j,payload:s}),t("/posts/".concat(s._id)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}var c}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},se=function(e,t){return function(){var a=Object(K.a)(Object(Q.a)().mark((function a(n){var r,s;return Object(Q.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,te(e,t);case 3:r=a.sent,s=r.data,n({type:b,payload:s}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},ce=a(281),oe=a(283),ie=a(285),le=a(284),ue=a(270),de=a(130),pe=a.n(de),je=Object(q.makeStyles)()({media:{height:100,paddingTop:"50%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),be=function(e){var t,a,n,r=e.post,s=(e.setCurrentId,JSON.parse(localStorage.getItem("profile"))),c=Object(o.b)(),i=(Object(I.n)(),je().classes);return Object(U.jsxs)(oe.a,{className:i.card,raised:!0,elevation:6,children:[Object(U.jsxs)(ue.a,{component:"span",name:"test",className:i.cardAction,children:[Object(U.jsx)(le.a,{className:i.media,image:r.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:r.title}),((null===s||void 0===s||null===(t=s.result)||void 0===t?void 0:t.googleId)===(null===r||void 0===r?void 0:r.creator)||(null===s||void 0===s||null===(a=s.result)||void 0===a?void 0:a._id)===(null===r||void 0===r?void 0:r.creator))&&Object(U.jsx)("div",{className:i.overlay2,name:"edit"}),Object(U.jsx)("div",{className:i.details,children:Object(U.jsx)(D.a,{variant:"body2",color:"textSecondary",component:"h2",children:r.tags.map((function(e){return"#".concat(e," ")}))})}),Object(U.jsx)(D.a,{className:i.title,gutterBottom:!0,variant:"h5",component:"h2",children:r.title})]}),Object(U.jsxs)(D.a,{children:["R",r.price]}),Object(U.jsx)(ie.a,{className:i.cardActions,children:(null===s||void 0===s||null===(n=s.result)||void 0===n?void 0:n._id)===(null===r||void 0===r?void 0:r.creator)&&Object(U.jsxs)(F.a,{size:"small",color:"secondary",onClick:function(){return c((e=r._id,function(){var t=Object(K.a)(Object(Q.a)().mark((function t(a){return Object(Q.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ae(e);case 3:a({type:m,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(U.jsx)(pe.a,{fontSize:"small"})," \xa0 Remove"]})})]})},me=Object(q.makeStyles)()((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(B.a[500]),backgroundColor:B.a[500]}},Object(R.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(R.a)(t,"actionDiv",{textAlign:"center"}),t})),Oe=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=a.posts,r=a.isLoading,s=me().classes;return n.length||r?r?Object(U.jsx)(ce.a,{}):Object(U.jsx)(z.a,{className:s.container,container:!0,alignItems:"stretch",spacing:3,children:null===n||void 0===n?void 0:n.map((function(e){return Object(U.jsx)(z.a,{item:!0,xs:12,sm:12,md:6,lg:3,children:Object(U.jsx)(be,{post:e,setCurrentId:t})},e._id)}))}):"No posts"},he=a(277),fe=a(272),xe=Object(q.makeStyles)()((function(){return{ul:{justifyContent:"space-around"}}})),ge=function(e){var t=e.page,a=Object(o.c)((function(e){return e.posts})).numberOfPages,r=Object(o.b)(),s=xe().classes;return Object(n.useEffect)((function(){t&&r(function(e){return function(){var t=Object(K.a)(Object(Q.a)().mark((function t(a){var n,r,s,c,o;return Object(Q.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:v}),t.next=4,Z(e);case 4:n=t.sent,r=n.data,s=r.data,c=r.currentPage,o=r.numberOfPages,a({type:O,payload:{data:s,currentPage:c,numberOfPages:o}}),a({type:g}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[r,t]),Object(U.jsx)(he.a,{classes:{ul:s.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return Object(U.jsx)(fe.a,Object(p.a)(Object(p.a)({},e),{},{component:_.b,to:"/posts?page=".concat(e.page)}))}})},ve=Object(q.makeStyles)()((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(R.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var ye=function(){var e=ve().classes,t=new URLSearchParams(Object(I.k)().search),a=t.get("page")||1,r=t.get("searchQuery"),s=Object(n.useState)(0),c=Object(T.a)(s,2),i=(c[0],c[1]),l=Object(o.b)(),u=Object(n.useState)(""),d=Object(T.a)(u,2),p=d[0],j=d[1],b=Object(n.useState)([]),m=Object(T.a)(b,2),O=m[0],h=(m[1],Object(I.n)()),f=function(){p.trim()||O?(l(ne({search:p,tags:O.join(",")})),h("/posts/search?searchQuery=".concat(p||"none","&tags=").concat(O.join(",")))):h("/")};return Object(U.jsx)(W.a,{in:!0,children:Object(U.jsx)(k.a,{maxWidth:"xl",children:Object(U.jsxs)(z.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer,children:[Object(U.jsx)(z.a,{item:!0,xs:12,sm:6,md:9,children:Object(U.jsx)(Oe,{setCurrentId:i})}),Object(U.jsxs)(z.a,{item:!0,xs:12,sm:6,md:3,children:[Object(U.jsxs)(E.a,{className:e.appBarSearch,position:"static",color:"inherit",children:[Object(U.jsx)(G.a,{onKeyDown:function(e){13===e.keyCode&&f()},name:"search",variant:"outlined",label:"Search product",fullWidth:!0,value:p,onChange:function(e){return j(e.target.value)}}),Object(U.jsx)(F.a,{onClick:f,className:e.searchButton,variant:"contained",color:"primary",children:"Search"})]}),Object(U.jsx)("button",{onClick:function(){h("/uploading")},children:"Upload product image"}),!r&&!O.length&&Object(U.jsx)(M.a,{className:e.pagination,elevation:6,children:Object(U.jsx)(ge,{page:a})})]})]})})})},we=a(282),Ne=function(){var e=Object(I.p)().name,t=Object(o.b)(),a=Object(o.c)((function(e){return e.posts})),r=a.posts,s=a.isLoading,c=Object(I.k)();return Object(n.useEffect)((function(){c.pathname.startsWith("/tags")?t(ne({tags:e})):t(function(e){return function(){var t=Object(K.a)(Object(Q.a)().mark((function t(a){var n,r;return Object(Q.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:v}),t.next=4,$(e);case 4:n=t.sent,r=n.data.data,a({type:y,payload:{data:r}}),a({type:g}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[]),r.length||s?Object(U.jsxs)("div",{children:[Object(U.jsx)(D.a,{variant:"h2",children:e}),Object(U.jsx)(we.a,{style:{margin:"20px 0 50px 0"}}),s?Object(U.jsx)(ce.a,{}):Object(U.jsx)(z.a,{container:!0,alignItems:"stretch",spacing:3,children:null===r||void 0===r?void 0:r.map((function(e){return Object(U.jsx)(z.a,{item:!0,xs:12,sm:12,md:6,lg:3,children:Object(U.jsx)(be,{post:e})},e._id)}))})]}):"No postings"},Se=(a(196),function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),c=Object(T.a)(s,2),o=c[0],i=c[1],l=Object(n.useState)(""),u=Object(T.a)(l,2),d=u[0],p=u[1],j=Object(I.n)();Object(n.useEffect)((function(){localStorage.getItem("profile")&&j("/")}),[j]);var b=function(){var e=Object(K.a)(Object(Q.a)().mark((function e(t){var n,r,s;return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,V.a.post("/api/auth/login",{email:a,password:o},n);case 5:r=e.sent,s=r.data,localStorage.setItem("profile",JSON.stringify(s)),j("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),p(e.t0.response.data.error),setTimeout((function(){p("")}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{className:"login-screen",children:Object(U.jsxs)("form",{onSubmit:b,className:"login-screen__form",children:[Object(U.jsx)("h3",{className:"login-screen__title",children:"Login"}),d&&Object(U.jsx)("span",{className:"error-message",children:d}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(U.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return r(e.target.value)},value:a,tabIndex:1})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsxs)("label",{htmlFor:"password",children:["Password:"," ",Object(U.jsx)(_.b,{to:"/forgotpassword",className:"login-screen__forgotpassword",children:"Forgot Password?"})]}),Object(U.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return i(e.target.value)},value:o,tabIndex:2})]}),Object(U.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(U.jsxs)("span",{className:"login-screen__subtext",children:["Don't have an account? ",Object(U.jsx)(_.b,{to:"/register",children:"Register"})]})]})})}),Ce=(a(197),function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),c=Object(T.a)(s,2),o=c[0],i=c[1],l=Object(n.useState)(""),u=Object(T.a)(l,2),d=u[0],p=u[1],j=Object(n.useState)(""),b=Object(T.a)(j,2),m=b[0],O=b[1],h=Object(n.useState)(""),f=Object(T.a)(h,2),x=f[0],g=f[1],v=Object(n.useState)(""),y=Object(T.a)(v,2),w=y[0],N=y[1],S=Object(n.useState)(""),C=Object(T.a)(S,2),k=C[0],E=C[1],D=Object(I.n)(),L=function(){var e=Object(K.a)(Object(Q.a)().mark((function e(t){var n,r,s;return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={header:{"Content-Type":"application/json"}},x===w){e.next=7;break}return g(""),N(""),setTimeout((function(){E("")}),5e3),e.abrupt("return",E("Passwords entered do not match, try gain"));case 7:return e.prev=7,e.next=10,V.a.post("/api/auth/register",{lastname:a,firstname:o,username:d,email:m,password:x},n);case 10:r=e.sent,s=r.data,localStorage.setItem("profile",JSON.stringify(s)),D("/login"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),E(e.t0.response.data.error),setTimeout((function(){E("")}),5e3);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{className:"register-screen",children:Object(U.jsxs)("form",{onSubmit:L,className:"register-screen__form",children:[Object(U.jsx)("h3",{className:"register-screen__title",children:"Register"}),k&&Object(U.jsx)("span",{className:"error-message",children:k}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"name",children:"Last Name:"}),Object(U.jsx)("input",{type:"text",name:"lastname",required:!0,id:"lastname",placeholder:"Enter last name",value:a,onChange:function(e){return r(e.target.value)}}),Object(U.jsx)("label",{htmlFor:"name",children:"First Name:"}),Object(U.jsx)("input",{type:"text",name:"firstname",required:!0,id:"firstname",placeholder:"Enter first name",value:o,onChange:function(e){return i(e.target.value)}}),Object(U.jsx)("label",{htmlFor:"name",children:"Username:"}),Object(U.jsx)("input",{type:"text",required:!0,id:"name",placeholder:"Enter username",value:d,onChange:function(e){return p(e.target.value)}})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(U.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:m,onChange:function(e){return O(e.target.value)}})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(U.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:x,onChange:function(e){return g(e.target.value)}})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm Password:"}),Object(U.jsx)("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:w,onChange:function(e){return N(e.target.value)}})]}),Object(U.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"}),Object(U.jsxs)("span",{className:"register-screen__subtext",children:["Already have an account? ",Object(U.jsx)(_.b,{to:"/login",children:"Login"})]})]})})}),ke=(a(198),function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),c=Object(T.a)(s,2),o=c[0],i=c[1],l=Object(n.useState)(""),u=Object(T.a)(l,2),d=u[0],p=u[1],j=function(){var e=Object(K.a)(Object(Q.a)().mark((function e(t){var n,s,c;return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,V.a.post("/api/auth/forgotpassword",{email:a},n);case 5:s=e.sent,c=s.data,p(c.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),i(e.t0.response.data.error),r(""),setTimeout((function(){i("")}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{className:"forgotpassword-screen",children:Object(U.jsxs)("form",{onSubmit:j,className:"forgotpassword-screen__form",children:[Object(U.jsx)("h3",{className:"forgotpassword-screen__title",children:"Forgot Password"}),o&&Object(U.jsx)("span",{className:"error-message",children:o}),d&&Object(U.jsx)("span",{className:"success-message",children:d}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("p",{className:"forgotpassword-screen__subtext",children:"Please enter the email address you registered your account with. We will send you reset password confirmation to this email"}),Object(U.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(U.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(U.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})}),_e=(a(199),function(e){e.history,e.match;var t=Object(I.p)().resetToken,a=Object(n.useState)(""),r=Object(T.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)(""),i=Object(T.a)(o,2),l=i[0],u=i[1],d=Object(n.useState)(""),p=Object(T.a)(d,2),j=p[0],b=p[1],m=Object(n.useState)(""),O=Object(T.a)(m,2),h=O[0],f=O[1],x=function(){var e=Object(K.a)(Object(Q.a)().mark((function e(a){var n,r,o;return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n={header:{"Content-Type":"application/json"}},s===l){e.next=7;break}return c(""),u(""),setTimeout((function(){b("")}),5e3),e.abrupt("return",b("Passwords do not match"));case 7:return e.prev=7,e.next=10,V.a.put("/api/auth/passwordreset/".concat(t),{password:s},n);case 10:r=e.sent,o=r.data,console.log(o),f(o.data),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),b(e.t0.response.data.error),setTimeout((function(){b("")}),5e3);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{className:"resetpassword-screen",children:Object(U.jsxs)("form",{onSubmit:x,className:"resetpassword-screen__form",children:[Object(U.jsx)("h3",{className:"resetpassword-screen__title",children:"Forgot Password"}),j&&Object(U.jsxs)("span",{className:"error-message",children:[j," "]}),h&&Object(U.jsxs)("span",{className:"success-message",children:[h," ",Object(U.jsx)(_.b,{to:"/login",children:"Login"})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"password",children:"New Password:"}),Object(U.jsx)("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm New Password:"}),Object(U.jsx)("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(U.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Reset Password"})]})})}),Ie=a(286),Te=a(271),Ee=a(287),De=a(131),Le=a.n(De),Pe=Object(q.makeStyles)()((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Fe=function(e){var t,a=e.currentId,s=e.setCurrentId,c=r.a.useState(!1),i=Object(T.a)(c,2),l=i[0],u=i[1],d=Object(n.useState)({title:"",message:"",tags:"",selectedFile:"",price:""}),j=Object(T.a)(d,2),b=j[0],m=j[1],O=Object(o.c)((function(e){return a?e.posts.posts.find((function(e){return e._id===a})):null})),h=Object(o.b)(),f=Pe().classes,x=JSON.parse(localStorage.getItem("profile")),g=Object(I.n)(),v=function(){s(0),m({title:"",message:"",selectedFile:""})};Object(n.useEffect)((function(){null!==O&&void 0!==O&&O.title||v(),O&&m(O)}),[O]);var y=function(){var e=Object(K.a)(Object(Q.a)().mark((function e(t){var n,r;return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(h(re(Object(p.a)(Object(p.a)({},b),{},{name:null===x||void 0===x||null===(n=x.result)||void 0===n?void 0:n.username}))),v(),g("/posts")):(h(se(a,Object(p.a)(Object(p.a)({},b),{},{name:null===x||void 0===x||null===(r=x.result)||void 0===r?void 0:r.username}))),v());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(null===x||void 0===x||null===(t=x.result)||void 0===t||!t.username)return Object(U.jsx)(M.a,{className:f.paper,elevation:6,children:Object(U.jsx)(D.a,{variant:"h6",align:"center",children:"Sign in to upload"})});var w=Object(U.jsxs)(D.a,{variant:"h8",children:["I agree to the ",Object(U.jsx)(Ie.a,{component:_.b,to:"/termsandconditions",children:"terms and conditions"})," "]}),N=function(e){m((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(R.a)({},e.target.name,e.target.value))}))},S=!l;return Object(U.jsx)(M.a,{className:f.paper,elevation:6,children:Object(U.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:y,children:[Object(U.jsx)(D.a,{variant:"h6",children:a?'Editing "'.concat(null===O||void 0===O?void 0:O.title,'"'):"Upload your product and set the price"}),Object(U.jsx)(G.a,{name:"title",variant:"outlined",label:"Title",value:b.title,onChange:N}),Object(U.jsx)(G.a,{name:"price",variant:"outlined",label:"Price",id:"price",value:b.price,onChange:N}),Object(U.jsx)("div",{className:f.fileInput,children:Object(U.jsx)(Le.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return m(Object(p.a)(Object(p.a)({},b),{},{selectedFile:t}))}})}),Object(U.jsx)(Ee.a,{value:"end",control:Object(U.jsx)(Te.a,{checked:l,onChange:function(e){u(e.target.checked)},inputProps:{"aria-label":"controlled"}}),label:w,labelPlacement:"end"}),Object(U.jsx)(D.a,{variant:"h8",children:" "}),Object(U.jsx)(F.a,{className:f.buttonSubmit,variant:"contained",disabled:S,color:"primary",size:"large",type:"submit",children:"Upload"})]})})},Ae=function(){var e=Object(n.useState)(0),t=Object(T.a)(e,2),a=t[0],r=t[1];return Object(U.jsxs)("div",{children:[" ",Object(U.jsx)(Fe,{currentId:a,setCurrentId:r})]})},Re=function(){var e=JSON.parse(localStorage.getItem("profile"));return Object(U.jsx)(_.a,{children:Object(U.jsxs)(k.a,{maxWidth:"xl",children:[Object(U.jsx)(H,{}),Object(U.jsxs)(I.d,{children:[Object(U.jsx)(I.b,{path:"/",element:Object(U.jsx)(I.a,{to:"/posts",replace:!0})}),Object(U.jsx)(I.b,{path:"/posts",exact:!0,element:Object(U.jsx)(ye,{})}),Object(U.jsx)(I.b,{path:"/uploading",exact:!0,element:Object(U.jsx)(Ae,{})}),Object(U.jsx)(I.b,{path:"/posts/search",exact:!0,element:Object(U.jsx)(ye,{})}),Object(U.jsx)(I.b,{path:"/tags/:name",exact:!0,element:Object(U.jsx)(Ne,{})}),Object(U.jsx)(I.b,{path:"/creators/:name",exact:!0,element:Object(U.jsx)(Ne,{})}),Object(U.jsx)(I.b,{path:"/login",exact:!0,element:e?Object(U.jsx)(I.a,{to:"/posts",replace:!0}):Object(U.jsx)(Se,{})}),Object(U.jsx)(I.b,{exact:!0,path:"/register",element:Object(U.jsx)(Ce,{})}),Object(U.jsx)(I.b,{exact:!0,path:"/forgotpassword",element:Object(U.jsx)(ke,{})}),Object(U.jsx)(I.b,{exact:!0,path:"/passwordreset/:resetToken",element:Object(U.jsx)(_e,{})})]})]})})},Be=(a(200),Object(l.a)({reducer:C},{},Object(i.c)(Object(i.a)(u.a))));c.a.createRoot(document.getElementById("root")).render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(o.a,{store:Be,children:Object(U.jsx)(Re,{})})}))}},[[201,1,2]]]);
//# sourceMappingURL=main.c68b3e3c.chunk.js.map