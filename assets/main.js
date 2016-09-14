var mySwiper = new Swiper('.swiper-container', {
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable :true,
    resistanceRatio: 0,
    loop: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
});
window.onload = function() {
    var a1 = document.getElementById('link-main');
    addClass(a1, "nav-bar-item-line");
}
var list1 = document.querySelectorAll(".step1-fade-out");
var step1HL = document.getElementById('step1-h-line');
var step1SL = document.getElementById('step1-s-line');

var list2 = document.querySelectorAll('.step2-fade-out');
var step2HL = document.getElementById('step2-h-line');
var step2SL = document.getElementById('step2-s-line');

var list3 = document.querySelectorAll('.step3-fade-out');
var step3HL = document.getElementById('step3-h-line');
var step3SL = document.getElementById('step3-s-line');

var list4 = document.querySelectorAll('.step4-fade-out');
var step4HL = document.getElementById('step4-h-line');
var step4SL = document.getElementById('step4-s-line');

var list5 = document.querySelectorAll('.step5-fade-out');
var step5HL = document.getElementById('step5-h-line');
var step5SL = document.getElementById('step5-s-line');

var flow = document.getElementById('section-flow');

var show = document.getElementById('section-show-2');

var showImgList = document.getElementById("section-show2-inner").getElementsByTagName("img");
var count = 0;
var showImg = function() {
    setTimeout(function() {
        if (count <= 4) {
            addClass(showImgList[count], 'section-show2-inner-active');
            count++;
            this.showImg();
        } else {
            return;
        }
    }, 300);
}
var floatBtn = document.getElementById('float-btn');
var nabTabBar = document.getElementById('nav-bar-tab');
var linkM = document.getElementById('link-main');
var title = document.getElementById('second-title');
var logo = document.getElementById('logo');
var phone = document.getElementById('phone');

var footer = document.getElementById('footer');
var floatCode = document.getElementById('qrcode-float');
window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var header = document.getElementById("nav-header");
    var trans = top / 200;
    if (trans >= 0.9) {
        trans = 0.9;
    }
    if (top > 0) {
        header.style.backgroundSize = "0 0";
        addClass(nabTabBar, 'nav-bar-tab-opposite');
        addClass(linkM, 'nav-bar-item-line-op');
        title.style.color = "black";
        logo.src = "./assets/images/logo.svg";
        phone.src = "./assets/images/phone.svg";
        removeClass(floatBtn, 'opp-outter');
        addClass(floatBtn, "float-btn-opp");
    } else {
        header.style.backgroundSize = "100% 100%";
        removeClass(nabTabBar, 'nav-bar-tab-opposite');
        removeClass(linkM, 'nav-bar-item-line-op');
        title.style.color = "white";
        logo.src = "./assets/images/logo-per.svg";
        phone.src = "./assets/images/phone2.svg";
        addClass(floatBtn, 'opp-outter');
        removeClass(floatBtn, "float-btn-opp");
    }
    header.style.backgroundColor = "rgba(255,255,255," + trans + ")";
    if (trans >= 0.9) {
        header.style.boxShadow = "0 0 4px #868686";
        // addClass(floatBtn, "float-btn-opp");
        // removeClass(floatBtn, 'opp-outter');
    } else {
        header.style.boxShadow = "0 0 0 #868686";
        // removeClass(floatBtn, "float-btn-opp");
        // addClass(floatBtn, 'opp-outter');
    }
    /**
     * 计算动画区域距离浏览器顶部的距离，小于200px出发动画
     */
    var dist = flow.offsetTop - window.pageYOffset;
    if (dist <= 200) {
        addClass(step1SL, 'step1-s-line-active');
        addClass(step1HL, 'step1-h-line-active');
        for (var i = 0; i < list1.length; i++) {
            addClass(list1[i], 'step1-fade-out-active');
        }
        addClass(step2SL, 'step2-s-line-active');
        addClass(step2HL, 'step2-h-line-active');
        for (var i = 0; i < list2.length; i++) {
            addClass(list2[i], 'step2-fade-out-active');
        }
        addClass(step3SL, 'step3-s-line-active');
        addClass(step3HL, 'step3-h-line-active');
        for (var i = 0; i < list3.length; i++) {
            addClass(list3[i], 'step3-fade-out-active');
        }
        addClass(step4SL, 'step4-s-line-active');
        addClass(step4HL, 'step4-h-line-active');
        for (var i = 0; i < list4.length; i++) {
            addClass(list4[i], 'step4-fade-out-active');
        }
        addClass(step5SL, 'step5-s-line-active');
        addClass(step5HL, 'step5-h-line-active');
        for (var i = 0; i < list5.length; i++) {
            addClass(list5[i], 'step5-fade-out-active');
        }
    }
    var dist2 = show.offsetTop - window.pageYOffset;
    if (dist2 <= 700) {
        showImg();
    }
    var dist3 = footer.offsetTop - window.pageYOffset;
    if (dist3 <= 700) {
        floatCode.style.display = "none";
    } else {
        if (floatCode.style.display === 'none') {
            floatCode.style.display = "block";
        }
    }
}
