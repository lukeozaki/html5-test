// Pendo Track Events
(function () {
  "use strict";

  // Track page load event when DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof pendo !== "undefined" && pendo.track) {
      pendo.track("Page Loaded", {
        page_title: document.title || "Home",
        page_path: window.location.pathname,
        referrer: document.referrer || "direct",
        screen_width: window.screen.width,
        screen_height: window.screen.height
      });
    }
  });
})();
