var floatBtn = document.getElementById('float-btn');
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
var checkItem = function(number) {
    var product = document.getElementById('about-product');
    var order = document.getElementById('about-order');
    var safety = document.getElementById('about-safety');
    var refund = document.getElementById('about-refund');
    var pi = document.getElementById('product-img');
    var pip = document.getElementById('product-img-per');
    var oi = document.getElementById('order-img');
    var oip = document.getElementById('order-img-per');
    var si = document.getElementById('safety-img');
    var sip = document.getElementById('safety-img-per');
    var ri = document.getElementById('refund-img');
    var rip = document.getElementById('refund-img-per');
    switch (number) {
        case 1:
            if (product.style.display === "block") {
                product.style.display = "none";
                pi.style.display = "inline";
                pip.style.display = "none";
            } else {
                product.style.display = "block";
                pi.style.display = "none";
                pip.style.display = "inline";
            }
            order.style.display = "none";
            oi.style.display = "inline";
            oip.style.display = "none";
            safety.style.display = "none";
            si.style.display = "inline";
            sip.style.display = "none";
            refund.style.display = "none";
            ri.style.display = "inline";
            rip.style.display = "none";
            break;
        case 2:
            if (order.style.display === "block") {
                order.style.display = "none";
                oi.style.display = "inline";
                oip.style.display = "none";
            } else {
                order.style.display = "block";
                oi.style.display = "none";
                oip.style.display = "inline";
            }
            product.style.display = "none";
            pi.style.display = "inline";
            pip.style.display = "none";
            safety.style.display = "none";
            si.style.display = "inline";
            sip.style.display = "none";
            refund.style.display = "none";
            ri.style.display = "inline";
            rip.style.display = "none";
            break;
        case 3:
            if (safety.style.display === "block") {
                safety.style.display = "none";
                si.style.display = "inline";
                sip.style.display = "none";
            } else {
                safety.style.display = "block";
                si.style.display = "none";
                sip.style.display = "inline";
            }
            order.style.display = "none";
            oi.style.display = "inline";
            oip.style.display = "none";
            product.style.display = "none";
            pi.style.display = "inline";
            pip.style.display = "none";
            refund.style.display = "none";
            ri.style.display = "inline";
            rip.style.display = "none";
            break;
        case 4:
            if (refund.style.display === "block") {
                refund.style.display = "none";
                ri.style.display = "inline";
                rip.style.display = "none";
            } else {
                refund.style.display = "block";
                ri.style.display = "none";
                rip.style.display = "inline";
            }
            order.style.display = "none";
            oi.style.display = "inline";
            oip.style.display = "none";
            safety.style.display = "none";
            si.style.display = "inline";
            sip.style.display = "none";
            product.style.display = "none";
            pi.style.display = "inline";
            pip.style.display = "none";
            break;
    }
}
window.onload = function() {
    var a2 = document.getElementById('link-faq');
    addClass(a2, 'nav-bar-item-line-op');
}
