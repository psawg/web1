window.addEventListener("DOMContentLoaded", function () {
  this.setTimeout(function () {
    var video = document.getElementById("backgroundVideo");
    var videos = [
      "/assets/vid/GTA_VI_trailer.mp4",
      "/assets/vid/TUNIC_trailer.mp4",
      "/assets/vid/Marvel_Spider_Man_2_trailer.mp4",
      "/assets/vid/God_of_War_trailer.mp4",
      "/assets/vid/Marvel_Spider_Man_2_trailer.mp4",
      "/assets/vid/Minecraft_trailer.mp4",
      // Thêm tên file video khác vào đây
    ];
    var randomIndex = Math.floor(Math.random() * videos.length);
    var randomVideo = videos[randomIndex];
    video.src = randomVideo;
    backgroundVideo.load();
  }, 2000);

  var isSliding = false; // Biến để theo dõi trạng thái hoạt động trượt.
  var isHovered = false; // Biến để theo dõi trạng thái di chuột.
  function animateNewsItems() {
    var { newsList, firstItem } = getNewsElements();
    var newsItems = newsList.querySelectorAll(".newsItem");

    newsItems.forEach(function (item) {
      item.style.transition = "transform 1s ease";
      item.style.transform = "translateX(calc(-100% - 2px))";
      isSliding = true; // Đánh dấu bắt đầu hoạt động trượt.
    });

    setTimeout(function () {
      newsItems.forEach(function (item) {
        item.style.transform = "translateX(0)";
      }, 3000);
      newsList.appendChild(firstItem);
      isSliding = false; // Đánh dấu hoàn thành hoạt động trượt.


      newsItems.forEach(function (item) {
        item.style.transition = "none";
        item.addEventListener("mouseover", function () { //Sự kiện di chuột vào.
          if (!isSliding) {
            isHovered = true;
            this.style.transform = "scale(1.2)";
            this.style.transition = "transform 1s ease";
            this.style.zIndex = "2";
          }
        });
        item.addEventListener("mouseout", function () {//Sự kiện di chuột ra.
          if (!isSliding) {
            isHovered = false;
            this.style.transform = "scale(1)";
            this.style.transition = "transform 1s ease";
            this.style.zIndex = "0";
          }
        });
      });
    }, 1000);
  }
  setInterval(function () {//lặp bằng đệ quy.
    if (!isHovered) {
      animateNewsItems();
    }
  }, 3000);
  x;
  function getNewsElements() {//Lấy element đầu tiên và kiểm tra tồn tại.
    var newsList = document.querySelector(".newsList");
    var firstItem = newsList
      ? newsList.querySelector(".newsItem:first-child")
      : null;
    return { newsList, firstItem };
  }
});
