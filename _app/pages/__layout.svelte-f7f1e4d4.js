import{S as e,i as a,s,e as r,k as t,t as l,c,a as h,d as o,n,g as i,b as f,D as v,f as g,E as d,F as u,G as p,j as E,m,o as $,H as k,v as A,r as w,w as S,I}from"../chunks/vendor-66573013.js";function y(e){let a,s,p,E,m,$,k,A,w,S,I,y,L,b,H,P,x,_,j,B,D,C,G,K,O,R,q,z,N,T,F;return{c(){a=r("header"),s=r("section"),p=r("a"),E=r("img"),$=t(),k=r("nav"),A=r("ul"),w=r("li"),S=r("a"),I=l("Home"),y=t(),L=r("li"),b=r("a"),H=l("Archive"),P=t(),x=r("li"),_=r("a"),j=l("Articles"),B=t(),D=r("li"),C=r("a"),G=l("Search"),K=t(),O=r("li"),R=r("a"),q=l("About"),z=t(),N=r("li"),T=r("a"),F=l("RSS"),this.h()},l(e){a=c(e,"HEADER",{class:!0});var r=h(a);s=c(r,"SECTION",{class:!0});var t=h(s);p=c(t,"A",{href:!0,class:!0});var l=h(p);E=c(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(o),t.forEach(o),$=n(r),k=c(r,"NAV",{class:!0});var f=h(k);A=c(f,"UL",{class:!0});var v=h(A);w=c(v,"LI",{class:!0});var g=h(w);S=c(g,"A",{href:!0,class:!0});var d=h(S);I=i(d,"Home"),d.forEach(o),g.forEach(o),y=n(v),L=c(v,"LI",{class:!0});var u=h(L);b=c(u,"A",{href:!0,class:!0});var m=h(b);H=i(m,"Archive"),m.forEach(o),u.forEach(o),P=n(v),x=c(v,"LI",{class:!0});var W=h(x);_=c(W,"A",{href:!0,class:!0});var M=h(_);j=i(M,"Articles"),M.forEach(o),W.forEach(o),B=n(v),D=c(v,"LI",{class:!0});var U=h(D);C=c(U,"A",{href:!0,class:!0});var V=h(C);G=i(V,"Search"),V.forEach(o),U.forEach(o),K=n(v),O=c(v,"LI",{class:!0});var Y=h(O);R=c(Y,"A",{href:!0,class:!0});var J=h(R);q=i(J,"About"),J.forEach(o),Y.forEach(o),z=n(v),N=c(v,"LI",{class:!0});var Q=h(N);T=c(Q,"A",{href:!0,target:!0,class:!0});var X=h(T);F=i(X,"RSS"),X.forEach(o),Q.forEach(o),v.forEach(o),f.forEach(o),r.forEach(o),this.h()},h(){E.src!==(m="/images/Braintapper_Wordmark_color_2020.svg")&&f(E,"src","/images/Braintapper_Wordmark_color_2020.svg"),f(E,"alt","Braintapper Logo"),f(E,"class","svelte-ialh6k"),f(p,"href","."),f(p,"class","svelte-ialh6k"),f(s,"class","svelte-ialh6k"),f(S,"href","/"),f(S,"class","svelte-ialh6k"),f(w,"class","svelte-ialh6k"),v(w,"selected",void 0===e[0]),f(b,"href","/archive"),f(b,"class","svelte-ialh6k"),f(L,"class","svelte-ialh6k"),v(L,"selected","archive"===e[0]),f(_,"href","/articles"),f(_,"class","svelte-ialh6k"),f(x,"class","svelte-ialh6k"),v(x,"selected","articles"===e[0]),f(C,"href","/search"),f(C,"class","svelte-ialh6k"),f(D,"class","svelte-ialh6k"),v(D,"selected","search"===e[0]),f(R,"href","/pages/about"),f(R,"class","svelte-ialh6k"),f(O,"class","svelte-ialh6k"),v(O,"selected","pages"===e[0]),f(T,"href","/rss.xml"),f(T,"target","new"),f(T,"class","svelte-ialh6k"),f(N,"class","svelte-ialh6k"),f(A,"class","svelte-ialh6k"),f(k,"class","svelte-ialh6k"),f(a,"class","svelte-ialh6k")},m(e,r){g(e,a,r),d(a,s),d(s,p),d(p,E),d(a,$),d(a,k),d(k,A),d(A,w),d(w,S),d(S,I),d(A,y),d(A,L),d(L,b),d(b,H),d(A,P),d(A,x),d(x,_),d(_,j),d(A,B),d(A,D),d(D,C),d(C,G),d(A,K),d(A,O),d(O,R),d(R,q),d(A,z),d(A,N),d(N,T),d(T,F)},p(e,[a]){1&a&&v(w,"selected",void 0===e[0]),1&a&&v(L,"selected","archive"===e[0]),1&a&&v(x,"selected","articles"===e[0]),1&a&&v(D,"selected","search"===e[0]),1&a&&v(O,"selected","pages"===e[0])},i:u,o:u,d(e){e&&o(a)}}}function L(e,a,s){let{segment:r}=a;return e.$$set=e=>{"segment"in e&&s(0,r=e.segment)},[r]}class b extends e{constructor(e){super(),a(this,e,L,y,s,{segment:0})}}function H(e){let a,s,v,p,E,m,$,k,A,w,S,I,y,L,b,H,P,x,_,j,B,D,C=Date.create().format("{yyyy}")+"";return{c(){a=r("footer"),s=r("p"),v=l("Hand crafted with "),p=r("a"),E=l("Svelte"),m=l(", "),$=r("a"),k=l("SvelteKit"),A=l(" and "),w=r("a"),S=l("Lunr.js"),I=l(". Hosted on "),y=r("a"),L=l("Github Pages"),b=l("."),H=t(),P=r("p"),x=l("Copyright © 2019-"),_=l(C),j=l(" Braintapper Knowledge Solutions, Inc. "),B=r("a"),D=l("Privacy Policy"),this.h()},l(e){a=c(e,"FOOTER",{class:!0});var r=h(a);s=c(r,"P",{class:!0});var t=h(s);v=i(t,"Hand crafted with "),p=c(t,"A",{href:!0,target:!0});var l=h(p);E=i(l,"Svelte"),l.forEach(o),m=i(t,", "),$=c(t,"A",{href:!0,target:!0});var f=h($);k=i(f,"SvelteKit"),f.forEach(o),A=i(t," and "),w=c(t,"A",{href:!0,target:!0});var g=h(w);S=i(g,"Lunr.js"),g.forEach(o),I=i(t,". Hosted on "),y=c(t,"A",{href:!0,target:!0});var d=h(y);L=i(d,"Github Pages"),d.forEach(o),b=i(t,"."),t.forEach(o),H=n(r),P=c(r,"P",{class:!0});var u=h(P);x=i(u,"Copyright © 2019-"),_=i(u,C),j=i(u," Braintapper Knowledge Solutions, Inc. "),B=c(u,"A",{href:!0});var G=h(B);D=i(G,"Privacy Policy"),G.forEach(o),u.forEach(o),r.forEach(o),this.h()},h(){f(p,"href","https://svelte.dev/"),f(p,"target","new"),f($,"href","https://kit.svelte.dev/"),f($,"target","new"),f(w,"href","https://lunrjs.com"),f(w,"target","new"),f(y,"href","https://pages.github.com/"),f(y,"target","new"),f(s,"class","svelte-1qwnznr"),f(B,"href","/pages/about#privacy"),f(P,"class","svelte-1qwnznr"),f(a,"class","svelte-1qwnznr")},m(e,r){g(e,a,r),d(a,s),d(s,v),d(s,p),d(p,E),d(s,m),d(s,$),d($,k),d(s,A),d(s,w),d(w,S),d(s,I),d(s,y),d(y,L),d(s,b),d(a,H),d(a,P),d(P,x),d(P,_),d(P,j),d(P,B),d(B,D)},p:u,i:u,o:u,d(e){e&&o(a)}}}function P(e){return(new Date).getYear(),[]}class x extends e{constructor(e){super(),a(this,e,P,H,s,{})}}function _(e){let a,s,l,i,v,d;a=new b({});const u=e[1].default,I=p(u,e,e[0],null);return v=new x({}),{c(){E(a.$$.fragment),s=t(),l=r("section"),I&&I.c(),i=t(),E(v.$$.fragment),this.h()},l(e){m(a.$$.fragment,e),s=n(e),l=c(e,"SECTION",{class:!0});var r=h(l);I&&I.l(r),r.forEach(o),i=n(e),m(v.$$.fragment,e),this.h()},h(){f(l,"class","svelte-bdnsu8")},m(e,r){$(a,e,r),g(e,s,r),g(e,l,r),I&&I.m(l,null),g(e,i,r),$(v,e,r),d=!0},p(e,[a]){I&&I.p&&(!d||1&a)&&k(I,u,e,e[0],a,null,null)},i(e){d||(A(a.$$.fragment,e),A(I,e),A(v.$$.fragment,e),d=!0)},o(e){w(a.$$.fragment,e),w(I,e),w(v.$$.fragment,e),d=!1},d(e){S(a,e),e&&o(s),e&&o(l),I&&I.d(e),e&&o(i),S(v,e)}}}function j(e,a,s){let{$$slots:r={},$$scope:t}=a;return null==Date.create&&I.extend(),e.$$set=e=>{"$$scope"in e&&s(0,t=e.$$scope)},[t,r]}export default class extends e{constructor(e){super(),a(this,e,j,_,s,{})}}
