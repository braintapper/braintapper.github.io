!function(){"use strict";const t=["client/Post.d7596b1d.js","client/PostLink.1c757b99.js","client/index.c7f1a432.js","client/[slug].3d60cd59.js","client/index.c72284ad.js","client/index.ef84cc49.js","client/index.e7542301.js","client/index.0b3d9d4e.js","client/index.2d8cb01e.js","client/[slug].1e8610e9.js","client/[slug].206c09b1.js","client/[slug].2b5a4fc3.js","client/client.1c58fa72.js","client/index.52f6a18c.js","client/index.b073f4db.js"].concat(["service-worker-index.html","archive/2019.json","archive/2020.json","archive/index.json","articles/covid-info.json","articles/index.json","articles/my-favorite-free-fonts.json","articles/my-favorite-self-hosted-apps.json","articles/useful-windows-apps.json","content_index.json","fonts/Cascadia.ttf","fonts/NunitoSans-Black.ttf","fonts/NunitoSans-BlackItalic.ttf","fonts/NunitoSans-Bold.ttf","fonts/NunitoSans-BoldItalic.ttf","fonts/NunitoSans-ExtraBold.ttf","fonts/NunitoSans-ExtraBoldItalic.ttf","fonts/NunitoSans-ExtraLight.ttf","fonts/NunitoSans-ExtraLightItalic.ttf","fonts/NunitoSans-Light.ttf","fonts/NunitoSans-LightItalic.ttf","fonts/NunitoSans-Regular.ttf","fonts/NunitoSans-RegularItalic.ttf","fonts/NunitoSans-SemiBold.ttf","fonts/NunitoSans-SemiBoldItalic.ttf","global.css","images/Braintapper_Icon_color_2020.svg","images/Braintapper_Wordmark_color_2020.svg","images/Braintapper_Wordmark_No_logo_fullname_color_2020.svg","images/Braintapper_Wordmark_No_logo_shortname_color_2020.svg","images/favicon.ico","images/favicon_114.png","images/favicon_120.png","images/favicon_128.png","images/favicon_144.png","images/favicon_152.png","images/favicon_16.png","images/favicon_196.png","images/favicon_24.png","images/favicon_32.png","images/favicon_48.png","images/favicon_57.png","images/favicon_64.png","images/favicon_72.png","images/favicon_96.png","lunr_index.json","manifest.json","pages/about.json","posts/apps-install-this-site-as-an-app.json","posts/basecamps-guide-to-internal-communication.json","posts/check-out-my-articles-section.json","posts/clips-versus-notes.json","posts/converting-an-outlook-pst-to-json.json","posts/covid-article-up.json","posts/dropbox-paper-is-surprisingly-good.json","posts/its-2020-and-im-still-using-coffeescript.json","posts/minor-site-update.json","posts/my-curated-list-of-free-fonts-is-up.json","posts/pg-forward-migrations.json","posts/welcome-to-the-new-site.json","recent.json","rss.xml"]),s=new Set(t);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1585314803911").then(s=>s.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const s of t)"cache1585314803911"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline1585314803911").then(async s=>{try{const n=await fetch(t.request);return s.put(t.request,n.clone()),n}catch(n){const e=await s.match(t.request);if(e)return e;throw n}}))))})}();
