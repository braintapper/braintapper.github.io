import{S as t,i as s,s as a,a as e,o,f as n,p as r,k as i,q as p,v as c,w as f,d as u,x as m}from"./index.119fa721.js";import"./index.b073f4db.js";import{P as $}from"./Post.7e8c3027.js";function l(t){let s,a,l;document.title=s=t[0].title;const d=new $({props:{post:t[0]}});return{c(){a=e(),o(d.$$.fragment)},l(t){a=n(t),r(d.$$.fragment,t)},m(t,s){i(t,a,s),p(d,t,s),l=!0},p(t,[a]){(!l||1&a)&&s!==(s=t[0].title)&&(document.title=s);const e={};1&a&&(e.post=t[0]),d.$set(e)},i(t){l||(c(d.$$.fragment,t),l=!0)},o(t){f(d.$$.fragment,t),l=!1},d(t){t&&u(a),m(d,t)}}}async function d({params:t,query:s}){const a=await this.fetch(`posts/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function g(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,g,l,a,{post:0})}}export{d as preload};
