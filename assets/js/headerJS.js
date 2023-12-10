
// function scrollToGames() {
//     // Lấy phần tử có id "games-section"
//     var gamesSection = document.getElementById("midContent");

//     // Sử dụng phương thức scrollIntoView để kéo trang xuống vị trí của phần tử
//     gamesSection.scrollIntoView({ behavior: "smooth",block: "start"  });
// }






function scrollToGames() {
    // Lấy phần tử "midContent" bằng id
    var gamesSection = document.getElementById("midContent");

    // Lấy vị trí của phần tử "midContent" cùng với vị trí cuộn hiện tại của trang
    var targetPosition = gamesSection.getBoundingClientRect().top + window.scrollY;

    // Lấy vị trí cuộn hiện tại của trang
    var startPosition = window.scrollY;

    // Tính khoảng cách cần di chuyển từ vị trí hiện tại đến vị trí đích
    var distance = targetPosition - startPosition;

    // Thời gian mà quá trình trượt sẽ diễn ra (trong mili giây)
    var duration = 1000;

    // Thời điểm bắt đầu của quá trình trượt
    var startTime = null;

    // Hàm thực hiện quá trình trượt mượt
    function animation(currentTime) {
        // Nếu chưa có startTime, gán startTime bằng currentTime
        if (startTime === null) startTime = currentTime;

        // Tính thời gian đã trôi qua từ khi bắt đầu quá trình trượt
        var elapsedTime = currentTime - startTime;

        // Tính giá trị mới của vị trí cuộn dựa trên hàm easing
        var scrollY = ease(elapsedTime, startPosition, distance, duration);

        // Thiết lập vị trí cuộn mới cho trang
        window.scrollTo(0, scrollY);

        // Nếu thời gian đã trôi qua chưa đạt đến thời gian trượt, tiếp tục gọi animation()
        if (elapsedTime < duration) requestAnimationFrame(animation);
    }

    // Hàm easing để tạo hiệu ứng trượt mượt
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Gọi hàm animation() lần đầu tiên để bắt đầu quá trình trượt
    requestAnimationFrame(animation);
}