(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1773:function(e,t,n){Promise.resolve().then(n.t.bind(n,2528,23)),Promise.resolve().then(n.bind(n,8843)),Promise.resolve().then(n.bind(n,8291)),Promise.resolve().then(n.bind(n,5463)),Promise.resolve().then(n.t.bind(n,2972,23)),Promise.resolve().then(n.t.bind(n,8313,23)),Promise.resolve().then(n.t.bind(n,5044,23))},8843:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var r=n(7437),o=n(8003),a=n.n(o);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{src:"https://www.googletagmanager.com/gtag/js?id=G-5LYV6F637Q",strategy:"afterInteractive"}),(0,r.jsx)(a(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-5LYV6F637Q');\n        "})]})}},8221:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),s=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&s.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=s.length;t<n;t++)if(a(s[t],e))return s.splice(t,1),!1;return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(i-s.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8003:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return w},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return g}});let r=n(7043),o=n(3099),a=n(7437),i=r._(n(4887)),s=o._(n(2265)),l=n(8701),c=n(8221),u=n(3515),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:s="afterInteractive",onError:l,stylesheets:u}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,l);return}let y=()=>{o&&o(),f.add(h)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});for(let[n,r]of(a?(g.innerHTML=a.__html||"",y()):i?(g.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(g.src=t,d.set(t,v)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===s&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",s),u&&m(u),document.body.appendChild(g)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function g(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...m}=e,{updateScripts:y,scripts:g,getIsSsr:v,appDir:w,nonce:b}=(0,s.useContext)(l.HeadManagerContext),_=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;_.current||(o&&e&&f.has(e)&&o(),_.current=!0)},[o,t,n]);let S=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!S.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),S.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(g[c]=(g[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...m}]),y(g)):v&&v()?f.add(t||n):v&&!v()&&h(e)),w){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:b,crossOrigin:m.crossOrigin}:{as:"script",nonce:b,crossOrigin:m.crossOrigin}),(0,a.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:b,crossOrigin:m.crossOrigin}:{as:"script",nonce:b,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let w=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2528:function(){},5044:function(e){e.exports={style:{fontFamily:"'__GeistMono_8a4d12', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"},className:"__className_8a4d12",variable:"__variable_8a4d12"}},8313:function(e){e.exports={style:{fontFamily:"'__GeistSans_ac79ff', '__GeistSans_Fallback_ac79ff'"},className:"__className_ac79ff",variable:"__variable_ac79ff"}},8291:function(e,t,n){"use strict";n.d(t,{Analytics:function(){return l}});var r=n(2265),o=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function a(){return"undefined"!=typeof window}function i(){return"production"}function s(){return"development"===((a()?window.vam:i())||"production")}function l(e){return(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!a())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=i();return}window.vam=e})(t.mode),o(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc||(s()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.4.1",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint&&(r.dataset.endpoint=t.endpoint),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=s()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},s()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}},5463:function(e,t,n){"use strict";n.d(t,{SpeedInsights:function(){return m}});var r=n(2265),o=n(5475),a=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function i(){return false}function s(e){return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"))}var l="https://va.vercel-scripts.com/v1/speed-insights",c="".concat(l,"/script.js"),u="".concat(l,"/script.debug.js");function d(e){(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]);let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===t.route)return null;a();let n=!!t.dsn,r=t.scriptSrc||(n?c:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let o=document.createElement("script");return o.src=r,o.defer=!0,o.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),o.dataset.sdkv="1.1.0",t.sampleRate&&(o.dataset.sampleRate=t.sampleRate.toString()),t.route&&(o.dataset.route=t.route),t.endpoint&&(o.dataset.endpoint=t.endpoint),t.dsn&&(o.dataset.dsn=t.dsn),o.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(o),{setRoute:e=>{o.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var f=()=>{let e=(0,o.useParams)(),t=(0,o.useSearchParams)()||new URLSearchParams,n=(0,o.usePathname)();return e?function(e,t){if(!e||!t)return e;let n=e;try{let e=Object.entries(t);for(let[t,r]of e)if(!Array.isArray(r)){let e=s(r);e.test(n)&&(n=n.replace(e,"/[".concat(t,"]")))}for(let[t,r]of e)if(Array.isArray(r)){let e=s(r.join("/"));e.test(n)&&(n=n.replace(e,"/[...".concat(t,"]")))}return n}catch(t){return e}}(n,Object.keys(e).length?e:Object.fromEntries(t.entries())):null};function p(e){let t=f();return r.createElement(d,{route:t,...e,framework:"next"})}function m(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(p,{...e}))}}},function(e){e.O(0,[199,972,971,117,744],function(){return e(e.s=1773)}),_N_E=e.O()}]);