import{S as t,i as a,s as e,e as s,k as r,t as o,c as h,a as n,d as i,n as c,g as l,b as f,f as m,E as p,h as u,F as E,K as d}from"./vendor-a7a4fa15.js";function g(t){let a,e,g,v,b,H,y,A,D,L,S,T=t[0].title+"",x=Date.create(t[0].timestamp).format("{medium}")+"",M=t[0].html+"";return{c(){a=s("article"),e=s("header"),g=s("h1"),v=s("a"),H=r(),y=s("h2"),A=o(x),D=o(" by Steven Ng"),L=r(),this.h()},l(t){a=h(t,"ARTICLE",{type:!0});var s=n(a);e=h(s,"HEADER",{});var r=n(e);g=h(r,"H1",{});var o=n(g);v=h(o,"A",{rel:!0,href:!0}),n(v).forEach(i),o.forEach(i),H=c(r),y=h(r,"H2",{});var f=n(y);A=l(f,x),D=l(f," by Steven Ng"),f.forEach(i),r.forEach(i),L=c(s),s.forEach(i),this.h()},h(){f(v,"rel","prefetch"),f(v,"href",b="/blog/"+t[0].slug),S=new d(null),f(a,"type","content")},m(t,s){m(t,a,s),p(a,e),p(e,g),p(g,v),v.innerHTML=T,p(e,H),p(e,y),p(y,A),p(y,D),p(a,L),S.m(M,a)},p(t,[a]){1&a&&T!==(T=t[0].title+"")&&(v.innerHTML=T),1&a&&b!==(b="/blog/"+t[0].slug)&&f(v,"href",b),1&a&&x!==(x=Date.create(t[0].timestamp).format("{medium}")+"")&&u(A,x),1&a&&M!==(M=t[0].html+"")&&S.p(M)},i:E,o:E,d(t){t&&i(a)}}}function v(t,a,e){let{post:s}=a;return t.$$set=t=>{"post"in t&&e(0,s=t.post)},[s]}class b extends t{constructor(t){super(),a(this,t,v,g,e,{post:0})}}export{b as P};