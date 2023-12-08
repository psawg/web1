window.addEventListener('load', function () {
    var intro = document.getElementById('intro');
    setTimeout(function() {
        intro.classList.add('fade-in');
        intro.style.opacity = '0'; // Đặt opacity của intro thành 0 sau 2 giây
    }, 2000);
});