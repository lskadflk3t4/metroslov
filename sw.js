/* Метро слов — service worker : tout fonctionne hors ligne après la première visite */
const VERSION = "metro-slov-v2";
const CORE = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-192.png",
  "./icons/maskable-512.png", "./icons/apple-touch-icon.png"];
const FONTS = "metro-slov-fonts";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(
    ks.filter(k => k !== VERSION && k !== FONTS).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Polices Google : mises en cache au premier passage, puis servies hors ligne
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const r = await fetch(req); if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; }
      catch (err) { return new Response("", { status: 504 }); }
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // Application : réponse immédiate depuis le cache, mise à jour en arrière-plan
  e.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true }) ||
      (req.mode === "navigate" ? await c.match("./index.html") : null);
    const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
    return hit || (await net) || new Response("Hors ligne", { status: 503 });
  }));
});
