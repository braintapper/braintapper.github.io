import{_ as t,a as s,b as n,c as a,i as r,d as e,S as o,s as i,f as c,u,k as f,v as p,p as m,w as d,z as l,A as $,j,B as v}from"./index.6adbeb0c.js";import{_ as x}from"./_commonjsHelpers.1a612b23.js";import{_ as b}from"./index.ca88b1c0.js";import"./index.fa1f21df.js";import{P as h}from"./Post.d93d0feb.js";function g(t){var s,n,a;document.title=s=t[0].title;var r=new h({props:{post:t[0]}});return{c:function(){n=c(),u(r.$$.fragment)},l:function(t){n=f(t),p(r.$$.fragment,t)},m:function(t,s){m(t,n,s),d(r,t,s),a=!0},p:function(t,n){var e=x(n,1)[0];(!a||1&e)&&s!==(s=t[0].title)&&(document.title=s);var o={};1&e&&(o.post=t[0]),r.$set(o)},i:function(t){a||(l(r.$$.fragment,t),a=!0)},o:function(t){$(r.$$.fragment,t),a=!1},d:function(t){t&&j(n),v(r,t)}}}function w(t){var s,n,a;return b.async(function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.params,t.query,r.next=3,b.awrap(this.fetch("posts/".concat(s.slug,".json")));case 3:return n=r.sent,r.next=6,b.awrap(n.json());case 6:if(a=r.sent,200!==n.status){r.next=11;break}return r.abrupt("return",{post:a});case 11:this.error(n.status,a.message);case 12:case"end":return r.stop()}},null,this)}function _(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n(0,a=t.post)},[a]}export default(function(c){function u(t){var o;return s(this,u),o=n(this,a(u).call(this)),r(e(o),t,_,g,i,{post:0}),o}return t(u,o),u}());export{w as preload};
