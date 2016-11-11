webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var commons = __webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(24);

	var shenzhen = ['罗湖区', '南山区', '宝安区', '福田区', '盐田区', '龙岗区', '龙华新区', '光明新区', '大鹏新区', '坪山新区'],
	    beijing = ['东城区', '西城区', '朝阳区', '丰台区', '石景山区', '通州区', '昌平区', '大兴区', '亦庄开发区', '顺义区', '房山区', '门头沟区', '平谷区', '怀柔区', '密云区', '延庆区', '燕郊区'],
	    shanghai = ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '宝山区', '闵行区', '嘉定区', '浦东新区', '松江区', '金山区', '青浦区', '奉贤区', '崇明区'];

	var currentType = 1;

	var sessionID = '';

	$(document).ready(function() {
	    $('main').css('opacity', '1');
	    var subSelect = $('#city_area');
	    $('#city_name').change(function() {
	        var value = $('#city_name option:selected').val();
	        subSelect.html("");
	        if (value === "深圳市") {
	            for (var i = 0; i < shenzhen.length; i++) {
	                subSelect.append("<option value='" + shenzhen[i] + "'>" + shenzhen[i] + "</option>")
	            }
	        } else if (value === "北京市") {
	            for (var i = 0; i < beijing.length; i++) {
	                subSelect.append("<option value='" + beijing[i] + "'>" + beijing[i] + "</option>")
	            }
	        } else if (value === "上海市") {
	            for (var i = 0; i < shanghai.length; i++) {
	                subSelect.append("<option value='" + shanghai[i] + "'>" + shanghai[i] + "</option>")
	            }
	        }
	    });
	    $('#city_name').change();

	    if ($.getUrlParam('city') === "3") {
	        $('#city_name').val('上海市');
	        $('#city_name').change();
	    } else if ($.getUrlParam('city') === "5") {
	        $('#city_name').val('北京市');
	        $('#city_name').change();
	    } else {

	    }

	    $('.order-type-flex div').click(function(event) {
	        var currentTarget = event.currentTarget;
	        if (currentTarget.id === 'type1') {
	            $('#type1').addClass('type-check-parent');
	            $('#type2').removeClass('type-check-parent');
	            $('#type2').css('border-left', '0');
	            $('#type3').removeClass('type-check-parent');

	            $('#type2').css('border-right', '1px solid #e5e5e5');
	            currentType = 1;
	        } else if (currentTarget.id === 'type2') {
	            $('#type2').addClass('type-check-parent');
	            $('#type1').removeClass('type-check-parent');
	            $('#type1').css('border-right', '0');
	            $('#type3').removeClass('type-check-parent');
	            $('#type3').css('border-left', '0');

	            $('#type2').css('border-left', '1px solid #e5e5e5');
	            $('#type2').css('border-right', '1px solid #e5e5e5');
	            currentType = 2
	        } else {
	            $('#type3').addClass('type-check-parent');
	            $('#type1').removeClass('type-check-parent');
	            $('#type2').removeClass('type-check-parent');
	            $('#type2').css('border-right', '0');

	            $('#type2').css('border-left', '1px solid #e5e5e5');
	            currentType = 3
	        }
	    });

	    var cityID = '',
	        username = '',
	        userphone = '',
	        usercode = '',
	        useraddress = '';

	    /**
	     * 验证码按钮点击事件
	     */
	    $('#security-btn').click(function() {
	        userphone = $('#userphone').val();
	        if (userphone === '') {
	            $('#userphone').parent().css('border', '1px solid #ff9889');
	            return;
	        } else {
	            // TODO: 请求验证码
	            if ($('#security-btn').text().trim() !== '获取' && $('#security-btn').text().trim() !== '重新获取') {
	                return;
	            }
	            $.get("http://youminfo.com/api/getSMS?phone=" + userphone, function(response) {
	                var resp = response.data;
	                if (response.success) {
	                    sessionID = resp.sessionID;
	                    var count = 60;
	                    var clock = setInterval(function() {
	                        if (count > 0) {
	                            count--;
	                            $('#security-btn').html(count + 's');
	                        } else {
	                            $('#security-btn').html('重新获取');
	                            clearInterval(clock);
	                        }
	                    }, 1000);
	                } else {}
	            }, "json");
	        }
	    });


	    /**
	     * 预约点击事件
	     */
	    $('#order-btn').click(function() {
	        username = $('#username').val();
	        userphone = $('#userphone').val();
	        usercode = $('#usercode').val();
	        useraddress = $('#city_name').val() + $('#city_area').val() + $('#city_address').val();

	        if ($('#city_name').val() === '北京市') {
	            cityID = 5;
	        } else if ($('#city_name').val() === '上海市') {
	            cityID = 3;
	        } else {
	            cityID = 1;
	        }
	        if (username === '') {
	            $('#username').parent().css('border', '1px solid #ff9889');
	            return;
	        }
	        if (userphone === '') {
	            $('#userphone').parent().css('border', '1px solid #ff9889');
	            return;
	        }
	        if (usercode === '') {
	            $('#usercode').parent().css('border', '1px solid #ff9889');
	            return;
	        }
	        if ($('#city_address').val() === '') {
	            $('#city_address').parent().css('border', '1px solid #ff9889');
	            return;
	        }
	        // TODO: 请求预定
	        $.ajax({
	            url: "http://youminfo.com/api/addReserveMoveWXUser",
	            headers: {
	                "sessionID": sessionID
	            },
	            type: 'POST',
	            data: {
	                'cityID': cityID,
	                'type': currentType,
	                'name': username,
	                'address': useraddress,
	                'phone': userphone,
	                'securityCode': usercode
	            },
	            success: function(response) {
	                if (response.success) {
	                    $('.compelet-mask').css('display', 'block');
	                }
	            },
	            dataType: 'json'
	        });
	    });

	    $('#mask-x').click(function() {
	        $('.compelet-mask').css('display', 'none');
	    });
	});


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/postcss-loader/index.js?sourceMap!./order.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/postcss-loader/index.js?sourceMap!./order.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/** 尺寸 --start*/\n/** 尺寸 --end*/\n/** 字体颜色 --start */\n/** 字体颜色 --end */\n/** 色块颜色 --start*/\n/** 色块颜色 --end*/\n@keyframes bounce {\n  0% {\n    transform: translate(0, 0); }\n  50% {\n    transform: translate(-1px, 3px); }\n  100% {\n    transform: translate(0, 0); } }\n\n@keyframes transchagne {}.compelet-mask {\n  position: fixed;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.3); }\n  .compelet-mask div {\n    position: relative;\n    width: 90%;\n    max-width: 330px;\n    border-radius: 3px;\n    background-color: white;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 50px 0; }\n    .compelet-mask div img {\n      width: 80px;\n      display: block;\n      margin: auto; }\n    .compelet-mask div p {\n      font-size: 20px;\n      text-align: center;\n      margin-top: 10px; }\n\n.mask-x {\n  position: absolute;\n  right: 20px;\n  top: 10px; }\n  .mask-x:before {\n    content: '';\n    width: 0;\n    height: 15px;\n    border: 0;\n    border-left: 2px solid #2a2a2a;\n    position: relative;\n    transform: rotateZ(45deg);\n    display: block;\n    transform-origin: center; }\n  .mask-x:after {\n    content: '';\n    width: 0;\n    height: 15px;\n    border: 0;\n    border-left: 2px solid #2a2a2a;\n    position: relative;\n    transform: rotateZ(135deg);\n    display: block;\n    transform-origin: center;\n    top: -15px; }\n\n.order-content {\n  background-image: url(" + __webpack_require__(26) + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px 0;\n  height: 73%;\n  min-height: 800px;\n  overflow-y: scroll; }\n\n.order-type-outter {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.order-type {\n  width: 600px;\n  margin: auto;\n  box-sizing: border-box;\n  padding: 10px 20px 20px;\n  background-color: #ffffff;\n  border-radius: 8px; }\n  .order-type p {\n    font-size: 15px;\n    margin: 10px 0;\n    color: #a0a0a0; }\n\n.type-check-parent {\n  border: 1px solid #ffd102 !important; }\n  .type-check-parent .type-checked {\n    display: block !important; }\n\n.type-checked {\n  position: absolute !important;\n  width: 50px !important;\n  height: auto !important;\n  top: -1px;\n  right: 0;\n  display: none; }\n\n.order-type-flex {\n  display: -ms-flexbox;\n  display: flex; }\n  .order-type-flex div {\n    -ms-flex: 1;\n    flex: 1;\n    text-align: center;\n    border: 1px solid #e5e5e5;\n    padding-top: 10px;\n    position: relative;\n    box-sizing: border-box; }\n    .order-type-flex div img {\n      width: 80px;\n      height: auto; }\n    .order-type-flex div p {\n      text-align: center;\n      margin-top: 0;\n      margin-bottom: 15px;\n      color: #2a2a2a; }\n\n.order-form {\n  width: 600px;\n  margin: 10px auto;\n  box-sizing: border-box;\n  padding: 20px 46px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  font-size: 0;\n  position: relative; }\n  .order-form div {\n    height: 60px;\n    line-height: 60px;\n    border: 1px solid #e5e5e5;\n    margin: 10px auto;\n    position: relative; }\n    .order-form div:before {\n      content: \"\";\n      position: absolute;\n      height: 100%;\n      width: 0;\n      border: 0;\n      border-left: 1px solid #e5e5e5;\n      transform: scale(0.5, 0.6);\n      left: 58px; }\n    .order-form div img {\n      width: 35px;\n      height: 35px;\n      display: inline-block;\n      position: relative;\n      top: 11px;\n      margin: 0 11px; }\n    .order-form div input {\n      display: inline-block;\n      width: 420px;\n      height: 60%;\n      margin: 0;\n      padding: 0;\n      position: relative;\n      left: 20px;\n      font-size: 16px;\n      border: 0;\n      outline: none; }\n    .order-form div select {\n      display: inline-block;\n      width: 200px;\n      height: 60%;\n      margin: 0;\n      padding: 0;\n      position: relative;\n      left: 20px;\n      font-size: 16px;\n      border: 0;\n      outline: none; }\n  .order-form a {\n    background-color: #ffd102;\n    margin: 30px auto 20px;\n    display: block;\n    width: 180px;\n    height: 52px;\n    line-height: 52px;\n    text-align: center;\n    font-size: 18px;\n    color: #2a2a2a;\n    text-decoration: none;\n    border-radius: 26px;\n    transition: background-color,color 0.3s; }\n    .order-form a:hover {\n      background-color: rgba(255, 209, 2, 0.6);\n      color: rgba(42, 42, 42, 0.6); }\n\n.order-security {\n  width: 360px;\n  display: inline-block;\n  margin: 0 auto 10px !important; }\n  .order-security input {\n    width: 240px !important; }\n\n.order-security-btn {\n  display: inline-block;\n  width: 130px;\n  margin: 0 !important;\n  height: 60px;\n  line-height: 60px;\n  background-color: #ffd102;\n  border-radius: 5px;\n  position: absolute;\n  right: 45px;\n  vertical-align: top;\n  font-size: 16px;\n  text-align: center; }\n  .order-security-btn:hover {\n    background-color: rgba(255, 209, 2, 0.6);\n    color: rgba(42, 42, 42, 0.6); }\n\n.order-address {\n  display: inline-block;\n  width: 300px;\n  margin: 0 !important;\n  vertical-align: top; }\n\n.order-address-sub {\n  display: inline-block;\n  width: 190px;\n  margin: 0 !important;\n  height: 60px;\n  line-height: 60px;\n  border: 1px solid #e5e5e5;\n  position: absolute;\n  right: 45px;\n  vertical-align: top; }\n  .order-address-sub select {\n    display: inline-block;\n    width: 150px;\n    height: 60%;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    left: 20px;\n    font-size: 16px;\n    border: 0;\n    top: 5px;\n    outline: none; }\n\n@media screen and (max-width: 768px) {\n  .order-content {\n    min-height: 0;\n    height: auto;\n    padding: 0;\n    background-color: white;\n    background-image: none; }\n  .content-with-header {\n    padding-top: 60px !important; }\n  .order-type-outter {\n    top: 0;\n    transform: translateY(0); }\n  .order-type {\n    width: 100%;\n    max-width: 400px;\n    padding: 10px;\n    border-radius: 0; }\n    .order-type p {\n      font-size: 15px;\n      margin: 10px 0; }\n  .type-checked {\n    width: 35px !important; }\n  .order-type-flex div {\n    padding-top: 10px; }\n    .order-type-flex div img {\n      width: 60%;\n      height: auto; }\n  .order-form {\n    width: 100%;\n    max-width: 400px;\n    margin: 10px auto;\n    padding: 10px;\n    border-radius: 0; }\n    .order-form div {\n      height: 50px;\n      line-height: 50px;\n      max-width: 400px; }\n      .order-form div img {\n        width: 30px;\n        height: 30px;\n        top: 10px; }\n      .order-form div input {\n        width: 70%;\n        top: 2px;\n        font-size: 16px; }\n      .order-form div select {\n        width: 50%;\n        font-size: 16px; }\n    .order-form a {\n      margin: 20px auto;\n      width: 110px;\n      height: 42px;\n      line-height: 42px;\n      font-size: 15px;\n      border-radius: 21px; }\n  .order-address {\n    width: 55%; }\n  .order-address-sub {\n    display: inline-block;\n    width: 37%;\n    height: 50px;\n    line-height: 50px;\n    right: 10px; }\n    .order-address-sub select {\n      width: 75%;\n      left: 15px;\n      font-size: 16px;\n      top: 5px; }\n  .order-security {\n    width: 70%; }\n    .order-security input {\n      width: 63% !important; }\n  .order-security-btn {\n    display: inline-block;\n    width: 20%;\n    margin: 0 !important;\n    height: 40px;\n    line-height: 40px;\n    position: absolute;\n    right: 24px;\n    top: 150px;\n    font-size: 15px; }\n  .compelet-mask div {\n    width: 80%;\n    padding: 38px 0; }\n    .compelet-mask div img {\n      width: 70px; }\n    .compelet-mask div p {\n      font-size: 15px; } }\n\n@media screen and (max-width: 400px) {\n  .order-form {\n    margin-top: 0; } }\n", ""]);

	// exports


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e73e797888d62dea68663d33a6a57658.jpg";

/***/ }

});