(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9309:function(e,t,n){Promise.resolve().then(n.t.bind(n,2528,23)),Promise.resolve().then(n.bind(n,8291)),Promise.resolve().then(n.bind(n,5463)),Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.t.bind(n,8313,23)),Promise.resolve().then(n.t.bind(n,5044,23))},2528:function(){},5044:function(e){e.exports={style:{fontFamily:"'__GeistMono_8a4d12', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"},className:"__className_8a4d12",variable:"__variable_8a4d12"}},8313:function(e){e.exports={style:{fontFamily:"'__GeistSans_ac79ff', '__GeistSans_Fallback_ac79ff'"},className:"__className_ac79ff",variable:"__variable_ac79ff"}},8291:function(e,t,n){"use strict";n.d(t,{Analytics:function(){return i}});var r=n(2265),o=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function a(){return"undefined"!=typeof window}function s(){return"production"}function c(){return"development"===((a()?window.vam:s())||"production")}function i(e){return(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!a())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=s();return}window.vam=e})(t.mode),o(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc||(c()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.4.1",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint&&(r.dataset.endpoint=t.endpoint),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=c()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},c()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}},5463:function(e,t,n){"use strict";n.d(t,{SpeedInsights:function(){return w}});var r=n(2265),o=n(5475),a=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function s(){return false}function c(e){return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"))}var i="https://va.vercel-scripts.com/v1/speed-insights",l="".concat(i,"/script.js"),d="".concat(i,"/script.debug.js");function u(e){(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]);let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===t.route)return null;a();let n=!!t.dsn,r=t.scriptSrc||(n?l:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let o=document.createElement("script");return o.src=r,o.defer=!0,o.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),o.dataset.sdkv="1.1.0",t.sampleRate&&(o.dataset.sampleRate=t.sampleRate.toString()),t.route&&(o.dataset.route=t.route),t.endpoint&&(o.dataset.endpoint=t.endpoint),t.dsn&&(o.dataset.dsn=t.dsn),o.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(o),{setRoute:e=>{o.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var f=()=>{let e=(0,o.useParams)(),t=(0,o.useSearchParams)()||new URLSearchParams,n=(0,o.usePathname)();return e?function(e,t){if(!e||!t)return e;let n=e;try{let e=Object.entries(t);for(let[t,r]of e)if(!Array.isArray(r)){let e=c(r);e.test(n)&&(n=n.replace(e,"/[".concat(t,"]")))}for(let[t,r]of e)if(Array.isArray(r)){let e=c(r.join("/"));e.test(n)&&(n=n.replace(e,"/[...".concat(t,"]")))}return n}catch(t){return e}}(n,Object.keys(e).length?e:Object.fromEntries(t.entries())):null};function p(e){let t=f();return r.createElement(u,{route:t,...e,framework:"next"})}function w(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(p,{...e}))}}},function(e){e.O(0,[199,972,971,117,744],function(){return e(e.s=9309)}),_N_E=e.O()}]);