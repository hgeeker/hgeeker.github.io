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
        header.style.boxShadow = "0 0 5px #e5e5e5";
        addClass(floatBtn, "float-btn-opp");
    } else {
        header.style.boxShadow = "0 0 0 #e5e5e5";
        removeClass(floatBtn, "float-btn-opp");
    }
}
var image1 = new Image();
image1.src = "./assets/images/logo5-01.png";
var image2 = new Image();
image2.src = "./assets/images/wuliu-01.png";
var image3 = new Image();
image3.src = "./assets/images/shouji-01.png";
var image4 = new Image();
image4.src = "./assets/images/anquan-01.png";
var image5 = new Image();
image5.src = "./assets/images/anquan-01.png";
var circle1 = {
    x: 0, //圆心的x轴坐标值
    y: 450, //圆心的y轴坐标值
    r: 18 //圆的半径
};
var circle2 = {
    x: 820,
    y: 120,
    r: 16
};
var circle3 = {
    x: 1520,
    y: 600,
    r: 12
};
var circle4 = {
    x: 1820,
    y: 350,
    r: 10
};
var circle5 = {
    x: 250,
    y: 150,
    r: 15,
}
var circle6 = {
    x: 1700,
    y: 50,
    r: 8,
}
var img1 = null;
var img2 = null;
var img3 = null;
var img4 = null;
var img5 = null;
var canvas = document.getElementById('about_link');
var ctx = null;
var canvasCache = document.createElement('canvas');
var ctxc = null;

function drawCircle(x, y) {
    img1 = {
        x: 872 + x + 88,
        y: 300 + y + 88,
    };
    img2 = {
        x: 560 - x + 60,
        y: 350 + y + 60,
    };
    img3 = {
        x: 880 + x + 60,
        y: 600 - y + 60,
    };
    img4 = {
        x: 1212 - x + 50,
        y: 150 + y + 50,
    };
    img5 = {
        x: 202 - x + 44,
        y: 500 - y + 44,
    };
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
        canvasCache.width = canvas.width;
        canvasCache.height = canvas.height;
        ctxc = canvasCache.getContext('2d');
    }
    ctxc.strokeStyle = "#F3F3F3";
    /** point to img1 start**/
    ctxc.beginPath();
    ctxc.moveTo(img2.x, img2.y);
    ctxc.lineTo(img1.x, img1.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(img3.x, img3.y);
    ctxc.lineTo(img1.x, img1.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(img4.x, img4.y);
    ctxc.lineTo(img1.x, img1.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(circle2.x + x, circle2.y - y);
    ctxc.lineTo(img1.x, img1.y);
    ctxc.stroke();
    /** point to img1 end **/
    /** point to img2 start **/
    ctxc.beginPath();
    ctxc.moveTo(circle2.x + x, circle2.y - y);
    ctxc.lineTo(img2.x, img2.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(img2.x, img2.y);
    ctxc.lineTo(img3.x, img3.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(img5.x, img5.y);
    ctxc.lineTo(img2.x, img2.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(circle5.x - x, circle5.y - y);
    ctxc.lineTo(img2.x, img2.y);
    ctxc.stroke();

    /** point to img2 end **/

    /** point to img3 start **/
    ctxc.beginPath();
    ctxc.moveTo(circle3.x + x, circle3.y - y);
    ctxc.lineTo(img3.x, img3.y);
    ctxc.stroke();

    /** point to img3 end **/

    /** point to img4 start **/
    ctxc.beginPath();
    ctxc.moveTo(circle3.x + x, circle3.y - y);
    ctxc.lineTo(img4.x, img4.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(circle2.x + x, circle2.y - y);
    ctxc.lineTo(img4.x, img4.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(circle6.x + x, circle6.y - y);
    ctxc.lineTo(img4.x, img4.y);
    ctxc.stroke();

    /** point to img4 end **/

    /** point to img5 start **/
    ctxc.beginPath();
    ctxc.moveTo(circle1.x - x, circle1.y + y);
    ctxc.lineTo(img5.x, img5.y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(0, 850);
    ctxc.lineTo(img5.x, img5.y);
    ctxc.stroke();

    /** point to img5 end **/

    /** point to circle4 start **/
    ctxc.beginPath();
    ctxc.moveTo(circle3.x + x, circle3.y - y);
    ctxc.lineTo(circle4.x - x, circle4.y + y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(img4.x, img4.y);
    ctxc.lineTo(circle4.x - x, circle4.y + y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(1920, 200);
    ctxc.lineTo(circle4.x - x, circle4.y + y);
    ctxc.stroke();
    /** point to circle4 end **/
    ctxc.beginPath();
    ctxc.moveTo(0, 50);
    ctxc.lineTo(circle5.x - x, circle5.y - y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(1500, 850);
    ctxc.lineTo(circle3.x + x, circle3.y - y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(circle5.x - x, circle5.y - y);
    ctxc.lineTo(circle2.x + x, circle2.y - y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(0, 450);
    ctxc.lineTo(circle1.x - x, circle1.y + y);
    ctxc.stroke();

    ctxc.beginPath();
    ctxc.moveTo(1920, 0);
    ctxc.lineTo(circle6.x + x, circle6.y - y);
    ctxc.stroke();
    ctxc.drawImage(image1, 872 + x, 300 + y, 176, 176);

    ctxc.drawImage(image2, 560 - x, 350 + y, 120, 120);

    ctxc.fillStyle = "#000000";
    ctxc.font = "normal normal 200 22px 微软雅黑";
    ctxc.fillText("更便捷", 590 - x, 495 + y);

    ctxc.fillStyle = "#C2C1CD";

    ctxc.font = "normal normal 200 16px 微软雅黑";
    ctxc.fillText("专业搬运，快速到达仓库", 480 - x, 525 + y);
    ctxc.fillText("全程轻松搞定", 560 - x, 555 + y);
    ctxc.drawImage(image3, 880 + x, 600 - y, 120, 120);

    ctxc.fillStyle = "#000000";
    ctxc.font = "normal normal 200 22px 微软雅黑";
    ctxc.fillText("更好的体验", 995 + x, 650 - y);

    ctxc.fillStyle = "#C2C1CD";

    ctxc.font = "normal normal 200 16px 微软雅黑";
    ctxc.fillText("在线选仓，微信系统平台", 995 + x, 683 - y);
    ctxc.fillText("全程互联网体验", 995 + x, 710 - y);
    ctxc.drawImage(image4, 1212 - x, 150 + y, 100, 100);

    ctxc.fillStyle = "#000000";
    ctxc.font = "normal normal 200 22px 微软雅黑";
    ctxc.fillText("更安全", 1320 - x, 180 + y);

    ctxc.fillStyle = "#C2C1CD";

    ctxc.font = "normal normal 200 16px 微软雅黑";
    ctxc.fillText("定时巡仓，温湿度控制", 1320 - x, 213 + y);
    ctxc.fillText("24小时安全无忧", 1320 - x, 243 + y);

    ctxc.drawImage(image5, 202 - x, 500 - y, 88, 88);

    ctxc.fillStyle = "#e5e5e5";
    ctxc.beginPath();
    ctxc.arc(circle1.x - x, circle1.y + y, circle1.r, 0, Math.PI * 2, true);
    ctxc.fill();

    ctxc.beginPath();
    ctxc.arc(circle2.x + x, circle2.y - y, circle2.r, 0, Math.PI * 2, true);
    ctxc.fill();

    ctxc.beginPath();
    ctxc.arc(circle3.x + x, circle3.y - y, circle3.r, 0, Math.PI * 2, true);
    ctxc.fill();

    ctxc.beginPath();
    ctxc.arc(circle4.x - x, circle4.y + y, circle4.r, 0, Math.PI * 2, true);
    ctxc.fill();

    ctxc.beginPath();
    ctxc.arc(circle5.x - x, circle5.y - y, circle5.r, 0, Math.PI * 2, true);
    ctxc.fill();

    ctxc.beginPath();
    ctxc.arc(circle6.x + x, circle6.y - y, circle6.r, 0, Math.PI * 2, true);
    ctxc.fill();
}
var xForMove = 0;
var xLimit = Math.max(35, Math.ceil(Math.random() * 50));
var yLimit = Math.max(10, Math.ceil(Math.random() * 20));
var yForMove = 0;
var dh = "right";
var dv = "top";
var animation = function() {
    ctx.clearRect(0, 0, 1920, 850);
    ctxc.clearRect(0, 0, 1920, 850);
    drawCircle(xForMove, yForMove);
    ctx.drawImage(canvasCache, 0, 0);
    if (dh === "right") {
        if (xForMove <= xLimit) {
            xForMove++;
        } else {
            xForMove--;
            dh = "left";
            xLimit = Math.max(35, Math.ceil(Math.random() * 50));
        }
    } else {
        if (xForMove < -xLimit) {
            xForMove++;
            dh = "right";
            xLimit = Math.max(35, Math.ceil(Math.random() * 50));
        } else {
            xForMove--;
        }
    }
    if (dv === "top") {
        if (yForMove <= yLimit) {
            yForMove++;
        } else {
            yForMove--;
            dv = "bottom";
            yLimit = Math.max(10, Math.ceil(Math.random() * 20));
        }
    } else {
        if (yForMove < -yLimit) {
            yForMove++;
            dv = "top";
            yLimit = Math.max(10, Math.ceil(Math.random() * 20));
        } else {
            yForMove--;
        }
    }
}
window.onload = function() {
    drawCircle();
    setInterval('animation()', 50);
    var a3 = document.getElementById('link-about-vks');
    addClass(a3, 'nav-bar-item-line-op');
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
