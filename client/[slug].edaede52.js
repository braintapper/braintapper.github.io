import{S as s,i as t,s as e,a,o,f as r,p as n,k as i,q as p,v as m,w as f,d as u,x as c}from"./index.119fa721.js";import"./index.b073f4db.js";import{P as $}from"./Post.e5e470bb.js";function l(s){let t,e,l;document.title=t=s[0].title.removeTags();const d=new $({props:{post:s[0]}});return{c(){e=a(),o(d.$$.fragment)},l(s){e=r(s),n(d.$$.fragment,s)},m(s,t){i(s,e,t),p(d,s,t),l=!0},p(s,[e]){(!l||1&e)&&t!==(t=s[0].title.removeTags())&&(document.title=t);const a={};1&e&&(a.post=s[0]),d.$set(a)},i(s){l||(m(d.$$.fragment,s),l=!0)},o(s){f(d.$$.fragment,s),l=!1},d(s){s&&u(e),c(d,s)}}}async function d({params:s,query:t}){const e=await this.fetch(`posts/${s.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function g(s,t,e){let{post:a}=t;return s.$set=(s=>{"post"in s&&e(0,a=s.post)}),[a]}export default class extends s{constructor(s){super(),t(this,s,g,l,e,{post:0})}}export{d as preload};