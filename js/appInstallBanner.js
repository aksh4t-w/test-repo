var deferredPrompt;
var downloadButton = document.querySelector(".smartbanner-button");
var closeButton = document.querySelector("#smb-close");

window.addEventListener("beforeinstallprompt", function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  downloadButton.style.display = "block";
  displayBannerForAndroid();
});

if (downloadButton) {
  downloadButton.addEventListener(
    "click",
    function (e) {
      // hide our user interface that shows our A2HS button
      $("#smartbanner").css({
        display: "none",
      });
      $(function () {
        // Hide banner
        $("#smartbanner").slideUp(200, function () {
          return $(".page-content").css({
            "margin-top": "0px",
          });
        });
      });
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    },
    false
  );
}

if (closeButton) {
  closeButton.addEventListener("click", function (e) {
    $("#smartbanner").css({
      display: "none",
    });
    $(function () {
      // Hide banner
      $("#smartbanner").slideUp(200, function () {
        return $(".page-content").css({
          "margin-top": "0px",
        });
      });
    });
  });
}

function displayBannerForAndroid() {
  var res = "Device is not Android Phone";
  var userAgent = navigator.userAgent.toLowerCase();
  var Android = userAgent.indexOf("android") > -1;

  if (Android) {
    res = "Device is Android Phone";
    $(function () {
      var item = $("#smartbanner");
      var itemHeight = item.outerHeight();
      item.css({
        display: "block",
      });
      $(".page-content").css({
        "margin-top": itemHeight + "px",
      });
    });
  }
  console.log(res);
}
