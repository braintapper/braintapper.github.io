import{_ as s,a,b as t,c as e,i as r,s as i,d as c,S as n,e as o,t as l,f,g as h,h as m,l as u,j as v,k as p,m as g,p as d,q as b,C as j,n as E}from"./index.bb352cbf.js";import{_ as x}from"./_commonjsHelpers.1a612b23.js";import{S as H}from"./index.982140c7.js";function _(s){var a,t,e,r,i,c,n,H,_,D=s[0].title+"",L=Date.create(s[0].timestamp).format("{medium}")+"";return{c:function(){a=o("ul"),t=o("li"),e=o("h1"),r=o("a"),i=l(D),n=f(),H=o("h2"),_=l(L),this.h()},l:function(s){a=h(s,"UL",{class:!0});var c=m(a);t=h(c,"LI",{class:!0});var o=m(t);e=h(o,"H1",{class:!0});var l=m(e);r=h(l,"A",{rel:!0,href:!0,class:!0});var f=m(r);i=u(f,D),f.forEach(v),l.forEach(v),n=p(o),H=h(o,"H2",{class:!0});var g=m(H);_=u(g,L),g.forEach(v),o.forEach(v),c.forEach(v),this.h()},h:function(){g(r,"rel","prefetch"),g(r,"href",c="articles/"+s[0].slug),g(r,"class","svelte-g6v93i"),g(e,"class","svelte-g6v93i"),g(H,"class","svelte-g6v93i"),g(t,"class","svelte-g6v93i"),g(a,"class","svelte-g6v93i")},m:function(s,c){d(s,a,c),b(a,t),b(t,e),b(e,r),b(r,i),b(t,n),b(t,H),b(H,_)},p:function(s,a){var t=x(a,1)[0];1&t&&D!==(D=s[0].title+"")&&j(i,D),1&t&&c!==(c="articles/"+s[0].slug)&&g(r,"href",c),1&t&&L!==(L=Date.create(s[0].timestamp).format("{medium}")+"")&&j(_,L)},i:E,o:E,d:function(s){s&&v(a)}}}function D(s,a,t){H.extend();var e=a.post;return s.$set=function(s){"post"in s&&t(0,e=s.post)},[e]}var L=function(o){function l(s){var n;return a(this,l),n=t(this,e(l).call(this)),r(c(n),s,D,_,i,{post:0}),n}return s(l,n),l}();export{L as P};
