if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(function (reg) {
      console.log("service worker registered", reg);
    })
    .catch(function (err) {
      console.log("service worker not registered", err);
    });
}
