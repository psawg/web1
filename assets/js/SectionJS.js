// document.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById('backgroundVideo');
//     video.play();
//   });

// // TODO: RANDOM VIDEO ON LOADING PAGE IN THE BACKGROUND
// // List of video URLs
// const videoList = [
//   '/assets/vid/GTA_VI_trailer.mp4',
//   '/assets/vid/TUNIC_trailer.mp4',
//   // Add more video URLs here
// ];

// // Function to select a random video URL
// function getRandomVideo() {
//   const randomIndex = Math.floor(Math.random() * videoList.length);
//   return videoList[randomIndex];
// }

// // Get video element
// const backgroundVideo = document.getElementById('backgroundVideo');

// // Set a random video as the source
// backgroundVideo.querySelector('source').src = getRandomVideo();

// // Reload the video to apply the new source
// backgroundVideo.load();



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
          var randomIndex = Math.floor(Math.random() * 6);
          var randomVideo = videos[randomIndex];
          video.src = randomVideo;
          backgroundVideo.load();

    },2000);
        
    });