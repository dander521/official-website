webpackJsonp([5],{

/***/ "JxTP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/view/ServiceDetail.vue
var ServiceDetail = __webpack_require__("b4aK");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-13525222","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/view/ServiceDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"ServiceDetail"}},[_c('div',{staticClass:"banner container-fuild text-center"},[_vm._v("相关服务")]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-12 col-sm-12 col-md-3",attrs:{"id":"myScrollspy"}},[_c('ul',{staticClass:"nav nav-tabs nav-stacked center-block",attrs:{"id":"myNav"}},[_c('p',[_vm._v("特色服务")]),_vm._v(" "),_vm._l((_vm.serviceNavList),function(item,index){return _c('li',{key:index,class:item.id==_vm.id?'active':''},[_c('a',{attrs:{"href":'#'+item.id}},[_vm._v(_vm._s(item.title))])])})],2)]),_vm._v(" "),_c('div',{staticClass:"col-xs-12 col-sm-12 col-md-9 content wow zoomIn"},_vm._l((_vm.serviceContentList),function(item,index){return _c('div',{key:index,staticClass:"content-block"},[_c('h2',{attrs:{"id":item.id}},[_vm._v("\n            "+_vm._s(item.title)+"\n            "),_c('small',[_vm._v("/ "+_vm._s(item.eng_title))])]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(item.content)}})])}),0)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var view_ServiceDetail = (esExports);
// CONCATENATED MODULE: ./src/view/ServiceDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("PlMt")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-13525222"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  ServiceDetail["a" /* default */],
  view_ServiceDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_view_ServiceDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "PlMt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b4aK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wowjs__ = __webpack_require__("q4TV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wowjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_wowjs__);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: "ServiceDetail",
  data: function data() {
    return {
      id: "section-1",
      serviceNavList: [{
        id: "section-1",
        title: "软件定制开发"
      }, {
        id: "section-2",
        title: "IT外包服务"
      }, {
        id: "section-3",
        title: "网上商城建设"
      }, {
        id: "section-4",
        title: "iOS应用定制开发"
      }],
      serviceContentList: [{
        id: "section-1",
        title: "软件定制开发",
        eng_title: "Customize App",
        content: "<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>"
      }, {
        id: "section-2",
        title: "IT外包服务",
        eng_title: "Outsourcing",
        content: "<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>"
      }, {
        id: "section-3",
        title: "网上商城建设",
        eng_title: "eCommerce Site",
        content: "<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>"
      }, {
        id: "section-4",
        title: "iOS应用定制开发",
        eng_title: "iOS App Dev",
        content: "<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>"
      }]
    };
  },
  mounted: function mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300
      }
    });
    var wow = new __WEBPACK_IMPORTED_MODULE_0_wowjs__["WOW"]();
    wow.init();
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("4kSj")))

/***/ })

});
//# sourceMappingURL=5.cefd79882b2351ef4fa4.js.map