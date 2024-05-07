document.addEventListener("DOMContentLoaded", (e) => {
  var dom = {
    frame: window.parent.document.getElementById("widget-frame"),
    btn: document.getElementById("send"),
  };

  dom.btn.addEventListener("click", () => {
    if (dom.frame) {
      if (state === 1) {
        dom.frame.style.width = "75px";
        dom.frame.style.height = "75px";
      } else {
        dom.frame.style.height = "480px";
        dom.popupContainer.style.height = "370px";
        dom.popupBody.style.height = "280px";
      }
    }
  });
});
