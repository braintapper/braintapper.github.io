import{S as s,i as t,s as e,e as a,t as r,a as l,c as o,b as n,g as c,d as i,f,h,k as p,l as u,y as m,n as g,o as v,p as d,q as $,v as x,w as E,x as A,z as j,F as b,G as H,E as q}from"./index.119fa721.js";import{S as w}from"./index.b073f4db.js";function y(s){let t,e,v,d,$,x,E,A,j,b=s[0].title+"",H=Date.create(s[0].timestamp).format("{medium}")+"";return{c(){t=a("ul"),e=a("li"),v=a("h1"),d=a("a"),$=r(b),E=l(),A=a("h2"),j=r(H),this.h()},l(s){t=o(s,"UL",{class:!0});var a=n(t);e=o(a,"LI",{class:!0});var r=n(e);v=o(r,"H1",{class:!0});var l=n(v);d=o(l,"A",{rel:!0,href:!0,class:!0});var h=n(d);$=c(h,b),h.forEach(i),l.forEach(i),E=f(r),A=o(r,"H2",{class:!0});var p=n(A);j=c(p,H),p.forEach(i),r.forEach(i),a.forEach(i),this.h()},h(){h(d,"rel","prefetch"),h(d,"href",x="articles/"+s[0].slug),h(d,"class","svelte-g6v93i"),h(v,"class","svelte-g6v93i"),h(A,"class","svelte-g6v93i"),h(e,"class","svelte-g6v93i"),h(t,"class","svelte-g6v93i")},m(s,a){p(s,t,a),u(t,e),u(e,v),u(v,d),u(d,$),u(e,E),u(e,A),u(A,j)},p(s,[t]){1&t&&b!==(b=s[0].title+"")&&m($,b),1&t&&x!==(x="articles/"+s[0].slug)&&h(d,"href",x),1&t&&H!==(H=Date.create(s[0].timestamp).format("{medium}")+"")&&m(j,H)},i:g,o:g,d(s){s&&i(t)}}}function D(s,t,e){w.extend();let{post:a}=t;return s.$set=(s=>{"post"in s&&e(0,a=s.post)}),[a]}class L extends s{constructor(s){super(),t(this,s,D,y,e,{post:0})}}function S(s,t,e){const a=s.slice();return a[1]=t[e],a}function k(s){let t;const e=new L({props:{post:s[1]}});return{c(){v(e.$$.fragment)},l(s){d(e.$$.fragment,s)},m(s,a){$(e,s,a),t=!0},p(s,t){const a={};1&t&&(a.post=s[1]),e.$set(a)},i(s){t||(x(e.$$.fragment,s),t=!0)},o(s){E(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function z(s){let t,e,m,g,v,d=s[0],$=[];for(let t=0;t<d.length;t+=1)$[t]=k(S(s,d,t));const A=s=>E($[s],1,1,()=>{$[s]=null});return{c(){t=a("h1"),e=r("All Articles"),m=l();for(let s=0;s<$.length;s+=1)$[s].c();g=j(),this.h()},l(s){t=o(s,"H1",{class:!0});var a=n(t);e=c(a,"All Articles"),a.forEach(i),m=f(s);for(let t=0;t<$.length;t+=1)$[t].l(s);g=j(),this.h()},h(){h(t,"class","svelte-55mard")},m(s,a){p(s,t,a),u(t,e),p(s,m,a);for(let t=0;t<$.length;t+=1)$[t].m(s,a);p(s,g,a),v=!0},p(s,[t]){if(1&t){let e;for(d=s[0],e=0;e<d.length;e+=1){const a=S(s,d,e);$[e]?($[e].p(a,t),x($[e],1)):($[e]=k(a),$[e].c(),x($[e],1),$[e].m(g.parentNode,g))}for(q(),e=d.length;e<$.length;e+=1)A(e);b()}},i(s){if(!v){for(let s=0;s<d.length;s+=1)x($[s]);v=!0}},o(s){$=$.filter(Boolean);for(let s=0;s<$.length;s+=1)E($[s]);v=!1},d(s){s&&i(t),s&&i(m),H($,s),s&&i(g)}}}function B({params:s,query:t}){return this.fetch("articles/index.json").then(s=>s.json()).then(s=>({posts:s}))}function F(s,t,e){let{posts:a}=t;return s.$set=(s=>{"posts"in s&&e(0,a=s.posts)}),[a]}export default class extends s{constructor(s){super(),t(this,s,F,z,e,{posts:0})}}export{B as preload};
