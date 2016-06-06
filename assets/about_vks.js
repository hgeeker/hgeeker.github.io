window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var header = document.getElementById("nav-header");
    var trans = top / 200;
    if (trans >= 0.9) {
        trans = 0.9;
    }
    header.style.backgroundColor = "rgba(255,255,255," + trans + ")";
    if (trans >= 0.9) {
        header.style.borderBottom = "1px solid #e5e5e5";
    } else {
        header.style.borderBottom = "0";
    }
}
