!function(){"use strict";const t=["client/Post.e5e470bb.js","client/PostLink.11e46e67.js","client/index.04564fb2.js","client/[slug].11054551.js","client/index.3e0243a9.js","client/[slug].7f28e7ed.js","client/index.0ab7a58c.js","client/index.483e683e.js","client/index.4831833d.js","client/index.119fa721.js","client/[slug].edaede52.js","client/[slug].2c4cb83a.js","client/client.74b3419e.js","client/index.204ca6e2.js","client/index.b073f4db.js"].concat(["service-worker-index.html","archive/2019.json","archive/2020.json","archive/index.json","articles/index.json","articles/my-favorite-self-hosted-apps.json","articles/useful-windows-apps.json","content_index.json","fonts/NunitoSans-Black.ttf","fonts/NunitoSans-BlackItalic.ttf","fonts/NunitoSans-Bold.ttf","fonts/NunitoSans-BoldItalic.ttf","fonts/NunitoSans-ExtraBold.ttf","fonts/NunitoSans-ExtraBoldItalic.ttf","fonts/NunitoSans-ExtraLight.ttf","fonts/NunitoSans-ExtraLightItalic.ttf","fonts/NunitoSans-Light.ttf","fonts/NunitoSans-LightItalic.ttf","fonts/NunitoSans-Regular.ttf","fonts/NunitoSans-RegularItalic.ttf","fonts/NunitoSans-SemiBold.ttf","fonts/NunitoSans-SemiBoldItalic.ttf","global.css","images/Braintapper_Icon_color_2020.svg","images/Braintapper_Wordmark_color_2020.svg","images/Braintapper_Wordmark_No_logo_fullname_color_2020.svg","images/Braintapper_Wordmark_No_logo_shortname_color_2020.svg","images/favicon.ico","images/favicon_114.png","images/favicon_120.png","images/favicon_128.png","images/favicon_144.png","images/favicon_152.png","images/favicon_16.png","images/favicon_196.png","images/favicon_24.png","images/favicon_32.png","images/favicon_48.png","images/favicon_57.png","images/favicon_64.png","images/favicon_72.png","images/favicon_96.png","layout.css","lunr_index.json","manifest.json","pages/about.json","posts/apps-install-this-site-as-an-app.json","posts/basecamps-guide-to-internal-communication.json","posts/check-out-my-articles-section.json","posts/clips-versus-notes.json","posts/converting-an-outlook-pst-to-json.json","posts/dropbox-paper-is-surprisingly-good.json","posts/its-2020-and-im-still-using-coffeescript.json","posts/pg-forward-migrations.json","posts/welcome-to-the-new-site.json","recent.json","rss.xml"]),s=new Set(t);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1583856244221").then(s=>s.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const s of t)"cache1583856244221"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1583856244221").then(async s=>{try{const n=await fetch(t.request);return s.put(t.request,n.clone()),n}catch(n){const e=await s.match(t.request);if(e)return e;throw n}}))))})}();
