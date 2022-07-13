// Install SW
self.addEventListener('install', event => {
    console.log("Service worker installed")
})

// Activate SW 
self.addEventListener('activate', event => {
    console.log("Service worker activated")
})

self.addEventListener( "fetch", event => {
    console.log('WORKER: Fetching requests');
  });