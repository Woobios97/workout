const C='workout-v14';
const A=['./','index.html','exdata.js','manifest.webmanifest','icon-180.png','icon-512.png','art/mascot.png','art/mascot2.png','art/cloud.png','art/flame.png','art/trophy.png','art/coin.png','art/palm.png','art/bg.jpg','art/sun.png','art/mascotgold.png','art/golddb.png','fonts/anton.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('workout-')&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}if(e.request.mode==='navigate')return caches.match(e.request,{ignoreSearch:true}).then(c=>c||r);return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||(e.request.mode==='navigate'?caches.match('index.html'):Response.error()))));
});
