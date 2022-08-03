// Install SW
self.addEventListener("install", function (event) {
  console.log("Service worker installed");
});

// Activate SW
self.addEventListener("activate", function (event) {
  console.log("Service worker activated");
});

// Fetch event
self.addEventListener("fetch", function (event) {
  console.log("WORKER: Fetching requests");
});
