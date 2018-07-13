var cache_Name='restaurant-v2'; //store cache name in the varible called cacheNmae
self.addEventListener('install',function(event){
	event.waitUntil(
		caches.open(cache_Name).then(function(cache){
			return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'css/style.css',
				'img/1.jpg',
				'img/10.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'js/dbhelper.js',
				'js/main.js',
				'js/regist.js'
				]);
		})
		)
});
//here we will delete old cache with new cache
self.addEventListener('activate',function(event){
	event.waitUntil(
		caches.keys().then(function(cacheNames){
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName!==cache_Name){
						return caches.delete(cacheName)
					}
				})
				)


		})
		)
})
/*add fetch event listener to window and use resopndWith method and check if caches match with event.request
if true return this resopnse if false fetch event.request from network*/
self.addEventListener("fetch", event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});
