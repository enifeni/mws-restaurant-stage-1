self.addEventListener('install', function(event) {

  event.waitUntil(

    caches.open('version1').then(function(cache) {
      console.log('caching');
      return cache.addAll([
        '/',
        '/index.html',
        '/css/styles.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('version1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});