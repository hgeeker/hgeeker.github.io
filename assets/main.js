window.onload = function() {
    var a1 = document.getElementById('link-main');
    var image1 = document.getElementById('title-id-one');
    var image2 = document.getElementById('title-id-two');
    var image3 = document.getElementById('title-id-three');
    var mainBtn = document.getElementById('main-btn-id');
    var mouseIcon = document.getElementById("mouse-icon");
    var bottomArrow = document.getElementById("bottom-arrow");
    addClass(a1, "nav-bar-item-line");
    addClass(image1, "main-title-slide");
    addClass(mainBtn, "main-button-slide");
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: '.swiper-pagination',
        keyboardControl: true,
        mousewheelControl: true,
        onSlideChangeStart: function(swiper) {
            if (swiper.activeIndex === 2) {
                mouseIcon.style.display = "none";
                bottomArrow.style.display = "none";
            } else {
                mouseIcon.style.display = "block";
                bottomArrow.style.display = "block";
            }
            switch (swiper.activeIndex) {
                case 0:
                    if (hasClass(image1, 'main-title-slide')) {
                        return;
                    } else {
                        addClass(image1, 'main-title-slide');
                    }
                    break;
                case 1:
                    if (hasClass(image2, 'main-title-slide')) {
                        return;
                    } else {
                        addClass(image2, 'main-title-slide');
                    }
                    break;
                    break;
                case 2:
                    if (hasClass(image3, 'main-title-slide')) {
                        return;
                    } else {
                        addClass(image3, 'main-title-slide');
                    }
                    break;
                    break;
            }
        }
    });
}
var page = document.getElementById('main-page');
var mask = document.getElementById('main-mask');
var showVideo = function() {
    addClass(page, "blur-in");
    removeClass(page, "blur-out");
    mask.style.display = "block";
}

var hideVideo = function() {
    addClass(page, "blur-out");
    removeClass(page, "blur-in");
    mask.style.display = "none";
}
