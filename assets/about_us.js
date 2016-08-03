var baseUrl = "http://120.27.157.191/api/";
var cityDom = $('#city');
$(document).ready(function() {
    var a4 = $('#link-about-us');
    a4.addClass('nav-bar-item-line-op');
    $.get(baseUrl + "getCities?pageSize=100&curPage=1", function(data) {
        var cities = data.data.data;
        var list = [];
        var items = null;
        var basic = 5;
        if (window.screen.width <= 320) {
            basic = 3;
        }
        while (cities.length % basic != 0) {
            cities.push({
                "id": "",
                "name": ""
            });
        }
        for (var i = 0; i < cities.length; i++) {
            if (i % basic == 0) {
                items = [];
                list.push(items);
            }
            items.push(cities[i]);
        }
        for (var i = 0; i < list.length; i++) {
            var line = $('<div></div>');
            line.addClass('city-line');
            for (var j = 0; j < list[i].length; j++) {
                var item = $('<div></div>');
                var span = $('<span id="' + 'city' + list[i][j].id + '" class="city-radius" onclick="cityChange(' + list[i][j].id + ')" onmouseover="cityOver(' + list[i][j].id + ')" onmouseout="cityOut(' + list[i][j].id + ')">' + list[i][j].name + '</span>');
                item.append(span);
                item.addClass('city-item');
                if (j === 0 && i === 0) {
                    span.addClass('city-active');
                    getShopsByCity(list[i][j].id);
                }
                line.append(item);
            }
            cityDom.append(line);
        }
    }, "json");
});
var cityChange = function(id) {
    if (id != null && typeof(id) != "undefined") {
        $('.city-active').removeClass('city-active');
        $('#city' + id).removeClass('city-hover');
        $('#city' + id).addClass('city-active');
        getShopsByCity(id);
    }
}
var cityOver = function(id) {
    if ($('#city' + id).hasClass('city-active')) {
        return;
    } else {
        $('#city' + id).addClass('city-hover');
    }
}
var cityOut = function(id) {
    if ($('#city' + id).hasClass('city-active')) {
        return;
    } else {
        $('#city' + id).removeClass('city-hover');
    }
}
var shopDom = $("#shop");
var getShopsByCity = function(id) {
    shopDom.html("");
    $.get(baseUrl + "getShopsByLatiAndlongi?cityID=" + id + "&longitude=0&latitude=0&condition=", function(data) {
        var shops = data.data;
        for (var i = 0; i < shops.length; i++) {
            shopDom.append('<div class="shop-item"><div class="shop-item-header"><p class="shop-item-header-one">' + shops[i].name + '</p><p class="shop-item-header-two ">' + shops[i].address + '</p></div><span class="shop-item-line"></span><div class="shop-item-footer"><img src="./assets/images/weiz.svg" /><a href="http://api.map.baidu.com/geocoder?address=' + shops[i].address + '&output=html&src=yourCompanyName|yourAppName">查看具体位置</a></div></div>')
        }
    }, "json");
}
var showLocaltion = function(address) {

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
