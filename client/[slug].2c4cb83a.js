import{S as e,i as t,s,e as a,a as n,c as r,b as i,d as o,f as c,H as p,k as g,l as m,n as l,o as u,p as f,q as h,v as d,w as $,x}from"./index.119fa721.js";import{S as E}from"./index.b073f4db.js";function v(e){let t,s,u,f,h,d=e[0].title+"",$=e[0].html+"";return{c(){t=a("article"),s=a("header"),u=a("h1"),f=n(),this.h()},l(e){t=r(e,"ARTICLE",{});var a=i(t);s=r(a,"HEADER",{});var n=i(s);u=r(n,"H1",{}),i(u).forEach(o),n.forEach(o),f=c(a),a.forEach(o),this.h()},h(){h=new p($,null)},m(e,a){g(e,t,a),m(t,s),m(s,u),u.innerHTML=d,m(t,f),h.m(t)},p(e,[t]){1&t&&d!==(d=e[0].title+"")&&(u.innerHTML=d),1&t&&$!==($=e[0].html+"")&&h.p($)},i:l,o:l,d(e){e&&o(t)}}}function w(e,t,s){E.extend();let{page:a}=t;return e.$set=(e=>{"page"in e&&s(0,a=e.page)}),[a]}class H extends e{constructor(e){super(),t(this,e,w,v,s,{page:0})}}function T(e){let t,s,a;document.title=t=e[0].title.removeTag();const r=new H({props:{page:e[0]}});return{c(){s=n(),u(r.$$.fragment)},l(e){s=c(e),f(r.$$.fragment,e)},m(e,t){g(e,s,t),h(r,e,t),a=!0},p(e,[s]){(!a||1&s)&&t!==(t=e[0].title.removeTag())&&(document.title=t);const n={};1&s&&(n.page=e[0]),r.$set(n)},i(e){a||(d(r.$$.fragment,e),a=!0)},o(e){$(r.$$.fragment,e),a=!1},d(e){e&&o(s),x(r,e)}}}async function j({params:e,query:t}){const s=await this.fetch(`pages/${e.slug}.json`),a=await s.json();if(200===s.status)return{page:a};this.error(s.status,a.message)}function b(e,t,s){let{segment:a}=t,{page:n}=t;return e.$set=(e=>{"segment"in e&&s(1,a=e.segment),"page"in e&&s(0,n=e.page)}),[n,a]}export default class extends e{constructor(e){super(),t(this,e,b,T,s,{segment:1,page:0})}}export{j as preload};