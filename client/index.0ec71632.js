import{S as t,i as s,s as e,o as n,p as o,q as a,v as r,w as l,x as f,e as c,t as h,a as i,z as p,c as g,b as m,g as u,d,f as $,h as x,k as j,l as P,F as b,G as v,E as B}from"./index.edc16999.js";import"./index.b073f4db.js";import{P as q}from"./Post.faaa54ae.js";function w(t,s,e){const n=t.slice();return n[1]=s[e],n}function E(t){let s;const e=new q({props:{post:t[1]}});return{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){a(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.post=t[1]),e.$set(n)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function R(t){let s,e,n,o,a,f=t[0],q=[];for(let s=0;s<f.length;s+=1)q[s]=E(w(t,f,s));const R=t=>l(q[t],1,1,()=>{q[t]=null});return{c(){s=c("h1"),e=h("Recent Blog Posts"),n=i();for(let t=0;t<q.length;t+=1)q[t].c();o=p(),this.h()},l(t){s=g(t,"H1",{class:!0});var a=m(s);e=u(a,"Recent Blog Posts"),a.forEach(d),n=$(t);for(let s=0;s<q.length;s+=1)q[s].l(t);o=p(),this.h()},h(){x(s,"class","svelte-55mard")},m(t,r){j(t,s,r),P(s,e),j(t,n,r);for(let s=0;s<q.length;s+=1)q[s].m(t,r);j(t,o,r),a=!0},p(t,[s]){if(1&s){let e;for(f=t[0],e=0;e<f.length;e+=1){const n=w(t,f,e);q[e]?(q[e].p(n,s),r(q[e],1)):(q[e]=E(n),q[e].c(),r(q[e],1),q[e].m(o.parentNode,o))}for(B(),e=f.length;e<q.length;e+=1)R(e);b()}},i(t){if(!a){for(let t=0;t<f.length;t+=1)r(q[t]);a=!0}},o(t){q=q.filter(Boolean);for(let t=0;t<q.length;t+=1)l(q[t]);a=!1},d(t){t&&d(s),t&&d(n),v(q,t),t&&d(o)}}}function k({params:t,query:s}){return this.fetch("recent.json").then(t=>t.json()).then(t=>({posts:t}))}function y(t,s,e){let{posts:n}=s;return t.$set=(t=>{"posts"in t&&e(0,n=t.posts)}),[n]}export default class extends t{constructor(t){super(),s(this,t,y,R,e,{posts:0})}}export{k as preload};
