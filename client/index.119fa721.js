function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o){return t[2]&&o?n.dirty|t[2](o(e)):n.dirty}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function w(t){return v(t," ")}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}function A(t,n){(null!=n||t.value)&&(t.value=n)}function N(t,n,e){t.classList[e?"add":"remove"](n)}class L{constructor(t,n=null){this.e=p("div"),this.a=n,this.u(t)}m(t,n=null){for(let e=0;e<this.n.length;e+=1)l(t,this.n[e],n);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(d)}}let j;function k(t){j=t}function S(){if(!j)throw new Error("Function called outside component initialization");return j}function C(t){S().$$.on_mount.push(t)}function T(t,n){S().$$.context.set(t,n)}const q=[],z=[],B=[],F=[],H=Promise.resolve();let M=!1;function O(t){B.push(t)}function D(){const t=new Set;do{for(;q.length;){const t=q.shift();k(t),G(t.$$)}for(;z.length;)z.pop()();for(let n=0;n<B.length;n+=1){const e=B[n];t.has(e)||(e(),t.add(e))}B.length=0}while(q.length);for(;F.length;)F.pop()();M=!1}function G(t){null!==t.fragment&&(t.update(),r(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(O))}const I=new Set;let J;function K(){J={r:0,c:[],p:J}}function P(){J.r||r(J.c),J=J.p}function Q(t,n){t&&t.i&&(I.delete(t),t.i(n))}function R(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push(()=>{I.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function U(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function V(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,n){t&&t.l(n)}function Y(t,n,o){const{fragment:i,on_mount:c,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,o),O(()=>{const n=c.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(O)}function Z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(t,n){-1===t.$$.dirty[0]&&(q.push(t),M||(M=!0,H.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nt(n,e,s,i,c,u,a=[-1]){const f=j;k(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a};let h=!1;d.ctx=s?s(n,l,(t,e,o=e)=>(d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&tt(n,t)),e)):[],d.update(),h=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(x(e.target)):d.fragment&&d.fragment.c(),e.intro&&Q(n.$$.fragment),Y(n,e.target,e.anchor),D()),k(f)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{n as A,U as B,V as C,T as D,K as E,P as F,h as G,L as H,y as I,A as J,r as K,C as L,et as S,g as a,x as b,_ as c,d,p as e,w as f,v as g,b as h,nt as i,N as j,l as k,f as l,c as m,t as n,W as o,X as p,Y as q,u as r,i as s,m as t,a as u,Q as v,R as w,Z as x,E as y,$ as z};
