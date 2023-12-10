
  window.addEventListener('DOMContentLoaded', function() {

    this.setTimeout(function(){
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

    },2000);
        
    });



    window.onload = function() {
      var newsItems = document.querySelectorAll(".newsItem");
      var isHovered = false; // Biến để theo dõi trạng thái di chuột
    
      newsItems.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
          isHovered = true;
          this.style.transform = "scale(1.1)"; // Scale lên 1.1 khi di chuột vào
        });
    
        item.addEventListener("mouseleave", function() {
          isHovered = false;
          this.style.transform = "scale(1)"; // Scale về 1 khi di chuột ra
        });
      });
    
      var newsList = document.querySelector(".newsList");
    
      setInterval(function() {
        if (!isHovered) {
          var firstItem = newsList.querySelector(".newsItem:first-child");
    
          // Di chuyển tin tức đầu tiên đến cuối danh sách
          firstItem.style.transform = "translateX(-100%)";
    
          setTimeout(function() {
            // Đặt tin tức đó vào cuối danh sách
            newsList.appendChild(firstItem);
            firstItem.style.transform = "translateX(0)";
          }, 1000); // Thời gian chuyển động (ms)
        }
      }, 3000); // Thời gian chờ giữa các chuyển động (ms)
    };