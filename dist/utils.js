!function(){"use strict";var e,r=(function(e){function b(e,r){if(null==e)return{};var t,o=function(e,r){if(null==e)return{};for(var t,o={},n=Object.keys(e),i=0;i<n.length;i++)t=n[i],0<=r.indexOf(t)||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(e),i=0;i<n.length;i++)t=n[i],0<=r.indexOf(t)||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t]);return o}e.exports=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};try{var r=e.method,t=e.headers,o=e.body,n=e.mode,i=e.credentials,l=e.cache,c=e.redirect,u=e.referrer,s=e.integrity,a=b(e,["method","headers","body","mode","credentials","cache","redirect","referrer","integrity"]),d=a.url,m=a.timeoutDuration,f=b(a,["url","timeoutDuration"]);0<Object.keys(f).length&&console.log("Custom fetch: Ignoring unsupported options:",f);var h={method:r,headers:t,body:o,mode:n,credentials:i,cache:l,redirect:c,referrer:u,integrity:s},g={};return g.controller=new window.AbortController,h.signal=g.controller.signal,g.request=new window.Request(d,h),g.timeout=null,g.abort=function(){return new Promise(function(e){g.timeout&&clearTimeout(g.timeout),g.controller.signal.aborted||g.controller.abort(),e(g.controller.signal.aborted)})},g.send=function(){return g.timeout=setTimeout(function(){g.controller.abort()},m),window.fetch(g.request)},g}catch(e){throw console.log("Error:",e),Error("Could not initialise the fetch: ",e.message)}}}(e={exports:{}}),e.exports);module.exports={getUrlFromPath:require("./get-url-from-path"),customFetch:r}}();
//# sourceMappingURL=utils.js.map
