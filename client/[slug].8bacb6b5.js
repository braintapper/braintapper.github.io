import{S as e,i as t,s,e as a,a as n,c as r,b as i,d as o,f as c,H as p,h as g,k as l,l as u,n as m,o as f,p as h,q as d,v as $,w as x,x as E}from"./index.edc16999.js";import{S as w}from"./index.b073f4db.js";function H(e){let t,s,f,h,d,$=e[0].title+"",x=e[0].html+"";return{c(){t=a("article"),s=a("header"),f=a("h1"),h=n(),this.h()},l(e){t=r(e,"ARTICLE",{type:!0});var a=i(t);s=r(a,"HEADER",{});var n=i(s);f=r(n,"H1",{}),i(f).forEach(o),n.forEach(o),h=c(a),a.forEach(o),this.h()},h(){d=new p(x,null),g(t,"type","content")},m(e,a){l(e,t,a),u(t,s),u(s,f),f.innerHTML=$,u(t,h),d.m(t)},p(e,[t]){1&t&&$!==($=e[0].title+"")&&(f.innerHTML=$),1&t&&x!==(x=e[0].html+"")&&d.p(x)},i:m,o:m,d(e){e&&o(t)}}}function j(e,t,s){w.extend();let{page:a}=t;return e.$set=(e=>{"page"in e&&s(0,a=e.page)}),[a]}class y extends e{constructor(e){super(),t(this,e,j,H,s,{page:0})}}function b(e){let t,s,a;document.title=t=e[0].title;const r=new y({props:{page:e[0]}});return{c(){s=n(),f(r.$$.fragment)},l(e){s=c(e),h(r.$$.fragment,e)},m(e,t){l(e,s,t),d(r,e,t),a=!0},p(e,[s]){(!a||1&s)&&t!==(t=e[0].title)&&(document.title=t);const n={};1&s&&(n.page=e[0]),r.$set(n)},i(e){a||($(r.$$.fragment,e),a=!0)},o(e){x(r.$$.fragment,e),a=!1},d(e){e&&o(s),E(r,e)}}}async function v({params:e,query:t}){const s=await this.fetch(`pages/${e.slug}.json`),a=await s.json();if(200===s.status)return{page:a};this.error(s.status,a.message)}function L(e,t,s){let{segment:a}=t,{page:n}=t;return e.$set=(e=>{"segment"in e&&s(1,a=e.segment),"page"in e&&s(0,n=e.page)}),[n,a]}export default class extends e{constructor(e){super(),t(this,e,L,b,s,{segment:1,page:0})}}export{v as preload};