import{_ as n,a as t,b as e,c as a,i as r,s,d as i,S as o,e as c,f as u,g as f,h as p,j as m,k as g,L as h,p as l,q as v,n as d,u as $,v as x,w as j,z as b,A as w,B as E}from"./index.6adbeb0c.js";import{_ as H}from"./_commonjsHelpers.1a612b23.js";import{_ as T}from"./index.ca88b1c0.js";import{S as L}from"./index.fa1f21df.js";function _(n){var t,e,a,r,s,i=n[0].title+"",o=n[0].html+"";return{c:function(){t=c("article"),e=c("header"),a=c("h1"),r=u(),this.h()},l:function(n){t=f(n,"ARTICLE",{});var s=p(t);e=f(s,"HEADER",{});var i=p(e);a=f(i,"H1",{}),p(a).forEach(m),i.forEach(m),r=g(s),s.forEach(m),this.h()},h:function(){s=new h(o,null)},m:function(n,o){l(n,t,o),v(t,e),v(e,a),a.innerHTML=i,v(t,r),s.m(t)},p:function(n,t){var e=H(t,1)[0];1&e&&i!==(i=n[0].title+"")&&(a.innerHTML=i),1&e&&o!==(o=n[0].html+"")&&s.p(o)},i:d,o:d,d:function(n){n&&m(t)}}}function A(n,t,e){L.extend();var a=t.page;return n.$set=function(n){"page"in n&&e(0,a=n.page)},[a]}var k=function(c){function u(n){var o;return t(this,u),o=e(this,a(u).call(this)),r(i(o),n,A,_,s,{page:0}),o}return n(u,o),u}();function q(n){var t,e,a;document.title=t=n[0].title.removeTag();var r=new k({props:{page:n[0]}});return{c:function(){e=u(),$(r.$$.fragment)},l:function(n){e=g(n),x(r.$$.fragment,n)},m:function(n,t){l(n,e,t),j(r,n,t),a=!0},p:function(n,e){var s=H(e,1)[0];(!a||1&s)&&t!==(t=n[0].title.removeTag())&&(document.title=t);var i={};1&s&&(i.page=n[0]),r.$set(i)},i:function(n){a||(b(r.$$.fragment,n),a=!0)},o:function(n){w(r.$$.fragment,n),a=!1},d:function(n){n&&m(e),E(r,n)}}}function y(n){var t,e,a;return T.async(function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.params,n.query,r.next=3,T.awrap(this.fetch("pages/".concat(t.slug,".json")));case 3:return e=r.sent,r.next=6,T.awrap(e.json());case 6:if(a=r.sent,200!==e.status){r.next=11;break}return r.abrupt("return",{page:a});case 11:this.error(e.status,a.message);case 12:case"end":return r.stop()}},null,this)}function M(n,t,e){var a=t.segment,r=t.page;return n.$set=function(n){"segment"in n&&e(1,a=n.segment),"page"in n&&e(0,r=n.page)},[r,a]}export default(function(c){function u(n){var o;return t(this,u),o=e(this,a(u).call(this)),r(i(o),n,M,q,s,{segment:1,page:0}),o}return n(u,o),u}());export{y as preload};