/* Mi Pizarra — service worker: funciona sin internet y se actualiza solo. */
const VERSION = 'mi-pizarra-v1.2.3';
const SHELL = [
  './', './index.html', './styles.css?v=1.2.3', './script.js?v=1.2.3', './logo.svg?v=1.2.3',
  './favicon.ico?v=1.2.3', './icon-180.png?v=1.2.3', './icon-192.png', './icon-512.png', './manifest.webmanifest'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('mi-pizarra-') && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Red primero (para ver siempre la última versión) y caché si no hay conexión.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: req.mode === 'navigate' }).then((r) => r || caches.match('./index.html')))
  );
});
