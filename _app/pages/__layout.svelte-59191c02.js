import{S as a,i as e,s,e as r,k as t,t as l,c,a as h,d as o,n,g as i,b as f,D as v,f as g,E as d,F as u,G as p,j as E,m,o as $,H as k,v as A,r as w,w as S,I}from"../chunks/vendor-a7a4fa15.js";function y(a){let e,s,p,E,m,$,k,A,w,S,I,y,L,b,H,P,x,_,j,B,D,C,G,K,O,R,q,z,N,T,F;return{c(){e=r("header"),s=r("section"),p=r("a"),E=r("img"),$=t(),k=r("nav"),A=r("ul"),w=r("li"),S=r("a"),I=l("Home"),y=t(),L=r("li"),b=r("a"),H=l("Archive"),P=t(),x=r("li"),_=r("a"),j=l("Articles"),B=t(),D=r("li"),C=r("a"),G=l("Search"),K=t(),O=r("li"),R=r("a"),q=l("About"),z=t(),N=r("li"),T=r("a"),F=l("RSS"),this.h()},l(a){e=c(a,"HEADER",{class:!0});var r=h(e);s=c(r,"SECTION",{class:!0});var t=h(s);p=c(t,"A",{href:!0,class:!0});var l=h(p);E=c(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(o),t.forEach(o),$=n(r),k=c(r,"NAV",{class:!0});var f=h(k);A=c(f,"UL",{class:!0});var v=h(A);w=c(v,"LI",{class:!0});var g=h(w);S=c(g,"A",{href:!0,class:!0});var d=h(S);I=i(d,"Home"),d.forEach(o),g.forEach(o),y=n(v),L=c(v,"LI",{class:!0});var u=h(L);b=c(u,"A",{href:!0,class:!0});var m=h(b);H=i(m,"Archive"),m.forEach(o),u.forEach(o),P=n(v),x=c(v,"LI",{class:!0});var W=h(x);_=c(W,"A",{href:!0,class:!0});var M=h(_);j=i(M,"Articles"),M.forEach(o),W.forEach(o),B=n(v),D=c(v,"LI",{class:!0});var U=h(D);C=c(U,"A",{href:!0,class:!0});var V=h(C);G=i(V,"Search"),V.forEach(o),U.forEach(o),K=n(v),O=c(v,"LI",{class:!0});var Y=h(O);R=c(Y,"A",{href:!0,class:!0});var J=h(R);q=i(J,"About"),J.forEach(o),Y.forEach(o),z=n(v),N=c(v,"LI",{class:!0});var Q=h(N);T=c(Q,"A",{href:!0,target:!0,class:!0});var X=h(T);F=i(X,"RSS"),X.forEach(o),Q.forEach(o),v.forEach(o),f.forEach(o),r.forEach(o),this.h()},h(){E.src!==(m="/images/Braintapper_Wordmark_color_2020.svg")&&f(E,"src","/images/Braintapper_Wordmark_color_2020.svg"),f(E,"alt","Braintapper Logo"),f(E,"class","svelte-ialh6k"),f(p,"href","."),f(p,"class","svelte-ialh6k"),f(s,"class","svelte-ialh6k"),f(S,"href","/"),f(S,"class","svelte-ialh6k"),f(w,"class","svelte-ialh6k"),v(w,"selected",void 0===a[0]),f(b,"href","/archive"),f(b,"class","svelte-ialh6k"),f(L,"class","svelte-ialh6k"),v(L,"selected","archive"===a[0]),f(_,"href","/articles"),f(_,"class","svelte-ialh6k"),f(x,"class","svelte-ialh6k"),v(x,"selected","articles"===a[0]),f(C,"href","/search"),f(C,"class","svelte-ialh6k"),f(D,"class","svelte-ialh6k"),v(D,"selected","search"===a[0]),f(R,"href","/pages/about"),f(R,"class","svelte-ialh6k"),f(O,"class","svelte-ialh6k"),v(O,"selected","pages"===a[0]),f(T,"href","/rss.xml"),f(T,"target","new"),f(T,"class","svelte-ialh6k"),f(N,"class","svelte-ialh6k"),f(A,"class","svelte-ialh6k"),f(k,"class","svelte-ialh6k"),f(e,"class","svelte-ialh6k")},m(a,r){g(a,e,r),d(e,s),d(s,p),d(p,E),d(e,$),d(e,k),d(k,A),d(A,w),d(w,S),d(S,I),d(A,y),d(A,L),d(L,b),d(b,H),d(A,P),d(A,x),d(x,_),d(_,j),d(A,B),d(A,D),d(D,C),d(C,G),d(A,K),d(A,O),d(O,R),d(R,q),d(A,z),d(A,N),d(N,T),d(T,F)},p(a,[e]){1&e&&v(w,"selected",void 0===a[0]),1&e&&v(L,"selected","archive"===a[0]),1&e&&v(x,"selected","articles"===a[0]),1&e&&v(D,"selected","search"===a[0]),1&e&&v(O,"selected","pages"===a[0])},i:u,o:u,d(a){a&&o(e)}}}function L(a,e,s){let{segment:r}=e;return a.$$set=a=>{"segment"in a&&s(0,r=a.segment)},[r]}class b extends a{constructor(a){super(),e(this,a,L,y,s,{segment:0})}}function H(a){let e,s,v,p,E,m,$,k,A,w,S,I,y,L,b,H,P,x,_,j,B,D,C=Date.create().format("{yyyy}")+"";return{c(){e=r("footer"),s=r("p"),v=l("Hand crafted with "),p=r("a"),E=l("Svelte"),m=l(", "),$=r("a"),k=l("SvelteKit"),A=l(" and "),w=r("a"),S=l("Lunr.js"),I=l(". Hosted on "),y=r("a"),L=l("Github Pages"),b=l("."),H=t(),P=r("p"),x=l("Copyright © 2019-"),_=l(C),j=l(" Braintapper Knowledge Solutions, Inc. "),B=r("a"),D=l("Privacy Policy"),this.h()},l(a){e=c(a,"FOOTER",{class:!0});var r=h(e);s=c(r,"P",{class:!0});var t=h(s);v=i(t,"Hand crafted with "),p=c(t,"A",{href:!0,target:!0});var l=h(p);E=i(l,"Svelte"),l.forEach(o),m=i(t,", "),$=c(t,"A",{href:!0,target:!0});var f=h($);k=i(f,"SvelteKit"),f.forEach(o),A=i(t," and "),w=c(t,"A",{href:!0,target:!0});var g=h(w);S=i(g,"Lunr.js"),g.forEach(o),I=i(t,". Hosted on "),y=c(t,"A",{href:!0,target:!0});var d=h(y);L=i(d,"Github Pages"),d.forEach(o),b=i(t,"."),t.forEach(o),H=n(r),P=c(r,"P",{class:!0});var u=h(P);x=i(u,"Copyright © 2019-"),_=i(u,C),j=i(u," Braintapper Knowledge Solutions, Inc. "),B=c(u,"A",{href:!0});var G=h(B);D=i(G,"Privacy Policy"),G.forEach(o),u.forEach(o),r.forEach(o),this.h()},h(){f(p,"href","https://svelte.dev/"),f(p,"target","new"),f($,"href","https://kit.svelte.dev/"),f($,"target","new"),f(w,"href","https://lunrjs.com"),f(w,"target","new"),f(y,"href","https://pages.github.com/"),f(y,"target","new"),f(s,"class","svelte-1qwnznr"),f(B,"href","/pages/about#privacy"),f(P,"class","svelte-1qwnznr"),f(e,"class","svelte-1qwnznr")},m(a,r){g(a,e,r),d(e,s),d(s,v),d(s,p),d(p,E),d(s,m),d(s,$),d($,k),d(s,A),d(s,w),d(w,S),d(s,I),d(s,y),d(y,L),d(s,b),d(e,H),d(e,P),d(P,x),d(P,_),d(P,j),d(P,B),d(B,D)},p:u,i:u,o:u,d(a){a&&o(e)}}}function P(a){return(new Date).getYear(),[]}class x extends a{constructor(a){super(),e(this,a,P,H,s,{})}}function _(a){let e,s,l,i,f,v;e=new b({});const d=a[1].default,u=p(d,a,a[0],null);return f=new x({}),{c(){E(e.$$.fragment),s=t(),l=r("section"),u&&u.c(),i=t(),E(f.$$.fragment)},l(a){m(e.$$.fragment,a),s=n(a),l=c(a,"SECTION",{});var r=h(l);u&&u.l(r),r.forEach(o),i=n(a),m(f.$$.fragment,a)},m(a,r){$(e,a,r),g(a,s,r),g(a,l,r),u&&u.m(l,null),g(a,i,r),$(f,a,r),v=!0},p(a,[e]){u&&u.p&&(!v||1&e)&&k(u,d,a,a[0],e,null,null)},i(a){v||(A(e.$$.fragment,a),A(u,a),A(f.$$.fragment,a),v=!0)},o(a){w(e.$$.fragment,a),w(u,a),w(f.$$.fragment,a),v=!1},d(a){S(e,a),a&&o(s),a&&o(l),u&&u.d(a),a&&o(i),S(f,a)}}}function j(a,e,s){let{$$slots:r={},$$scope:t}=e;return null==Date.create&&I.extend(),a.$$set=a=>{"$$scope"in a&&s(0,t=a.$$scope)},[t,r]}export default class extends a{constructor(a){super(),e(this,a,j,_,s,{})}}