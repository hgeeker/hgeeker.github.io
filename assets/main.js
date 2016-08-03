window.onload = function() {
    var a1 = document.getElementById('link-main');
    var image1 = document.getElementById('title-id-one');
    var mainBtn = document.getElementById('main-btn-id');
    addClass(a1, "nav-bar-item-line-op");
    addClass(image1, "main-title-slide");
    addClass(mainBtn, "main-button-slide");
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        lazyLoading: true,
    });
}
var page = document.getElementById('main-page');
var mask = document.getElementById('main-mask');
