var confetch;(()=>{var e,r,t,o={307:e=>{let r={400:"INCORRECT_REQUEST_FORMAT",401:"INVALID_SESSION",403:"FORBIDDEN",404:"RESOURCE_NOT_FOUND",408:"REQUEST_TIMED_OUT"};e.exports={buildResponseHandler:(e={})=>t=>{const o={...r,...e};if(t?.ok)return t.json();if(t&&t.status&&o[t.status])throw Error(o[t.status]);throw Error("REQUEST_TIMED_OUT")},configureStatusCodeBasedErrors:(e={})=>{r={...r,...e}}}},138:(e,r,t)=>{const{customFetch:o}=t(624),s=t(92),a={debug:!1,requestParams:{headers:{"Content-Type":"application/json"},timeoutDuration:3e3}};e.exports={confetch:e=>{const r=s.merge({},a.requestParams,e);return o(r)},configureConfetch:({baseUrl:e,headers:r,timeoutDuration:t,debug:o})=>{a.debug=!!o||a.debug,a.baseUrl=e||a.baseUrl,a.requestParams.timeoutDuration=t||a.requestParams.timeoutDuration,a.requestParams.headers=r||a.requestParams.headers},configure:({baseUrl:e,headers:r,timeoutDuration:t,debug:o})=>{a.debug=!!o||a.debug,a.baseUrl=e||a.baseUrl,a.requestParams.timeoutDuration=t||a.requestParams.timeoutDuration,a.requestParams.headers=r||a.requestParams.headers},getConfetchConfiguration:()=>({...a}),getCurrentGlobalConfiguration:()=>({...a}),utils:t(624),handlers:t(307)}},423:(e,r,t)=>{const o=t(271),s=t(574).cf;e.exports=(e={})=>{try{const{method:r,headers:t,body:a,mode:i,credentials:u,cache:n,redirect:c,referrer:l,integrity:d,...m}=e,{url:f,timeoutDuration:h,...g}=m;Object.keys(g).length>0&&console.log("Custom fetch: Ignoring unsupported options:",g);const p={method:r,headers:t,body:a,mode:i,credentials:u,cache:n,redirect:c,referrer:l,integrity:d},b={};return b.controller=new o,p.signal=b.controller.signal,b.request=new s(f,p),b.timeout=null,b.abort=()=>new Promise((e=>{b.timeout&&clearTimeout(b.timeout),b.controller.signal.aborted||b.controller.abort(),e(b.controller.signal.aborted)})),b.send=()=>(b.timeout=setTimeout((()=>{b.controller.abort()}),h),window.fetch(b.request)),b}catch(e){throw console.log("Error:",e),Error("Could not initialise the fetch: ",e.message)}}},256:e=>{e.exports=e=>{if(!config.baseUrl)throw Error("Incomplete configuration: Base url not specified or is not valid. config.urlBase:",config.urlBase);return`${config.baseUrl}${e||""}`}},624:(e,r,t)=>{e.exports={getUrlFromPath:t(256),customFetch:t(423)}},605:e=>{"use strict";e.exports=require("http")},211:e=>{"use strict";e.exports=require("https")},413:e=>{"use strict";e.exports=require("stream")},835:e=>{"use strict";e.exports=require("url")},761:e=>{"use strict";e.exports=require("zlib")},92:e=>{"use strict";e.exports=void 0}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,a.x=()=>{var e=a.O(void 0,[686],(()=>a(138)));return a.O(e)},e=[],a.O=(r,t,o,s)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,o,s]=e[c],u=!0,n=0;n<t.length;n++)(!1&s||i>=s)&&Object.keys(a.O).every((e=>a.O[e](t[n])))?t.splice(n--,1):(u=!1,s<i&&(i=s));u&&(e.splice(c--,1),r=o())}return r}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,o,s]},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+".node.js",a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={179:1},a.O.require=e=>t[e],a.f.require=(e,r)=>{t[e]||(e=>{var r=e.modules,o=e.ids,s=e.runtime;for(var i in r)a.o(r,i)&&(a.m[i]=r[i]);s&&s(a);for(var u=0;u<o.length;u++)t[o[u]]=1;a.O()})(require("./"+a.u(e)))},r=a.x,a.x=()=>(a.e(686),r());var i=a.x();confetch=i})();