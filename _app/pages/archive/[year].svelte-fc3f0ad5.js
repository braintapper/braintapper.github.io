import{S as s,i as t,s as e,e as a,k as r,t as o,c as l,a as n,d as c,n as f,g as h,b as i,f as m,E as p,h as u,F as g,j as v,m as d,o as $,v as j,r as y,w as E,l as x,u as k,J as w,B as H}from"../../chunks/vendor-a7a4fa15.js";/* empty css                                                          */function L(s){let t,e,v,d,$,j,y,E,x=s[0].title+"",k=Date.create(s[0].timestamp).format("{medium}")+"";return{c(){t=a("ul"),e=a("li"),v=a("h1"),d=a("a"),j=r(),y=a("h2"),E=o(k),this.h()},l(s){t=l(s,"UL",{class:!0});var a=n(t);e=l(a,"LI",{class:!0});var r=n(e);v=l(r,"H1",{class:!0});var o=n(v);d=l(o,"A",{rel:!0,href:!0,class:!0}),n(d).forEach(c),o.forEach(c),j=f(r),y=l(r,"H2",{class:!0});var i=n(y);E=h(i,k),i.forEach(c),r.forEach(c),a.forEach(c),this.h()},h(){i(d,"rel","prefetch"),i(d,"href",$="/blog/"+s[0].slug),i(d,"class","svelte-1jp2mrm"),i(v,"class","svelte-1jp2mrm"),i(y,"class","svelte-1jp2mrm"),i(e,"class","svelte-1jp2mrm"),i(t,"class","svelte-1jp2mrm")},m(s,a){m(s,t,a),p(t,e),p(e,v),p(v,d),d.innerHTML=x,p(e,j),p(e,y),p(y,E)},p(s,[t]){1&t&&x!==(x=s[0].title+"")&&(d.innerHTML=x),1&t&&$!==($="/blog/"+s[0].slug)&&i(d,"href",$),1&t&&k!==(k=Date.create(s[0].timestamp).format("{medium}")+"")&&u(E,k)},i:g,o:g,d(s){s&&c(t)}}}function b(s,t,e){let{post:a}=t;return s.$$set=s=>{"post"in s&&e(0,a=s.post)},[a]}class A extends s{constructor(s){super(),t(this,s,b,L,e,{post:0})}}function P(s,t,e){const a=s.slice();return a[2]=t[e],a}function B(s){let t,e;return t=new A({props:{post:s[2]}}),{c(){v(t.$$.fragment)},l(s){d(t.$$.fragment,s)},m(s,a){$(t,s,a),e=!0},p(s,e){const a={};1&e&&(a.post=s[2]),t.$set(a)},i(s){e||(j(t.$$.fragment,s),e=!0)},o(s){y(t.$$.fragment,s),e=!1},d(s){E(t,s)}}}function D(s){let t,e,g,v,d,$,E=s[0],L=[];for(let a=0;a<E.length;a+=1)L[a]=B(P(s,E,a));const b=s=>y(L[s],1,1,(()=>{L[s]=null}));return{c(){t=a("h1"),e=o("All Posts from "),g=o(s[1]),v=r();for(let s=0;s<L.length;s+=1)L[s].c();d=x(),this.h()},l(a){t=l(a,"H1",{class:!0});var r=n(t);e=h(r,"All Posts from "),g=h(r,s[1]),r.forEach(c),v=f(a);for(let s=0;s<L.length;s+=1)L[s].l(a);d=x(),this.h()},h(){i(t,"class","svelte-1smhomx")},m(s,a){m(s,t,a),p(t,e),p(t,g),m(s,v,a);for(let t=0;t<L.length;t+=1)L[t].m(s,a);m(s,d,a),$=!0},p(s,[t]){if((!$||2&t)&&u(g,s[1]),1&t){let e;for(E=s[0],e=0;e<E.length;e+=1){const a=P(s,E,e);L[e]?(L[e].p(a,t),j(L[e],1)):(L[e]=B(a),L[e].c(),j(L[e],1),L[e].m(d.parentNode,d))}for(H(),e=E.length;e<L.length;e+=1)b(e);k()}},i(s){if(!$){for(let s=0;s<E.length;s+=1)j(L[s]);$=!0}},o(s){L=L.filter(Boolean);for(let t=0;t<L.length;t+=1)y(L[t]);$=!1},d(s){s&&c(t),s&&c(v),w(L,s),s&&c(d)}}}const M=!0;async function T({page:s,fetch:t,session:e,context:a}){const r=`/data/archive/${s.params.year}.json`,o=await t(r);return o.ok?{props:{year:s.params.year,posts:await o.json()}}:{status:o.status,error:new Error(`Could not load ${r}`)}}function C(s,t,e){var{posts:a=[]}=t,{year:r}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts),"year"in s&&e(1,r=s.year)},[a,r]}export default class extends s{constructor(s){super(),t(this,s,C,D,e,{posts:0,year:1})}}export{T as load,M as prerender};
