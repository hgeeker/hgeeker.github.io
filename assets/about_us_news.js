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

var baseUrl = "http://120.27.157.191/api/";
var pageSize = 5;
var checkDetail = function(id) {
    $('#section-article').addClass('article-fadeOut');
    $('#section-article').css('display', 'none');
    $('#section-detail').addClass('article-fadeIn');
    $('#section-detail').css('display', 'block');
}
var getList = function(size) {
    $.get(baseUrl + "queryArticlesFromBKMgr?state=2&pageSize=" + size + "&curPage=1", function(data) {
        var list = data.data.data;
        for (var i = 0; i < list.length; i++) {
            var item = '<div id="' + list[i].id + '" class="section-item"><div class="item-header"><h4>' + list[i].createDate.slice(5, 10) + '</h4><p>' + list[i].createDate.slice(0, 4) + '</p><img src="./assets/images/xiangzhuang.svg" alt="" /><hr></div><img style="width:280px;height:160px;position:absolute;left:190px;" src="' + list[i].mainPictureUrl + '" alt="" /><div class="item-footer"><h4>' + list[i].title + '</h4><p>发布者：' + list[i].publisher + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览次数：' + list[i].readCount + '</p><span>' + list[i].articleAbstract.slice(0, 70) + '<a href="./about_us_news_detail.html?id=' + list[i].id + '">查看详情>></a></span></div></div>';
            if (window.screen.width <= 600) {
                item = '<div style="padding:10px 5px 10px 5px; "><div style="font-size:18px;margin-bottom:10px;">' +
                    list[i].createDate.slice(5, 10) + '&nbsp;&nbsp;<span style="font-size:12px;color:gray;">' + list[i].createDate.slice(0, 4) + '</span></div><div style="display:flex;font-size:10px;height:120px;"><img style="width:40%;height:100%;" src="' + list[i].mainPictureUrl + '" alt="" /><div style="flex:1;background-color:#fcfcfc;border:1px solid #f1f1f1;padding-left:5px;padding-top:10px;"><h4 style="font-size:14px;">' + list[i].title + '</h4><p style="margin:0;color:#aeaeae;">发布者：' + list[i].publisher + '</p><p style="margin:0 0 3px 0;color:#aeaeae;">浏览次数：' + list[i].readCount + '</p><p style="line-height:18px;font-size:12px;">' + list[i].articleAbstract.slice(0, 10) + '<a style="margin-left:10px;" href="./about_us_news_detail.html?id=' + list[i].id + '">查看更多>></a></p></div></div></div>'
            }
            $('#section-article').append(item);
        }
    }, "json");
}
var getMore = function() {
    $('#section-article').html("");
    pageSize = 10000;
    getList(pageSize);
}
$(document).ready(function() {
    var a3 = document.getElementById('link-about-us');
    addClass(a3, 'nav-bar-item-line-op');
    getList(pageSize);
});
