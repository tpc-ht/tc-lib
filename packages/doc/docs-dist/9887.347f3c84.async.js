(self.webpackChunk_tc_lib_doc=self.webpackChunk_tc_lib_doc||[]).push([[9887],{99887:function(vt,Pt,ht){(function(X,G){if(!0)vt.exports=G(ht(2784));else var J,c})(self,X=>(()=>{var G={184:(o,e)=>{var t;(function(){"use strict";var i={}.hasOwnProperty;function s(){for(var a=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var p=typeof n;if(p==="string"||p==="number")a.push(n);else if(Array.isArray(n)){if(n.length){var v=s.apply(null,n);v&&a.push(v)}}else if(p==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){a.push(n.toString());continue}for(var m in n)i.call(n,m)&&n[m]&&a.push(m)}}}return a.join(" ")}o.exports?(s.default=s,o.exports=s):(t=function(){return s}.apply(e,[]))===void 0||(o.exports=t)})()},703:(o,e,t)=>{"use strict";t.d(e,{Z:()=>n});var i=t(81),s=t.n(i),a=t(645),r=t.n(a)()(s());r.push([o.id,`.waterfall-img img{
    object-fit: contain;
    width: 100%;
}
`,""]);const n=r},645:o=>{"use strict";o.exports=function(e){var t=[];return t.toString=function(){return this.map(function(i){var s="",a=i[5]!==void 0;return i[4]&&(s+="@supports (".concat(i[4],") {")),i[2]&&(s+="@media ".concat(i[2]," {")),a&&(s+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),s+=e(i),a&&(s+="}"),i[2]&&(s+="}"),i[4]&&(s+="}"),s}).join("")},t.i=function(i,s,a,r,n){typeof i=="string"&&(i=[[null,i,void 0]]);var p={};if(a)for(var v=0;v<this.length;v++){var m=this[v][0];m!=null&&(p[m]=!0)}for(var S=0;S<i.length;S++){var l=[].concat(i[S]);a&&p[l[0]]||(n!==void 0&&(l[5]===void 0||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),s&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=s),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:o=>{"use strict";o.exports=function(e){return e[1]}},379:o=>{"use strict";var e=[];function t(a){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===a){r=n;break}return r}function i(a,r){for(var n={},p=[],v=0;v<a.length;v++){var m=a[v],S=r.base?m[0]+r.base:m[0],l=n[S]||0,j="".concat(S," ").concat(l);n[S]=l+1;var L=t(j),R={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(L!==-1)e[L].references++,e[L].updater(R);else{var _=s(R,r);r.byIndex=v,e.splice(v,0,{identifier:j,updater:_,references:1})}p.push(j)}return p}function s(a,r){var n=r.domAPI(r);return n.update(a),function(p){if(p){if(p.css===a.css&&p.media===a.media&&p.sourceMap===a.sourceMap&&p.supports===a.supports&&p.layer===a.layer)return;n.update(a=p)}else n.remove()}}o.exports=function(a,r){var n=i(a=a||[],r=r||{});return function(p){p=p||[];for(var v=0;v<n.length;v++){var m=t(n[v]);e[m].references--}for(var S=i(p,r),l=0;l<n.length;l++){var j=t(n[l]);e[j].references===0&&(e[j].updater(),e.splice(j,1))}n=S}}},569:o=>{"use strict";var e={};o.exports=function(t,i){var s=function(a){if(e[a]===void 0){var r=document.querySelector(a);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[a]=r}return e[a]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:o=>{"use strict";o.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(o,e,t)=>{"use strict";o.exports=function(i){var s=t.nc;s&&i.setAttribute("nonce",s)}},795:o=>{"use strict";o.exports=function(e){if(typeof document=="undefined")return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){(function(s,a,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var p=r.layer!==void 0;p&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,p&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var v=r.sourceMap;v&&typeof btoa!="undefined"&&(n+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),a.styleTagTransform(n,s,a.options)})(t,e,i)},remove:function(){(function(i){if(i.parentNode===null)return!1;i.parentNode.removeChild(i)})(t)}}}},589:o=>{"use strict";o.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},359:o=>{"use strict";o.exports=X}},J={};function c(o){var e=J[o];if(e!==void 0)return e.exports;var t=J[o]={id:o,exports:{}};return G[o](t,t.exports,c),t.exports}c.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return c.d(e,{a:e}),e},c.d=(o,e)=>{for(var t in e)c.o(e,t)&&!c.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},c.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),c.r=o=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.nc=void 0;var z={};return(()=>{"use strict";c.r(z),c.d(z,{Waterfall:()=>Y,default:()=>mt});var o=c(184),e=c.n(o),t=c(359),i=c.n(t),s=c(379),a=c.n(s),r=c(795),n=c.n(r),p=c(569),v=c.n(p),m=c(565),S=c.n(m),l=c(216),j=c.n(l),L=c(589),R=c.n(L),_=c(703),A={};A.styleTagTransform=R(),A.setAttributes=S(),A.insert=v().bind(null,"head"),A.domAPI=n(),A.insertStyleElement=j(),a()(_.Z,A),_.Z&&_.Z.locals&&_.Z.locals;var V=function(){return V=Object.assign||function(b){for(var I,M=1,D=arguments.length;M<D;M++)for(var T in I=arguments[M])Object.prototype.hasOwnProperty.call(I,T)&&(b[T]=I[T]);return b},V.apply(this,arguments)},Y=function(b){var I=b.dataSource,M=I===void 0?[]:I,D=b.fieldName,T=D===void 0?"url":D,$=b.space,C=$===void 0?10:$,tt=b.col,F=tt===void 0?2:tt,et=b.colWidth,nt=et===void 0?0:et,rt=b.extraItemHeight,ot=rt===void 0?0:rt,yt=b.children,at=b.onScroll,it=b.renderItem,gt=b.style,bt=b.className,wt=function(h,x){var k={};for(var y in h)Object.prototype.hasOwnProperty.call(h,y)&&x.indexOf(y)<0&&(k[y]=h[y]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var E=0;for(y=Object.getOwnPropertySymbols(h);E<y.length;E++)x.indexOf(y[E])<0&&Object.prototype.propertyIsEnumerable.call(h,y[E])&&(k[y[E]]=h[y[E]])}return k}(b,["dataSource","fieldName","space","col","colWidth","extraItemHeight","children","onScroll","renderItem","style","className"]),ut=(0,t.useRef)(),st=(0,t.useState)(nt),B=st[0],xt=st[1],ct=(0,t.useState)([]),lt=ct[0],St=ct[1],ft=(0,t.useMemo)(function(){var h,x;return Array.isArray(C)?{marginH:(h=C[0])!==null&&h!==void 0?h:10,marginV:(x=C[1])!==null&&x!==void 0?x:10}:{marginH:C,marginV:C}},[C]),pt=ft.marginH,K=ft.marginV;return(0,t.useLayoutEffect)(function(){if(!nt){var h=ut.current.clientWidth;xt((h-pt*(F-1))/2)}}),(0,t.useEffect)(function(){if(F){var h=Array(F).fill("").map(function(){return{height:0,items:[]}});new Promise(function(x){var k=0;M.forEach(function(y){return E=void 0,dt=void 0,W=function(){var N,H,q;return function(Z,P){var w,d,u,O,g={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return O={next:Q(0),throw:Q(1),return:Q(2)},typeof Symbol=="function"&&(O[Symbol.iterator]=function(){return this}),O;function Q(Ot){return function(jt){return function(f){if(w)throw new TypeError("Generator is already executing.");for(;O&&(O=0,f[0]&&(g=0)),g;)try{if(w=1,d&&(u=2&f[0]?d.return:f[0]?d.throw||((u=d.return)&&u.call(d),0):d.next)&&!(u=u.call(d,f[1])).done)return u;switch(d=0,u&&(f=[2&f[0],u.value]),f[0]){case 0:case 1:u=f;break;case 4:return g.label++,{value:f[1],done:!1};case 5:g.label++,d=f[1],f=[0];continue;case 7:f=g.ops.pop(),g.trys.pop();continue;default:if(!((u=(u=g.trys).length>0&&u[u.length-1])||f[0]!==6&&f[0]!==2)){g=0;continue}if(f[0]===3&&(!u||f[1]>u[0]&&f[1]<u[3])){g.label=f[1];break}if(f[0]===6&&g.label<u[1]){g.label=u[1],u=f;break}if(u&&g.label<u[2]){g.label=u[2],g.ops.push(f);break}u[2]&&g.ops.pop(),g.trys.pop();continue}f=P.call(Z,g)}catch(Et){f=[6,Et],d=0}finally{w=u=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([Ot,jt])}}}(this,function(Z){switch(Z.label){case 0:return[4,(d=y[T],new Promise(function(u){var O=new Image;O.src=d,O.onload=function(){return u(O)},O.onerror=function(){return u(O)}}))];case 1:return N=Z.sent(),P=h,w=Math.min.apply(Math,P.map(function(u){return u.height})),(H=P.find(function(u){return u.height===w})).items.push(y),q=H.items.length>1?K:0,H.height+=N.width?N.height*(B/N.width)+q+ot:0,(k+=1)==M.length&&x(h),[2]}var P,w,d})},new((U=void 0)||(U=Promise))(function(N,H){function q(w){try{P(W.next(w))}catch(d){H(d)}}function Z(w){try{P(W.throw(w))}catch(d){H(d)}}function P(w){var d;w.done?N(w.value):(d=w.value,d instanceof U?d:new U(function(u){u(d)})).then(q,Z)}P((W=W.apply(E,dt||[])).next())});var E,dt,U,W})}).then(function(x){St(x)})}},[F,K,M,ot]),i().createElement("div",V({style:V({display:"flex",overflow:"hidden auto",gap:pt},gt),className:e()(bt,"waterfall-img"),onScroll:function(h){at==null||at(h)},ref:ut},wt),Array.isArray(lt)&&B?lt.map(function(h,x){return i().createElement("div",{key:x,style:{width:B,display:"flex",flexDirection:"column",gap:K}},h.items.map(function(k,y){return it?it(k,y):i().createElement("div",{key:"img-".concat(y)},i().createElement("img",{key:"img-".concat(y),src:k[T]}))}))}):yt)};const mt=Y})(),z})())}}]);