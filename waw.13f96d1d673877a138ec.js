webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var commons = __webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(27);

	$(document).ready(function() {
	    $('main').css('opacity', '1');
	});


/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/postcss-loader/index.js?sourceMap!./waw.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./../../node_modules/postcss-loader/index.js?sourceMap!./waw.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/** 尺寸 --start*/\n/** 尺寸 --end*/\n/** 字体颜色 --start */\n/** 字体颜色 --end */\n/** 色块颜色 --start*/\n/** 色块颜色 --end*/\n@keyframes bounce {\n  0% {\n    transform: translate(0, 0); }\n  50% {\n    transform: translate(-1px, 3px); }\n  100% {\n    transform: translate(0, 0); } }\n\n@keyframes transchagne {}.waw-title {\n  background-image: url(" + __webpack_require__(29) + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding-bottom: 38px; }\n\n.waw-inner {\n  width: 1024px;\n  margin: auto; }\n  .waw-inner h3 {\n    text-align: center;\n    color: white;\n    font-size: 26px;\n    margin: 80px 0;\n    font-weight: 300px;\n    text-shadow: 2px 2px 7px rgba(29, 29, 29, 0.2); }\n\n.waw-inner-grid {\n  display: -ms-flexbox;\n  display: flex;\n  width: 700px;\n  margin: auto; }\n  .waw-inner-grid div {\n    -ms-flex: 1;\n    flex: 1;\n    margin-bottom: 25px; }\n    .waw-inner-grid div p {\n      margin: auto;\n      height: 100px;\n      width: 300px;\n      text-align: center;\n      border: 1px solid white;\n      background-color: rgba(255, 255, 255, 0.8);\n      font-size: 0; }\n      .waw-inner-grid div p img {\n        width: 100px;\n        height: auto;\n        vertical-align: top;\n        display: inline-block;\n        position: relative;\n        left: -30px;\n        top: 13px; }\n      .waw-inner-grid div p span {\n        display: inline-block;\n        height: 100px;\n        line-height: 100px;\n        vertical-align: top;\n        font-size: 16px;\n        color: #2a2a2a;\n        font-weight: 100px; }\n\n.waw-info {\n  box-sizing: border-box;\n  padding-top: 70px; }\n\n.waw-info-title {\n  position: relative;\n  width: 300px;\n  margin: 0 auto;\n  font-size: 0; }\n  .waw-info-title img {\n    width: 80px; }\n  .waw-info-title h2 {\n    width: 200px;\n    font-size: 26px;\n    position: absolute;\n    right: 0;\n    top: 5px;\n    margin: 0;\n    color: #949494; }\n  .waw-info-title p {\n    width: 200px;\n    font-size: 16px;\n    position: absolute;\n    right: 0;\n    top: 33px; }\n\n.waw-info-desc {\n  width: 75%;\n  margin: 50px auto 0; }\n  .waw-info-desc img {\n    width: 100%; }\n\n@media screen and (max-width: 768px) {\n  .waw-title {\n    background-size: 100%;\n    background-image: url(" + __webpack_require__(30) + ");\n    box-sizing: border-box; }\n  .content-with-header {\n    padding-top: 70px; }\n  .waw-inner {\n    width: 100%; }\n    .waw-inner h3 {\n      text-align: center;\n      color: white;\n      padding: 0 30px;\n      font-size: 16px;\n      margin: 10px 0;\n      font-weight: 300; }\n  .waw-inner-grid {\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    margin: auto;\n    max-width: 550px; }\n    .waw-inner-grid div {\n      -ms-flex: 1;\n      flex: 1;\n      margin-bottom: 15px; }\n      .waw-inner-grid div p {\n        height: 66px;\n        width: 85%;\n        background-color: rgba(255, 255, 255, 0.8); }\n        .waw-inner-grid div p img {\n          width: 60px;\n          left: -5px;\n          top: 10px; }\n        .waw-inner-grid div p span {\n          width: 46%;\n          max-height: 70px;\n          line-height: 70px;\n          font-size: 15px;\n          color: #2a2a2a; }\n  .waw-info {\n    padding-top: 38px; }\n  .waw-info-no {\n    padding-top: 0; }\n  .waw-info-title {\n    width: 250px; }\n    .waw-info-title img {\n      width: 70px;\n      position: relative;\n      left: 30px; }\n    .waw-info-title h2 {\n      font-size: 18px;\n      top: 10px;\n      width: 150px; }\n    .waw-info-title p {\n      font-size: 14px;\n      top: 25px;\n      width: 150px; }\n  .waw-info-desc {\n    width: 100%;\n    margin: 20px auto 0; } }\n", ""]);

	// exports


/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "86b4c679fc8dc334aa6eb7463e6e4ed5.png";

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7c5243a4cc96a94bb7815500716d9462.jpg";

/***/ }

});