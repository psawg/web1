

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

  var { newsList, firstItem } = getNewsElements();

  var newsItems = document.querySelectorAll(".newsItem");
  var isHovered = false; // Biến để theo dõi trạng thái di chuột

  newsItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      isHovered = true;
      this.style.transform = "scale(1.2)"; // Scale lên 1.1 khi di chuột vào
      this.style.transition = "transform 1s ease"; // Thêm transition cho hiệu ứng mượt hơn
      this.style.zIndex = "2"; // Đặt giá trị z-index cao hơn để nổi lên trên các thành phần khác


      // Thay đổi margin của các thành phần xung quanh
      var siblings = getSiblings(this);
      siblings.forEach(function (sibling) {
        // sibling.style.marginLeft = "10px"; // Di chuyển sang trái
        sibling.style.marginRight = "10px"; // Di chuyển sang phải
      });
    });

    item.addEventListener("mouseleave", function () {
      isHovered = false;
      this.style.transform = "scale(1)"; // Scale về 1 khi di chuột ra
      this.style.transition = "transform 1s ease"; // Thêm transition cho hiệu ứng mượt hơn
      this.style.zIndex = "0"; // Đặt lại giá trị z-index ban đầu

      // Đặt lại margin của các thành phần xung quanh về giá trị ban đầu
      var siblings = getSiblings(this);
      siblings.forEach(function (sibling) {
        sibling.style.marginLeft = "0"; // Đặt lại margin trái về giá trị ban đầu
        sibling.style.marginRight = "0"; // Đặt lại margin phải về giá trị ban đầu
      });
    });
  });

  setInterval(function () {
    if (!isHovered) {
      // Reacquire elements after a page reload
      var { newsList, firstItem } = getNewsElements();


      // Add a CSS transition to smoothly animate the transformation for each newsItem
      var newsItems = newsList.querySelectorAll(".newsItem");
      newsItems.forEach(function (item) {
        item.style.transition = "transform 1s ease";
        item.style.transform = "translateX(-100%)";
      });

      setTimeout(function () {
        // Reset the transform for each newsItem
        newsItems.forEach(function (item) {
          item.style.transform = "translateX(0)";
        });

        // Move the first news item to the end of the newsList
        newsList.appendChild(firstItem);

        // Remove the transition from each newsItem to avoid affecting subsequent animations
        newsItems.forEach(function (item) {
          item.style.transition = "none";
        });
      }, 1000); // Wait for 1000 milliseconds (1 second) before performing the actions inside the setTimeout
    }
  }, 3000); // Repeat the entire process every 3000 milliseconds (3 seconds)

  // Hàm lấy các sibling của một element
  function getSiblings(element) {
    var siblings = [];
    var sibling = element.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== element) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  }

  function getNewsElements() {
    var newsList = document.querySelector(".newsList");
    var firstItem = newsList ? newsList.querySelector(".newsItem:first-child") : null;
    return { newsList, firstItem };
  }
  
});


