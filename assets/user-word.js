window.onload = function() {
    var a3 = document.getElementById('link-about-user');
    addClass(a3, 'nav-bar-item-line-op');
}
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
}
var list = [];
list[0] = document.getElementById('inner-mask1');
list[1] = document.getElementById('inner-mask2');
list[2] = document.getElementById('inner-mask3');
list[3] = document.getElementById('inner-mask4');
list[4] = document.getElementById('inner-mask5');
list[5] = document.getElementById('inner-mask6');
list[6] = document.getElementById('inner-mask7');
list[7] = document.getElementById('inner-mask8');
list[8] = document.getElementById('inner-mask9');
list[9] = document.getElementById('inner-mask10');
list[10] = document.getElementById('inner-mask11');
list[11] = document.getElementById('inner-mask12');
list[12] = document.getElementById('inner-mask13');
list[13] = document.getElementById('inner-mask14');
list[14] = document.getElementById('inner-mask15');
list[15] = document.getElementById('inner-mask16');
list[16] = document.getElementById('inner-mask17');
list[17] = document.getElementById('inner-mask18');
list[18] = document.getElementById('inner-mask19');
list[19] = document.getElementById('inner-mask20');
list[20] = document.getElementById('inner-mask21');
list[21] = document.getElementById('inner-mask22');
list[22] = document.getElementById('inner-mask23');
list[23] = document.getElementById('inner-mask24');

var maskM = document.getElementById('mask-mask');
var userClick = function(id) {
    for (var i = 0; i < list.length; i++) {
        var ll = list[i].children;
        if (hasClass(list[i], 'inner-mask-in')) {
            removeClass(list[i], 'inner-mask-in');
            addClass(list[i], 'inner-mask-out');
        }
        if (hasClass(ll[0], 'mask-info-in')) {
            removeClass(ll[0], 'mask-info-in');
            ll[0].style.display = "none";
            maskM.style.display = "none";
        }
        if (i === id) {
            if (hasClass(list[i], 'inner-mask-out')) {
                removeClass(list[i], 'inner-mask-out');
            }
            addClass(list[i], 'inner-mask-in');
            if (hasClass(ll[0], 'mask-info-out')) {
                removeClass(ll[0], 'mask-info-out');
            }
            addClass(ll[0], 'mask-info-in');
            ll[0].style.display = "block";
            maskM.style.display = "block";
            continue;
        }
    }
}
