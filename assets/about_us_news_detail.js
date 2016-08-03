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

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}
var baseUrl = "http://120.27.157.191/api/";
$(document).ready(function() {
    var a3 = document.getElementById('link-about-us');
    addClass(a3, 'nav-bar-item-line-op');
    var id = getUrlParam('id');
    $.get(baseUrl + "getArticleFromBKMgr?id=" + id, function(data) {
        $('.year').html(data.data.createDate.slice(0, 4));
        $('.date').html(data.data.createDate.slice(5, 10));
        $('.title').html(data.data.title);
        if (data.data.readCount === null || data.data.readCount === "" || data.data.readCount < 0) {
            data.data.readCount = 0;
        }
        $('.editer').html("发布者：" + data.data.publisher + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览次数：" + data.data.readCount);
        $('#content').html(data.data.content);
    }, "json");
    $.get(baseUrl + "addReadCountsFromBKMgr?id=" + id + "&count=1", function(data) {
        console.log(data);
    }, "json");
});
