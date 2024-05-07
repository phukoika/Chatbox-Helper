document.addEventListener("DOMContentLoaded", (e) => {
  var dom = {
    frame: window.parent.document.getElementById("widget-frame"),
    btn: document.getElementById("send"),
    title: document.querySelector(".header-title"),
  };

  dom.btn.addEventListener("click", () => {
    if (dom.frame) {
      dom.title.innerText = "hello world";
    }
    console.log(123);
  });
});
