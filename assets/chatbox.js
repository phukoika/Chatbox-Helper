var helpcenter = helpcenter || {};

(function () {
  const settings = {
    baseUrl: "http://127.0.0.1:5500/index.html",
  };

  function injectDom(element, color) {
    let area = document.getElementById(element);
    if (!area) {
      return;
    }

    area.style.cssText =
      "bottom: 15px; right: 15px; min-height: 73px; overflow: hidden; position: fixed; z-index: 2147483600; min-width: 65px;";

    var frameSrc = `${settings.baseUrl}`;
    var iframe = document.createElement("iframe");
    iframe.style = "";
    iframe.id = "widget-frame";
    iframe.title = "Help Center";
    iframe.frameborder = "0";
    iframe.allowfullscreen = "true";
    iframe.webkitallowfullscreen = "true";
    iframe.mozallowfullscreen = "true";
    iframe.width = "370";
    iframe.height = "500";
    iframe.src = frameSrc;

    area.appendChild(iframe);
  }

  function initializeHelpCenterPopup(elementId, color) {
    injectDom(elementId, color);
  }

  helpcenter.initialize = initializeHelpCenterPopup;
})();

// MESSENGER MENU
