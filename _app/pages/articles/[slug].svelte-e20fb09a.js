import{S as t,i as e,s,e as a,k as r,t as o,c as n,a as c,d as i,n as l,g as p,b as u,f as m,E as f,h,F as d,K as $,j as g,L as v,m as E,o as w,v as j,r as x,w as y}from"../../chunks/vendor-66573013.js";function H(t){let e,s,g,v,E,w,j,x,y,H,T,k=t[0].title+"",L=Date.create(t[0].timestamp).format("{medium}")+"",b=t[0].html+"";return{c(){e=a("article"),s=a("header"),g=a("h1"),v=a("a"),w=r(),j=a("h2"),x=o(L),y=o(" by Steven Ng"),H=r(),this.h()},l(t){e=n(t,"ARTICLE",{type:!0});var a=c(e);s=n(a,"HEADER",{});var r=c(s);g=n(r,"H1",{});var o=c(g);v=n(o,"A",{rel:!0,href:!0}),c(v).forEach(i),o.forEach(i),w=l(r),j=n(r,"H2",{});var u=c(j);x=p(u,L),y=p(u," by Steven Ng"),u.forEach(i),r.forEach(i),H=l(a),a.forEach(i),this.h()},h(){u(v,"rel","prefetch"),u(v,"href",E="/articles/"+t[0].slug),T=new $(null),u(e,"type","content")},m(t,a){m(t,e,a),f(e,s),f(s,g),f(g,v),v.innerHTML=k,f(s,w),f(s,j),f(j,x),f(j,y),f(e,H),T.m(b,e)},p(t,[e]){1&e&&k!==(k=t[0].title+"")&&(v.innerHTML=k),1&e&&E!==(E="/articles/"+t[0].slug)&&u(v,"href",E),1&e&&L!==(L=Date.create(t[0].timestamp).format("{medium}")+"")&&h(x,L),1&e&&b!==(b=t[0].html+"")&&T.p(b)},i:d,o:d,d(t){t&&i(e)}}}function T(t,e,s){let{post:a}=e;return t.$$set=t=>{"post"in t&&s(0,a=t.post)},[a]}class k extends t{constructor(t){super(),e(this,t,T,H,s,{post:0})}}function L(t){let e,s,a,o;return document.title=e=t[0].title.removeTags(),a=new k({props:{post:t[0]}}),{c(){s=r(),g(a.$$.fragment)},l(t){v('[data-svelte="svelte-urfj6k"]',document.head).forEach(i),s=l(t),E(a.$$.fragment,t)},m(t,e){m(t,s,e),w(a,t,e),o=!0},p(t,[s]){(!o||1&s)&&e!==(e=t[0].title.removeTags())&&(document.title=e);const r={};1&s&&(r.post=t[0]),a.$set(r)},i(t){o||(j(a.$$.fragment,t),o=!0)},o(t){x(a.$$.fragment,t),o=!1},d(t){t&&i(s),y(a,t)}}}const b=!0;async function A({page:t,fetch:e,session:s,context:a}){const r=`/data/articles/${t.params.slug}.json`,o=await e(r);return o.ok?{props:{post:await o.json()}}:{status:o.status,error:new Error(`Could not load ${r}`)}}function D(t,e,s){let{post:a}=e;return t.$$set=t=>{"post"in t&&s(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),e(this,t,D,L,s,{post:0})}}export{A as load,b as prerender};
