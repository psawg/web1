window.addEventListener('DOMContentLoaded', function () {
  this.setTimeout(function () {
    var video = document.getElementById('backgroundVideo');
    var videos = [
      '/assets/vid/GTA_VI_trailer.mp4',
      '/assets/vid/TUNIC_trailer.mp4',
      '/assets/vid/Marvel_Spider_Man_2_trailer.mp4',
      '/assets/vid/God_of_War_trailer.mp4',
      '/assets/vid/Marvel_Spider_Man_2_trailer.mp4',
      '/assets/vid/Minecraft_trailer.mp4'
      // Thêm tên file video khác vào đây
    ];
    var randomIndex = Math.floor(Math.random() * videos.length);
    var randomVideo = videos[randomIndex];
    video.src = randomVideo;
    backgroundVideo.load();
  }, 2000);

  var newsItems = document.querySelectorAll(".newsItem");
  var isHovered = false; // Biến để theo dõi trạng thái di chuột

  newsItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      isHovered = true;
      this.style.transform = "scale(1.2)";
      this.style.transition = "transform 1s ease";
      this.style.zIndex = "2";

      var siblings = getSiblings(this);
      siblings.forEach(function (sibling) {
        sibling.style.marginRight = "10px";
      });
    });

    item.addEventListener("mouseleave", function () {
      isHovered = false;
      this.style.transform = "scale(1)";
      this.style.transition = "transform 1s ease";
      this.style.zIndex = "0";

      var siblings = getSiblings(this);
      siblings.forEach(function (sibling) {
        sibling.style.marginLeft = "0";
        sibling.style.marginRight = "0";
      });
    });
  });

  function animateNewsItems() {
    var { newsList, firstItem } = getNewsElements();
    var newsItems = newsList.querySelectorAll(".newsItem");

    newsItems.forEach(function (item) {
      item.style.transition = "transform 1s ease";
      item.style.transform = "translateX(-105%)";
    });

    setTimeout(function () {
      newsItems.forEach(function (item) {
        item.style.transform = "translateX(0)";
      });

      newsList.appendChild(firstItem);

      newsItems.forEach(function (item) {
        item.style.transition = "none";
      });
    }, 1000);
  }

  setInterval(function () {
    if (!isHovered) {
      animateNewsItems();
    }
  }, 3000);

  function getNewsElements() {
    var newsList = document.querySelector(".newsList");
    var firstItem = newsList ? newsList.querySelector(".newsItem:first-child") : null;
    return { newsList, firstItem };
  }
});
