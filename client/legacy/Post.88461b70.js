import{a as t,b as a,c as e,d as r,i as s,s as n,e as i,S as o,f,g as c,t as h,h as u,j as m,k as l,l as p,m as d,o as v,L as E,q as g,r as b,D as H,n as x}from"./index.566df1d2.js";import{_ as y,S as D}from"./index.37c95d2e.js";function L(t){var a,e,r,s,n,i,o,D,L,S,j,A=t[0].title+"",T=Date.create(t[0].timestamp).format("{medium}")+"",M=t[0].html+"";return{c:function(){a=f("article"),e=f("header"),r=f("h1"),s=f("a"),i=c(),o=f("h2"),D=h(T),L=h(" by Steven Ng"),S=c(),this.h()},l:function(t){a=u(t,"ARTICLE",{type:!0});var n=m(a);e=u(n,"HEADER",{});var f=m(e);r=u(f,"H1",{});var c=m(r);s=u(c,"A",{rel:!0,href:!0}),m(s).forEach(l),c.forEach(l),i=p(f),o=u(f,"H2",{});var h=m(o);D=d(h,T),L=d(h," by Steven Ng"),h.forEach(l),f.forEach(l),S=p(n),n.forEach(l),this.h()},h:function(){v(s,"rel","prefetch"),v(s,"href",n="blog/"+t[0].slug),j=new E(M,null),v(a,"type","content")},m:function(t,n){g(t,a,n),b(a,e),b(e,r),b(r,s),s.innerHTML=A,b(e,i),b(e,o),b(o,D),b(o,L),b(a,S),j.m(a)},p:function(t,a){var e=y(a,1)[0];1&e&&A!==(A=t[0].title+"")&&(s.innerHTML=A),1&e&&n!==(n="blog/"+t[0].slug)&&v(s,"href",n),1&e&&T!==(T=Date.create(t[0].timestamp).format("{medium}")+"")&&H(D,T),1&e&&M!==(M=t[0].html+"")&&j.p(M)},i:x,o:x,d:function(t){t&&l(a)}}}function S(t,a,e){D.extend();var r=a.post;return t.$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var j=function(f){function c(t){var o;return a(this,c),o=e(this,r(c).call(this)),s(i(o),t,S,L,n,{post:0}),o}return t(c,o),c}();export{j as P};
