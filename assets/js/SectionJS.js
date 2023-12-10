
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
          this.style.transform = "scale(1.2)"; // Scale lên 1.1 khi di chuột vào
          this.style.transition = "transform 1s ease"; // Thêm transition cho hiệu ứng mượt hơn
          this.style.zIndex = "2"; // Đặt giá trị z-index cao hơn để nổi lên trên các thành phần khác


          // Thay đổi margin của các thành phần xung quanh
      var siblings = getSiblings(this);
      siblings.forEach(function(sibling) {
        // sibling.style.marginLeft = "10px"; // Di chuyển sang trái
        sibling.style.marginRight = "20px"; // Di chuyển sang phải
      });
        });
    
        item.addEventListener("mouseleave", function() {
          isHovered = false;
          this.style.transform = "scale(1)"; // Scale về 1 khi di chuột ra
          this.style.transition = "transform 1s ease"; // Thêm transition cho hiệu ứng mượt hơn
          this.style.zIndex = "0"; // Đặt lại giá trị z-index ban đầu

           // Đặt lại margin của các thành phần xung quanh về giá trị ban đầu
        var siblings = getSiblings(this);
        siblings.forEach(function(sibling) {
        sibling.style.marginLeft = "0"; // Đặt lại margin trái về giá trị ban đầu
        sibling.style.marginRight = "0"; // Đặt lại margin phải về giá trị ban đầu
      });
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
            firstItem.style.transform = "translateX(0)";
            newsList.appendChild(firstItem);
          }, 1000); // Thời gian chuyển động (ms)
        }
      }, 3000); // Thời gian chờ giữa các chuyển động (ms)
    };



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
