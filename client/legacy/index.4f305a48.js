import{a as n,b as t,c as s,d as a,i as o,e as r,S as f,s as e,v as i,w as c,x as u,A as l,B as h,C as p,f as v,t as m,g,E as $,h as d,j,m as x,k as B,l as P,o as b,q,r as w,K as E,M as R,J as k}from"./index.673d8a76.js";import{_ as y}from"./index.a7beab7f.js";import{P as A}from"./Post.f6110228.js";function C(n,t,s){var a=n.slice();return a[1]=t[s],a}function H(n){var t,s=new A({props:{post:n[1]}});return{c:function(){i(s.$$.fragment)},l:function(n){c(s.$$.fragment,n)},m:function(n,a){u(s,n,a),t=!0},p:function(n,t){var a={};1&t&&(a.post=n[1]),s.$set(a)},i:function(n){t||(l(s.$$.fragment,n),t=!0)},o:function(n){h(s.$$.fragment,n),t=!1},d:function(n){p(s,n)}}}function J(n){for(var t,s,a,o,r,f=n[0],e=[],i=0;i<f.length;i+=1)e[i]=H(C(n,f,i));var c=function(n){return h(e[n],1,1,function(){e[n]=null})};return{c:function(){t=v("h1"),s=m("Recent Blog Posts"),a=g();for(var n=0;n<e.length;n+=1)e[n].c();o=$(),this.h()},l:function(n){t=d(n,"H1",{class:!0});var r=j(t);s=x(r,"Recent Blog Posts"),r.forEach(B),a=P(n);for(var f=0;f<e.length;f+=1)e[f].l(n);o=$(),this.h()},h:function(){b(t,"class","svelte-55mard")},m:function(n,f){q(n,t,f),w(t,s),q(n,a,f);for(var i=0;i<e.length;i+=1)e[i].m(n,f);q(n,o,f),r=!0},p:function(n,t){var s=y(t,1)[0];if(1&s){var a;for(f=n[0],a=0;a<f.length;a+=1){var r=C(n,f,a);e[a]?(e[a].p(r,s),l(e[a],1)):(e[a]=H(r),e[a].c(),l(e[a],1),e[a].m(o.parentNode,o))}for(k(),a=f.length;a<e.length;a+=1)c(a);E()}},i:function(n){if(!r){for(var t=0;t<f.length;t+=1)l(e[t]);r=!0}},o:function(n){e=e.filter(Boolean);for(var t=0;t<e.length;t+=1)h(e[t]);r=!1},d:function(n){n&&B(t),n&&B(a),R(e,n),n&&B(o)}}}function K(n){n.params,n.query;return this.fetch("recent.json").then(function(n){return n.json()}).then(function(n){return{posts:n}})}function M(n,t,s){var a=t.posts;return n.$set=function(n){"posts"in n&&s(0,a=n.posts)},[a]}export default(function(i){function c(n){var f;return t(this,c),f=s(this,a(c).call(this)),o(r(f),n,M,J,e,{posts:0}),f}return n(c,f),c}());export{K as preload};
