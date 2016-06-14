var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?d24b2aef9fb6259a82db5c9f47046e40";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

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
var floatBtn = document.getElementById('float-btn');
var floatMenu = document.getElementById('float-menu');
var menuMask = document.getElementById('menu-mask');

function toggleMenu() {
    if (floatMenu.style.display === "none" || floatMenu.style.display === "") {
        floatMenu.style.display = "block";
        menuMask.style.display = "block";
    } else {
        floatMenu.style.display = "none";
        menuMask.style.display = "none";
    }
}

function menuBlur() {
    floatMenu.style.display = "none";
    menuMask.style.display = "none";
}
