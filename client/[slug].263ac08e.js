import{S as s,i as t,s as e,o as a,p as n,q as o,v as r,w as l,x as f,e as p,t as c,a as i,z as h,c as m,b as u,g,d,f as $,h as x,k as j,l as b,y as v,F as P,G as k,E as q}from"./index.edc16999.js";import{S as w}from"./index.b073f4db.js";import{P as y}from"./PostLink.d2ab58c2.js";function A(s,t,e){const a=s.slice();return a[2]=t[e],a}function E(s){let t;const e=new y({props:{post:s[2]}});return{c(){a(e.$$.fragment)},l(s){n(e.$$.fragment,s)},m(s,a){o(e,s,a),t=!0},p(s,t){const a={};1&t&&(a.post=s[2]),e.$set(a)},i(s){t||(r(e.$$.fragment,s),t=!0)},o(s){l(e.$$.fragment,s),t=!1},d(s){f(e,s)}}}function S(s){let t,e,a,n,o,f,w=s[1].slug+"",y=s[0],S=[];for(let t=0;t<y.length;t+=1)S[t]=E(A(s,y,t));const z=s=>l(S[s],1,1,()=>{S[s]=null});return{c(){t=p("h1"),e=c("All Posts from "),a=c(w),n=i();for(let s=0;s<S.length;s+=1)S[s].c();o=h(),this.h()},l(s){t=m(s,"H1",{class:!0});var r=u(t);e=g(r,"All Posts from "),a=g(r,w),r.forEach(d),n=$(s);for(let t=0;t<S.length;t+=1)S[t].l(s);o=h(),this.h()},h(){x(t,"class","svelte-pkun43")},m(s,r){j(s,t,r),b(t,e),b(t,a),j(s,n,r);for(let t=0;t<S.length;t+=1)S[t].m(s,r);j(s,o,r),f=!0},p(s,[t]){if((!f||2&t)&&w!==(w=s[1].slug+"")&&v(a,w),1&t){let e;for(y=s[0],e=0;e<y.length;e+=1){const a=A(s,y,e);S[e]?(S[e].p(a,t),r(S[e],1)):(S[e]=E(a),S[e].c(),r(S[e],1),S[e].m(o.parentNode,o))}for(q(),e=y.length;e<S.length;e+=1)z(e);P()}},i(s){if(!f){for(let s=0;s<y.length;s+=1)r(S[s]);f=!0}},o(s){S=S.filter(Boolean);for(let s=0;s<S.length;s+=1)l(S[s]);f=!1},d(s){s&&d(t),s&&d(n),k(S,s),s&&d(o)}}}function z({params:s,query:t}){return this.fetch(`archive/${s.slug}.json`).then(s=>s.json()).then(t=>({posts:t,params:s}))}function B(s,t,e){w.extend();let{posts:a}=t,{params:n}=t;return s.$set=(s=>{"posts"in s&&e(0,a=s.posts),"params"in s&&e(1,n=s.params)}),[a,n]}export default class extends s{constructor(s){super(),t(this,s,B,S,e,{posts:0,params:1})}}export{z as preload};