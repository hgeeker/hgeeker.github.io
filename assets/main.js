window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: '.swiper-pagination',
        keyboardControl: true,
        mousewheelControl: true,
        onSlideChangeStart: function(swiper) {
            var mouseIcon = document.getElementById("mouse-icon");
            if (swiper.activeIndex === 2) {
                mouseIcon.style.display = "none";
            } else {
                mouseIcon.style.display = "block";
            }
        }
    });
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj, cls) {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
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
