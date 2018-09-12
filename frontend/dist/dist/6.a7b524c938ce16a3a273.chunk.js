webpackJsonp([6],{231:function(e,t,r){"use strict";function s(e){l||r(833)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(751),n=r.n(o);for(var a in o)"default"!==a&&function(e){r.d(t,e,function(){return o[e]})}(a);var i=r(835),u=r.n(i),l=!1,c=r(1),d=s,p=c(n.a,u.a,!1,d,null,null);p.options.__file="src/views/account/user.vue",t.default=p.exports},242:function(e,t,r){"use strict";function s(e){var t,r;this.promise=new e(function(e,s){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=s}),this.resolve=o(t),this.reject=o(r)}var o=r(83);e.exports.f=function(e){return new s(e)}},249:function(e,t,r){var s=r(9),o=r(83),n=r(2)("species");e.exports=function(e,t){var r,a=s(e).constructor;return void 0===a||void 0==(r=s(a)[n])?t:o(r)}},250:function(e,t,r){var s,o,n,a=r(49),i=r(263),u=r(84),l=r(50),c=r(5),d=c.process,p=c.setImmediate,f=c.clearImmediate,m=c.MessageChannel,h=c.Dispatch,v=0,_={},g=function(){var e=+this;if(_.hasOwnProperty(e)){var t=_[e];delete _[e],t()}},w=function(e){g.call(e.data)};p&&f||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return _[++v]=function(){i("function"==typeof e?e:Function(e),t)},s(v),v},f=function(e){delete _[e]},"process"==r(28)(d)?s=function(e){d.nextTick(a(g,e,1))}:h&&h.now?s=function(e){h.now(a(g,e,1))}:m?(o=new m,n=o.port2,o.port1.onmessage=w,s=a(n.postMessage,n,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(s=function(e){c.postMessage(e+"","*")},c.addEventListener("message",w,!1)):s="onreadystatechange"in l("script")?function(e){u.appendChild(l("script")).onreadystatechange=function(){u.removeChild(this),g.call(e)}}:function(e){setTimeout(a(g,e,1),0)}),e.exports={set:p,clear:f}},251:function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},252:function(e,t,r){var s=r(9),o=r(14),n=r(242);e.exports=function(e,t){if(s(e),o(t)&&t.constructor===e)return t;var r=n.f(e);return(0,r.resolve)(t),r.promise}},254:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){v.default.Notice.error({duration:10,title:t,desc:e?"":r})}Object.defineProperty(t,"__esModule",{value:!0});var n=r(258),a=s(n),i=r(6),u=s(i),l=r(54),c=s(l),d=r(91),p=s(d),f=r(89),m=r(4),h=(s(m),r(29)),v=s(h);c.default.defaults.timeout=3e4,c.default.interceptors.request.use(function(e){var t=u.default.get("token");return t&&(e.headers.Authorization="JWT "+t),e},function(e){return a.default.reject(e)}),c.default.interceptors.response.use(function(e){return e},function(e){if(console.log(v.default),e.response)switch(e.response.status){case 400:o(!1,e.response.request.statusText,e.response.request.responseText);break;case 401:p.default.commit("logout"),f.router.push({name:"login"});break;case 403:o(!1,e.response.statusText,e.response.data.detail);break;case 500:o(!1,e.response.status,e.response.statusText)}return a.default.reject(e)}),t.default=c.default},258:function(e,t,r){e.exports={default:r(259),__esModule:!0}},259:function(e,t,r){r(90),r(30),r(53),r(260),r(268),r(269),e.exports=r(3).Promise},260:function(e,t,r){"use strict";var s,o,n,a,i=r(23),u=r(5),l=r(49),c=r(87),d=r(22),p=r(14),f=r(83),m=r(261),h=r(262),v=r(249),_=r(250).set,g=r(264)(),w=r(242),U=r(251),y=r(265),b=r(252),F=u.TypeError,x=u.process,k=x&&x.versions,P=k&&k.v8||"",C=u.Promise,M="process"==c(x),L=function(){},G=o=w.f,I=!!function(){try{var e=C.resolve(1),t=(e.constructor={})[r(2)("species")]=function(e){e(L,L)};return(M||"function"==typeof PromiseRejectionEvent)&&e.then(L)instanceof t&&0!==P.indexOf("6.6")&&-1===y.indexOf("Chrome/66")}catch(e){}}(),j=function(e){var t;return!(!p(e)||"function"!=typeof(t=e.then))&&t},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;g(function(){for(var s=e._v,o=1==e._s,n=0;r.length>n;)!function(t){var r,n,a,i=o?t.ok:t.fail,u=t.resolve,l=t.reject,c=t.domain;try{i?(o||(2==e._h&&$(e),e._h=1),!0===i?r=s:(c&&c.enter(),r=i(s),c&&(c.exit(),a=!0)),r===t.promise?l(F("Promise-chain cycle")):(n=j(r))?n.call(r,u,l):u(r)):l(s)}catch(e){c&&!a&&c.exit(),l(e)}}(r[n++]);e._c=[],e._n=!1,t&&!e._h&&R(e)})}},R=function(e){_.call(u,function(){var t,r,s,o=e._v,n=O(e);if(n&&(t=U(function(){M?x.emit("unhandledRejection",o,e):(r=u.onunhandledrejection)?r({promise:e,reason:o}):(s=u.console)&&s.error&&s.error("Unhandled promise rejection",o)}),e._h=M||O(e)?2:1),e._a=void 0,n&&t.e)throw t.v})},O=function(e){return 1!==e._h&&0===(e._a||e._c).length},$=function(e){_.call(u,function(){var t;M?x.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},S=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},K=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw F("Promise can't be resolved itself");(t=j(e))?g(function(){var s={_w:r,_d:!1};try{t.call(e,l(K,s,1),l(S,s,1))}catch(e){S.call(s,e)}}):(r._v=e,r._s=1,T(r,!1))}catch(e){S.call({_w:r,_d:!1},e)}}};I||(C=function(e){m(this,C,"Promise","_h"),f(e),s.call(this);try{e(l(K,this,1),l(S,this,1))}catch(e){S.call(this,e)}},s=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},s.prototype=r(266)(C.prototype,{then:function(e,t){var r=G(v(this,C));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=M?x.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),n=function(){var e=new s;this.promise=e,this.resolve=l(K,e,1),this.reject=l(S,e,1)},w.f=G=function(e){return e===C||e===a?new n(e):o(e)}),d(d.G+d.W+d.F*!I,{Promise:C}),r(31)(C,"Promise"),r(267)("Promise"),a=r(3).Promise,d(d.S+d.F*!I,"Promise",{reject:function(e){var t=G(this);return(0,t.reject)(e),t.promise}}),d(d.S+d.F*(i||!I),"Promise",{resolve:function(e){return b(i&&this===a?C:this,e)}}),d(d.S+d.F*!(I&&r(88)(function(e){C.all(e).catch(L)})),"Promise",{all:function(e){var t=this,r=G(t),s=r.resolve,o=r.reject,n=U(function(){var r=[],n=0,a=1;h(e,!1,function(e){var i=n++,u=!1;r.push(void 0),a++,t.resolve(e).then(function(e){u||(u=!0,r[i]=e,--a||s(r))},o)}),--a||s(r)});return n.e&&o(n.v),r.promise},race:function(e){var t=this,r=G(t),s=r.reject,o=U(function(){h(e,!1,function(e){t.resolve(e).then(r.resolve,s)})});return o.e&&s(o.v),r.promise}})},261:function(e,t){e.exports=function(e,t,r,s){if(!(e instanceof t)||void 0!==s&&s in e)throw TypeError(r+": incorrect invocation!");return e}},262:function(e,t,r){var s=r(49),o=r(85),n=r(86),a=r(9),i=r(51),u=r(52),l={},c={},t=e.exports=function(e,t,r,d,p){var f,m,h,v,_=p?function(){return e}:u(e),g=s(r,d,t?2:1),w=0;if("function"!=typeof _)throw TypeError(e+" is not iterable!");if(n(_)){for(f=i(e.length);f>w;w++)if((v=t?g(a(m=e[w])[0],m[1]):g(e[w]))===l||v===c)return v}else for(h=_.call(e);!(m=h.next()).done;)if((v=o(h,g,m.value,t))===l||v===c)return v};t.BREAK=l,t.RETURN=c},263:function(e,t){e.exports=function(e,t,r){var s=void 0===r;switch(t.length){case 0:return s?e():e.call(r);case 1:return s?e(t[0]):e.call(r,t[0]);case 2:return s?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return s?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return s?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},264:function(e,t,r){var s=r(5),o=r(250).set,n=s.MutationObserver||s.WebKitMutationObserver,a=s.process,i=s.Promise,u="process"==r(28)(a);e.exports=function(){var e,t,r,l=function(){var s,o;for(u&&(s=a.domain)&&s.exit();e;){o=e.fn,e=e.next;try{o()}catch(s){throw e?r():t=void 0,s}}t=void 0,s&&s.enter()};if(u)r=function(){a.nextTick(l)};else if(!n||s.navigator&&s.navigator.standalone)if(i&&i.resolve){var c=i.resolve(void 0);r=function(){c.then(l)}}else r=function(){o.call(s,l)};else{var d=!0,p=document.createTextNode("");new n(l).observe(p,{characterData:!0}),r=function(){p.data=d=!d}}return function(s){var o={fn:s,next:void 0};t&&(t.next=o),e||(e=o,r()),t=o}}},265:function(e,t,r){var s=r(5),o=s.navigator;e.exports=o&&o.userAgent||""},266:function(e,t,r){var s=r(10);e.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:s(e,o,t[o]);return e}},267:function(e,t,r){"use strict";var s=r(5),o=r(3),n=r(7),a=r(11),i=r(2)("species");e.exports=function(e){var t="function"==typeof o[e]?o[e]:s[e];a&&t&&!t[i]&&n.f(t,i,{configurable:!0,get:function(){return this}})}},268:function(e,t,r){"use strict";var s=r(22),o=r(3),n=r(5),a=r(249),i=r(252);s(s.P+s.R,"Promise",{finally:function(e){var t=a(this,o.Promise||n.Promise),r="function"==typeof e;return this.then(r?function(r){return i(t,e()).then(function(){return r})}:e,r?function(r){return i(t,e()).then(function(){throw r})}:e)}})},269:function(e,t,r){"use strict";var s=r(22),o=r(242),n=r(251);s(s.S,"Promise",{try:function(e){var t=o.f(this),r=n(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},417:function(e,t,r){"use strict";function s(e){return(0,f.default)({url:m,method:"get",params:e})}function o(e,t){return(0,f.default)({url:m+e+"/",method:"put",data:t})}function n(e){return(0,f.default)({url:m,method:"post",data:e})}function a(e){return(0,f.default)({url:m+e+"/",method:"delete"})}function i(e){return(0,f.default)({url:h,method:"get",params:e})}function u(e){return(0,f.default)({url:h,method:"post",data:e})}function l(e,t){return(0,f.default)({url:h+e+"/",method:"put",data:t})}function c(e){return(0,f.default)({url:h+e+"/",method:"delete"})}function d(e){return(0,f.default)({url:v,method:"get",params:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.GetUserList=s,t.UpdateUser=o,t.CreateUser=n,t.DeleteUser=a,t.GetGroupList=i,t.CreateGroup=u,t.UpdateGroup=l,t.DeleteGroup=c,t.GetPermissonList=d;var p=r(254),f=function(e){return e&&e.__esModule?e:{default:e}}(p),m="/api/account/users/",h="/api/account/groups/",v="/api/account/permissions/"},721:function(e,t,r){"use strict";function s(e,t){for(var r=e.length;r--;)if(e[r].id===t)return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.contains=s},751:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(32),o=function(e){return e&&e.__esModule?e:{default:e}}(s),n=r(29),a=r(417),i=r(721);t.default={components:{Button:n.Button,Table:n.Table,Modal:n.Modal,Message:n.Message,Badge:n.Badge,Icon:n.Icon},data:function(){var e=this;return{deleteModal:!1,createModal:!1,updateModal:!1,targetKeysCreate:[],targetKeysupdate:[],listStyle:{width:"300px",height:"300px"},transferTitles:["系统权限","用户权限"],permissionList:[],groupList:[],roleList:[{value:"developer",label:"研发"},{value:"developer_manager",label:"研发经理"},{value:"developer_supremo",label:"研发总监"}],showPermisson:{title:"",modal:!1,permissions:[]},createUserForm:{username:"",password:"",sysaccount:["is_active","is_staff"],role:"developer",groups:[]},ruleCreateUserForm:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},updateUserForm:{id:"",username:"",password:"",newpassword:"",permissionList:[],sysaccount:[],role:"",groups:[]},ruleUpdateUserForm:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}]},columnsUser:[{title:"用户名",render:function(e,t){return e("Avatar",{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},t.row.username)}},{title:"角色",render:function(e,t){return e("span",{},{developer:"研发",developer_manager:"研发经理",developer_supremo:"研发总监"}[t.row.role])}},{title:"属组",key:"groups",render:function(e,t){return e("span",{},t.row.groups.name)}},{title:"权限",render:function(t,r){if(0==r.row.perms.length)var s=[];else var s=[t(n.Button,{props:{type:"info",size:"small"},style:{marginRight:"12px"},on:{click:function(){console.log(r.row),e.showPermisson.modal=!0,e.showPermisson.title=r.row.username+" 用户权限",e.showPermisson.permissions=r.row.perms}}},"查看")];return t("div",{},s)}},{title:"系统身份",width:220,render:function(e,t){var r={true:"checkmark-circled",false:"close-circled"},s=[],o=t.row.is_superuser,n=t.row.is_active,a=t.row.is_staff;return s.push(e("span",{},"管理员")),s.push(e("Icon",{props:{type:r[o]},style:{marginRight:"10px"}},"")),s.push(e("span",{},"已激活")),s.push(e("Icon",{props:{type:r[n]},style:{marginRight:"10px"}},"")),s.push(e("span",{},"登录后台")),s.push(e("Icon",{props:{type:r[a]}},"")),e("div",{},s)}},{title:"操作",key:"action",width:150,align:"center",render:function(t,r){return t("div",[t(n.Button,{props:{type:"primary",size:"small"},style:{marginRight:"12px"},on:{click:function(){console.log(r.row),e.updateModal=!0,e.updateUserForm.id=r.row.id,e.updateUserForm.username=r.row.username,e.updateUserForm.role=r.row.role,e.updateUserForm.groups="{}"==(0,o.default)(r.row.groups)?[]:[r.row.groups.id],console.log(e.updateUserForm.role),e.updateUserForm.password=r.row.password,e.updateUserForm.newpassword="";var t=[];1==r.row.is_superuser&&t.push("is_superuser"),1==r.row.is_active&&t.push("is_active"),1==r.row.is_staff&&t.push("is_staff"),e.updateUserForm.sysaccount=t;var s=[],n=r.row.perms;for(var a in n)s.push(n[a].id);e.targetKeysupdate=s;var u=[],l=e.permissionList;for(var c in l)0==(0,i.contains)(n,l[c].id)&&u.push(l[c]);e.updateUserForm.permissionList=u}}},"修改"),t(n.Button,{props:{type:"error",size:"small"},on:{click:function(){e.deleteModal=!0,e.deletedata.id=r.row.id,e.deletedata.username=r.row.username}}},"删除")])}}],deletedata:{id:"",username:""},total:1,userList:[],getParams:{page:1,pagesize:10,search:""}}},created:function(){this.handleGetPermissonList(),this.handleGetGroupList(),this.handleGetUserList()},methods:{notice:function(e,t){this.$Notice.success({title:e,duration:6,desc:t})},pageChange:function(e){this.getParams.page=e,this.handleGetUserList()},sizeChange:function(e){this.getParams.pagesize=e,this.handleGetUserList()},permsFormat:function(e){var t=[];e.map(function(e){t.push({key:e.id,label:e.perm_name,description:e.codename})}),this.permissionList=t},groupsFormat:function(e){console.log(e);var t=[];e.map(function(e){t.push({value:e.id,label:e.name})}),this.groupList=t,this.createUserForm.groups=t.length>0?[t[0].value]:[],console.log(this.createUserForm.groups)},handleChangeCreate:function(e){this.targetKeysCreate=e},handleChangeupdate:function(e){this.targetKeysupdate=e},filterMethod:function(e,t){return e.label.indexOf(t)>-1},handleCreateUser:function(){var e=this;this.$refs.createUserForm.validate(function(t){if(t){var r=e.createUserForm;r.user_permissions=e.targetKeysCreate,(0,a.CreateUser)(r).then(function(t){if(201==t.status){var r="用户 "+t.data.username+" 创建成功";e.notice("服务器提示",r)}e.handleGetUserList()}).catch(function(e){console.log(e)})}})},handleUpdateUser:function(){var e=this;this.$refs.updateUserForm.validate(function(t){if(t){var r=e.updateUserForm;r.user_permissions=e.targetKeysupdate,delete r.permissionList,console.log("----- ",r),(0,a.UpdateUser)(e.updateUserForm.id,r).then(function(t){if(console.log(t),200==t.status){var r="用户 "+t.data.username+" 修改成功";e.notice("服务器提示",r)}e.handleGetUserList()}).catch(function(e){console.log(e)})}})},handleDeleteUser:function(){var e=this;(0,a.DeleteUser)(this.deletedata.id).then(function(t){if(console.log(t),204==t.status){var r="用户 "+e.deletedata.username+" 删除成功";e.notice("服务器提示",r)}e.handleGetUserList()}).catch(function(e){console.log(e)})},handleGetPermissonList:function(){var e=this;(0,a.GetPermissonList)({}).then(function(t){console.log(t);var r=t.data.results;e.permsFormat(r)}).catch(function(e){console.log(e)})},handleGetUserList:function(){var e=this;(0,a.GetUserList)(this.getParams).then(function(t){console.log(t),e.userList=t.data.results,e.total=t.data.count}).catch(function(e){console.log(e)})},handleGetGroupList:function(){var e=this;(0,a.GetGroupList)(this.getParams).then(function(t){e.groupsFormat(t.data.results)}).catch(function(e){console.log(e)})},cancel:function(){n.Message.info("Clicked cancel")}}}},833:function(e,t,r){var s=r(834);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r(16)("54143648",s,!1,{})},834:function(e,t,r){t=e.exports=r(15)(!1),t.push([e.i,"\n.modalcontent {\r\n  max-height:300px; \r\n  overflow-y:auto\n}\r\n",""])},835:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",[r("Row",[r("Col",{attrs:{span:"4"}},[r("Input",{attrs:{icon:"search",placeholder:"搜索"},on:{"on-click":e.handleGetUserList,"on-enter":e.handleGetUserList},model:{value:e.getParams.search,callback:function(t){e.$set(e.getParams,"search",t)},expression:"getParams.search"}})],1),e._v(" "),r("Col",{attrs:{span:"10"}},[r("center",[r("Button",{attrs:{type:"primary"},on:{click:function(t){e.createModal=!0}}},[e._v("创建用户")])],1)],1)],1),e._v(" "),r("br"),e._v(" "),r("Row",[r("Col",{attrs:{span:"22"}},[r("Table",{attrs:{columns:e.columnsUser,data:e.userList}})],1)],1),e._v(" "),r("br"),e._v(" "),r("Page",{attrs:{total:e.total,"show-sizer":"",current:e.getParams.page},on:{"on-change":e.pageChange,"on-page-size-change":e.sizeChange}})],1),e._v(" "),r("Modal",{attrs:{width:"800",title:"创建用户"},on:{"on-ok":e.handleCreateUser,"on-cancel":e.cancel},model:{value:e.createModal,callback:function(t){e.createModal=t},expression:"createModal"}},[r("Form",{ref:"createUserForm",attrs:{model:e.createUserForm,rules:e.ruleCreateUserForm,"label-width":100}},[r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"用户名：",prop:"username"}},[r("Input",{model:{value:e.createUserForm.username,callback:function(t){e.$set(e.createUserForm,"username",t)},expression:"createUserForm.username"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"密码：",prop:"password"}},[r("Input",{attrs:{type:"password"},model:{value:e.createUserForm.password,callback:function(t){e.$set(e.createUserForm,"password",t)},expression:"createUserForm.password"}})],1)],1)],1),e._v(" "),r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"角色："}},[r("Select",{model:{value:e.createUserForm.role,callback:function(t){e.$set(e.createUserForm,"role",t)},expression:"createUserForm.role"}},e._l(e.roleList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"属组："}},[r("Select",{model:{value:e.createUserForm.groups[0],callback:function(t){e.$set(e.createUserForm.groups,0,t)},expression:"createUserForm.groups[0]"}},e._l(e.groupList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1)],1),e._v(" "),r("FormItem",{attrs:{label:"权限："}},[r("Transfer",{attrs:{filterable:"",data:e.permissionList,"target-keys":e.targetKeysCreate,"filter-method":e.filterMethod,"list-style":e.listStyle,titles:e.transferTitles},on:{"on-change":e.handleChangeCreate}})],1),e._v(" "),r("FormItem",{attrs:{label:"系统身份：",prop:"systemAccount"}},[r("CheckboxGroup",{model:{value:e.createUserForm.sysaccount,callback:function(t){e.$set(e.createUserForm,"sysaccount",t)},expression:"createUserForm.sysaccount"}},[r("Checkbox",{attrs:{label:"is_active"}},[e._v("已激活")]),e._v(" "),r("Checkbox",{attrs:{label:"is_staff"}},[e._v("登录后台")]),e._v(" "),r("Checkbox",{attrs:{label:"is_superuser"}},[e._v("管理员")])],1)],1)],1)],1),e._v(" "),r("Modal",{attrs:{width:"800",title:"修改用户"},on:{"on-ok":e.handleUpdateUser,"on-cancel":e.cancel},model:{value:e.updateModal,callback:function(t){e.updateModal=t},expression:"updateModal"}},[r("Form",{ref:"updateUserForm",attrs:{model:e.updateUserForm,rules:e.ruleUpdateUserForm,"label-width":100}},[r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"用户名：",prop:"username"}},[r("Input",{model:{value:e.updateUserForm.username,callback:function(t){e.$set(e.updateUserForm,"username",t)},expression:"updateUserForm.username"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"新密码：",prop:"password"}},[r("Input",{attrs:{type:"password"},model:{value:e.updateUserForm.newpassword,callback:function(t){e.$set(e.updateUserForm,"newpassword",t)},expression:"updateUserForm.newpassword"}})],1)],1)],1),e._v(" "),r("Row",[r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"角色："}},[r("Select",{model:{value:e.updateUserForm.role,callback:function(t){e.$set(e.updateUserForm,"role",t)},expression:"updateUserForm.role"}},e._l(e.roleList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1),e._v(" "),r("Col",{attrs:{span:"12"}},[r("FormItem",{attrs:{label:"属组："}},[r("Select",{model:{value:e.updateUserForm.groups[0],callback:function(t){e.$set(e.updateUserForm.groups,0,t)},expression:"updateUserForm.groups[0]"}},e._l(e.groupList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)],1)],1),e._v(" "),r("FormItem",{attrs:{label:"权限："}},[r("Transfer",{attrs:{data:e.updateUserForm.permissionList,"target-keys":e.targetKeysupdate,filterable:"","filter-method":e.filterMethod,"list-style":e.listStyle,titles:e.transferTitles},on:{"on-change":e.handleChangeupdate}})],1),e._v(" "),r("FormItem",{attrs:{label:"系统身份："}},[r("CheckboxGroup",{model:{value:e.updateUserForm.sysaccount,callback:function(t){e.$set(e.updateUserForm,"sysaccount",t)},expression:"updateUserForm.sysaccount"}},[r("Checkbox",{attrs:{label:"is_active"}},[e._v("已激活")]),e._v(" "),r("Checkbox",{attrs:{label:"is_staff"}},[e._v("登录后台")]),e._v(" "),r("Checkbox",{attrs:{label:"is_superuser"}},[e._v("管理员")])],1)],1)],1)],1),e._v(" "),r("Modal",{attrs:{width:"450",title:e.showPermisson.title},model:{value:e.showPermisson.modal,callback:function(t){e.$set(e.showPermisson,"modal",t)},expression:"showPermisson.modal"}},[r("div",{staticClass:"modalcontent"},e._l(e.showPermisson.permissions,function(t){return r("p",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))]),e._v(" "),r("Modal",{attrs:{width:"450",title:"删除用户"},on:{"on-ok":e.handleDeleteUser},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}},[r("div",[r("center",[e._v(" 删除用户 "+e._s(e.deletedata.username)+" ")])],1)])],1)},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};t.default=n}});