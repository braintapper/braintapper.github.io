import{S as e,i as a,s as t,e as s,a as r,t as o,c as h,b as i,d as n,f,g as l,h as m,H as c,k as p,l as u,y as d,n as E}from"./index.119fa721.js";import{S as b}from"./index.b073f4db.js";function g(e){let a,t,b,g,v,H,x,S,y,A,D,L=e[0].title+"",T=Date.create(e[0].timestamp).format("{medium}")+"",j=e[0].html+"";return{c(){a=s("article"),t=s("header"),b=s("h1"),g=s("a"),H=r(),x=s("h2"),S=o(T),y=o(" by Steven Ng"),A=r(),this.h()},l(e){a=h(e,"ARTICLE",{});var s=i(a);t=h(s,"HEADER",{});var r=i(t);b=h(r,"H1",{});var o=i(b);g=h(o,"A",{rel:!0,href:!0}),i(g).forEach(n),o.forEach(n),H=f(r),x=h(r,"H2",{});var m=i(x);S=l(m,T),y=l(m," by Steven Ng"),m.forEach(n),r.forEach(n),A=f(s),s.forEach(n),this.h()},h(){m(g,"rel","prefetch"),m(g,"href",v="blog/"+e[0].slug),D=new c(j,null)},m(e,s){p(e,a,s),u(a,t),u(t,b),u(b,g),g.innerHTML=L,u(t,H),u(t,x),u(x,S),u(x,y),u(a,A),D.m(a)},p(e,[a]){1&a&&L!==(L=e[0].title+"")&&(g.innerHTML=L),1&a&&v!==(v="blog/"+e[0].slug)&&m(g,"href",v),1&a&&T!==(T=Date.create(e[0].timestamp).format("{medium}")+"")&&d(S,T),1&a&&j!==(j=e[0].html+"")&&D.p(j)},i:E,o:E,d(e){e&&n(a)}}}function v(e,a,t){b.extend();let{post:s}=a;return e.$set=(e=>{"post"in e&&t(0,s=e.post)}),[s]}class H extends e{constructor(e){super(),a(this,e,v,g,t,{post:0})}}export{H as P};