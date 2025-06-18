webpackJsonp([7],{

/***/ "CEVh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/wowjs/dist/wow.js
var dist_wow = __webpack_require__("q4TV");
var wow_default = /*#__PURE__*/__webpack_require__.n(dist_wow);

// EXTERNAL MODULE: external "BMap"
var external__BMap_ = __webpack_require__("jkKj");
var external__BMap__default = /*#__PURE__*/__webpack_require__.n(external__BMap_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/ContactUs.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ContactUs = ({
  name: "ContactUs",
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var map = new external__BMap__default.a.Map("map"); // 创建地图实例
    var point = new external__BMap__default.a.Point(116.301841, 40.156506); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new external__BMap__default.a.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "黄元公寓" // 信息窗口标题
    };
    var infoWindow = new external__BMap__default.a.InfoWindow("我的家", opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new dist_wow["WOW"]();
    wow.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-766f616c","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/view/ContactUs.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"ContactUs"}},[_c('div',{staticClass:"banner container-fuild text-center"},[_vm._v("联系我们")]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"container-fuild ContactUs-container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 col-sm-12 col-md-6"},[_c('form',{staticClass:"form-horizontal",attrs:{"role":"form"}},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-sm-2 control-label",attrs:{"for":"name"}},[_vm._v("姓名")]),_vm._v(" "),_c('div',{staticClass:"col-sm-10 col-xs-12"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"name","placeholder":"请输入名字"}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-sm-2 control-label",attrs:{"for":"email"}},[_vm._v("邮箱")]),_vm._v(" "),_c('div',{staticClass:"col-sm-10"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"email","placeholder":"请输入邮箱"}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-sm-2 control-label",attrs:{"for":"tel"}},[_vm._v("电话")]),_vm._v(" "),_c('div',{staticClass:"col-sm-10"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"tel","placeholder":"请输入电话"}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-sm-2 control-label",attrs:{"for":"content"}},[_vm._v("内容")]),_vm._v(" "),_c('div',{staticClass:"col-sm-10"},[_c('textarea',{staticClass:"form-control",attrs:{"id":"content","rows":"8","placeholder":"请输入内容"}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-sm-offset-2 col-sm-10"},[_c('button',{staticClass:"btn btn-default btn-block",attrs:{"type":"submit"}},[_vm._v("提交")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-xs-12 col-sm-12 col-md-6"},[_c('div',{staticClass:"wow zoomIn",attrs:{"id":"map"}})])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var view_ContactUs = (esExports);
// CONCATENATED MODULE: ./src/view/ContactUs.vue
function injectStyle (ssrContext) {
  __webpack_require__("axf/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-766f616c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  ContactUs,
  view_ContactUs,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_view_ContactUs = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "axf/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=7.4718deb2980f431f246b.js.map