(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{7484:function(t){var e,n,r,i,s,o,u,a,c,l,d,f,h,p,_,g,y,v,m,S,$;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",o="month",u="quarter",a="year",c="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(_={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},g=function(t){return t instanceof S},y=function t(e,n,r){var i;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var u=e.name;_[u]=e,i=u}return!r&&i&&(p=i),i||!r&&p},v=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},(m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,u=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:o,y:a,w:s,d:"day",D:c,h:i,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=y,m.i=g,m.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},$=(S=function(){function t(t){this.$L=y(t.locale,null,!0),this.parse(t)}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(m.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return m},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return v(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<v(t)},h.$g=function(t,e,n){return m.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,e){var u=this,l=!!m.u(e)||e,d=m.p(t),f=function(t,e){var n=m.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf("day")},h=function(t,e){return m.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},p=this.$W,_=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case a:return l?f(1,0):f(31,11);case o:return l?f(1,_):f(0,_+1);case s:var v=this.$locale().weekStart||0,S=(p<v?p+7:p)-v;return f(l?g-S:g+(6-S),_);case"day":case c:return h(y+"Hours",0);case i:return h(y+"Minutes",1);case r:return h(y+"Seconds",2);case n:return h(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,s){var u,l=m.p(t),d="set"+(this.$u?"UTC":""),f=((u={}).day=d+"Date",u[c]=d+"Date",u[o]=d+"Month",u[a]=d+"FullYear",u[i]=d+"Hours",u[r]=d+"Minutes",u[n]=d+"Seconds",u[e]=d+"Milliseconds",u)[l],h="day"===l?this.$D+(s-this.$W):s;if(l===o||l===a){var p=this.clone().set(c,1);p.$d[f](h),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[m.p(t)]()},h.add=function(t,e){var u,c=this;t=Number(t);var l=m.p(e),d=function(e){var n=v(c);return m.w(n.date(n.date()+Math.round(e*t)),c)};if(l===o)return this.set(o,this.$M+t);if(l===a)return this.set(a,this.$y+t);if("day"===l)return d(1);if(l===s)return d(7);var f=((u={})[r]=6e4,u[i]=36e5,u[n]=1e3,u)[l]||1,h=this.$d.getTime()+t*f;return m.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=m.z(this),s=this.$H,o=this.$m,u=this.$M,a=n.weekdays,c=n.months,d=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return m.s(s%12||12,t,"0")},p=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:m.s(u+1,2,"0"),MMM:d(n.monthsShort,u,c,3),MMMM:d(c,u),D:this.$D,DD:m.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,a,2),ddd:d(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:m.s(s,2,"0"),h:h(1),hh:h(2),a:p(s,o,!0),A:p(s,o,!1),m:String(o),mm:m.s(o,2,"0"),s:String(this.$s),ss:m.s(this.$s,2,"0"),SSS:m.s(this.$ms,3,"0"),Z:i};return r.replace(f,function(t,e){return e||_[t]||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,e,c){var l,d=m.p(e),f=v(t),h=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,_=m.m(this,f);return _=((l={})[a]=_/12,l[o]=_,l[u]=_/3,l[s]=(p-h)/6048e5,l.day=(p-h)/864e5,l[i]=p/36e5,l[r]=p/6e4,l[n]=p/1e3,l)[d]||p,c?_:m.a(_)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return _[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return m.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,v.prototype=$,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",o],["$y",a],["$D",c]].forEach(function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=y,v.isDayjs=g,v.unix=function(t){return v(1e3*t)},v.en=_[p],v.Ls=_,v.p={},v)},318:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/archive",function(){return n(1817)}])},5388:function(t,e,n){"use strict";n.d(e,{x:function(){return o}});var r=n(5893),i=n(9008),s=n.n(i);let o=t=>{let{title:e,description:n}=t;return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"twitter:title",content:e})]})}},2308:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.bailoutToClientRendering=function(){let t=i.staticGenerationAsyncStorage&&"getStore"in i.staticGenerationAsyncStorage?null==i.staticGenerationAsyncStorage?void 0:i.staticGenerationAsyncStorage.getStore():i.staticGenerationAsyncStorage;return null!=t&&!!t.forceStatic||((null==t?void 0:t.isStaticGeneration)&&r.suspense(),!1)};var r=n(4564),i=n(2437);("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},3897:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useSearchParams=function(){let t=r.useContext(s.SearchParamsContext),e=r.useMemo(()=>new f(t||new URLSearchParams),[t]);if(o.bailoutToClientRendering())return e;if(!t)throw Error("invariant expected search params to be mounted");return e},e.usePathname=function(){return r.useContext(s.PathnameContext)},Object.defineProperty(e,"ServerInsertedHTMLContext",{enumerable:!0,get:function(){return u.ServerInsertedHTMLContext}}),Object.defineProperty(e,"useServerInsertedHTML",{enumerable:!0,get:function(){return u.useServerInsertedHTML}}),e.useRouter=function(){let t=r.useContext(i.AppRouterContext);if(null===t)throw Error("invariant expected app router to be mounted");return t},e.useSelectedLayoutSegments=h,e.useSelectedLayoutSegment=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children",e=h(t);return 0===e.length?null:e[0]},Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return a.redirect}}),Object.defineProperty(e,"notFound",{enumerable:!0,get:function(){return c.notFound}});var r=n(7294),i=n(8245),s=n(8914),o=n(2308),u=n(671),a=n(761),c=n(8739);let l=Symbol("internal for urlsearchparams readonly");function d(){return Error("ReadonlyURLSearchParams cannot be modified")}class f{[Symbol.iterator](){return this[l][Symbol.iterator]()}append(){throw d()}delete(){throw d()}set(){throw d()}sort(){throw d()}constructor(t){this[l]=t,this.entries=t.entries.bind(t),this.forEach=t.forEach.bind(t),this.get=t.get.bind(t),this.getAll=t.getAll.bind(t),this.has=t.has.bind(t),this.keys=t.keys.bind(t),this.values=t.values.bind(t),this.toString=t.toString.bind(t)}}function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children",{tree:e}=r.useContext(i.LayoutRouterContext);return function t(e,n){let r,i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(i)r=e[1][n];else{var o;let u=e[1];r=null!=(o=u.children)?o:Object.values(u)[0]}if(!r)return s;let a=r[0],c=Array.isArray(a)?a[1]:a;return c?(s.push(c),t(r,n,!1,s)):s}(e,t)}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},8739:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notFound=function(){let t=Error(n);throw t.digest=n,t},e.NOT_FOUND_ERROR_CODE=void 0;let n="NEXT_NOT_FOUND";e.NOT_FOUND_ERROR_CODE=n,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},761:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.redirect=function(t){let e=Error(n);throw e.digest=n+";"+t,e},e.REDIRECT_ERROR_CODE=void 0;let n="NEXT_REDIRECT";e.REDIRECT_ERROR_CODE=n,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},4564:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){let{children:e}=t;return e},e.suspense=function(){let t=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw t.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,t},(0,n(2648).Z)(n(7294));var r=n(2983)},671:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useServerInsertedHTML=function(t){let e=r.useContext(i);e&&e(t)},e.ServerInsertedHTMLContext=void 0;var r=(0,n(1598).Z)(n(7294));let i=r.default.createContext(null);e.ServerInsertedHTMLContext=i},1817:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return S},default:function(){return $}});var r=n(5893),i=n(5388),s=n(7294),o=n(9375),u=n.n(o),a=n(4009),c=n(1497),l=n(1664),d=n.n(l),f=n(7458),h=n.n(f),p=n(2421);let _=t=>{let{postTile:e}=t;return(0,r.jsxs)(d(),{href:"/blog/".concat(e.pathname),"data-size":e.size,className:h().container,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:h().title,children:e.title}),(0,r.jsx)("div",{className:h().description,children:e.description})]}),(0,r.jsx)("div",{className:h()["publish-date"],children:(0,p.W)(e.publishDate)})]})},g=t=>{let{postList:e,category:n}=t,[i,o]=(0,s.useState)(!1);(0,s.useEffect)(()=>o(!0),[]);let l=(0,s.useMemo)(()=>i?(0,c.FE)(e,document.body.clientWidth<768?2:4):(0,c.FE)(e),[e,i]);return(0,r.jsxs)(a.M9,{children:[(0,r.jsx)("h1",{className:u().header,"data-archive":void 0===n,children:n||"ARCHIVE"}),(0,r.jsx)("div",{className:u()["main-content"],children:l.map((t,e)=>(0,r.jsx)("div",{className:u()["post-tile-row"],children:t.map(t=>(0,r.jsx)(_,{postTile:t},"post-tile-".concat(t.pathname)))},"post-tile-row-".concat(e)))})]})};var y=n(9332),v=n(3278);let m=t=>{var e;let{postList:n,categories:o}=t,u=(0,y.useSearchParams)(),a=null!==(e=u.get("category"))&&void 0!==e?e:void 0,c=a?n.filter(t=>t.category.toLowerCase()===(null==a?void 0:a.toLowerCase())):n,l=(0,s.useContext)(v.SiteContext);return(0,s.useEffect)(()=>{l&&(l.activeSection="blog",l.blogCategories.length||(l.blogCategories=o))},[o,l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.x,{title:"Blog | Asuka Wang",description:"Essays, reviews and notes."}),(0,r.jsx)(g,{postList:c,category:a})]})};var S=!0,$=m},1497:function(t,e,n){"use strict";n.d(e,{FE:function(){return r},Rh:function(){return s}});let r=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[],r=t=>t.reduce((t,e)=>t+e.size,0),s=t.map(i),o=[];return s.forEach(t=>{if(e-r(o)<t.size){let i=o.find(t=>1===t.size);i&&(i.size=2),r(o)===e&&(n.push([...o]),o=[])}e-r(o)>=t.size&&o.push(t),r(o)===e&&(n.push([...o]),o=[])}),0!==o.length&&n.push([...o]),n},i=t=>({size:t.title.length>30||(t.description||"").length>160?2:1,title:t.title,description:t.description||"",publishDate:t.publishDate,pathname:t.pathname}),s=t=>t.children.map(t=>t.text).join("-").replace(/[\s\.,\(\)]/g,"-").toLowerCase()},2421:function(t,e,n){"use strict";n.d(e,{W:function(){return r}}),n(7484);let r=t=>new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},9375:function(t){t.exports={header:"PostListPage_header__qOe_U","main-content":"PostListPage_main-content__utKK5","post-tile-row":"PostListPage_post-tile-row__Crccn"}},7458:function(t){t.exports={container:"PostListTile_container__TSKzm",title:"PostListTile_title__yD3Ci",description:"PostListTile_description__10W1q","publish-date":"PostListTile_publish-date__Wj4gW"}},9008:function(t,e,n){t.exports=n(3121)},9332:function(t,e,n){t.exports=n(3897)},2437:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.staticGenerationAsyncStorage=void 0;let n={};e.staticGenerationAsyncStorage=n,globalThis.AsyncLocalStorage&&(e.staticGenerationAsyncStorage=n=new globalThis.AsyncLocalStorage),("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=318)}),_N_E=t.O()}]);