import{S as s,i as e,s as r,e as t,t as a,c as l,b as h,g as n,d as o,h as c,k as i,l as f,y as u,a as g,f as v,n as d,G as p}from"./index.119fa721.js";import"./index.b073f4db.js";import"./PostLink.11e46e67.js";function j(s,e,r){const t=s.slice();return t[1]=e[r],t}function m(s){let e,r,g,v,d,p=s[1]+"";return{c(){e=t("li"),r=t("h1"),g=t("a"),v=a(p),this.h()},l(s){e=l(s,"LI",{});var t=h(e);r=l(t,"H1",{class:!0});var a=h(r);g=l(a,"A",{href:!0,class:!0});var c=h(g);v=n(c,p),c.forEach(o),a.forEach(o),t.forEach(o),this.h()},h(){c(g,"href",d="archive/"+s[1]),c(g,"class","svelte-1jzowrg"),c(r,"class","svelte-1jzowrg")},m(s,t){i(s,e,t),f(e,r),f(r,g),f(g,v)},p(s,e){1&e&&p!==(p=s[1]+"")&&u(v,p),1&e&&d!==(d="archive/"+s[1])&&c(g,"href",d)},d(s){s&&o(e)}}}function y(s){let e,r,u,y,x=s[0],E=[];for(let e=0;e<x.length;e+=1)E[e]=m(j(s,x,e));return{c(){e=t("h1"),r=a("Blog Archive"),u=g(),y=t("ul");for(let s=0;s<E.length;s+=1)E[s].c();this.h()},l(s){e=l(s,"H1",{class:!0});var t=h(e);r=n(t,"Blog Archive"),t.forEach(o),u=v(s),y=l(s,"UL",{class:!0});var a=h(y);for(let s=0;s<E.length;s+=1)E[s].l(a);a.forEach(o),this.h()},h(){c(e,"class","svelte-1jzowrg"),c(y,"class","svelte-1jzowrg")},m(s,t){i(s,e,t),f(e,r),i(s,u,t),i(s,y,t);for(let s=0;s<E.length;s+=1)E[s].m(y,null)},p(s,[e]){if(1&e){let r;for(x=s[0],r=0;r<x.length;r+=1){const t=j(s,x,r);E[r]?E[r].p(t,e):(E[r]=m(t),E[r].c(),E[r].m(y,null))}for(;r<E.length;r+=1)E[r].d(1);E.length=x.length}},i:d,o:d,d(s){s&&o(e),s&&o(u),s&&o(y),p(E,s)}}}function x({params:s,query:e}){return this.fetch("archive/index.json").then(s=>s.json()).then(s=>({years:s}))}function E(s,e,r){let{years:t}=e;return s.$set=(s=>{"years"in s&&r(0,t=s.years)}),[t]}export default class extends s{constructor(s){super(),e(this,s,E,y,r,{years:0})}}export{x as preload};
