const CACHE = "classconnect-v1";
const ASSETS = [
  "/",
  "/client/App.tsx",
  "/index.html",
  "/placeholder.svg",
  "/manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  event.respondWith(
    caches.match(request).then((cached) =>
      cached || fetch(request).then((resp) => {
        const respClone = resp.clone();
        caches.open(CACHE).then((c) => c.put(request, respClone)).catch(() => {});
        return resp;
      }).catch(() => cached)
    )
  );
});
