import{S as t,i as e,s,e as a,a as n,c as r,b as i,d as o,f as c,H as p,h as g,k as l,l as u,n as m,o as f,p as h,q as d,v as $,w as x,x as E}from"./index.c72284ad.js";import{S as w}from"./index.b073f4db.js";function H(t){let e,s,f,h,d,$=t[0].title+"",x=t[0].html+"";return{c(){e=a("article"),s=a("header"),f=a("h1"),h=n(),this.h()},l(t){e=r(t,"ARTICLE",{type:!0});var a=i(e);s=r(a,"HEADER",{});var n=i(s);f=r(n,"H1",{}),i(f).forEach(o),n.forEach(o),h=c(a),a.forEach(o),this.h()},h(){d=new p(x,null),g(e,"type","content")},m(t,a){l(t,e,a),u(e,s),u(s,f),f.innerHTML=$,u(e,h),d.m(e)},p(t,[e]){1&e&&$!==($=t[0].title+"")&&(f.innerHTML=$),1&e&&x!==(x=t[0].html+"")&&d.p(x)},i:m,o:m,d(t){t&&o(e)}}}function j(t,e,s){w.extend();let{page:a}=e;return t.$set=(t=>{"page"in t&&s(0,a=t.page)}),[a]}class y extends t{constructor(t){super(),e(this,t,j,H,s,{page:0})}}function b(t){let e,s,a;document.title=e=t[0].title;const r=new y({props:{page:t[0]}});return{c(){s=n(),f(r.$$.fragment)},l(t){s=c(t),h(r.$$.fragment,t)},m(t,e){l(t,s,e),d(r,t,e),a=!0},p(t,[s]){(!a||1&s)&&e!==(e=t[0].title)&&(document.title=e);const n={};1&s&&(n.page=t[0]),r.$set(n)},i(t){a||($(r.$$.fragment,t),a=!0)},o(t){x(r.$$.fragment,t),a=!1},d(t){t&&o(s),E(r,t)}}}async function v({params:t,query:e}){const s=await this.fetch(`pages/${t.slug}.json`),a=await s.json();if(200===s.status)return{page:a};this.error(s.status,a.message)}function L(t,e,s){let{segment:a}=e,{page:n}=e;return t.$set=(t=>{"segment"in t&&s(1,a=t.segment),"page"in t&&s(0,n=t.page)}),[n,a]}export default class extends t{constructor(t){super(),e(this,t,L,b,s,{segment:1,page:0})}}export{v as preload};
