var CACHE_PREFIX = 'cms-sw-cache';
var CACHE_VERSION = '0.0.20';
var CACHE_NAME = CACHE_PREFIX+'-'+CACHE_VERSION;
var allAssets = [
    './assets/pdfium.wasm',
    './assets/cmaps/1.json',
    './assets/cmaps/2.json',
    './assets/cmaps/3.json',
    './assets/cmaps/4.json',
    './assets/data/kCMYK',
    './assets/data/kJapan1VerticalCIDs',
    './assets/foxitFont/sans.ttf',
    './assets/foxitFont/serif.ttf',
    './assets/fonts/NotoSansMonoCJKjp-Regular.otf',
    './assets/fonts/NotoSansMonoCJKkr-Regular.otf',
    './assets/fonts/NotoSansMonoCJKsc-Regular.otf',
    './assets/fonts/NotoSansCJKtc-Regular.otf'
];
self.addEventListener('install', function(event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(allAssets);
            })
    );
});


//监听浏览器的所有fetch请求，对已经缓存的资源使用本地缓存回复
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                //该fetch请求已经缓存
                if (response) {
                    return response;
                }
                return fetch(event.request);
                }
            )
    );
});