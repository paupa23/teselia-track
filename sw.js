const VERSION='pokeatlas-2026-10-29-r3';
const APP_CACHE=`${VERSION}-app`;
const IMAGE_CACHE=`${VERSION}-images`;
const ASSETS=['./','./index.html','./style.css','./app.js','./game-data.js','./guides.js','./names.js','./data/black.json','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(APP_CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();await Promise.all(keys.filter(k=>(k.startsWith('pokeatlas-')||k.startsWith('teselia-track-'))&&k!==APP_CACHE&&k!==IMAGE_CACHE).map(k=>caches.delete(k)));await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);
 if(url.origin===self.location.origin){
  if(req.mode==='navigate'){
   event.respondWith(fetch(req).then(r=>{if(r.ok)caches.open(APP_CACHE).then(c=>c.put('./index.html',r.clone()));return r;}).catch(async()=> (await caches.match('./index.html'))||(await caches.match('./'))));return;
  }
  event.respondWith(caches.match(req).then(async cached=>{if(cached)return cached;const response=await fetch(req);if(response.ok){const cache=await caches.open(APP_CACHE);cache.put(req,response.clone());}return response;}));return;
 }
 if(url.hostname==='raw.githubusercontent.com'&&url.pathname.startsWith('/PokeAPI/sprites/')){
  event.respondWith(caches.open(IMAGE_CACHE).then(async cache=>{const cached=await cache.match(req);if(cached)return cached;try{const res=await fetch(req);if(res.ok||res.type==='opaque')cache.put(req,res.clone());return res;}catch(err){return new Response('',{status:503});}}));
 }
});
