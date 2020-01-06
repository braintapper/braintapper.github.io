import{n as e,s as t,S as s,i as r,e as n,a,t as o,c as l,b as c,d as i,f as p,g as u,h as f,j as h,k as g,l as m,m as d,o as v,p as $,q as E,r as _,u as S,v as b,w,x as y,y as P,z as A,A as R,B as L,C as x,D as C,E as j,F as O}from"./index.65293513.js";const H=[];function I(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!H.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),H.push(t,s)}if(e){for(let e=0;e<H.length;e+=2)H[e][0](H[e+1]);H.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,l=e){const c=[t,l];return a.push(c),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const q={},U=()=>({});function D(t){let s,r,d,v,$,E,_,S,b,w,y,P,A,R,L,x,C,j,O,H,I,q,U,D,N,k;return{c(){s=n("header"),r=n("section"),d=n("img"),$=a(),E=n("nav"),_=n("ul"),S=n("li"),b=n("a"),w=o("Home"),y=a(),P=n("li"),A=n("a"),R=o("Archive"),L=a(),x=n("li"),C=n("a"),j=o("Articles"),O=a(),H=n("li"),I=n("a"),q=o("About"),U=a(),D=n("li"),N=n("a"),k=o("RSS"),this.h()},l(e){s=l(e,"HEADER",{class:!0});var t=c(s);r=l(t,"SECTION",{class:!0});var n=c(r);d=l(n,"IMG",{src:!0,height:!0,alt:!0}),n.forEach(i),$=p(t),E=l(t,"NAV",{class:!0});var a=c(E);_=l(a,"UL",{class:!0});var o=c(_);S=l(o,"LI",{class:!0});var f=c(S);b=l(f,"A",{href:!0,class:!0});var h=c(b);w=u(h,"Home"),h.forEach(i),f.forEach(i),y=p(o),P=l(o,"LI",{class:!0});var g=c(P);A=l(g,"A",{href:!0,class:!0});var m=c(A);R=u(m,"Archive"),m.forEach(i),g.forEach(i),L=p(o),x=l(o,"LI",{class:!0});var v=c(x);C=l(v,"A",{href:!0,class:!0});var B=c(C);j=u(B,"Articles"),B.forEach(i),v.forEach(i),O=p(o),H=l(o,"LI",{class:!0});var T=c(H);I=l(T,"A",{href:!0,class:!0});var K=c(I);q=u(K,"About"),K.forEach(i),T.forEach(i),U=p(o),D=l(o,"LI",{class:!0});var z=c(D);N=l(z,"A",{href:!0,target:!0,class:!0});var G=c(N);k=u(G,"RSS"),G.forEach(i),z.forEach(i),o.forEach(i),a.forEach(i),t.forEach(i),this.h()},h(){d.src!==(v="images/Braintapper_Wordmark_color_2020.svg")&&f(d,"src","images/Braintapper_Wordmark_color_2020.svg"),f(d,"height","96px"),f(d,"alt","Braintapper Logo"),f(r,"class","svelte-1inl4wv"),f(b,"href","."),f(b,"class","svelte-1inl4wv"),f(S,"class","svelte-1inl4wv"),h(S,"selected",void 0===t[0]),f(A,"href","archive"),f(A,"class","svelte-1inl4wv"),f(P,"class","svelte-1inl4wv"),h(P,"selected","archive"===t[0]),f(C,"href","articles"),f(C,"class","svelte-1inl4wv"),f(x,"class","svelte-1inl4wv"),h(x,"selected","articles"===t[0]),f(I,"href","pages/about"),f(I,"class","svelte-1inl4wv"),f(H,"class","svelte-1inl4wv"),h(H,"selected","pages"===t[0]),f(N,"href","rss.xml"),f(N,"target","new"),f(N,"class","svelte-1inl4wv"),f(D,"class","svelte-1inl4wv"),f(_,"class","svelte-1inl4wv"),f(E,"class","svelte-1inl4wv"),f(s,"class","svelte-1inl4wv")},m(e,t){g(e,s,t),m(s,r),m(r,d),m(s,$),m(s,E),m(E,_),m(_,S),m(S,b),m(b,w),m(_,y),m(_,P),m(P,A),m(A,R),m(_,L),m(_,x),m(x,C),m(C,j),m(_,O),m(_,H),m(H,I),m(I,q),m(_,U),m(_,D),m(D,N),m(N,k)},p(e,[t]){1&t&&h(S,"selected",void 0===e[0]),1&t&&h(P,"selected","archive"===e[0]),1&t&&h(x,"selected","articles"===e[0]),1&t&&h(H,"selected","pages"===e[0])},i:e,o:e,d(e){e&&i(s)}}}function N(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment)}),[r]}class k extends s{constructor(e){super(),r(this,e,N,D,t,{segment:0})}}function B(t){let s,r,h,d,v,$,E,_,S,b,w,y,P,A,R,L,x;return{c(){s=n("footer"),r=n("p"),h=o("Hand crafted with "),d=n("a"),v=o("Svelte"),$=o(" and "),E=n("a"),_=o("Sapper"),S=o(". Hosted on "),b=n("a"),w=o("Github Pages"),y=o("."),P=a(),A=n("p"),R=o("Copyright © 2020 Braintapper Knowledge Solutions, Inc. "),L=n("a"),x=o("Privacy Policy"),this.h()},l(e){s=l(e,"FOOTER",{class:!0});var t=c(s);r=l(t,"P",{class:!0});var n=c(r);h=u(n,"Hand crafted with "),d=l(n,"A",{href:!0,target:!0});var a=c(d);v=u(a,"Svelte"),a.forEach(i),$=u(n," and "),E=l(n,"A",{href:!0,target:!0});var o=c(E);_=u(o,"Sapper"),o.forEach(i),S=u(n,". Hosted on "),b=l(n,"A",{href:!0,target:!0});var f=c(b);w=u(f,"Github Pages"),f.forEach(i),y=u(n,"."),n.forEach(i),P=p(t),A=l(t,"P",{class:!0});var g=c(A);R=u(g,"Copyright © 2020 Braintapper Knowledge Solutions, Inc. "),L=l(g,"A",{href:!0});var m=c(L);x=u(m,"Privacy Policy"),m.forEach(i),g.forEach(i),t.forEach(i),this.h()},h(){f(d,"href","https://svelte.dev/"),f(d,"target","new"),f(E,"href","https://sapper.svelte.dev/"),f(E,"target","new"),f(b,"href","https://pages.github.com/"),f(b,"target","new"),f(r,"class","svelte-z3516v"),f(L,"href","/pages/about#privacy"),f(A,"class","svelte-z3516v"),f(s,"class","svelte-z3516v")},m(e,t){g(e,s,t),m(s,r),m(r,h),m(r,d),m(d,v),m(r,$),m(r,E),m(E,_),m(r,S),m(r,b),m(b,w),m(r,y),m(s,P),m(s,A),m(A,R),m(A,L),m(L,x)},p:e,i:e,o:e,d(e){e&&i(s)}}}class T extends s{constructor(e){super(),r(this,e,null,B,t,{})}}const K=e=>({segment:1&e}),z=e=>({segment:e[0]});function G(e){let t,s,r,o;const u=new k({props:{segment:e[0]}}),h=e[2].default,m=d(h,e,e[1],z),P=new T({props:{segment:e[0]}});return{c(){v(u.$$.fragment),t=a(),s=n("section"),m&&m.c(),r=a(),v(P.$$.fragment),this.h()},l(e){$(u.$$.fragment,e),t=p(e),s=l(e,"SECTION",{class:!0});var n=c(s);m&&m.l(n),n.forEach(i),r=p(e),$(P.$$.fragment,e),this.h()},h(){f(s,"class","svelte-bqvdr0")},m(e,n){E(u,e,n),g(e,t,n),g(e,s,n),m&&m.m(s,null),g(e,r,n),E(P,e,n),o=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),u.$set(s),m&&m.p&&3&t&&m.p(_(h,e,e[1],z),S(h,e[1],t,K));const r={};1&t&&(r.segment=e[0]),P.$set(r)},i(e){o||(b(u.$$.fragment,e),b(m,e),b(P.$$.fragment,e),o=!0)},o(e){w(u.$$.fragment,e),w(m,e),w(P.$$.fragment,e),o=!1},d(e){y(u,e),e&&i(t),e&&i(s),m&&m.d(e),e&&i(r),y(P,e)}}}function J(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(1,a=e.$$scope)}),[r,a,n]}class V extends s{constructor(e){super(),r(this,e,J,G,t,{segment:0})}}function W(e){let t,s,r=e[1].stack+"";return{c(){t=n("pre"),s=o(r)},l(e){t=l(e,"PRE",{});var n=c(t);s=u(n,r),n.forEach(i)},m(e,r){g(e,t,r),m(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&P(s,r)},d(e){e&&i(t)}}}function F(t){let s,r,h,d,v,$,E,_,S,b=t[1].message+"";document.title=s=t[0];let w=t[2]&&t[1].stack&&W(t);return{c(){r=a(),h=n("h1"),d=o(t[0]),v=a(),$=n("p"),E=o(b),_=a(),w&&w.c(),S=A(),this.h()},l(e){r=p(e),h=l(e,"H1",{class:!0});var s=c(h);d=u(s,t[0]),s.forEach(i),v=p(e),$=l(e,"P",{class:!0});var n=c($);E=u(n,b),n.forEach(i),_=p(e),w&&w.l(e),S=A(),this.h()},h(){f(h,"class","svelte-8od9u6"),f($,"class","svelte-8od9u6")},m(e,t){g(e,r,t),g(e,h,t),m(h,d),g(e,v,t),g(e,$,t),m($,E),g(e,_,t),w&&w.m(e,t),g(e,S,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&P(d,e[0]),2&t&&b!==(b=e[1].message+"")&&P(E,b),e[2]&&e[1].stack?w?w.p(e,t):((w=W(e)).c(),w.m(S.parentNode,S)):w&&(w.d(1),w=null)},i:e,o:e,d(e){e&&i(r),e&&i(h),e&&i(v),e&&i($),e&&i(_),w&&w.d(e),e&&i(S)}}}function M(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=(e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)}),[r,n,!1]}class X extends s{constructor(e){super(),r(this,e,M,F,t,{status:0,error:1})}}function Y(e){let t,s;const r=[e[4].props];var n=e[4].component;function a(e){let t={};for(let e=0;e<r.length;e+=1)t=R(t,r[e]);return{props:t}}if(n)var o=new n(a());return{c(){o&&v(o.$$.fragment),t=A()},l(e){o&&$(o.$$.fragment,e),t=A()},m(e,r){o&&E(o,e,r),g(e,t,r),s=!0},p(e,s){const l=16&s?L(r,[x(e[4].props)]):{};if(n!==(n=e[4].component)){if(o){j();const e=o;w(e.$$.fragment,1,0,()=>{y(e,1)}),O()}n?(o=new n(a()),v(o.$$.fragment),b(o.$$.fragment,1),E(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&b(o.$$.fragment,e),s=!0)},o(e){o&&w(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&y(o,e)}}}function Q(e){let t;const s=new X({props:{error:e[0],status:e[1]}});return{c(){v(s.$$.fragment)},l(e){$(s.$$.fragment,e)},m(e,r){E(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(b(s.$$.fragment,e),t=!0)},o(e){w(s.$$.fragment,e),t=!1},d(e){y(s,e)}}}function Z(e){let t,s,r,n;const a=[Q,Y],o=[];function l(e,t){return e[0]?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=A()},l(e){s.l(e),r=A()},m(e,s){o[t].m(e,s),g(e,r,s),n=!0},p(e,n){let c=t;(t=l(e))===c?o[t].p(e,n):(j(),w(o[c],1,1,()=>{o[c]=null}),O(),(s=o[t])||(s=o[t]=a[t](e)).c(),b(s,1),s.m(r.parentNode,r))},i(e){n||(b(s),n=!0)},o(e){w(s),n=!1},d(e){o[t].d(e),e&&i(r)}}}function ee(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[Z]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=R(r,s[e]);const n=new V({props:r});return{c(){v(n.$$.fragment)},l(e){$(n.$$.fragment,e)},m(e,s){E(n,e,s),t=!0},p(e,[t]){const r=12&t?L(s,[4&t&&{segment:e[2][0]},8&t&&x(e[3].props)]):{};83&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(b(n.$$.fragment,e),t=!0)},o(e){w(n.$$.fragment,e),t=!1},d(e){y(n,e)}}}function te(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:l}=t,{level1:c=null}=t;return C(q,r),e.$set=(e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,o=e.segments),"level0"in e&&s(3,l=e.level0),"level1"in e&&s(4,c=e.level1)}),[n,a,o,l,c,r]}class se extends s{constructor(e){super(),r(this,e,te,ee,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const re=[],ne=[{js:()=>import("./index.bd8a580b.js"),css:["index.bd8a580b.css","Post.256dd476.css"]},{js:()=>import("./index.d1ab66bf.js"),css:["index.d1ab66bf.css"]},{js:()=>import("./[slug].f3dabe14.js"),css:["[slug].f3dabe14.css"]},{js:()=>import("./index.02ed0eb2.js"),css:["index.02ed0eb2.css","PostLink.44d47227.css"]},{js:()=>import("./[slug].5ffbac06.js"),css:["[slug].5ffbac06.css","PostLink.44d47227.css"]},{js:()=>import("./index.a1385f0f.js"),css:[]},{js:()=>import("./[slug].1e017ba6.js"),css:["[slug].1e017ba6.css"]},{js:()=>import("./index.bb119bc0.js"),css:[]},{js:()=>import("./[slug].bb10aaeb.js"),css:["Post.256dd476.css"]}],ae=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/articles\/?$/,parts:[{i:1}]},{pattern:/^\/articles\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:e(t[1])})}]},{pattern:/^\/archive\/?$/,parts:[{i:3}]},{pattern:/^\/archive\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:e(t[1])})}]},{pattern:/^\/pages\/?$/,parts:[{i:5}]},{pattern:/^\/pages\/([^\/]+?)\/?$/,parts:[null,{i:6,params:t=>({slug:e(t[1])})}]},{pattern:/^\/blog\/?$/,parts:[{i:7}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:8,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const oe="undefined"!=typeof __SAPPER__&&__SAPPER__;let le,ce,ie,pe=!1,ue=[],fe="{}";const he={page:I({}),preloading:I(null),session:I(oe&&oe.session)};let ge,me;he.session.subscribe(async e=>{if(ge=e,!pe)return;me=!0;const t=we(new URL(location.href)),s=ce={},{redirect:r,props:n,branch:a}=await Re(t);s===ce&&await Ae(r,a,n,t.page)});let de,ve=null;let $e,Ee=1;const _e="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},Se={};function be(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function we(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(oe.baseUrl))return null;let t=e.pathname.slice(oe.baseUrl.length);if(""===t&&(t="/"),!re.some(e=>e.test(t)))for(let s=0;s<ae.length;s+=1){const r=ae[s],n=r.pattern.exec(t);if(n){const s=be(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function ye(){return{x:pageXOffset,y:pageYOffset}}async function Pe(e,t,s,r){if(t)$e=t;else{const e=ye();Se[$e]=e,t=$e=++Ee,Se[$e]=s?e:{x:0,y:0}}$e=t,le&&he.preloading.set(!0);const n=ve&&ve.href===e.href?ve.promise:Re(e);ve=null;const a=ce={},{redirect:o,props:l,branch:c}=await n;if(a===ce&&(await Ae(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=Se[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}Se[$e]=e,e&&scrollTo(e.x,e.y)}}async function Ae(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=we(new URL(e,document.baseURI));return s?(_e[t.replaceState?"replaceState":"pushState"]({id:$e},"",e),Pe(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(he.page.set(r),he.preloading.set(!1),le)le.$set(s);else{s.stores={page:{subscribe:he.page.subscribe},preloading:{subscribe:he.preloading.subscribe},session:he.session},s.level0={props:await ie};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)xe(e.nextSibling);xe(e),xe(t)}le=new se({target:de,props:s,hydrate:!0})}ue=t,fe=JSON.stringify(r.query),pe=!0,me=!1}async function Re(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;ie||(ie=oe.preloaded[0]||U.call(o,{host:s.host,path:s.path,query:s.query,params:{}},ge));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let p=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const u=r[l];if(function(e,t,s,r){if(r!==fe)return!0;const n=ue[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,u,i,n)&&(p=!0),a.segments[c]=r[l+1],!t)return{segment:u};const f=c++;if(!me&&!p&&ue[l]&&ue[l].part===t.i)return ue[l];p=!1;const{default:h,preload:g}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Le);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(ne[t.i]);let m;return m=pe||!oe.preloaded[l+1]?g?await g.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ge):{}:oe.preloaded[l+1],a[`level${f}`]={component:h,props:m,segment:u,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function Le(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function xe(e){e.parentNode.removeChild(e)}function Ce(e){const t=we(new URL(e,document.baseURI));if(t)return ve&&e===ve.href||function(e,t){ve={href:e,promise:t}}(e,Re(t)),ve.promise}let je;function Oe(e){clearTimeout(je),je=setTimeout(()=>{He(e)},20)}function He(e){const t=qe(e.target);t&&"prefetch"===t.rel&&Ce(t.href)}function Ie(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=qe(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=we(n);if(a){Pe(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),_e.pushState({id:$e},"",n.href)}}function qe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ue(e){if(Se[$e]=ye(),e.state){const t=we(new URL(location.href));t?Pe(t,e.state.id):location.href=location.href}else(function(e){$e=e})(Ee=Ee+1),_e.replaceState({id:$e},"",location.href)}!function(e){var t;"scrollRestoration"in _e&&(_e.scrollRestoration="manual"),t=e.target,de=t,addEventListener("click",Ie),addEventListener("popstate",Ue),addEventListener("touchstart",He),addEventListener("mousemove",Oe),Promise.resolve().then(()=>{const{hash:e,href:t}=location;_e.replaceState({id:Ee},"",t);const s=new URL(location.href);if(oe.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:l}=oe;ie||(ie=a&&a[0]),Ae(null,[],{error:l,status:o,session:n,level0:{props:ie},level1:{props:{status:o,error:l},component:X},segments:a},{host:t,path:s,query:be(r),params:{}})}();const r=we(s);return r?Pe(r,Ee,!0,e):void 0})}({target:document.querySelector("#sapper")});