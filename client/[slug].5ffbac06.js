import{S as s,i as t,s as e,o as a,p as n,q as r,v as o,w as l,x as f,e as c,t as i,a as p,z as h,c as m,b as u,g,d as $,f as d,h as x,k as j,l as v,y as A,F as k,G as q,E as w}from"./index.65293513.js";import{S as y}from"./index.7ce14988.js";import{P as E}from"./PostLink.44d47227.js";function P(s,t,e){const a=s.slice();return a[2]=t[e],a}function S(s){let t;const e=new E({props:{post:s[2]}});return{c(){a(e.$$.fragment)},l(s){n(e.$$.fragment,s)},m(s,a){r(e,s,a),t=!0},p(s,t){const a={};1&t&&(a.post=s[2]),e.$set(a)},i(s){t||(o(e.$$.fragment,s),t=!0)},o(s){l(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function b(s){let t,e,a,n,r,f,y=s[1].slug+"",E=s[0],b=[];for(let t=0;t<E.length;t+=1)b[t]=S(P(s,E,t));const z=s=>l(b[s],1,1,()=>{b[s]=null});return{c(){t=c("h1"),e=i("All Articles from "),a=i(y),n=p();for(let s=0;s<b.length;s+=1)b[s].c();r=h(),this.h()},l(s){t=m(s,"H1",{class:!0});var o=u(t);e=g(o,"All Articles from "),a=g(o,y),o.forEach($),n=d(s);for(let t=0;t<b.length;t+=1)b[t].l(s);r=h(),this.h()},h(){x(t,"class","svelte-pkun43")},m(s,o){j(s,t,o),v(t,e),v(t,a),j(s,n,o);for(let t=0;t<b.length;t+=1)b[t].m(s,o);j(s,r,o),f=!0},p(s,[t]){if((!f||2&t)&&y!==(y=s[1].slug+"")&&A(a,y),1&t){let e;for(E=s[0],e=0;e<E.length;e+=1){const a=P(s,E,e);b[e]?(b[e].p(a,t),o(b[e],1)):(b[e]=S(a),b[e].c(),o(b[e],1),b[e].m(r.parentNode,r))}for(w(),e=E.length;e<b.length;e+=1)z(e);k()}},i(s){if(!f){for(let s=0;s<E.length;s+=1)o(b[s]);f=!0}},o(s){b=b.filter(Boolean);for(let s=0;s<b.length;s+=1)l(b[s]);f=!1},d(s){s&&$(t),s&&$(n),q(b,s),s&&$(r)}}}function z({params:s,query:t}){return this.fetch(`archive/${s.slug}.json`).then(s=>s.json()).then(t=>({posts:t,params:s}))}function B(s,t,e){y.extend();let{posts:a}=t,{params:n}=t;return s.$set=(s=>{"posts"in s&&e(0,a=s.posts),"params"in s&&e(1,n=s.params)}),[a,n]}export default class extends s{constructor(s){super(),t(this,s,B,b,e,{posts:0,params:1})}}export{z as preload};