// Este es un Service Worker básico.
// Por ahora, solo nos sirve para que la app sea "instalable".

self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activado');
});

self.addEventListener('fetch', (event) => {
  // No hacemos nada con las peticiones por ahora,
  // solo dejamos que sigan su curso normal.
  event.respondWith(fetch(event.request));
});