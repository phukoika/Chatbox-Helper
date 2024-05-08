document.addEventListener("DOMContentLoaded", (e) => {
  var dom = {
    frame: window.parent.document.getElementById("widget-frame"),
    widgetForm: document.getElementById("widget-chatbox"),
    widgetContent: document.querySelector(".widget-content"),
    widgetIcon: document.querySelector(".widget-icon"),
    widgetDefaultOpen: document.querySelector(".widget-default"),
    widgetDefaultClose: document.querySelector(".widget-close"),
    widgetIconClose: document.querySelector(".widget-icon-close"),
    widgetContainer: document.querySelector(".widget-container"),
  };

  const setWidgetFormSize = function (state) {
    if (dom.frame) {
      if (state === 1) {
        dom.widgetForm.style.width = "75px";
        dom.widgetForm.style.height = "75px";
      } else {
        dom.frame.style.width = "360px";
        dom.frame.style.height = "480px";
        dom.widgetContent.style.height = "300px";
      }
    }
  };
  setWidgetFormSize(1);
  // show popup
  dom.widgetDefaultOpen.addEventListener("click", () => {
    dom.widgetContent.classList.add("active");
    dom.widgetDefaultOpen.classList.add("hidden");
    dom.widgetDefaultClose.classList.add("active");
    dom.widgetIcon.classList.remove("effect-close");
    dom.widgetIcon.classList.add("effect-open");
    if (dom.frame) {
      dom.frame.style.width = "360px";
      dom.frame.style.height = "480px";
      dom.widgetContent.style.height = "300px";
    }
  });

  // hide popup
  dom.widgetDefaultClose.addEventListener("click", () => {
    dom.widgetContent.classList.remove("active");
    dom.widgetDefaultOpen.classList.remove("hidden");
    dom.widgetDefaultClose.classList.remove("active");
    dom.widgetIcon.classList.remove("effect-open");
    dom.widgetIcon.classList.add("effect-close");
    if (dom.frame) {
      dom.frame.style.width = "75px";
      dom.frame.style.height = "75px";
      dom.widgetContent.style.height = "75px";
    }
  });

  // hide popup when click close-icon in popup
  dom.widgetIconClose.addEventListener("click", () => {
    dom.widgetContent.classList.remove("active");
    dom.widgetDefaultOpen.classList.remove("hidden");
    dom.widgetDefaultClose.classList.remove("active");
    dom.widgetIcon.classList.remove("effect-open");
    dom.widgetIcon.classList.add("effect-close");
    if (dom.frame) {
      dom.frame.style.width = "75px";
      dom.frame.style.height = "75px";
      dom.widgetContent.style.height = "75px";
    }
  });
});
