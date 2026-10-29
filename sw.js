const VERSION='teselia-track-v1-2026';
const APP_CACHE=`${VERSION}-app`;
const IMAGE_CACHE=`${VERSION}-sprites`;
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(APP_CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('teselia-track-') && k!==APP_CACHE && k!==IMAGE_CACHE).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.hostname==='raw.githubusercontent.com' && url.pathname.startsWith('/PokeAPI/sprites/')){
    event.respondWith(caches.open(IMAGE_CACHE).then(async c=>{
      const cached=await c.match(request);
      if(cached)return cached;
      const response=await fetch(request);
      if(response.ok||response.type==='opaque')c.put(request,response.clone());
      return response;
    }));
    return;
  }
  if(url.origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>{
      if(response.ok){const copy=response.clone();caches.open(APP_CACHE).then(c=>c.put('./index.html',copy));}
      return response;
    }).catch(async()=>await caches.match('./index.html')||await caches.match('./')));
    return;
  }
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
