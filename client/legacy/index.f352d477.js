import{_ as t,a as n,b as s,c as a,i as r,s as e,d as o,S as i,e as c,t as f,f as u,g as l,h,l as v,j as m,k as p,m as g,p as d,q as $,C as j,n as x,u as A,v as E,w as b,z as H,A as D,B as _,D as q,J as w,M as B,I}from"./index.bb352cbf.js";import{_ as L}from"./_commonjsHelpers.1a612b23.js";import{S}from"./index.982140c7.js";function k(t){var n,s,a,r,e,o,i,A,E,b=t[0].title+"",H=Date.create(t[0].timestamp).format("{medium}")+"";return{c:function(){n=c("ul"),s=c("li"),a=c("h1"),r=c("a"),e=f(b),i=u(),A=c("h2"),E=f(H),this.h()},l:function(t){n=l(t,"UL",{class:!0});var o=h(n);s=l(o,"LI",{class:!0});var c=h(s);a=l(c,"H1",{class:!0});var f=h(a);r=l(f,"A",{rel:!0,href:!0,class:!0});var u=h(r);e=v(u,b),u.forEach(m),f.forEach(m),i=p(c),A=l(c,"H2",{class:!0});var g=h(A);E=v(g,H),g.forEach(m),c.forEach(m),o.forEach(m),this.h()},h:function(){g(r,"rel","prefetch"),g(r,"href",o="articles/"+t[0].slug),g(r,"class","svelte-g6v93i"),g(a,"class","svelte-g6v93i"),g(A,"class","svelte-g6v93i"),g(s,"class","svelte-g6v93i"),g(n,"class","svelte-g6v93i")},m:function(t,o){d(t,n,o),$(n,s),$(s,a),$(a,r),$(r,e),$(s,i),$(s,A),$(A,E)},p:function(t,n){var s=L(n,1)[0];1&s&&b!==(b=t[0].title+"")&&j(e,b),1&s&&o!==(o="articles/"+t[0].slug)&&g(r,"href",o),1&s&&H!==(H=Date.create(t[0].timestamp).format("{medium}")+"")&&j(E,H)},i:x,o:x,d:function(t){t&&m(n)}}}function y(t,n,s){S.extend();var a=n.post;return t.$set=function(t){"post"in t&&s(0,a=t.post)},[a]}var z=function(c){function f(t){var i;return n(this,f),i=s(this,a(f).call(this)),r(o(i),t,y,k,e,{post:0}),i}return t(f,i),f}();function C(t,n,s){var a=t.slice();return a[1]=n[s],a}function J(t){var n,s=new z({props:{post:t[1]}});return{c:function(){A(s.$$.fragment)},l:function(t){E(s.$$.fragment,t)},m:function(t,a){b(s,t,a),n=!0},p:function(t,n){var a={};1&n&&(a.post=t[1]),s.$set(a)},i:function(t){n||(H(s.$$.fragment,t),n=!0)},o:function(t){D(s.$$.fragment,t),n=!1},d:function(t){_(s,t)}}}function M(t){for(var n,s,a,r,e,o=t[0],i=[],j=0;j<o.length;j+=1)i[j]=J(C(t,o,j));var x=function(t){return D(i[t],1,1,function(){i[t]=null})};return{c:function(){n=c("h1"),s=f("All Articles"),a=u();for(var t=0;t<i.length;t+=1)i[t].c();r=q(),this.h()},l:function(t){n=l(t,"H1",{class:!0});var e=h(n);s=v(e,"All Articles"),e.forEach(m),a=p(t);for(var o=0;o<i.length;o+=1)i[o].l(t);r=q(),this.h()},h:function(){g(n,"class","svelte-55mard")},m:function(t,o){d(t,n,o),$(n,s),d(t,a,o);for(var c=0;c<i.length;c+=1)i[c].m(t,o);d(t,r,o),e=!0},p:function(t,n){var s=L(n,1)[0];if(1&s){var a;for(o=t[0],a=0;a<o.length;a+=1){var e=C(t,o,a);i[a]?(i[a].p(e,s),H(i[a],1)):(i[a]=J(e),i[a].c(),H(i[a],1),i[a].m(r.parentNode,r))}for(I(),a=o.length;a<i.length;a+=1)x(a);w()}},i:function(t){if(!e){for(var n=0;n<o.length;n+=1)H(i[n]);e=!0}},o:function(t){i=i.filter(Boolean);for(var n=0;n<i.length;n+=1)D(i[n]);e=!1},d:function(t){t&&m(n),t&&m(a),B(i,t),t&&m(r)}}}function N(t){t.params,t.query;return this.fetch("articles/index.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function U(t,n,s){var a=n.posts;return t.$set=function(t){"posts"in t&&s(0,a=t.posts)},[a]}export default(function(c){function f(t){var i;return n(this,f),i=s(this,a(f).call(this)),r(o(i),t,U,M,e,{posts:0}),i}return t(f,i),f}());export{N as preload};