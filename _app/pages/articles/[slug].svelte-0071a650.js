import{S as t,i as s,s as e,e as a,t as r,k as o,c as n,a as c,g as h,d as p,n as i,b as l,f as m,E as u,h as f,F as d,K as $,j as g,L as v,m as E,o as x,v as w,r as y,w as j}from"../../chunks/vendor-a7a4fa15.js";function b(t){let s,e,g,v,E,x,w,y,j,b,k,A,D=Date.create(t[0].timestamp).format("{medium}")+"",H=t[0].html+"";return{c(){s=a("article"),e=a("header"),g=a("h1"),v=a("a"),E=r("@html post.title"),w=o(),y=a("h2"),j=r(D),b=r(" by Steven Ng"),k=o(),this.h()},l(t){s=n(t,"ARTICLE",{type:!0});var a=c(s);e=n(a,"HEADER",{});var r=c(e);g=n(r,"H1",{});var o=c(g);v=n(o,"A",{rel:!0,href:!0});var l=c(v);E=h(l,"@html post.title"),l.forEach(p),o.forEach(p),w=i(r),y=n(r,"H2",{});var m=c(y);j=h(m,D),b=h(m," by Steven Ng"),m.forEach(p),r.forEach(p),k=i(a),a.forEach(p),this.h()},h(){l(v,"rel","prefetch"),l(v,"href",x="/articles/"+t[0].slug),A=new $(null),l(s,"type","content")},m(t,a){m(t,s,a),u(s,e),u(e,g),u(g,v),u(v,E),u(e,w),u(e,y),u(y,j),u(y,b),u(s,k),A.m(H,s)},p(t,[s]){1&s&&x!==(x="/articles/"+t[0].slug)&&l(v,"href",x),1&s&&D!==(D=Date.create(t[0].timestamp).format("{medium}")+"")&&f(j,D),1&s&&H!==(H=t[0].html+"")&&A.p(H)},i:d,o:d,d(t){t&&p(s)}}}function k(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}class A extends t{constructor(t){super(),s(this,t,k,b,e,{post:0})}}function D(t){let s,e,a;return e=new A({props:{post:t[0]}}),{c(){s=o(),g(e.$$.fragment),this.h()},l(t){v('[data-svelte="svelte-1xxux7e"]',document.head).forEach(p),s=i(t),E(e.$$.fragment,t),this.h()},h(){document.title="post.title.removeTags()"},m(t,r){m(t,s,r),x(e,t,r),a=!0},p(t,[s]){const a={};1&s&&(a.post=t[0]),e.$set(a)},i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){t&&p(s),j(e,t)}}}const H=!0;async function S({page:t,fetch:s,session:e,context:a}){const r=`/data/articles/${t.params.slug}.json`,o=await s(r);return o.ok?{props:{post:await o.json()}}:{status:o.status,error:new Error(`Could not load ${r}`)}}function C(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,C,D,e,{post:0})}}export{S as load,H as prerender};
