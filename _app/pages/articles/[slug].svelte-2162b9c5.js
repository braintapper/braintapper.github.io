import{S as t,i as e,s,e as a,k as r,t as o,c as n,a as c,d as i,n as l,g as p,b as u,f as m,E as f,h,F as d,G as $,L as g,j as v,M as E,m as x,o as w,v as b,r as j,w as y}from"../../chunks/vendor-354b340b.js";function H(t){let e,s,$,v,E,x,w,b,j,y,H,T=t[0].title+"",k=Date.create(t[0].timestamp).format("{medium}")+"",L=t[0].html+"";return{c(){e=a("article"),s=a("header"),$=a("h1"),v=a("a"),x=r(),w=a("h2"),b=o(k),j=o(" by Steven Ng"),y=r(),this.h()},l(t){e=n(t,"ARTICLE",{type:!0});var a=c(e);s=n(a,"HEADER",{});var r=c(s);$=n(r,"H1",{});var o=c($);v=n(o,"A",{rel:!0,href:!0}),c(v).forEach(i),o.forEach(i),x=l(r),w=n(r,"H2",{});var u=c(w);b=p(u,k),j=p(u," by Steven Ng"),u.forEach(i),r.forEach(i),y=l(a),a.forEach(i),this.h()},h(){u(v,"rel","prefetch"),u(v,"href",E="articles/"+t[0].slug),H=new g(null),u(e,"type","content")},m(t,a){m(t,e,a),f(e,s),f(s,$),f($,v),v.innerHTML=T,f(s,x),f(s,w),f(w,b),f(w,j),f(e,y),H.m(L,e)},p(t,[e]){1&e&&T!==(T=t[0].title+"")&&(v.innerHTML=T),1&e&&E!==(E="articles/"+t[0].slug)&&u(v,"href",E),1&e&&k!==(k=Date.create(t[0].timestamp).format("{medium}")+"")&&h(b,k),1&e&&L!==(L=t[0].html+"")&&H.p(L)},i:d,o:d,d(t){t&&i(e)}}}function T(t,e,s){$.extend();let{post:a}=e;return t.$$set=t=>{"post"in t&&s(0,a=t.post)},[a]}class k extends t{constructor(t){super(),e(this,t,T,H,s,{post:0})}}function L(t){let e,s,a,o;return document.title=e=t[0].title.removeTags(),a=new k({props:{post:t[0]}}),{c(){s=r(),v(a.$$.fragment)},l(t){E('[data-svelte="svelte-urfj6k"]',document.head).forEach(i),s=l(t),x(a.$$.fragment,t)},m(t,e){m(t,s,e),w(a,t,e),o=!0},p(t,[s]){(!o||1&s)&&e!==(e=t[0].title.removeTags())&&(document.title=e);const r={};1&s&&(r.post=t[0]),a.$set(r)},i(t){o||(b(a.$$.fragment,t),o=!0)},o(t){j(a.$$.fragment,t),o=!1},d(t){t&&i(s),y(a,t)}}}const A=!0;async function D({page:t,fetch:e,session:s,context:a}){const r=`/data/articles/${t.params.slug}.json`,o=await e(r);return o.ok?{props:{post:await o.json()}}:{status:o.status,error:new Error(`Could not load ${r}`)}}function M(t,e,s){$.extend();let{post:a}=e;return t.$$set=t=>{"post"in t&&s(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),e(this,t,M,L,s,{post:0})}}export{D as load,A as prerender};
