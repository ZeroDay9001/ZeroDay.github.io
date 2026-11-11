const CACHE="buzz-academy-v1";
const CORE=["./","index.html","manifest.webmanifest","lib/math.min.js","lib/skulpt.min.js","lib/skulpt-stdlib.js","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{ const u=new URL(e.request.url); if(e.request.method!=="GET") return;
  if(u.origin===location.origin){ e.respondWith(caches.match(e.request).then(hit=>{ const net=fetch(e.request).then(r=>{ if(r.ok){ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); } return r; }).catch(()=>hit); return hit||net; })); return; }
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){ e.respondWith(caches.open(CACHE).then(c=>c.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{ c.put(e.request,r.clone()); return r; })))); } });
