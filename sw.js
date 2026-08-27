/* SW × Vibe Coding — offline cache for PWA install */
const CACHE = "sv-vibe-v1";
const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/styles.css",
  "./js/content.js",
  "./js/app.js",
  "./js/pwa.js",
  "./en/",
  "./en/index.html",
  "./en/css/en.css",
  "./en/js/content.js",
  "./en/js/app.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/p10/slide-01-vibe-vs-traditional.png",
  "./assets/p10/slide-02-prompting-success-vs-failure.png",
  "./assets/p10-en/slide-01-vibe-vs-traditional.png",
  "./assets/p10-en/slide-02-prompting-success-vs-failure.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Only handle same-origin app assets; let CDN/fonts/wikimedia go to network
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok && (url.pathname.endsWith(".html") || url.pathname.endsWith("/") || url.pathname.match(/\.(js|css|png|webmanifest|json)$/))) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
