(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7484:function(t){var e,n,i,r,s,a,o,c,u,d,l,h,f,$,_,p,g,m,v,y,D;t.exports=(e="millisecond",n="second",i="minute",r="hour",s="week",a="month",o="quarter",c="year",u="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},(_={})[$="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},p=function(t){return t instanceof y},g=function t(e,n,i){var r;if(!e)return $;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(r=s),n&&(_[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;_[o]=e,r=o}return!i&&r&&($=r),r||!i&&$},m=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},(v={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:c,w:s,d:"day",D:u,h:r,m:i,s:n,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=g,v.i=p,v.w=function(t,e){return m(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},D=(y=function(){function t(t){this.$L=g(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return this.$d.toString()!==d},f.isSame=function(t,e){var n=m(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return m(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<m(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var o=this,d=!!v.u(e)||e,l=v.p(t),h=function(t,e){var n=v.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return d?n:n.endOf("day")},f=function(t,e){return v.w(o.toDate()[t].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},$=this.$W,_=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case c:return d?h(1,0):h(31,11);case a:return d?h(1,_):h(0,_+1);case s:var m=this.$locale().weekStart||0,y=($<m?$+7:$)-m;return h(d?p-y:p+(6-y),_);case"day":case u:return f(g+"Hours",0);case r:return f(g+"Minutes",1);case i:return f(g+"Seconds",2);case n:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,s){var o,d=v.p(t),l="set"+(this.$u?"UTC":""),h=((o={}).day=l+"Date",o[u]=l+"Date",o[a]=l+"Month",o[c]=l+"FullYear",o[r]=l+"Hours",o[i]=l+"Minutes",o[n]=l+"Seconds",o[e]=l+"Milliseconds",o)[d],f="day"===d?this.$D+(s-this.$W):s;if(d===a||d===c){var $=this.clone().set(u,1);$.$d[h](f),$.init(),this.$d=$.set(u,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,e){var o,u=this;t=Number(t);var d=v.p(e),l=function(e){var n=m(u);return v.w(n.date(n.date()+Math.round(e*t)),u)};if(d===a)return this.set(a,this.$M+t);if(d===c)return this.set(c,this.$y+t);if("day"===d)return l(1);if(d===s)return l(7);var h=((o={})[i]=6e4,o[r]=36e5,o[n]=1e3,o)[d]||1,f=this.$d.getTime()+t*h;return v.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},f=function(t){return v.s(s%12||12,t,"0")},$=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:v.s(s,2,"0"),h:f(1),hh:f(2),a:$(s,a,!0),A:$(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return i.replace(h,function(t,e){return e||_[t]||r.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,u){var d,l=v.p(e),h=m(t),f=(h.utcOffset()-this.utcOffset())*6e4,$=this-h,_=v.m(this,h);return _=((d={})[c]=_/12,d[a]=_,d[o]=_/3,d[s]=($-f)/6048e5,d.day=($-f)/864e5,d[r]=$/36e5,d[i]=$/6e4,d[n]=$/1e3,d)[l]||$,u?_:v.a(_)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return _[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,m.prototype=D,[["$ms",e],["$s",n],["$m",i],["$H",r],["$W","day"],["$M",a],["$y",c],["$D",u]].forEach(function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),m.extend=function(t,e){return t.$i||(t(e,y,m),t.$i=!0),m},m.locale=g,m.isDayjs=p,m.unix=function(t){return m(1e3*t)},m.en=_[$],m.Ls=_,m.p={},m)},7801:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(3190)}])},1136:function(t,e,n){"use strict";n.d(e,{X:function(){return y}});var i=n(5893),r=n(5976),s=n(9885),a=n.n(s),o=n(2421),c=n(4009);let u=t=>{let{title:e,description:n,publishDate:r}=t;return(0,i.jsx)("div",{className:a().container,children:(0,i.jsxs)(c.M9,{children:[(0,i.jsx)("h1",{className:a().title,children:e}),n?(0,i.jsx)("h2",{className:a().description,children:n}):null,(0,i.jsx)("div",{className:a()["publish-date"],children:(0,o.W)(r)})]})})};var d=n(3034),l=n(6476),h=n(9766),f=n.n(h),$=n(1664),_=n.n($);let p=t=>{let{postList:e,category:n}=t;return(0,i.jsxs)("div",{className:f().container,children:[n?(0,i.jsxs)("div",{className:f()["category-link"],children:["More from",(0,i.jsx)(_(),{href:"/blog/archive?category=".concat(n),children:n})]}):(0,i.jsx)(_(),{href:"/blog/archive",className:f()["archive-link"],children:"Archive"}),(0,i.jsx)("div",{className:f()["card-list"],children:e.map(t=>(0,i.jsx)(g,{post:t},"additional-post-card-".concat(t.id)))})]})},g=t=>{let{post:e}=t;return(0,i.jsxs)(_(),{className:f().card,href:"/blog/".concat(e.pathname),children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:f()["card-title"],children:e.title}),e.description?(0,i.jsx)("div",{className:f()["card-description"],children:e.description}):null]}),(0,i.jsx)("div",{className:f()["card-publish-date"],children:(0,o.W)(e.publishDate)})]})};var m=n(9409),v=n.n(m);let y=t=>{let{postMetadata:e,postContent:n,last5posts:s,categoryPosts:a=[]}=t,o=n.filter(l.Kd);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Ey,{children:(0,i.jsx)(u,{title:e.title,description:e.description,publishDate:e.publishDate})}),(0,i.jsxs)(c.M9,{children:[n.map((t,e)=>(0,i.jsx)(r.dz,{block:t},e)),(0,i.jsxs)("div",{className:v()["additional-list-container"],children:[a.length?(0,i.jsx)(p,{postList:a,category:e.category}):null,(0,i.jsx)(p,{postList:s})]})]}),(0,i.jsx)(c.QN,{children:o.length?(0,i.jsx)(d.P,{list:o}):null})]})}},3190:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d}});var i=n(5893),r=n(5388),s=n(1136),a=n(4596),o=n(7294),c=n(3847);let u=t=>{let{postMetadata:e,postContent:n,last5posts:u,categoryPosts:d=[],categories:l}=t,h=(0,o.useContext)(c.SiteContext);return(0,o.useEffect)(()=>{h&&(h.activeSection="blog",h.blogCategories.length||(h.blogCategories=l))},[l,h]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.x,{title:"Blog | Asuka Wang",description:a.S.BLOG.description}),(0,i.jsx)(s.X,{postContent:n,postMetadata:e,last5posts:u,categoryPosts:d})]})};var d=!0;e.default=u},2421:function(t,e,n){"use strict";n.d(e,{W:function(){return i}}),n(7484);let i=t=>new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},9766:function(t){t.exports={container:"AdditionalPostList_container__ucjfo","category-link":"AdditionalPostList_category-link__EDTWa","archive-link":"AdditionalPostList_archive-link__7Q6ys","card-list":"AdditionalPostList_card-list__jz3F_",card:"AdditionalPostList_card__doJcw","card-title":"AdditionalPostList_card-title__FDhSX","card-description":"AdditionalPostList_card-description__Enc8v","card-publish-date":"AdditionalPostList_card-publish-date__Jvdgm"}},9409:function(t){t.exports={"additional-list-container":"PostDetailPage_additional-list-container__b_oHL"}},9885:function(t){t.exports={container:"PostDetailPageHeader_container__fcMw9",title:"PostDetailPageHeader_title__YwZEK",description:"PostDetailPageHeader_description__HSXhn","publish-date":"PostDetailPageHeader_publish-date__pMF22"}}},function(t){t.O(0,[542,550,774,888,179],function(){return t(t.s=7801)}),_N_E=t.O()}]);