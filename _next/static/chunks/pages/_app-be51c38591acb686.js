(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3278)}])},4009:function(e,t,n){"use strict";n.d(t,{Ey:function(){return M},Ar:function(){return j},M9:function(){return w},QN:function(){return C}});var o=n(5893),r=n(7294),i=n(6393),a=n.n(i),l=n(4596),c=n(1664),s=n.n(c),u=n(1163),d=n(3559),f=n.n(d);let p=e=>{let{onToggleMenu:t,mobileMenu:n,isMenuOpen:i}=e,{pathname:a}=(0,u.useRouter)(),c=(0,r.useCallback)(e=>"/"===a&&e.isHome||a.startsWith(e.url),[a]);return(0,o.jsxs)("div",{className:f().container,"data-is-menu-open":i,children:[(0,o.jsxs)("div",{className:f()["nav-container"],children:[(0,o.jsxs)("div",{className:f()["section-container"],children:[Object.values(l.S).map(e=>(0,o.jsx)(s(),{href:e.url,className:"".concat(f()["section-link"]," interactive-color ").concat(c(e)?"text-color":""),children:e.label},e.url)),(0,o.jsx)(s(),{href:"/blog/feed.xml",target:"_blank",className:"".concat(f()["section-link"]," interactive-color"),children:"rss"})]}),(0,o.jsx)("button",{className:f()["menu-button"],onClick:t,children:i?"close menu":"menu"}),(0,o.jsx)(s(),{href:"/",className:"".concat(f()["publication-folio"]," text-color"),children:"ASUKA WANG"})]}),(0,o.jsx)("div",{className:"".concat(f().divider," border-color-100")}),(0,o.jsx)("div",{className:f()["menu-wrapper"],children:i?n:null})]})};var h=n(5696),v=n.n(h);let m=()=>(0,o.jsx)("div",{className:"".concat(v().container," border-color"),children:(0,o.jsx)("a",{href:"https://asukawang.com",rel:"noopener noreferrer",target:"_blank",className:"".concat(v().link," interactive-color"),children:"asukawang.com 2018-"})});var _=n(2361),x=n.n(_),b=n(3278);let y=e=>{var t;let{onClose:n}=e,i=(0,r.useContext)(b.SiteContext);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:x().backdrop,onClick:()=>n()}),(0,o.jsxs)("div",{className:x().menu,children:[(0,o.jsx)(g,{active:(null==i?void 0:i.activeSection)==="blog",label:"blog",path:"/blog",rssLink:(0,o.jsx)(s(),{href:"/blog/feed.xml",target:"_blank",className:"".concat(x()["menu-section-title"]," interactive-color"),children:"rss"}),onTitleClick:n,children:(null==i?void 0:i.activeSection)==="blog"?(0,o.jsx)("ul",{className:x()["category-container"],children:null==i?void 0:null===(t=i.blogCategories)||void 0===t?void 0:t.sort((e,t)=>t.count-e.count).map(e=>(0,o.jsx)("li",{children:(0,o.jsxs)(s(),{href:"/blog/archive?category=".concat(e.name),onClick:n,className:"".concat(x()["category-link"]),children:[e.name,(0,o.jsx)("div",{}),(0,o.jsxs)("span",{children:[e.count," post",e.count>1?"s":""]})]})},"menu-blog-category-".concat(e)))}):null}),(0,o.jsx)(g,{active:(null==i?void 0:i.activeSection)==="about",label:"about",path:"/about",onTitleClick:n})]})]})},g=e=>{let{children:t,active:n,label:r,rssLink:i,path:a,onTitleClick:l}=e;return(0,o.jsxs)("div",{"data-active":n,children:[(0,o.jsxs)("div",{className:x()["menu-section-container"],children:[(0,o.jsx)(s(),{href:a,className:"".concat(x()["menu-section-title"]," interactive-color"),"data-active":n,onClick:l,children:r}),i]}),t]})},j=e=>{let{children:t}=e,[n,i]=(0,r.useState)(!1);return(0,o.jsxs)("div",{className:"text-color ".concat(a().container),"data-is-menu-open":n,children:[(0,o.jsx)(p,{onToggleMenu:()=>i(e=>!e),isMenuOpen:n,mobileMenu:(0,o.jsx)(y,{onClose:()=>i(!1)})}),t,(0,o.jsx)(m,{})]})},M=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:a()["full-content"],children:t})},w=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:a()["main-content"],children:t})},C=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:a()["right-panel"],children:t})}},4596:function(e,t,n){"use strict";n.d(t,{S:function(){return o}});let o={BLOG:{url:"/blog",label:"blog",description:"Essays, reviews and notes",isHome:!0},ABOUT:{url:"/about",label:"about",description:"Introduction about me and this site",isHome:!1}}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,i=o(n(7294)),a=n(1003),l=n(7795),c=n(4465),s=n(2692),u=n(8245),d=n(9246),f=n(227),p=n(3468);let h=new Set;function v(e,t,n,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+r;if(h.has(i))return;h.add(i)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:l.formatUrl(e)}let _=i.default.forwardRef(function(e,t){let n,o;let{href:l,as:h,children:_,prefetch:x,passHref:b,replace:y,shallow:g,scroll:j,locale:M,onClick:w,onMouseEnter:C,onTouchStart:k,legacyBehavior:S=!1}=e,N=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,S&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let E=!1!==x,O=i.default.useContext(s.RouterContext),L=i.default.useContext(u.AppRouterContext),P=null!=O?O:L,T=!O,{href:J,as:H}=i.default.useMemo(()=>{if(!O){let e=m(l);return{href:e,as:h?m(h):e}}let[t,n]=a.resolveHref(O,l,!0);return{href:t,as:h?a.resolveHref(O,h):n||t}},[O,l,h]),R=i.default.useRef(J),A=i.default.useRef(H);S&&(o=i.default.Children.only(n));let I=S?o&&"object"==typeof o&&o.ref:t,[K,F,U]=d.useIntersection({rootMargin:"200px"}),D=i.default.useCallback(e=>{(A.current!==H||R.current!==J)&&(U(),A.current=H,R.current=J),K(e),I&&("function"==typeof I?I(e):"object"==typeof I&&(I.current=e))},[H,I,J,U,K]);i.default.useEffect(()=>{P&&F&&E&&v(P,J,H,{locale:M})},[H,J,F,M,E,null==O?void 0:O.locale,P]);let Z={ref:D,onClick(e){S||"function"!=typeof w||w(e),S&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,o,r,l,c,s,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:l,locale:s,scroll:c}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!d})};u?i.default.startTransition(h):h()}(e,P,J,H,y,g,j,M,T,E)},onMouseEnter(e){S||"function"!=typeof C||C(e),S&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),P&&(E||!T)&&v(P,J,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof k||k(e),S&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),P&&(E||!T)&&v(P,J,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||b||"a"===o.type&&!("href"in o.props)){let z=void 0!==M?M:null==O?void 0:O.locale,B=(null==O?void 0:O.isLocaleDomain)&&f.getDomainLocale(H,z,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);Z.href=B||p.addBasePath(c.addLocale(H,z,null==O?void 0:O.defaultLocale))}return S?i.default.cloneElement(o,Z):i.default.createElement("a",Object.assign({},N,Z),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,s=c||!i,[u,d]=o.useState(!1),[f,p]=o.useState(null);o.useEffect(()=>{if(i){if(!s&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=l.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:r},l.push(n),a.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),a.delete(o);let t=l.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&l.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let o=r.requestIdleCallback(()=>d(!0));return()=>r.cancelIdleCallback(o)}},[f,s,n,t,u]);let h=o.useCallback(()=>{d(!1)},[]);return[p,u,h]};var o=n(7294),r=n(4686);let i="function"==typeof IntersectionObserver,a=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3278:function(e,t,n){"use strict";n.r(t),n.d(t,{SiteContext:function(){return p},default:function(){return h}});var o=n(5893);n(4744),n(5348),n(9608);var r,i,a=n(4009),l=n(7294),c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=(0,l.createContext)(void 0),u="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",d="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",f=function(e){var t=e.config,n=e.version,n=void 0===n?3:n,o=e.src,o=void 0===o?2===n?u:d:o,a=e.onStartup,f=e.onLoad,p=e.onError,h=e.typesettingOptions,v=e.renderMode,v=void 0===v?"post":v,m=e.hideUntilTypeset,e=e.children,_=(0,l.useContext)(s);if(void 0!==(null==_?void 0:_.version)&&(null==_?void 0:_.version)!==n)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(2===n&&void 0!==i||3===n&&void 0!==r)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var x=(0,l.useRef)(_),_=(0,l.useRef)((null==_?void 0:_.version)||null);if(null===_.current)_.current=n;else if(_.current!==n)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var b=o||(2===n?u:d);function y(e,n){t&&(window.MathJax=t);var o=document.createElement("script");o.type="text/javascript",o.src=b,o.async=!1,o.addEventListener("load",function(){var t=window.MathJax;a&&a(t),e(t),f&&f()}),o.addEventListener("error",function(e){return n(e)}),document.getElementsByTagName("head")[0].appendChild(o)}return void 0===x.current&&(_={typesettingOptions:h,renderMode:v,hideUntilTypeset:m},2===n?void 0===r&&("undefined"!=typeof window?(r=new Promise(y)).catch(function(e){if(!p)throw Error("Failed to download MathJax version 2 from '".concat(b,"' due to: ").concat(e));p(e)}):(r=Promise.reject()).catch(function(e){})):void 0===i&&("undefined"!=typeof window?(i=new Promise(y)).catch(function(e){if(!p)throw Error("Failed to download MathJax version 3 from '".concat(b,"' due to: ").concat(e));p(e)}):(i=Promise.reject()).catch(function(e){})),x.current=c(c({},_),2===n?{version:2,promise:r}:{version:3,promise:i})),l.createElement(s.Provider,{value:x.current},e)};let p=(0,l.createContext)(null);function h(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)("main",{children:(0,o.jsx)(p.Provider,{value:{activeSection:void 0,blogCategories:[]},children:(0,o.jsx)(a.Ar,{children:(0,o.jsx)(f,{children:(0,o.jsx)(t,{...n})})})})})}},5348:function(){},4744:function(){},6393:function(e){e.exports={container:"Layout_container__S4aNf","full-content":"Layout_full-content__MQIxS","main-content":"Layout_main-content__mr9_2","left-panel":"Layout_left-panel__zMSzy","right-panel":"Layout_right-panel__zSn4t","right-wide-content":"Layout_right-wide-content__bIWnI"}},2361:function(e){e.exports={menu:"MobileMenu_menu__5czkx",menuOpen:"MobileMenu_menuOpen__MMJsZ","menu-section-container":"MobileMenu_menu-section-container__VAGeP","menu-section-title":"MobileMenu_menu-section-title__S4yKl",backdrop:"MobileMenu_backdrop__ySbAo","category-container":"MobileMenu_category-container__GofTh","category-link":"MobileMenu_category-link__qWiHL"}},5696:function(e){e.exports={container:"SiteFooter_container__0v6cR",link:"SiteFooter_link__RuMSe"}},3559:function(e){e.exports={container:"SiteHeader_container__8tKwA","nav-container":"SiteHeader_nav-container__oEq2d","menu-button":"SiteHeader_menu-button__eK9ND","section-container":"SiteHeader_section-container__tAKnZ","section-link":"SiteHeader_section-link__9DmFE","publication-folio":"SiteHeader_publication-folio___ZFZS",divider:"SiteHeader_divider__cq_R_","menu-wrapper":"SiteHeader_menu-wrapper__2evr7"}},9608:function(){},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);