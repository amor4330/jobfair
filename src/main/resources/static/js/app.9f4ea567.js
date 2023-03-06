(function(){"use strict";var n={782:function(n,t,e){var o=e(963),r=e(252);function a(n,t){const e=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(e,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(e,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" | ")]),(0,r.Wm)(o)],64)}var i=e(744);const u={},l=(0,i.Z)(u,[["render",a]]);var c=l,d=e(201);const s=n=>((0,r.dD)("data-v-940f61c8"),n=n(),(0,r.Cn)(),n),f={class:"wrapBox"},p={class:"miniWrapBox"},v=s((()=>(0,r._)("div",{class:"logoBox"},[(0,r._)("img",{src:"#",alt:"HomePage Logo"})],-1))),h={class:"radioBox"},m=s((()=>(0,r._)("span",null,"개인회원",-1))),b=s((()=>(0,r._)("span",null,"기업회원",-1))),g={class:"loginBox"},y=s((()=>(0,r._)("br",null,null,-1))),w=s((()=>(0,r._)("br",null,null,-1))),_=(0,r.uE)('<div class="checkBoxWrap" data-v-940f61c8><input type="checkbox" data-v-940f61c8><span data-v-940f61c8>로그인상태 유지하기</span><br data-v-940f61c8><a href="#" data-v-940f61c8>아이디찾기</a> / <a href="#" data-v-940f61c8>비밀번호찾기</a><p data-v-940f61c8>좋은 직업을 찾고싶으신가요? 가입하시고 다양한 정보를 얻어가세요!<a href="#" data-v-940f61c8>회원가입</a></p></div>',1);function k(n,t,e,a,i,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Uk)(" /* */ "),(0,r._)("div",f,[(0,r._)("div",p,[v,(0,r._)("div",h,[(0,r.wy)((0,r._)("input",{type:"radio",name:"radioBtn",value:"1","onUpdate:modelValue":t[0]||(t[0]=n=>i.auth=n)},null,512),[[o.G2,i.auth]]),m,(0,r.wy)((0,r._)("input",{type:"radio",name:"radioBtn",value:"2","onUpdate:modelValue":t[1]||(t[1]=n=>i.auth=n)},null,512),[[o.G2,i.auth]]),b]),(0,r._)("div",g,[(0,r.wy)((0,r._)("input",{type:"text",name:"",id:"idInput",placeholder:"username","onUpdate:modelValue":t[2]||(t[2]=n=>i.id=n)},null,512),[[o.nr,i.id]]),y,(0,r.wy)((0,r._)("input",{type:"password",placeholder:"password","onUpdate:modelValue":t[3]||(t[3]=n=>i.pw=n)},null,512),[[o.nr,i.pw]]),w,(0,r._)("button",{type:"submit",id:"loginBtn",onClick:t[4]||(t[4]=(...n)=>u.logInBtn&&u.logInBtn(...n))},"로그인")]),_])])],64)}var O={name:"MainView",data(){return{auth:"1",id:"",pw:""}},methods:{logInBtn(){this.$axios.post("/login",{auth:this.auth,id:this.id,pw:this.pw}).then((n=>{console.log(n)})).catch((n=>{console.log(n)})).finally((()=>{console.log("로그인실행")}))}}};const x=(0,i.Z)(O,[["render",k],["__scopeId","data-v-940f61c8"]]);var B=x;const j=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,381))}],P=(0,d.p7)({history:(0,d.PO)("/"),routes:j});var U=P,C=e(907),T=(0,C.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),E=e(154);const A=(0,o.ri)(c);A.config.globalProperties.$axios=E.Z,A.use(U),A.use(T),A.mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return n[o](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<n.length;d++){o=n[d][0],r=n[d][1],a=n[d][2];for(var u=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(e.O).every((function(n){return e.O[n](o[l])}))?o.splice(l--,1):(u=!1,a<i&&(i=a));if(u){n.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[o,r,a]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,o){return e.f[o](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/about.943cb33c.js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="frontend:";e.l=function(o,r,a,i){if(n[o])n[o].push(r);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var s=c[d];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==t+a){u=s;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",t+a),u.src=o),n[o]=[r];var f=function(t,e){u.onerror=u.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n={143:0};e.f.j=function(t,o){var r=e.o(n,t)?n[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(e,o){r=n[t]=[e,o]}));o.push(r[2]=a);var i=e.p+e.u(t),u=new Error,l=function(o){if(e.o(n,t)&&(r=n[t],0!==r&&(n[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};e.l(i,l,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(l)var d=l(e)}for(t&&t(o);c<i.length;c++)a=i[c],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(d)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(782)}));o=e.O(o)})();
//# sourceMappingURL=app.9f4ea567.js.map