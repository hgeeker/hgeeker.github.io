var floatBtn = document.getElementById('float-btn');
var floatCode = document.getElementById('qrcode-float');
window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var header = document.getElementById("nav-header");
    var trans = top / 200;
    if (trans >= 0.9) {
        trans = 0.9;
    }
    header.style.backgroundColor = "rgba(255,255,255," + trans + ")";
    if (trans >= 0.9) {
        header.style.boxShadow = "0 0 4px #868686";
        addClass(floatBtn, "float-btn-opp");
    } else {
        header.style.boxShadow = "0 0 0 #868686";
        removeClass(floatBtn, "float-btn-opp");
    }
    if (top >= 3705) {
        floatCode.style.display = "none";
    } else {
        if (floatCode.style.display === 'none') {
            floatCode.style.display = "block";
        }
    }
}
var table1 = document.getElementById("swiper-table1");
var table2 = document.getElementById("swiper-table2");
table1.cellSpacing = "5px";
table2.cellSpacing = "5px";
window.onload = function() {
    var a3 = document.getElementById('link-about-vks');
    addClass(a3, 'nav-bar-item-line-op');
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 15000,
        speed: 2000,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
    });
}
var mask = document.getElementById('mask');
var maskImg = document.getElementById('maskImg');
var showBigImage = function(id, e) {
    mask.style.display = "block";
    removeClass(maskImg, 'maskImgOut');
    addClass(maskImg, 'maskImgIN');
    switch (id) {
        case -1:
            removeClass(maskImg, 'maskImgIN');
            addClass(maskImg, 'maskImgOut');
            setTimeout(function() {
                mask.style.display = "none";
            }, 200);
            break;
        case 0:
            e.preventDefault();
            e.cancelBubble = true;
            break;
        case 1:
            maskImg.src = "./assets/images/big3.jpg";
            break;
        case 2:
            maskImg.src = "./assets/images/big4.jpg";
            break;
        case 3:
            maskImg.src = "./assets/images/big5.jpg";
            break;
        case 4:
            maskImg.src = "./assets/images/big6.jpg";
            break;
        case 5:
            maskImg.src = "./assets/images/big7.jpg";
            break;
        case 6:
            maskImg.src = "./assets/images/big8.jpg";
            break;
        case 11:
            maskImg.src = "./assets/images/big2.jpg";
            break;
        case 12:
            maskImg.src = "./assets/images/big9.jpg";
            break;
        case 13:
            maskImg.src = "./assets/images/big10.jpg";
            break;
        case 14:
            maskImg.src = "./assets/images/big11.jpg";
            break;
        case 15:
            maskImg.src = "./assets/images/big12.jpg";
            break;
        case 16:
            maskImg.src = "./assets/images/big1.jpg";
            break;
    }
}

var showIcon = function(id) {
    var array = id.childNodes;
    array[1].style.display = "block";
}
var hideIcon = function(id) {
    var array = id.childNodes;
    array[1].style.display = "none";
}
var focusCard = function(obj, ev) {
    if (ev.relatedTarget.className === "section-inner" || ev.relatedTarget.className === "section-six") {
        addClass(obj, "card-focus");
        removeClass(obj, "card-blur");
    } else {
        return
    }
}
var blurCard = function(obj, ev) {
    if (ev.relatedTarget.className === "section-inner" || ev.relatedTarget.className === "section-six") {
        addClass(obj, "card-blur");
        removeClass(obj, "card-focus");
    } else {
        return
    }
}
