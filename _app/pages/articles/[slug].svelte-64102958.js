import{S as t,i as s,s as e,e as a,k as r,t as o,c as n,a as c,d as i,n as h,g as p,b as l,f as u,E as f,h as m,F as d,K as $,j as g,L as v,m as E,o as w,v as x,r as y,w as H}from"../../chunks/vendor-a7a4fa15.js";function b(t){let s,e,g,v,E,w,x,y,H,b,j,L=t[0].title+"",k=Date.create(t[0].timestamp).format("{medium}")+"",A=t[0].html+"";return{c(){s=a("article"),e=a("header"),g=a("h1"),v=a("a"),w=r(),x=a("h2"),y=o(k),H=o(" by Steven Ng"),b=r(),this.h()},l(t){s=n(t,"ARTICLE",{type:!0});var a=c(s);e=n(a,"HEADER",{});var r=c(e);g=n(r,"H1",{});var o=c(g);v=n(o,"A",{rel:!0,href:!0}),c(v).forEach(i),o.forEach(i),w=h(r),x=n(r,"H2",{});var l=c(x);y=p(l,k),H=p(l," by Steven Ng"),l.forEach(i),r.forEach(i),b=h(a),a.forEach(i),this.h()},h(){l(v,"rel","prefetch"),l(v,"href",E="/articles/"+t[0].slug),j=new $(null),l(s,"type","content")},m(t,a){u(t,s,a),f(s,e),f(e,g),f(g,v),v.innerHTML=L,f(e,w),f(e,x),f(x,y),f(x,H),f(s,b),j.m(A,s)},p(t,[s]){1&s&&L!==(L=t[0].title+"")&&(v.innerHTML=L),1&s&&E!==(E="/articles/"+t[0].slug)&&l(v,"href",E),1&s&&k!==(k=Date.create(t[0].timestamp).format("{medium}")+"")&&m(y,k),1&s&&A!==(A=t[0].html+"")&&j.p(A)},i:d,o:d,d(t){t&&i(s)}}}function j(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}class L extends t{constructor(t){super(),s(this,t,j,b,e,{post:0})}}function k(t){let s,e,a;return e=new L({props:{post:t[0]}}),{c(){s=r(),g(e.$$.fragment),this.h()},l(t){v('[data-svelte="svelte-1bvp6lo"]',document.head).forEach(i),s=h(t),E(e.$$.fragment,t),this.h()},h(){document.title=""},m(t,r){u(t,s,r),w(e,t,r),a=!0},p(t,[s]){const a={};1&s&&(a.post=t[0]),e.$set(a)},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){t&&i(s),H(e,t)}}}const A=!0;async function D({page:t,fetch:s,session:e,context:a}){const r=`/data/articles/${t.params.slug}.json`,o=await s(r);return o.ok?{props:{post:await o.json()}}:{status:o.status,error:new Error(`Could not load ${r}`)}}function S(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,S,k,e,{post:0})}}export{D as load,A as prerender};
