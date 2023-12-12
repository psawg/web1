
window.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");

  body.classList.add("scrollbar");

  // Thêm sự kiện khi di chuột vào thanh cuộn
  body.addEventListener("mouseover", function () {
    // body.classList.add("scrollbar1");
    body.classList.remove("scrollbar1");
  });

  // Thêm sự kiện khi di chuột ra khỏi thanh cuộn
  body.addEventListener("mouseout", function () {
    body.classList.add("scrollbar1");
    // body.classList.remove("scrollbar1");
  });
});
