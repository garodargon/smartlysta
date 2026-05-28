// Smartysta Háttér Kezelő (Service Worker)
const CACHE_NAME = 'smartysta-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Engedjük át a hálózati kéréseket a Firebase felé
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
