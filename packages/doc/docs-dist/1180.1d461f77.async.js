"use strict";(self.webpackChunk_tc_lib_doc=self.webpackChunk_tc_lib_doc||[]).push([[1180],{41180:function(wr,_,N){N.r(_),N.d(_,{DisabledDateTime:function(){return tr},EventEmitter:function(){return pt},calcPageNo:function(){return pr},complement:function(){return $t},copyText:function(){return ht},dayDiff:function(){return Qt},debounce:function(){return vt},formatDates:function(){return xt},fromJSON:function(){return cr},getArrMax:function(){return Kt},getArrNodes:function(){return Wt},getAttrFromArr:function(){return Vt},getFileName:function(){return dr},getFileSuffix:function(){return vr},getPathParams:function(){return ur},getTreeNodes:function(){return Jt},getType:function(){return Q},intersect:function(){return Gt},isArr:function(){return b},isBool:function(){return yt},isFn:function(){return mt},isFullArr:function(){return J},isFullObj:function(){return x},isHTMLElement:function(){return Pt},isMap:function(){return bt},isNum:function(){return W},isNumberLike:function(){return Tt},isObj:function(){return Ot},isPlainObj:function(){return R},isPro:function(){return gt},isReactElement:function(){return Dt},isRegExp:function(){return Mt},isSet:function(){return wt},isStr:function(){return C},isTabActive:function(){return nr},isTrueArr:function(){return jt},isTrueObj:function(){return Et},isVoid:function(){return Lt},isWeakMap:function(){return St},isWeakSet:function(){return At},judgeDeviceType:function(){return er},makeArray:function(){return Bt},minus:function(){return It},numberFormat:function(){return hr},randomHexColor:function(){return mr},repeat:function(){return rt},reverse:function(){return ar},throttle:function(){return dt},timeCount:function(){return rr},toHyphen:function(){return sr},toJSON:function(){return fr},toPathParams:function(){return lr},uid:function(){return yr},unionSet:function(){return Rt},uniqueArr:function(){return Ct},uniqueObjArr:function(){return Ft}});function k(r){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(r)}function at(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function q(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,Z(e.key),e)}}function ft(r,t,n){return t&&q(r.prototype,t),n&&q(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}function ct(r,t,n){return t=Z(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function Z(r){var t=st(r,"string");return k(t)==="symbol"?t:String(t)}function st(r,t){if(k(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(k(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function I(){"use strict";I=function(){return r};var r={},t=Object.prototype,n=t.hasOwnProperty,e=Object.defineProperty||function(f,o,u){f[o]=u.value},i=typeof Symbol=="function"?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",d=i.toStringTag||"@@toStringTag";function s(f,o,u){return Object.defineProperty(f,o,{value:u,enumerable:!0,configurable:!0,writable:!0}),f[o]}try{s({},"")}catch(f){s=function(u,l,h){return u[l]=h}}function p(f,o,u,l){var h=o&&o.prototype instanceof T?o:T,v=Object.create(h.prototype),y=new U(l||[]);return e(v,"_invoke",{value:gr(f,u,y)}),v}function S(f,o,u){try{return{type:"normal",arg:f.call(o,u)}}catch(l){return{type:"throw",arg:l}}}r.wrap=p;var g={};function T(){}function w(){}function D(){}var P={};s(P,a,function(){return this});var m=Object.getPrototypeOf,E=m&&m(m(X([])));E&&E!==t&&n.call(E,a)&&(P=E);var F=D.prototype=T.prototype=Object.create(P);function it(f){["next","throw","return"].forEach(function(o){s(f,o,function(u){return this._invoke(o,u)})})}function G(f,o){function u(h,v,y,A){var O=S(f[h],f,v);if(O.type!=="throw"){var L=O.arg,j=L.value;return j&&k(j)=="object"&&n.call(j,"__await")?o.resolve(j.__await).then(function(Y){u("next",Y,y,A)},function(Y){u("throw",Y,y,A)}):o.resolve(j).then(function(Y){L.value=Y,y(L)},function(Y){return u("throw",Y,y,A)})}A(O.arg)}var l;e(this,"_invoke",{value:function(v,y){function A(){return new o(function(O,L){u(v,y,O,L)})}return l=l?l.then(A,A):A()}})}function gr(f,o,u){var l="suspendedStart";return function(h,v){if(l==="executing")throw new Error("Generator is already running");if(l==="completed"){if(h==="throw")throw v;return ut()}for(u.method=h,u.arg=v;;){var y=u.delegate;if(y){var A=ot(y,u);if(A){if(A===g)continue;return A}}if(u.method==="next")u.sent=u._sent=u.arg;else if(u.method==="throw"){if(l==="suspendedStart")throw l="completed",u.arg;u.dispatchException(u.arg)}else u.method==="return"&&u.abrupt("return",u.arg);l="executing";var O=S(f,o,u);if(O.type==="normal"){if(l=u.done?"completed":"suspendedYield",O.arg===g)continue;return{value:O.arg,done:u.done}}O.type==="throw"&&(l="completed",u.method="throw",u.arg=O.arg)}}}function ot(f,o){var u=o.method,l=f.iterator[u];if(l===void 0)return o.delegate=null,u==="throw"&&f.iterator.return&&(o.method="return",o.arg=void 0,ot(f,o),o.method==="throw")||u!=="return"&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+u+"' method")),g;var h=S(l,f.iterator,o.arg);if(h.type==="throw")return o.method="throw",o.arg=h.arg,o.delegate=null,g;var v=h.arg;return v?v.done?(o[f.resultName]=v.value,o.next=f.nextLoc,o.method!=="return"&&(o.method="next",o.arg=void 0),o.delegate=null,g):v:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,g)}function br(f){var o={tryLoc:f[0]};1 in f&&(o.catchLoc=f[1]),2 in f&&(o.finallyLoc=f[2],o.afterLoc=f[3]),this.tryEntries.push(o)}function K(f){var o=f.completion||{};o.type="normal",delete o.arg,f.completion=o}function U(f){this.tryEntries=[{tryLoc:"root"}],f.forEach(br,this),this.reset(!0)}function X(f){if(f){var o=f[a];if(o)return o.call(f);if(typeof f.next=="function")return f;if(!isNaN(f.length)){var u=-1,l=function h(){for(;++u<f.length;)if(n.call(f,u))return h.value=f[u],h.done=!1,h;return h.value=void 0,h.done=!0,h};return l.next=l}}return{next:ut}}function ut(){return{value:void 0,done:!0}}return w.prototype=D,e(F,"constructor",{value:D,configurable:!0}),e(D,"constructor",{value:w,configurable:!0}),w.displayName=s(D,d,"GeneratorFunction"),r.isGeneratorFunction=function(f){var o=typeof f=="function"&&f.constructor;return!!o&&(o===w||(o.displayName||o.name)==="GeneratorFunction")},r.mark=function(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,D):(f.__proto__=D,s(f,d,"GeneratorFunction")),f.prototype=Object.create(F),f},r.awrap=function(f){return{__await:f}},it(G.prototype),s(G.prototype,c,function(){return this}),r.AsyncIterator=G,r.async=function(f,o,u,l,h){h===void 0&&(h=Promise);var v=new G(p(f,o,u,l),h);return r.isGeneratorFunction(o)?v:v.next().then(function(y){return y.done?y.value:v.next()})},it(F),s(F,d,"Generator"),s(F,a,function(){return this}),s(F,"toString",function(){return"[object Generator]"}),r.keys=function(f){var o=Object(f),u=[];for(var l in o)u.push(l);return u.reverse(),function h(){for(;u.length;){var v=u.pop();if(v in o)return h.value=v,h.done=!1,h}return h.done=!0,h}},r.values=X,U.prototype={constructor:U,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(K),!o)for(var u in this)u.charAt(0)==="t"&&n.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=void 0)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var u=this;function l(L,j){return y.type="throw",y.arg=o,u.next=L,j&&(u.method="next",u.arg=void 0),!!j}for(var h=this.tryEntries.length-1;h>=0;--h){var v=this.tryEntries[h],y=v.completion;if(v.tryLoc==="root")return l("end");if(v.tryLoc<=this.prev){var A=n.call(v,"catchLoc"),O=n.call(v,"finallyLoc");if(A&&O){if(this.prev<v.catchLoc)return l(v.catchLoc,!0);if(this.prev<v.finallyLoc)return l(v.finallyLoc)}else if(A){if(this.prev<v.catchLoc)return l(v.catchLoc,!0)}else{if(!O)throw new Error("try statement without catch or finally");if(this.prev<v.finallyLoc)return l(v.finallyLoc)}}}},abrupt:function(o,u){for(var l=this.tryEntries.length-1;l>=0;--l){var h=this.tryEntries[l];if(h.tryLoc<=this.prev&&n.call(h,"finallyLoc")&&this.prev<h.finallyLoc){var v=h;break}}v&&(o==="break"||o==="continue")&&v.tryLoc<=u&&u<=v.finallyLoc&&(v=null);var y=v?v.completion:{};return y.type=o,y.arg=u,v?(this.method="next",this.next=v.finallyLoc,g):this.complete(y)},complete:function(o,u){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&u&&(this.next=u),g},finish:function(o){for(var u=this.tryEntries.length-1;u>=0;--u){var l=this.tryEntries[u];if(l.finallyLoc===o)return this.complete(l.completion,l.afterLoc),K(l),g}},catch:function(o){for(var u=this.tryEntries.length-1;u>=0;--u){var l=this.tryEntries[u];if(l.tryLoc===o){var h=l.completion;if(h.type==="throw"){var v=h.arg;K(l)}return v}}throw new Error("illegal catch attempt")},delegateYield:function(o,u,l){return this.delegate={iterator:X(o),resultName:u,nextLoc:l},this.method==="next"&&(this.arg=void 0),g}},r}function z(r,t,n,e,i,a,c){try{var d=r[a](c),s=d.value}catch(p){n(p);return}d.done?t(s):Promise.resolve(s).then(e,i)}function lt(r){return function(){var t=this,n=arguments;return new Promise(function(e,i){var a=r.apply(t,n);function c(s){z(a,e,i,c,d,"next",s)}function d(s){z(a,e,i,c,d,"throw",s)}c(void 0)})}}var vt=function(t,n,e){var i;return function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var s=function(){i=null,e||t.call.apply(t,[this].concat(c))},p=e&&!i;clearTimeout(i),i=setTimeout(s,n),p&&t.call.apply(t,[this].concat(c))}},dt=function(t,n,e){var i,a=0;return function(){for(var c=arguments.length,d=new Array(c),s=0;s<c;s++)d[s]=arguments[s];var p=+new Date;e?p-a>n&&(t.call.apply(t,[this].concat(d)),a=p):i||(i=setTimeout(function(){i=null,t.call.apply(t,[i].concat(d))},n))}},ht=function(){var r=lt(I().mark(function t(n){return I().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,navigator.clipboard.writeText(n);case 3:return i.abrupt("return",i.sent);case 6:return i.prev=6,i.t0=i.catch(0),i.next=10,new Promise(function(a){var c=document.createElement("input");document.body.appendChild(c),c.setAttribute("value",n),c.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(c),a(void 0)});case 10:return i.abrupt("return",i.sent);case 11:case"end":return i.stop()}},t,null,[[0,6]])}));return function(n){return r.apply(this,arguments)}}(),pt=function(){function r(){at(this,r),ct(this,"events",{}),this.events={}}return ft(r,[{key:"on",value:function(n,e){this.events[n]||(this.events[n]=[]),this.events[n].push(e)}},{key:"emit",value:function(n){var e=this.events[n];if(e&&e.length>0){for(var i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];var d=[].concat(a);d.splice(1,0,n),e.forEach(function(s){return s.apply(null,d)})}}},{key:"off",value:function(n,e){var i=this.events[n];i&&i.length>0&&(this.events[n]=i.filter(function(a){return a!==e}))}}]),r}();function $(r){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(r)}var H=function(t){return function(n){return Q(n)==="[object ".concat(t,"]")}},Q=function(t){return Object.prototype.toString.call(t)},mt=function(t){return typeof t=="function"},b=Array.isArray,R=H("Object"),C=H("String"),yt=H("Boolean"),W=H("Number"),gt=H("Promise"),bt=function(t){return t&&t instanceof Map},wt=function(t){return t&&t instanceof Set},St=function(t){return t&&t instanceof WeakMap},At=function(t){return t&&t instanceof WeakSet},Tt=function(t){return W(t)||/^\d+$/.test(t)},Ot=function(t){return $(t)==="object"},Mt=H("RegExp"),Dt=function(t){return t&&t.$$typeof&&t._owner},Pt=function(t){return Object.prototype.toString.call(t).indexOf("HTML")>-1},Et=function(t){return R(t)&&Reflect.ownKeys(t).length},jt=function(t){return!!(b(t)&&t.length)},x=function(t){return R(t)&&Reflect.ownKeys(t).length},J=function(t){return!!(b(t)&&t.length)},Lt=function(t){return t==null};function V(r){return Ht(r)||kt(r)||Nt(r)||Yt()}function Yt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(r,t){if(r){if(typeof r=="string")return B(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(r,t)}}function kt(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Ht(r){if(Array.isArray(r))return B(r)}function B(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var Ct=function(t){return J(t)?V(new Set(t)):t},Ft=function(t,n){if(!J(t))return t;var e=new Map;return t.filter(function(i){return!e.has(i[n])&&e.set(i[n],1)})},Gt=function(t,n,e){return!b(t)||!b(n)?[]:t.filter(function(i){return n.find(function(a){return(i==null?void 0:i[e])==(a==null?void 0:a[e])})})||[]},It=function(t,n,e){return!b(t)||!b(n)?[]:t.filter(function(i){return!n.find(function(a){return(i==null?void 0:i[e])==(a==null?void 0:a[e])})})},$t=function(t,n,e){return!b(t)||!b(n)?[]:[].concat(V(t.filter(function(i){return!n.find(function(a){return(i==null?void 0:i[e])==(a==null?void 0:a[e])})})),V(n.filter(function(i){return!t.find(function(a){return(i==null?void 0:i[e])==(a==null?void 0:a[e])})})))},Rt=function(t,n,e){if(!b(t)||!b(n))return[];var i=new Map;return t.concat(n).filter(function(a){return!i.has(a==null?void 0:a[e])&&i.set(a==null?void 0:a[e],1)})},Wt=function(t,n,e){if(!b(t))return[];if(b(n))return t.filter(function(a){return n.includes(a[e])});var i=t.find(function(a){return a[e]===n});return i?[i]:[]},Jt=function(t,n,e){var i=e||{},a=i.value,c=a===void 0?"value":a,d=i.children,s=d===void 0?"children":d;if(!b(t))return[];var p=[],S=function g(T,w){for(var D=b(w),P=0;P<T.length;P++){var m=T[P];if(D)w.includes(m==null?void 0:m[c])&&p.push(m);else if((m==null?void 0:m[c])===w){p.push(m);break}b(m==null?void 0:m[s])&&g(m==null?void 0:m[s],w)}};return S(t,n),p},Vt=function(t,n,e){if(!b(t))return[];for(var i=[],a=0;a<t.length;a++){var c=t[a];i.push(c[n])}return C(e)&&e?i.join(e):i},Bt=function(t){return new Array(t).fill("")},Kt=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return t.sort(function(e,i){return e-i}).slice(-n)},Ut=N(28879),M=N.n(Ut);function Xt(r,t){return zt(r)||Zt(r,t)||qt(r,t)||_t()}function _t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(r,t){if(r){if(typeof r=="string")return tt(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tt(r,t)}}function tt(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function Zt(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var e,i,a,c,d=[],s=!0,p=!1;try{if(a=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(e=a.call(n)).done)&&(d.push(e.value),d.length!==t);s=!0);}catch(S){p=!0,i=S}finally{try{if(!s&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(p)throw i}}return d}}function zt(r){if(Array.isArray(r))return r}for(var Qt=function(t,n){var e=t?new Date(t):null,i=t?new Date(n):null;return e&&i?Math.ceil(Math.abs(e.getTime()-i.getTime())/864e5):0},xt=function(t){var n=t.date,e=t.names,i=e===void 0?["startDate","endDate"]:e,a=t.showTime,c=a===void 0?!1:a,d=t.stamp,s=d===void 0?!1:d,p={};if(b(n)&&n.length){var S=Xt(n,2),g=S[0],T=S[1],w=c?" HH:mm":"";p[i[0]]=s?M()(g).valueOf():M()(g).format("YYYY-MM-DD".concat(w||""))+(w?":00":""),p[i[1]]=s?M()(T).valueOf():M()(T).format("YYYY-MM-DD".concat(w||""))+(w?":59":"")}return p},tr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"start";function n(a,c){for(var d=[],s=a;s<c;s+=1)d.push(s);return d}var e=function(c){var d=M()().hour(),s=M()().minute(),p=M()().second(),S=[],g=[],T=[],w=M()(c).format("YYYY-MM-DD HH:MM").valueOf(),D=M()().format("YYYY-MM-DD HH:MM").valueOf(),P=M()(c).format("YYYY-MM-DD").valueOf(),m=M()().format("YYYY-MM-DD").valueOf();return t==="start"?(c&&P===m&&(S=n(0,24).splice(0,d)),c&&w<=D&&(g=n(0,60).splice(0,s+1),T=n(0,60).splice(0,p+1)),{disabledHours:function(){return S},disabledMinutes:function(){return g},disabledSeconds:function(){return T}}):(c&&P===m&&(S=n(0,24).splice(d+1)),c&&w>=D&&(g=n(0,60).splice(s+1),T=n(0,60).splice(p+1)),{disabledHours:function(){return S},disabledMinutes:function(){return g},disabledSeconds:function(){return T}})},i=function(c){var d=M()(c).format("YYYY-MM-DD").valueOf(),s=M()().format("YYYY-MM-DD").valueOf(),p=t==="start"?d<s:d>s;return c&&p};return{disabledDate:i,disabledTime:e}},rr=function(t,n){if(!t||!n)return{};var e=Math.abs(new Date(t).getTime()-new Date(n).getTime()),i=Math.floor(e/31536e6),a=Math.floor(e%31536e6/2592e6),c=Math.floor(e%2592e6/864e5),d=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4),p=Math.floor(e%6e4/1e3);return{year:i.toString().padStart(2,"0"),month:a.toString().padStart(2,"0"),day:c.toString().padStart(2,"0"),hour:d.toString().padStart(2,"0"),minute:s.toString().padStart(2,"0"),second:p.toString().padStart(2,"0")}},nr=function(){return!document.hidden},er=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)?"Mobile":"PC"},ir=N(1246),or=N.n(ir),ur=function(t){return C(t)?JSON.parse('{"'.concat(decodeURI(t.split("?")[1]).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"'),'"}')):t},ar=function(t){return C(t)?t.split("").reverse().join(""):t},fr=function(t){return JSON.stringify(t)},cr=function(t){try{return JSON.parse(t)}catch(n){}},sr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"_";if(!t)return"";var e=t.replace(/([A-Z])/g,"".concat(n,"$1")).toLowerCase();return e&&e[0]===n?e.slice(1):e},lr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"&";if(!x(t))return"";for(var e=[],i=Object.keys(t),a=function(){var s=i[c],p=t[s];b(p)?p.forEach(function(S){e.push(s+"="+S)}):e.push(s+"="+p)},c=0;c<i.length;c++)a();return e.join(n)},rt=function(t,n){return"".padStart(n,t)},vr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(C(t)){var e=t.replace(/.+\./,"");return n?e.toLowerCase():e}return""},dr=function(t){return C(t)?t.replace(/\.\w+$/,""):""},hr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",i="0,0.".concat(rt("0",n));return W(t)?"".concat(or()(t).format(i)).concat(e?" "+e:""):""},pr=function(t,n,e){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=t-e*(n-1);return a>i?n:n-1},mr=function(){return"#".concat(Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0"))},nt=36,et="";nt--;)et+=nt.toString(36);var yr=function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:11,n="",e=t;e--;)n+=et[Math.random()*36|0];return n}}}]);
