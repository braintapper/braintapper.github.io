import{_ as n,a as t,b as a,c as e,i as r,s,d as i,S as c,e as o,f as u,g as f,h as p,j as m,k as h,L as g,p as l,q as v,n as d,u as $,v as x,w as j,z as b,A as w,B as E}from"./index.6adbeb0c.js";import{_ as H}from"./_commonjsHelpers.1a612b23.js";import{_ as L}from"./index.ca88b1c0.js";import{S as _}from"./index.fa1f21df.js";function A(n){var t,a,e,r,s,i=n[0].title+"",c=n[0].html+"";return{c:function(){t=o("article"),a=o("header"),e=o("h1"),r=u(),this.h()},l:function(n){t=f(n,"ARTICLE",{});var s=p(t);a=f(s,"HEADER",{});var i=p(a);e=f(i,"H1",{}),p(e).forEach(m),i.forEach(m),r=h(s),s.forEach(m),this.h()},h:function(){s=new g(c,null)},m:function(n,c){l(n,t,c),v(t,a),v(a,e),e.innerHTML=i,v(t,r),s.m(t)},p:function(n,t){var a=H(t,1)[0];1&a&&i!==(i=n[0].title+"")&&(e.innerHTML=i),1&a&&c!==(c=n[0].html+"")&&s.p(c)},i:d,o:d,d:function(n){n&&m(t)}}}function T(n,t,a){_.extend();var e=t.page;return n.$set=function(n){"page"in n&&a(0,e=n.page)},[e]}var k=function(o){function u(n){var c;return t(this,u),c=a(this,e(u).call(this)),r(i(c),n,T,A,s,{page:0}),c}return n(u,c),u}();function q(n){var t,a,e;document.title=t=n[0].title;var r=new k({props:{page:n[0]}});return{c:function(){a=u(),$(r.$$.fragment)},l:function(n){a=h(n),x(r.$$.fragment,n)},m:function(n,t){l(n,a,t),j(r,n,t),e=!0},p:function(n,a){var s=H(a,1)[0];(!e||1&s)&&t!==(t=n[0].title)&&(document.title=t);var i={};1&s&&(i.page=n[0]),r.$set(i)},i:function(n){e||(b(r.$$.fragment,n),e=!0)},o:function(n){w(r.$$.fragment,n),e=!1},d:function(n){n&&m(a),E(r,n)}}}function y(n){var t,a,e;return L.async(function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.params,n.query,r.next=3,L.awrap(this.fetch("pages/".concat(t.slug,".json")));case 3:return a=r.sent,r.next=6,L.awrap(a.json());case 6:if(e=r.sent,200!==a.status){r.next=11;break}return r.abrupt("return",{page:e});case 11:this.error(a.status,e.message);case 12:case"end":return r.stop()}},null,this)}function M(n,t,a){var e=t.segment,r=t.page;return n.$set=function(n){"segment"in n&&a(1,e=n.segment),"page"in n&&a(0,r=n.page)},[r,e]}export default(function(o){function u(n){var c;return t(this,u),c=a(this,e(u).call(this)),r(i(c),n,M,q,s,{segment:1,page:0}),c}return n(u,c),u}());export{y as preload};
